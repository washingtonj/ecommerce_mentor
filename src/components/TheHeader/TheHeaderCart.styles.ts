import { BoxProps, ButtonProps, FlexProps, ImageProps, TextProps } from '@chakra-ui/react'
import { SVGProps } from 'react'

const paddingX = 5

export const CartButton: ButtonProps = {
  padding: 0,
  background: 'transparent',
  _hover: {
    background: 'none'
  }
}

export const Icon: SVGProps<SVGSVGElement> = {
  width: "22",
  height:"20"
}

export const Container: BoxProps = {
  position: 'absolute',
  background: 'white',
  zIndex: 5,
  top: '65px',
  left: '-15px',
  width: '95%',
  borderRadius: 'md',
  boxShadow: 'xl'
}

export const Header: FlexProps = {
  alignItems: 'center',
  height: 14,
  borderBottom: '1px solid',
  borderColor: 'gray.200',
  paddingX,
}

export const HeaderText: TextProps = {
  fontWeight: 'bold',
}

export const Body: FlexProps = {
  minHeight: 44,
  paddingY: 5,
  paddingX
}

export const BodyEmptyText: TextProps = {
  fontWeight: 'bold',
  textColor: 'gray.500',
  textAlign: 'center',
  margin: 'auto'
}

export const ItemContainer: FlexProps = {
  flexDirection: 'row',
  justifyContent: 'center' 
}

export const ItemImagem: ImageProps = {
  width: '50px',
  height: '50px',
  borderRadius: 'md'
}

export const ItemTextContainer: FlexProps = {
  flexDirection: 'column',
  marginLeft: '5',
  textColor: 'gray.500'
}

export const ItemTextTitle: TextProps = {
  fontWeight: 'semibold'
}

export const ItemPriceContainer: FlexProps = {}

export const ItemTextQty: TextProps = {
  marginRight: '1.5'
}

export const ItemTextTotal: TextProps = {
  fontWeight: 'bold',
  textColor: 'black'
}