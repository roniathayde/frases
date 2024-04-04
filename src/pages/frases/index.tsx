import 'react-multi-carousel/lib/styles.css'
import './style.css'

import Carousel from 'react-multi-carousel'

import { CarouselItems } from './components/carousel-items'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export function Frases() {
  return (
    <div className=" min-h-[600px] w-full   rounded bg-slate-950 p-6">
      {/* remover className se os items bugarem */}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        className="min-h-[400px] max-w-[800px]"
      >
        <CarouselItems text="deixa para trás tudo aquilo que não te deixa seguir em frente" />

        <CarouselItems text="mas eu nunca entendi a importância do toque, do toque dela, até não ter mais" />
        <CarouselItems
          title="querer"
          text="Eu queria você. <br>
Mesmo com dúvidas. <br>
Mesmo com medos. <br>
Mesmo com surtos.<br>
Mesmo com inseguranças.<br>
Eu queria você.<br>
O peso de querer me consumiu,<br>
Porque eu não tive dúvida alguma do que queria.<br>
Mas eu não poderia lutar por dois. eu não poderia lutar por nós, Quando o nós era apenas eu."
        />
        <CarouselItems text="nós precisamos do toque de quem amamos quase tanto quanto de ar pra respirar" />
        <CarouselItems
          title="confiança"
          text="cansei de ter medo do que os outros pensam de mim. se quiser me julgar, vá em frente. vou continuar aqui, perfeita nas minhas imperfeições."
        />
      </Carousel>
    </div>
  )
}
