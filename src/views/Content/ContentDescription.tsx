import { Text } from '@chakra-ui/react'
import * as Styles from './ContentDescription.styles'

export interface ContentDescriptionProps {
  company: string,
  model: string,
  children: string
}

const ContentDescription = (props: ContentDescriptionProps) => (
  <>
    <Text { ...Styles.Company }>{ props.company }</Text>
    <Text { ...Styles.Model }>{ props.model }</Text>
    <Text { ...Styles.Description }>{ props.children }</Text>
  </>
)

export default ContentDescription
