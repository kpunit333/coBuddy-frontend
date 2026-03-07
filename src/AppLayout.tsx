import { createSystem, defaultConfig, ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { LoaderProvider } from './providers/LoaderProvider';

const systemContext = createSystem(defaultConfig);

const AppLayout = () => {
    return (
        <ChakraProvider value={systemContext} >
            <LoaderProvider>
                <App />
            </LoaderProvider>
        </ChakraProvider>
    )
}

export default AppLayout
