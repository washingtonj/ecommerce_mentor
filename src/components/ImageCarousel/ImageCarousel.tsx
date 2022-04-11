import { useState } from 'react'
import { Box, Button, Image } from '@chakra-ui/react'
import { Next, Previous } from 'assets/icons'
import { PublicImageLoader } from 'utils'
import * as Styles from './ImageCarousel.styles'

export interface ImageCarouselProps {
  images: {
    original: string,
    thumbnail: string
  }[]
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0)
  const total = images.length

  function nextImage () {
    setCurrent((prev) => prev < total - 1 ? prev + 1 : prev)
  }

  function previousImage () {
    setCurrent(prev => prev !== 0 ? prev - 1 : prev)
  }

  return (
    <Box { ...Styles.Container }>
      <Image {...Styles.Image} src={PublicImageLoader(images[current].original)} />
      <Box { ...Styles.ActionsContainer }>
        <Button {...Styles.Buttons} data-testid="previous" onClick={() => previousImage()}>
          <Previous />
        </Button>
        <Button {...Styles.Buttons} data-testid="next" onClick={() => nextImage()} >
          <Next />
        </Button>
      </Box>
    </Box>
  )
}

export default ImageCarousel
