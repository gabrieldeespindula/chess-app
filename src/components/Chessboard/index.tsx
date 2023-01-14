import { useEffect, useRef, useState } from 'react'
import { Tile } from '../Tile'
import './index.scss'

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

type Piece = {
  image: string
  x: number
  y: number
}

const initialBoardState: Piece[] = []

for (let i = 0; i <= 1; i++) {
  const y = i === 1 ? 7 : 0
  const color = i === 1 ? 'b' : 'w'

  for (let pawn_i = 0; pawn_i < 8; pawn_i++) {
    const y = i === 1 ? 6 : 1
    initialBoardState.push({ image: `assets/images/pawn_${color}.png`, x: pawn_i, y })
  }

  initialBoardState.push({ image: `assets/images/rook_${color}.png`, x: 0, y })
  initialBoardState.push({ image: `assets/images/rook_${color}.png`, x: 7, y })
  initialBoardState.push({ image: `assets/images/knight_${color}.png`, x: 1, y })
  initialBoardState.push({ image: `assets/images/knight_${color}.png`, x: 6, y })
  initialBoardState.push({ image: `assets/images/bishop_${color}.png`, x: 2, y })
  initialBoardState.push({ image: `assets/images/bishop_${color}.png`, x: 5, y })
  initialBoardState.push({ image: `assets/images/queen_${color}.png`, x: 3, y })
  initialBoardState.push({ image: `assets/images/king_${color}.png`, x: 4, y })
}


function Chessboard(): JSX.Element {
  const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const chessboardRef = useRef<HTMLDivElement>(null)
  const board: JSX.Element[] = []

  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement
    const chessboard = chessboardRef.current
    if (element.classList.contains('piece') && chessboard) {
      setGridX(Math.floor((e.clientX - chessboard.offsetLeft) / 80))
      setGridY(Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 640) / 80)))
      const x = e.clientX - 41
      const y = e.clientY - 41
      element.style.position = "absolute"
      element.style.left = `${x}px`
      element.style.top = `${y}px`

      setActivePiece(element)
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
    const chessboard = chessboardRef.current
    if (activePiece && chessboard) {
      const x = Math.floor((e.clientX - chessboard.offsetLeft) / 80)
      const y = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 640) / 80))

      setPieces((value) => {
        const pieces = value.map((p) => {
          if(p.x === gridX && p.y === gridY) {
            p.x = x
            p.y = y
          }
          return p
        })
        return pieces
      })

      setActivePiece(null)
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
