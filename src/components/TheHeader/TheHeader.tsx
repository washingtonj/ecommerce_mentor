import { Box, HStack, Container, Avatar } from '@chakra-ui/react'
import { Logo, Menu, Cart } from 'assets/icons'
import { PublicImageLoader } from 'utils'
import * as Styles from './TheHeader.styles'



const TheHeader = () => {
  return (
    <Box data-testid="the-header" {...Styles.Bar}>
      <Container {...Styles.Container} >
        <HStack {...Styles.LeftStack}>
          <Menu width="20" height="15" />
          <Logo width="100%" height="24" />
        </HStack>
        <HStack {...Styles.RightStack}>
          <Cart width="22" height="20" />
          <Avatar {...Styles.Avatar} src={PublicImageLoader('/images/image-avatar.png')} />
        </HStack>
      </Container>
    </Box>
  )
}

export default TheHeader