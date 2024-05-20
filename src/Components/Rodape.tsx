
import Logo from '../Imagens/Logo.png'

function Rodape(){
    return(
      <footer className="w-full bg-zinc-900 flex h-56 2xl:h-52 items-center">
      <div className='pl-5 md:pl-10 2xl:pl-16 flex items-center gap-2 md:gap-28'>
        <img src={Logo} alt="Logo" className='size-36 2xl:size-48'/>
        <div className="text-left ml-10">
          <h3 className="font-bold md:text-xl 2xl:text-1xl">Silvestre Lanchonete</h3>
          <p className='text-sm md:text-base xl:text-lg 2xl:text-1xl pt-3 md:pt-5 2xl:pt-6'>Cardápio</p>
          <p className='text-sm md:text-base xl:text-lg 2xl:text-1xl pt-3 md:pt-5 2xl:pt-6'>Software 2024 - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
    )
}
export default Rodape