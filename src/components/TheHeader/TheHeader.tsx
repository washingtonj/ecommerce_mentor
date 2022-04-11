import {
  Box,
  HStack,
  Container,
  Avatar,
  Button,
  Text,
  List,
  ListItem
} from '@chakra-ui/react'
import { Logo, Cart as CartIcon } from 'assets/icons'
import { useCart } from 'hooks'
import { PublicImageLoader } from 'utils'
import * as Styles from './TheHeader.styles'
import TheHeaderCart from './TheHeaderCart'

export const MENU_ITEMS = [
  { name: 'Collections', path: '/collections' },
  { name: 'Men', path: '/men' },
  { name: 'Women', path: '/women' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const TheHeader = () => {
  const Cart = useCart()

  return (
    <Box data-testid="the-header" {...Styles.Bar}>
      <Container {...Styles.Container}>
        <HStack {...Styles.LeftStack}>
          <Logo data-testid="the-header-logo" {...Styles.Logo} />
          <List data-testid="the-header-menu" {...Styles.MenuList}>
            {MENU_ITEMS.map((item, index) => (
              <ListItem
                key={index}
                data-testid="the-header-menu-item"
                {...Styles.MenuListItem}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </HStack>
        <HStack {...Styles.RightStack}>
          <Button
            data-testid="the-header-cart-button"
            {...Styles.Button}
            onClick={Cart.toggleCart}
          >
            <CartIcon {...Styles.Icon} />
            {Cart.total >= 1 && (
              <Text
                data-testid="the-header-cart-button-count"
                {...Styles.ButtonCount}
              >
                {Cart.total}
              </Text>
            )}
          </Button>
          {Cart.isOpen && (
            <TheHeaderCart
              data={Cart.items}
              onClose={Cart.toggleCart}
              onRemove={Cart.removeItem}
            />
          )}
          <Avatar
            {...Styles.Avatar}
            data-testid="the-header-avatar"
            src={PublicImageLoader('/images/image-avatar.png')}
          />
        </HStack>
      </Container>
    </Box>
  )
}

export default TheHeader
