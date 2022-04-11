import { render } from '@testing-library/react'
import ContentDescription from './ContentDescription'

describe('Content - Description', () => {
  let companyNameEl: HTMLParagraphElement
  let modelNameEl: HTMLParagraphElement
  let descriptionEl: HTMLParagraphElement

  beforeAll(() => {
    render(
      <ContentDescription company='Dolar' model='Ipsum'>
        Dolar ipsum
      </ContentDescription>
    )

    const Paragraphs = document.querySelectorAll('p')

    companyNameEl = Paragraphs[0]
    modelNameEl = Paragraphs[1]
    descriptionEl = Paragraphs[2]
  })

  it('Should render the company name', () => {
    expect(companyNameEl.innerHTML).toBe('Dolar')
  })

  it('Should render the model name', () => {
    expect(modelNameEl.innerHTML).toBe('Ipsum')
  })

  it('Should render the description', () => {
    expect(descriptionEl.innerHTML).toBe('Dolar ipsum')
  })
})
