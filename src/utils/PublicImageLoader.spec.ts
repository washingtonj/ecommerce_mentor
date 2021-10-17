import PublicImageLoader from './PublicImageLoader'

describe('Public Image Loader Util', () => {
  it('Shold return a valid path', () => {
    const path = PublicImageLoader('/images/image-avatar.png')
    console.log(path)
  })
})