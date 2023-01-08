import { render, screen } from "@testing-library/react"
import { Chessboard } from "."

describe('<Chessboard />', () => {
  it('renders the title', async () => {
    const { container } = render(<Chessboard />)
    expect(screen.getByText('Chessboard')).toBeInTheDocument()
  })
})
