import { useRef } from 'react'
import { Tile } from '../Tile'
import './index.scss'

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

type Piece = {
  image: string
  x: number
  y: number
}

const pieces: Piece[] = []

for (let i = 0; i <= 1; i++) {
  const y = i === 1 ? 7 : 0
  const color = i === 1 ? 'b' : 'w'

  for (let pawn_i = 0; pawn_i < 8; pawn_i++) {
    const y = i === 1 ? 6 : 1
    pieces.push({ image: `assets/images/pawn_${color}.png`, x: pawn_i, y })
  }

  pieces.push({ image: `assets/images/rook_${color}.png`, x: 0, y })
  pieces.push({ image: `assets/images/rook_${color}.png`, x: 7, y })
  pieces.push({ image: `assets/images/knight_${color}.png`, x: 1, y })
  pieces.push({ image: `assets/images/knight_${color}.png`, x: 6, y })
  pieces.push({ image: `assets/images/bishop_${color}.png`, x: 2, y })
  pieces.push({ image: `assets/images/bishop_${color}.png`, x: 5, y })
  pieces.push({ image: `assets/images/queen_${color}.png`, x: 3, y })
  pieces.push({ image: `assets/images/king_${color}.png`, x: 4, y })
}

function Chessboard(): JSX.Element {
  const chessboardRef = useRef<HTMLDivElement>(null)
  const board: JSX.Element[] = []
  let activePiece: HTMLElement | null = null


  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement
    if (element.classList.contains('piece')) {
      const x = e.clientX - 41
      const y = e.clientY - 41
      element.style.position = "absolute"
      element.style.left = `${x}px`
      element.style.top = `${y}px`

      activePiece = element
    }
  }

  function movePiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 8
      const minY = chessboard.offsetTop - 8
      const maxX = chessboard.offsetLeft + chessboard.offsetWidth - 72
      const maxY = chessboard.offsetTop + chessboard.offsetHeight - 70
      const x = e.clientX - 41
      const y = e.clientY - 41
      activePiece.style.position = "absolute"

      const xValue = x < minX ? minX : x > maxX ? maxX : x
      activePiece.style.left = `${xValue}px`

      const yValue = y < minY ? minY : y > maxY ? maxY : y
      activePiece.style.top = `${yValue}px`
    }
  }

  function dropPiece(e: React.MouseEvent) {
    if (activePiece) {
      activePiece = null
    }
  }


  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2
      const image = pieces.filter((p) => p.x === i && p.y === j)[0]?.image

      board.push(<Tile key={`${i}${j}`} number={number} image={image} />)
    }
  }

  return (
    <>
      <h1 className='t-center'>Chessboard</h1>
      <div onMouseMove={movePiece} onMouseDown={grabPiece} onMouseUp={dropPiece} id="chessboard" ref={chessboardRef}>
        {board}
      </div>
    </>
  )
}

export { Chessboard }
