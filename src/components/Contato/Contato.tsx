import { ChangeEvent, useState } from 'react';
import './Contato.css'
import { useNavigate } from 'react-router-dom';


function Contato(){
  interface info  {
    name:string;
    email: string;
    mensagem:string;

  }
const navigate = useNavigate();
const [informacoes, setInformacoes] = useState<info>({
  name:'',
  email: '',
  mensagem:'',
})
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setInformacoes(prev => ({
      ...prev,
      [name]:value
    }))
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, mensagem } = informacoes;

  if (!name || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  
    fetch('http://localhost:3001/contato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(informacoes),

    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
      setInformacoes({
          name: '',
          email: '',
          mensagem: '',
        });
      })
      .catch(error => {
        console.error('Erro ao enviar:', error);
        navigate('/*', { state: { error: 'Houve um erro. Por favor, tente novamente mais tarde.' } });
      });
  
      
  }

    return(
      <div className="style-servico">
        <form className='form-container' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Name</label>
          <input name="name"
          type="text"
           className="form-control" 
           id="name-input"
           onChange={handleChange}
           value={informacoes.name}
          aria-describedby="name"/>
          <div id="name" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="email-input" className="form-label">Email</label>
          <input  name="email" value={informacoes.email} onChange={handleChange} type="email" className="form-control" id="email-input"/>
        </div>
        <div className="mb-3">
          <label htmlFor="descricao">Digite sua opinião</label>
          <textarea name="mensagem" value={informacoes.mensagem}  onChange={handleChange} rows={6}  className="form-control" id="email-input"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
)}
export default Contato