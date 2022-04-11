import { render, screen } from '@testing-library/react'
import { TheHeader } from 'components'

describe('TheHeader Mobile', () => {
  beforeEach(() => {
    render(<TheHeader />)
  })

  it('Should render the component', () => {
    const logo = screen.getByTestId('the-header')
    expect(logo).toBeInTheDocument()
  })
})
