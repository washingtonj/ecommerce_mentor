import { useContext, useRef } from 'react'
import { Box, Flex, Text, Button, useOutsideClick } from '@chakra-ui/react'
import { Cart } from 'assets/icons'
import * as Styles from './TheHeaderCart.styles'
import { CartContext } from 'contexts/CartContext'



const TheHeaderCart = () => {
  const ref = useRef(null)
  const { isOpen, actions } = useContext(CartContext)

  useOutsideClick({
    ref: ref,
    handler: () => actions.toggle(),
    enabled: isOpen
  })

  return (
    <>
      <Button { ...Styles.CartButton } onClick={() => actions.toggle()}>
        <Cart {...Styles.Icon} />
      </Button>

      {
        isOpen && (
          <Box {...Styles.Container} ref={ref}>
            <Flex {...Styles.Header}>
              <Text {...Styles.HeaderText}>Cart</Text>
            </Flex>
            <Flex {...Styles.Body}>
              <Text {...Styles.BodyEmptyText}>Your cart is empty.</Text>
            </Flex>
          </Box>
        )
      }
    </>
  )
}

export default TheHeaderCart