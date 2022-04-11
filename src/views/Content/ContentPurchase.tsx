import { Flex, Button, Text, Tooltip } from '@chakra-ui/react'
import { Minus, Plus, Cart } from 'assets/icons'
import { useState } from 'react'
import * as Styles from './ContentPurchase.styles'
import { ButtonStyle } from 'styles/components'

interface ContentPurchaseProps {
  onPurchase: (qty: number) => void
}

const ContentPurchase = (props: ContentPurchaseProps) => {
  const [quantity, setQuantity] = useState(0)
  const [emptyAlert, setEmptyAlert] = useState(false)

  function increase () {
    setQuantity(prev => prev + 1)
  }

  function decrease () {
    if (quantity > 0) setQuantity(prev => prev - 1)
  }

  function purchase () {
    if (quantity === 0) setEmptyAlert(true)
    else {
      props.onPurchase(quantity)
      setQuantity(0)
    }
  }

  return (
    <>
      <Tooltip
        label="Insert a quantity would you like to purchase"
        placement='top'
        isDisabled={!emptyAlert}
        borderRadius='md'
        background="orange.400"
        isOpen={emptyAlert}
      >
        <Flex
          {...Styles.QuantityContainer} onMouseMove={() => setEmptyAlert(false)}>
          <Button data-testid="minus" onClick={() => decrease()}>
            <Minus />
          </Button>
          <Text data-testid="counter" fontWeight="bold">{quantity}</Text>
          <Button data-testid="plus" onClick={() => increase()}>
            <Plus />
          </Button>
        </Flex>
      </Tooltip>
      <Button
        {...ButtonStyle }
        data-testid="purchase"
        leftIcon={<Cart width="22" height="20" fill='white' />}
        onClick={() => purchase()}
      >
        Add to cart
      </Button>
    </>
  )
}

export default ContentPurchase
