import { ThemeProvider } from 'styles/ThemeProvider'
import { TheHeader } from 'components'
import { Content } from 'views'

function App() {
  return (
    <ThemeProvider>
      <TheHeader />
      <Content />
    </ThemeProvider>
  );
}

export default App;
