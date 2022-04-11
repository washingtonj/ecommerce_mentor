import { Flex, Text, Badge } from '@chakra-ui/react'
import * as Styles from './ContentPrice.styles'
import { ToCurrency } from 'utils'

export interface ContentPriceProps {
  value: number,
  discount?: number
}

const ContentPrice = (props: ContentPriceProps) => {
  return (
    <Flex {...Styles.Container}>
      <Flex {...Styles.PriceContainer}>
        <Text {...Styles.Price}>{ToCurrency(props.value, 'USD')}</Text>
        {props.discount && <Badge {...Styles.Discount}>{props.discount}%</Badge>}
      </Flex>
      {props.discount && <Text {...Styles.LastPrice}>{ToCurrency(props.value, 'USD')}</Text>}
    </Flex>
  )
}

export default ContentPrice
