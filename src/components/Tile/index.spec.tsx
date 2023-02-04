import { render, screen } from "@testing-library/react"
import { Tile } from "."

describe('<Tile />', () => {

  function mount(number = 1, image?: string, highlight?: boolean) {
    return render(<Tile number={number} image={image} highlight={highlight} />)
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
        const image = 'assets/images/pawn_b.png'
        const { container } = mount(1, image)

        expect(container.querySelector(`div[style="background-image: url(${image});"]`)).toBeInTheDocument()
      })
    })

    describe('when it does not receives a image prop', () => {
      it('does not shows the image', () => {
        const { container } = mount()

        expect(container.querySelector('.piece')).not.toBeInTheDocument()
      })
    })
  })

  describe('about "highlight" prop', () => {
    describe('when it receives a highlight prop', () => {
      describe('and it receives a image prop', () => {
        it('shows a "highlight-kill" block', () => {
          const { container } = mount(1, 'assets/images/pawn_b.png', true)

          expect(container.querySelector('.tile')).toHaveClass('highlight-kill')
        })
      })

      describe('and it does not receives a image prop', () => {
        it('shows a "highlight" block', () => {
          const { container } = mount(1, '', true)

          expect(container.querySelector('.tile')).toHaveClass('highlight')
        })
      })
    })

    describe('when it does not receives a highlight prop', () => {
      it('does not shows a highlight block', () => {
        const { container } = mount()

        expect(container.querySelector('.tile')).not.toHaveClass('highlight')
      })
    })
  })
})
