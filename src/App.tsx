import { ThemeProvider } from 'styles/ThemeProvider'
import { TheHeader } from 'components'

function App() {
  return (
    <ThemeProvider>
      <TheHeader />
    </ThemeProvider>
  );
}

export default App;
