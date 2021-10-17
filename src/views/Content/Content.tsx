import { ImageCarousel } from 'components'



const Content = () => {
  return (
    <ImageCarousel images={[
      { original: '/images/image-product-1.jpg', thumbnail: '/images/image-product-1-thumbnail.jpg' }, 
      { original: '/images/image-product-2.jpg', thumbnail: '/images/image-product-2-thumbnail.jpg' },
      { original: '/images/image-product-3.jpg', thumbnail: '/images/image-product-3-thumbnail.jpg' },
      { original: '/images/image-product-4.jpg', thumbnail: '/images/image-product-4-thumbnail.jpg' }
    ]} 
  />
  )
}

export default Content