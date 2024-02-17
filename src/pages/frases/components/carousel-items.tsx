export interface CarouselItemsProps {
  text: string
}

export function CarouselItems({ text }: CarouselItemsProps) {
  return (
    <div className="">
      <h2 className="cursor-grab select-none font-serif text-xl font-light italic">
        {text}
      </h2>
    </div>
  )
}
