import { Box, HStack, Container, Avatar } from '@chakra-ui/react'
import { Logo, Menu, Cart } from 'assets/icons'
import * as Styles from './TheHeader.styles'

import AvatarImage from 'assets/images/image-avatar.png'


const TheHeader = () => {
  return (
    <Box data-testid="the-header" {...Styles.Bar}>
      <Container {...Styles.Container} >
        <HStack {...Styles.LeftStack}>
          <Menu width="20" height="15" />
          <Logo width="full" height="24" />
        </HStack>
        <HStack {...Styles.RightStack}>
          <Cart width="22" height="20" />
          <Avatar {...Styles.Avatar} src={AvatarImage} />
        </HStack>
        <Box></Box>
      </Container>
    </Box>
  )
}

export default TheHeader