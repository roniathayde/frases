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
    <div className=" h-[600px]   w-full rounded bg-slate-950 p-6">
      {/* remover className se os items bugarem */}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        className="h-[400px] max-w-[800px]"
      >
        <CarouselItems text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error illum sapiente odio aliquam totam distinctio aspernatur nulla! Similique natus nam officia deserunt, eligendi voluptatum veniam non architecto eum odio?" />
        <CarouselItems text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error illum sapiente odio aliquam totam distinctio aspernatur nulla! Similique natus nam officia deserunt, eligendi voluptatum veniam non architecto eum odio?" />
        <CarouselItems text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error illum sapiente odio aliquam totam distinctio aspernatur nulla! Similique natus nam officia deserunt, eligendi voluptatum veniam non architecto eum odio?" />
        <CarouselItems text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error illum sapiente odio aliquam totam distinctio aspernatur nulla! Similique natus nam officia deserunt, eligendi voluptatum veniam non architecto eum odio?" />
        <CarouselItems text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error illum sapiente odio aliquam totam distinctio aspernatur nulla! Similique natus nam officia deserunt, eligendi voluptatum veniam non architecto eum odio?" />
        <CarouselItems text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error illum sapiente odio aliquam totam distinctio aspernatur nulla! Similique natus nam officia deserunt, eligendi voluptatum veniam non architecto eum odio?" />
      </Carousel>
    </div>
  )
}
