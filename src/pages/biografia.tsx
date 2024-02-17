import fotoPerfil from '../../public/foto-de-perfil-guilherme.png'

export function Biografia() {
  return (
    <div className="ml-auto mr-auto flex max-w-2xl flex-col items-center justify-center ">
      <img src={fotoPerfil} alt="" className="w-[300px] rounded-full" />
      <h2 className="mb-3 mt-4 text-xl font-semibold">
        Um pouco mais sobre mim
      </h2>
      <p className="font-serif text-lg italic">
        &rdquo;Em um universo de linhas de código e pixels, aos 21 anos, me
        encontro imerso na arte da programação. Sou um jovem apaixonado pelo
        desafio de transformar ideias em realidade digital. Fora do mundo
        virtual, meu coração bate forte pelo futebol, onde encontro a alegria de
        estar entre as traves, defendendo com paixão. No silêncio das noites,
        meu refúgio é a escrita, onde dou vida a poemas, versos e frases que
        expressam minha visão intensa sobre a jornada que chamamos de
        vida.&rdquo;
      </p>
    </div>
  )
}
