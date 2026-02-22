import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from '@chakra-ui/react/preset'

const systemContext = system;

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    {/* <BrowserRouter> */}
    <ChakraProvider value={systemContext} children={<App/>}>
      {/* <App/> */}
    </ChakraProvider>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
