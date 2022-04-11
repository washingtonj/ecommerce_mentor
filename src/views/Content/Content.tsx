import { Stack, Box } from '@chakra-ui/react'
import ContentPrice from './ContentPrice'
import ContentDescription from './ContentDescription'
import ContentPurchase from './ContentPurchase'
import { ImageCarousel } from 'components'
import { useCart } from 'hooks'
import Data from './Content.json'
import * as Styles from './Content.styles'

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
    <Box { ...Styles.Content }>
      <ImageCarousel images={Data.images} />
      <Box px="6">
        <Stack spacing="6" mt="6" direction="column">
          <ContentDescription company={Data.company} model={Data.model}>
            {Data.description}
          </ContentDescription>
          <ContentPrice value={valueWithDiscount} discount={Data.price.discount} />
          <ContentPurchase onPurchase={handlePurchase} />
        </Stack>
      </Box>
    </Box>
  )
}

export default Content
