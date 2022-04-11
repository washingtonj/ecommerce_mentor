import { Stack, Box } from '@chakra-ui/react'
import ContentPrice from './ContentPrice'
import ContentDescription from './ContentDescription'
import ContentPurchase from './ContentPurchase'
import { ImageCarousel } from 'components'
import { useCart } from 'hooks'
import Data from './Content.json'

const Content = () => {
  const Cart = useCart()

  const valueWithDiscount = (Data.price.total * (1 - (Data.price.discount / 100)))

  function handlePurchase (qty: number) {
    Cart.addItem({
      id: Data.id,
      imgUrl: Data.images[0].thumbnail,
      name: Data.model,
      price: valueWithDiscount,
      quantity: qty
    })
    Cart.toggleCart()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box pb="20">
      <ImageCarousel images={Data.images} />
      <Box px="6">
        <Stack spacing="6" mt="6" direction="column">
          <ContentDescription company={Data.company} model={Data.model}>
            {Data.description}
          </ContentDescription>
          <ContentPrice value={valueWithDiscount} />
          <ContentPurchase onPurchase={handlePurchase} />
        </Stack>
      </Box>
    </Box>
  )
}

export default Content
