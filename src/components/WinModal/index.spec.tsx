import { render, screen } from "@testing-library/react"
import { WinModal } from "."
import { Team } from "../../entities/team"

describe('<WinModal />', () => {

  function mount(props = {}) {
    return render(<WinModal visible team={Team.BLACK} {...props} />)
  }

  describe('when visible is true', () => {
    describe('when team is black', () => {
      it('should render black win', () => {
        mount({ visible: true, team: Team.BLACK })
        expect(screen.getByText('Black win!!!')).toBeInTheDocument()
      })
    })

    describe('when team is white', () => {
      it('should render white win', () => {
        mount({ visible: true, team: Team.WHITE })
        expect(screen.getByText('White win!!!')).toBeInTheDocument()
      })
    })
  })

  describe('when visible is false', () => {
    it('should not render', () => {
      mount({ visible: false })
      expect(screen.queryByText('Black win!!!')).not.toBeInTheDocument()
      expect(screen.queryByText('White win!!!')).not.toBeInTheDocument()
    })
  })
})
