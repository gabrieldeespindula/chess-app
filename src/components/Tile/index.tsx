import './index.scss'

type Props = {
  number: number
  image?: string
  highlight?: boolean
}

function Tile({ number, image, highlight }: Props): JSX.Element {
  const isEven = number % 2 === 0

  const highlightClass = highlight && image ? 'highlight-kill' : highlight ? 'highlight' : ''

  return (
    <div className={`tile ${isEven ? 'white-tile' : 'black-tile'} ${highlightClass}`}>
      {image && <div style={{ backgroundImage: `url(${image})` }} className="piece"></div>}
    </div>
  )
}

export { Tile }
