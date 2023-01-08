import './index.scss'

type Props = {
  number: number
  image?: string
}

function Tile({ number, image }: Props): JSX.Element {
  const isEven = number % 2 === 0

  return (
    <div className={`tile ${isEven ? 'white-tile' : 'black-tile'}`}>
      {image && <div style={{ backgroundImage: `url(${image})` }} className="piece"></div>}
    </div>
  )
}

export { Tile }
