import  { useState } from 'react';
import './Servico.css'

function Servicos() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<any>(null);
  const [erro, setErro] = useState('');

  const buscarEndereco = async () => {
    if (cep.length !== 8) {
      setErro('Digite um CEP válido com 8 números.');
      setEndereco(null);
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro('CEP não encontrado.');
        setEndereco(null);
      } else {
        setEndereco(data);
        setErro('');
      }
    } catch (erro) {
      setErro('Erro ao buscar o CEP.'+ erro);
      setEndereco(null);
    }
  };

  return (
    <div className='style-servico' style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h2>Consulta de Endereço por CEP</h2>

      <input
        type="text"
        placeholder="Digite o CEP (somente números)"
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
        style={{ width: '100%', padding: 10, marginBottom: 10, borderRadius: 999 }}
      />

      <button onClick ={buscarEndereco} className="btn btn-success">
        Buscar
      </button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {endereco && (
        <div style={{ marginTop: 20, textAlign: 'left' }}>
          <p><strong>CEP:</strong> {endereco.cep}</p>
          <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade}</p>
          <p><strong>Estado:</strong> {endereco.uf}</p>
        </div>
      )}
    </div>
  );
};

export default Servicos;