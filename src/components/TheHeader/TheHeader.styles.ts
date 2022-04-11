import { SVGProps } from 'react'
import {
  AvatarProps,
  ButtonProps,
  BoxProps,
  ContainerProps,
  StackProps,
  TextProps
} from '@chakra-ui/react'

export const Bar: BoxProps = {
  height: 14
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
  height: 'full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

export const LeftStack: StackProps = {
  width: 'max',
  spacing: 5
}

export const RightStack: StackProps = {
  width: 'max',
  spacing: 6
}

export const Avatar: AvatarProps = {
  width: 6,
  height: 6,
  marginLeft: 0
}
