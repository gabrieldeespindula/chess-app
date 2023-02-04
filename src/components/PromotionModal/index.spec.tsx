import { render, screen } from "@testing-library/react"
import { PromotionModal } from "."
import { PieceType } from "../../entities/pieceType"
import { Team } from "../../entities/team"

describe('<PromotionModal />', () => {
  const onChoose = jest.fn()

  function mount(props = {}) {
    return render(<PromotionModal visible={true} team={Team.WHITE} onChoose={onChoose} {...props} />)
  }

  describe('when visible is false', () => {
    it('should not render the modal', () => {
      const { container } = mount({ visible: false })
      expect(container.querySelector('.modal')).not.toBeInTheDocument()
    })
  })

  describe('when visible is true', () => {
    it('should render the modal', () => {
      const { container } = mount()
      expect(container.querySelector('.modal')).toBeInTheDocument()
    })

    describe('when team is white', () => {
      it('should render the white pieces', () => {
        const { container } = mount()
        expect(container.querySelector('div[style="background-image: url(assets/images/rook_w.png);"]')).toBeInTheDocument()
        expect(container.querySelector('div[style="background-image: url(assets/images/knight_w.png);"]')).toBeInTheDocument()
        expect(container.querySelector('div[style="background-image: url(assets/images/bishop_w.png);"]')).toBeInTheDocument()
        expect(container.querySelector('div[style="background-image: url(assets/images/queen_w.png);"]')).toBeInTheDocument()
      })
    })

    describe('when team is black', () => {
      it('should render the black pieces', () => {
        const { container } = mount({ team: Team.BLACK })
        expect(container.querySelector('div[style="background-image: url(assets/images/rook_b.png);"]')).toBeInTheDocument()
        expect(container.querySelector('div[style="background-image: url(assets/images/knight_b.png);"]')).toBeInTheDocument()
        expect(container.querySelector('div[style="background-image: url(assets/images/bishop_b.png);"]')).toBeInTheDocument()
        expect(container.querySelector('div[style="background-image: url(assets/images/queen_b.png);"]')).toBeInTheDocument()
      })
    })

    describe('when the user clicks on a piece', () => {
      it('should call onChoose with the piece type and image', () => {
        const { container } = mount()
        const piece = container.querySelector('div[style="background-image: url(assets/images/rook_w.png);"]') as HTMLElement
        piece.click()
        expect(onChoose).toHaveBeenCalledWith(PieceType.ROOK, 'assets/images/rook_w.png')
      })
    })
  })
})
