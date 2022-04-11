import { BoxProps, FlexProps, ImageProps, TextProps } from '@chakra-ui/react'
import { SVGProps } from 'react'

const paddingX = 5

export const Container: BoxProps = {
  position: 'absolute',
  background: 'white',
  zIndex: 5,
  top: {
    base: '65px',
    md: '85px'
  },
  right: {
    base: '15px',
    xl: '0.5'
  },
  width: {
    base: '95%',
    md: '450px'
  },
  borderRadius: 'md',
  boxShadow: 'xl'
}

export const Header: FlexProps = {
  alignItems: 'center',
  height: 14,
  borderBottom: '1px solid',
  borderColor: 'gray.200',
  paddingX
}

export const HeaderText: TextProps = {
  fontWeight: 'bold'
}

export const Body: FlexProps = {
  flexDir: 'column',
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
  width: '100%',
  height: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '5'
}

export const ItemImagem: ImageProps = {
  width: '50px',
  height: '50px',
  borderRadius: 'md'
}

export const ItemTextContainer: FlexProps = {
  flex: 1,
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

export const ItemTrashIcon: SVGProps<SVGSVGElement> = {
  cursor: 'pointer'
}
