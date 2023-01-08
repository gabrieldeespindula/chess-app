import './index.scss'

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function Chessboard() {
  const board: JSX.Element[] = []

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const isEven = (j + i + 2) % 2 === 0

      board.push(<div key={`${i}${j}`} className={isEven ? 'white' : 'black'}></div>)
    }
  }

  return (
    <>
      <h1 className='t-center'>Chessboard</h1>
      <div className="chessboard">
        {board}
      </div>
    </>
  )
}

export { Chessboard }
