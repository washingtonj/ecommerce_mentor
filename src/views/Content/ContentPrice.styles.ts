import { FlexProps, TextProps, BadgeProps } from '@chakra-ui/react'

export const Container: FlexProps = {
  flexDir: {
    xl: 'column'
  },
  alignItems: {
    base: 'center',
    xl: 'flex-start'
  },
  justifyContent: 'space-between'
}

export const PriceContainer: FlexProps = {
  alignItems: 'center'
}

export const Price: TextProps = {
  fontWeight: 'bold',
  fontSize: '3xl',
  marginRight: '5'
}

export const Discount: BadgeProps = {
  fontSize: 'lg',
  background: 'orange.200',
  textColor: 'orange.400',
  paddingX: '1.5',
  borderRadius: 'md'
}

export const LastPrice: TextProps = {
  fontWeight: 'bold',
  fontSize: 'xl',
  textColor: 'gray.300',
  textDecoration: 'line-through',
  marginTop: {
    xl: 2
  }
}
