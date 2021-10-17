import { ImageProps, ButtonProps, BoxProps } from '@chakra-ui/react'

export const Container: BoxProps = {
  height: 'max',
  position: 'relative'
}

export const Image: ImageProps = {
  width: "full",
  height: 80,
  objectFit: "cover",
}

export const ActionsContainer: BoxProps = {
  width: "full",
  position: 'absolute',
  top: "42%",
  display: 'flex',
  paddingX: "3.5",
  justifyContent: 'space-between'
}

export const Buttons: ButtonProps = {
  borderRadius: 'full',
  width: "12",
  height: "12"
}