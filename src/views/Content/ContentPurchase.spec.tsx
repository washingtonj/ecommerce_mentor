import { render, fireEvent, screen} from '@testing-library/react'
import ContentPurchase from './ContentPurchase'

describe('Content - Purchase', () => {
  let plusButton: HTMLButtonElement;
  let minusButton: HTMLButtonElement;
  let counter: HTMLParagraphElement;
  
  beforeEach(() => {
    render(<ContentPurchase />)

    plusButton = screen.getByTestId('plus') as HTMLButtonElement
    minusButton = screen.getByTestId('minus') as HTMLButtonElement
    counter = screen.getByTestId('counter') as HTMLParagraphElement
  })


  it('Should increase quantity on press plus button', () => {
    fireEvent.click(plusButton)
    expect(counter.innerHTML).toBe("1")
    
  })

  it('Should decrease quantity on press minus button', () => {
    fireEvent.click(plusButton)
    fireEvent.click(minusButton)
    expect(counter.innerHTML).toBe("0")
  })
})
