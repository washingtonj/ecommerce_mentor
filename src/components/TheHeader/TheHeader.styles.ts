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
    sm: 14,
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
    sm: 8,
    md: 12
  },
  height: {
    sm: 8,
    md: 12
  },
  marginLeft: 0,
  _hover: {
    borderColor: 'orange.400'
  },
  transition: 'ease-in 0.2s'
}

export const MenuList: ListProps = {
  paddingLeft: 8,
  display: {
    sm: 'none',
    md: 'flex'
  },
  textColor: 'gray.500'
}

export const MenuListItem: ListItemProps = {
  cursor: 'pointer',
  _notLast: {
    marginRight: 8
  }
}
