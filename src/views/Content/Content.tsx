import { Stack, Box } from '@chakra-ui/react'
import ContentPrice from './ContentPrice'
import ContentDescription from './ContentDescription'
import ContentPurchase from './ContentPurchase'
import { ImageCarousel } from 'components'

const Content = () => {
  return (
    <Box pb="20">
      <ImageCarousel images={[
        { original: '/images/image-product-1.jpg', thumbnail: '/images/image-product-1-thumbnail.jpg' },
        { original: '/images/image-product-2.jpg', thumbnail: '/images/image-product-2-thumbnail.jpg' },
        { original: '/images/image-product-3.jpg', thumbnail: '/images/image-product-3-thumbnail.jpg' },
        { original: '/images/image-product-4.jpg', thumbnail: '/images/image-product-4-thumbnail.jpg' }
      ]}
      />

      <Box px="6">
        <Stack spacing="6" mt="6" direction="column">
          <ContentDescription company='Sneaker Company' model='Fall Limited Edition Sneaker'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer
          </ContentDescription>
          <ContentPrice value={250} discount={50} />
          <ContentPurchase />
        </Stack>
      </Box>
    </Box>
  )
}

export default Content