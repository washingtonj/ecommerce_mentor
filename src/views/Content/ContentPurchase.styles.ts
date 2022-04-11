import { FlexProps } from '@chakra-ui/react'

export const Container: FlexProps = {
  flexDir: {
    base: 'column',
    xl: 'row'
  }
}

export const QuantityContainer: FlexProps = {
  width: {
    base: 'full',
    xl: '56'
  },
  borderRadius: 'lg',
  height: '14',
  px: '2',
  background: 'gray.100',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '5',
  marginRight: {
    xl: '5'
  }
}
