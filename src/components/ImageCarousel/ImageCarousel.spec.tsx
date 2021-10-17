import { render, screen, fireEvent } from '@testing-library/react'
import ImageCarousel from './ImageCarousel'


describe('Image Carousel Component', () => {
  let nextButton: HTMLButtonElement
  let previousButton: HTMLButtonElement

  beforeEach(() => {
    render(<ImageCarousel images={[
      { original: '/images/image-product-1.jpg', thumbnail: '/images/image-product-1-thumbnail.jpg' },
      { original: '/images/image-product-2.jpg', thumbnail: '/images/image-product-2-thumbnail.jpg' },
      { original: '/images/image-product-3.jpg', thumbnail: '/images/image-product-3-thumbnail.jpg' },
      { original: '/images/image-product-4.jpg', thumbnail: '/images/image-product-4-thumbnail.jpg' }
    ]} />)


    nextButton = screen.getByTestId('next') as HTMLButtonElement
    previousButton = screen.getByTestId('previous') as HTMLButtonElement
  })

  it('Should render component', () => {
    const component = document.querySelector('img') as HTMLImageElement
    expect(component.src).toContain('image-product')
  })

  it('Should image change on next action', () => {
    fireEvent.click(nextButton)

    const component = document.querySelector('img') as HTMLImageElement
    expect(component.src).toContain('image-product-2')
  })

  it('Should image change on previus action', () => {
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    fireEvent.click(previousButton)
    
    const component = document.querySelector('img') as HTMLImageElement
    expect(component.src).toContain('image-product-2')
  })
})