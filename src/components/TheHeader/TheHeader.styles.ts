import { SVGProps } from 'react'
import {
  AvatarProps,
  ButtonProps,
  BoxProps,
  ContainerProps,
  StackProps,
  TextProps,
  ListProps,
  ListItemProps
} from '@chakra-ui/react'

export const Bar: BoxProps = {
  display: 'flex',
  justifyContent: 'center',
  height: {
    base: 14,
    md: 20
  }
}

export const Button: ButtonProps = {
  padding: 0,
  background: 'transparent',
  _hover: {
    background: 'none'
  },
  position: 'relative'
}

export const Icon: SVGProps<SVGSVGElement> = {
  width: '22',
  height: '20'
}

export const ButtonCount: TextProps = {
  background: 'orange.400',
  paddingX: '2',
  rounded: 'full',
  color: 'white',
  fontSize: 'xs',
  position: 'absolute',
  top: '3px',
  left: '18px',
  fontWeight: 'bold'
}

export const Container: ContainerProps = {
  position: 'relative',
  maxW: 'container.xl',
  height: 'full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  borderBottom: {
    md: '1px black solid'
  },
  borderColor: {
    md: 'gray.300'
  }
}

export const LeftStack: StackProps = {
  height: 'full',
  width: 'max',
  spacing: 5
}

export const Logo: SVGProps<SVGSVGElement> = {
  width: 140,
  height: 24
}

export const MenuIcon: SVGProps<SVGSVGElement> = {
  width: '20',
  height: '15'
}

export const RightStack: StackProps = {
  width: 'max',
  spacing: 6
}

export const Avatar: AvatarProps = {
  cursor: 'pointer',
  borderWidth: '2px',
  borderColor: 'white',
  width: {
    base: 8,
    md: 12
  },
  height: {
    base: 8,
    md: 12
  },
  marginLeft: 0,
  _hover: {
    borderColor: 'orange.400'
  },
  transition: 'ease-in 0.2s'
}

export const MenuList: ListProps = {
  height: '100%',
  paddingLeft: 8,
  display: {
    base: 'none',
    lg: 'flex'
  },
  textColor: 'gray.500'
}

export const MenuListItem: ListItemProps = {
  display: 'flex',
  paddingLeft: '3',
  paddingRight: '4',
  paddingTop: '4px',
  alignItems: 'center',
  height: 'full',
  borderBottomWidth: '3px',
  borderBottomColor: 'transparent',
  cursor: 'pointer',
  transition: 'ease-in-out 0.2s',
  _notLast: {
    marginRight: 4
  },
  _hover: {
    textColor: 'black',
    borderBottomColor: 'orange.400'
  }
}
