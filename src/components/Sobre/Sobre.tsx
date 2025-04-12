import 'bootstrap/dist/css/bootstrap.css';
import './Sobre.css'


function Sobre() {
return (
  <div className='style-sobre'>
  <div className="container mt-4 bg-dark text-light p-4 rounded">
  <div className="row g-4">

    <div className="col-md-6">
      <div className="card h-100 bg-dark text-light border-light">
        <div className="row g-0 h-100">
          <div className="col-md-4">
            <img
              src="https://img.freepik.com/fotos-premium/ideia-brilhante-lampada-com-cerebro-dentro-representando-inovacao-empresarial_896558-38962.jpg?w=996"
              className="img-fluid h-100 w-100 object-fit-cover rounded-start"
              alt="Imagem representando inovação"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Nossa Essência</h5>
              <p className="card-text">
                Somos movidos por inovação e pela vontade de transformar a vida das pessoas com tecnologia.
                Acreditamos que soluções digitais devem ser simples, funcionais e acessíveis para todos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-6">
      <div className="card h-100 bg-dark text-light border-light">
        <div className="card-header ">Nossa Missão</div>
        <div className="card-body">
          <p className="card-text">
            Este projeto foi desenvolvido com o propósito de facilitar o acesso a informações de endereços
            a partir do CEP, usando a API pública do ViaCEP. Queremos tornar o processo mais rápido e prático
            para quem precisa dessas informações no dia a dia.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-6">
      <div className="card h-100 bg-dark text-light border-light">
        <div className="row g-0 h-100 flex-row-reverse">
          <div className="col-md-4">
            <img
              src="https://cdn.pixabay.com/photo/2018/05/11/09/07/finger-3389916_1280.jpg"
              className="img-fluid h-100 w-100 object-fit-cover rounded-end"
              alt="Inovação"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Experiência Digital</h5>
              <p className="card-text">
                Buscamos proporcionar uma experiência digital intuitiva, confiável e eficiente.
                Valorizamos o tempo do usuário e queremos garantir que ele encontre o que precisa de forma clara,
                ágil e sem complicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="col-md-6">
      <div className="card h-100 bg-dark text-light border-light">
        <div className="card-body">
          <h5 className="card-title">Compromisso com Qualidade</h5>
          <p className="card-text text-light">
            Estamos sempre buscando melhorar nossos serviços. O feedback dos usuários é essencial
            para evoluirmos e oferecermos ferramentas cada vez mais úteis, confiáveis e alinhadas às necessidades reais.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
);
}

export default Sobre;