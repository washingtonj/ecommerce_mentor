import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react'
import { ReactElement } from 'react'

const Theme = extendTheme({
  shadows: {
    outline: '0 0 0 3px rgba(237, 137, 54, 0.44)'
  }
})

export const ThemeProvider = ({
  children
}: {
  children: ReactElement | ReactElement;
}) => (
  <ChakraProvider theme={Theme} resetCSS>
    <Box width="full" height="100vh" background="white" textColor="black">
      {children}
    </Box>
  </ChakraProvider>
)
