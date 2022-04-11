import { ThemeProvider } from 'styles/ThemeProvider'
import { TheHeader } from 'components'
import { Content } from 'views'
import { CartProvider } from 'contexts'

function App () {
  return (
    <ThemeProvider>
      <CartProvider>
        <TheHeader />
        <Content />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
