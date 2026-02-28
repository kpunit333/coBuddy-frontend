import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, createSystem } from '@chakra-ui/react'
import { defaultConfig, system } from '@chakra-ui/react/preset'
import { LoaderProvider } from './providers/LoaderProvider.tsx'

const systemContext = createSystem(defaultConfig);

const root = createRoot(document.getElementById('root')!);

console.log(root);
console.log(system);
console.log(systemContext);
console.log(system == systemContext);


root.render(
  <ChakraProvider value={systemContext} >
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </ChakraProvider>
  )
