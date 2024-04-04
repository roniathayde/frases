export interface CarouselItemsProps {
  title?: string
  text: string
}

export function CarouselItems({ title, text }: CarouselItemsProps) {
  return (
    <div className="min-h-96 cursor-grab overflow-hidden font-serif  font-light italic">
      <h2 className=" mb-3 select-none text-2xl">{title}</h2>
      <div
        className="select-none text-xl"
        dangerouslySetInnerHTML={{ __html: text }}
      />

      <div className="size-9 max-w-9"></div>
    </div>
  )
}
