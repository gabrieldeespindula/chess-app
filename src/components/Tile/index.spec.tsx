import { render, screen } from "@testing-library/react"
import { Tile } from "."

describe('<Tile />', () => {

  function mount(number = 1, image?: string) {
    return render(<Tile number={number} image={image} />)
  }

  describe('about "number" prop', () => {
    describe('when it receives a even number as prop', () => {
      it('shows a light block', () => {
        const { container } = mount(2)

        expect(container.querySelector('.tile')).toHaveClass('white-tile')
      })
    })

    describe('when it receives a odd number as prop', () => {
      it('shows a dark block', () => {
        const { container } = mount()

        expect(container.querySelector('.tile')).toHaveClass('black-tile')
      })
    })
  })

  describe('about "image" prop', () => {
    describe('when it receives a image prop', () => {
      it('shows the image', () => {
        const { container } = mount(1, 'assets/images/pawn_b.png')

        expect(container.querySelector('img[src="assets/images/pawn_b.png"]')).toBeInTheDocument()
      })
    })

    describe('when it does not receives a image prop', () => {
      it('does not shows the image', () => {
        const { container } = mount()

        expect(container.querySelector('img')).not.toBeInTheDocument()
      })
    })
  })
})
