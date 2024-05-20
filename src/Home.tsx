import Banner from '../Imagens/banner_silvestre_lanchonete.png';
import Banner_Cel from '../Imagens/banner_silvestre_cel.png';
import Carousel from './Carousel';
import Rodape from './Rodape';
import Contato_Local from './Contato_Local';
import QuemSomos from './QuemSomos';

function Home() {
  return (
    <section className="Home">
        <div className="w-full h-97 mt-10">
            <img className="block md:hidden w-full h-auto" src={Banner_Cel} alt="Banner_cel" />
            <img className="hidden md:block lg:hidden w-full h-auto" src={Banner} alt="Banner_tablet" />
            <img className="hidden lg:block w-full h-auto" src={Banner} alt="Banner_desktop" />
        </div>
        <div className="w-full h-92 mt-14 flex justify-center items-center">
        <QuemSomos />
        </div>
        <div className="w-full mt-6 md:h-92 lg:h-128 xl:h-144">
        <Contato_Local />
        </div>
        <div className="w-full h-100 mt-30 mb-10 flex items-center flex-col md:h-96 lg:h-128 xl:h-144">
            <h1 className="w-full text-center text-white sm:text-2xl md:text-3xl lg:text-3xl">Destaques da Semana</h1>
        </div>
        <div className="w-full flex justify-center items-center mb-10">
          <Carousel />
        </div>
        <footer className="">
          <Rodape />
        </footer>
    </section>
  );
}

export default Home;