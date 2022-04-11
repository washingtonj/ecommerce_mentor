import { ImageProps, ButtonProps, BoxProps, StackProps } from '@chakra-ui/react'

export const Container: BoxProps = {
  width: {
    base: 'auto',
    xl: 'container.lg'
  },
  height: 'max',
  marginRight: {
    xl: '20'
  }
}

export const BigImageContainer: BoxProps = {
  position: 'relative'
}

export const Image: ImageProps = {
  width: 'full',
  height: {
    base: 80,
    xl: 'md'
  },
  objectFit: 'cover',
  borderRadius: {
    base: 'none',
    xl: '3xl'
  }
}

export const ImageGalery: StackProps = {
  display: {
    base: 'none',
    lg: 'flex'
  },
  marginTop: '5',
  justifyContent: 'center',
  spacing: 8
}

export const ImageGaleryItem: ImageProps = {
  width: '24',
  rounded: 'xl',
  cursor: 'pointer'
}

export const ActionsContainer: BoxProps = {
  width: 'full',
  position: 'absolute',
  top: '42%',
  display: {
    base: 'flex',
    xl: 'none'
  },
  paddingX: '3.5',
  justifyContent: 'space-between'
}

export const Buttons: ButtonProps = {
  borderRadius: 'full',
  width: '12',
  height: '12'
}
