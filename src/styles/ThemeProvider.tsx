import { ChakraProvider, Box } from '@chakra-ui/react'

export const ThemeProvider: React.FC = ({ children }) => (
  <ChakraProvider resetCSS>
    <Box width="full" height="100vh" background="white" textColor="black">
      { children }
    </Box>
  </ChakraProvider>
)

