import { fireEvent, render, screen } from "@testing-library/react"
import { Chessboard } from "."

describe('<Chessboard />', () => {

  function mount() {
    return render(<Chessboard />)
  }

  it('renders the title', async () => {
    mount()
    expect(screen.getByText('Chessboard')).toBeInTheDocument()
  })

  it('renders the chessboard with the pieces', async () => {
    const { container } = mount()
    expect(container.querySelector('#chessboard')).toBeInTheDocument()
    expect(container.querySelectorAll('#chessboard .tile')).toHaveLength(64)
    expect(container.querySelectorAll('#chessboard .white-tile')).toHaveLength(32)
    expect(container.querySelectorAll('#chessboard .black-tile')).toHaveLength(32)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/pawn_b.png);"]')).toHaveLength(8)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/pawn_w.png);"]')).toHaveLength(8)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/rook_b.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/rook_b.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/knight_b.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/knight_b.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/bishop_b.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/bishop_b.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/rook_w.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/rook_w.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/knight_w.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/knight_w.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/bishop_w.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/bishop_w.png);"]')).toHaveLength(2)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/queen_b.png);"]')).toHaveLength(1)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/king_b.png);"]')).toHaveLength(1)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/queen_w.png);"]')).toHaveLength(1)
    expect(container.querySelectorAll('div[style="background-image: url(assets/images/king_w.png);"]')).toHaveLength(1)
  })

  describe('draggable piece', () => {
    it('should move the piece by mouse delta-xy', () => {
      const { container } = mount()
      const piece = container.querySelector('div[style="background-image: url(assets/images/king_w.png);"]') as HTMLElement

      expect(piece.style.position).toBe('')
      expect(piece.style.top).toBe('')
      expect(piece.style.left).toBe('')

      fireEvent.mouseDown(piece)
      fireEvent.mouseMove(piece, { clientX: 0, clientY: 0 })
      fireEvent.mouseUp(piece)

      expect(piece.style.position).toBe('absolute')
      expect(piece.style.top).toBe('-8px')
      expect(piece.style.left).toBe('-8px')
    })
  })
})
