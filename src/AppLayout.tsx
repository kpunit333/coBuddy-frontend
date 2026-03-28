import { ChakraProvider, createSystem, defaultConfig, Stack, Switch, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { HiCheck, HiX } from 'react-icons/hi';
import App from './App';
import { LoaderProvider } from './providers/LoaderProvider';

const purpleTheme = {
    // 0: { value: "#ffffff" }, // Pure Energy
    // 100: { value: "#f2e6ff" },  // Near White
    // 200: { value: "#e6ccff" },  // High Light
    // 300: { value: "#cc99ff" },  // Soft Glow
    // 400: { value: "#a64dff" },  // Bright Lavender
    // 500: { value: "#8000ff" },  // The "Pulse" (Primary)
    // 600: { value: "#6600e6" },  // Electric Violet
    // 700: { value: "#4c00b3" },  // Core Violet
    // 800: { value: "#330080" },  // Royal Base
    // 900: { value: "#1a004d" },  // Deep Shadow
    // 1000: { value: "#05001a" },    // The Void (Deepest Black-Violet)

    // 0: { value: "#ffffff" }, // Pure Energy
    // 100: { value: "#f2e6ff" },  // Near White
    // 200: { value: "#e6ccff" },  // High Light
    // 300: { value: "#cc99ff" },  // Soft Glow
    // 400: { value: "#a64dff" },  // Bright Lavender
    // 500: { value: "#8000ff" },  // The "Pulse" (Primary)
    // 600: { value: "#6600e6" },  // Electric Violet
    // 700: { value: "#4c00b3" },  // Core Violet
    // 800: { value: "#330080" },  // Royal Base
    // 900: { value: "#1a004d" },  // Deep Shadow
    // 1000: { value: "#2f0553" },    // The Void (Deepest Black-Violet)

    0: { value: "#ffffff" },
    100: { value: "#f2e6ff" },
    200: { value: "#cc99ff" },
    300: { value: "#a64dff" },
    400: { value: "#8000ff" }, // Primary "Authenticate" Button
    500: { value: "#7425d5" },
    600: { value: "#a855f7" },
    700: { value: "#3d0a70" }, // Left Panel brand
    800: { value: "#4a1772" }, // Right Panel Base
    900: { value: "#2f0553" },
    1000: { value: "#05001a" }, // Deepest Void
}

const pD = {
    0: { value: "#ffffff" },
    50: { value: "#ffffff" },
    100: { value: "#f2e6ff" },
    150: { value: "#f2e6ff69" },
    200: { value: "#cc99ff" },
    300: { value: "#a64dff" },
    400: { value: "#8000ff" }, // Primary "Authenticate" Button
    500: { value: "#7425d5" },
    600: { value: "#a855f7" },
    700: { value: "#3d0a70" }, // Left Panel brand
    800: { value: "#4a1772" }, // Right Panel Base
    900: { value: "#2f0553" },
    950: { value: "#05001a" }, // Deepest Void
    1000: { value: "#05001a" }, // Deepest Void
}

const pL = {
    0: { value: "#ffffff" },
    950: { value: "#ffffff" },
    900: { value: "#f2e6ff" },
    800: { value: "#cc99ff" },
    700: { value: "#a64dff" },
    600: { value: "#8000ff" }, // Primary "Authenticate" Button
    500: { value: "#7425d5" },
    400: { value: "#a855f7" },
    300: { value: "#3d0a70" }, // Left Panel brand
    200: { value: "#4a1772" }, // Right Panel Base
    150: { value: "#2f055384" },
    100: { value: "#2f0553" },
    50: { value: "#05001a" }, // Deepest Void
    1000: { value: "#05001a" }, // Deepest Void
}

const colorTheme = {
    theme: {
        tokens: {
            colors: {
                brand: purpleTheme
            },
        }
    }
}

const darkTheme = {
    theme: {
        tokens: {
            colors: {
                brand: pD
            },
        }
    }
}

const lightTheme = {
    theme: {
        tokens: {
            colors: {
                brand: pL
            },
        }
    }
}

// const systemContext = createSystem(defaultConfig, darkTheme);
const systemContext = createSystem(defaultConfig, darkTheme);

const themeMap = {
    false: lightTheme,
    true: darkTheme
}

const AppLayout = () => {

    const [context, setContext] = useState(systemContext);

    const toggleMode = (e: any) => {
        const theme = themeMap[e.checked];
        const newContext = createSystem(defaultConfig, theme);
        setContext(newContext);
    }

    return (
        <>
            <ChakraProvider value={context}>
                <LoaderProvider>
                    <App />
                </LoaderProvider>
                {/* <HStack
                    position="absolute"
                    bottom="4"
                    color="brand.600"
                    fontSize="10px"
                    letterSpacing="0.3em"
                    opacity="0.5"
                    textTransform="uppercase"
                    width="100%"
                    justifyContent="center"
                >
                    <LuCopyright size={12} />
                    <Text>All Rights Reserved</Text>
                </HStack> */}
                {/* <NexusLogo /> */}
                <Stack 
                    position="fixed"
                    right="0px"
                    bottom="1rem"
                >
                    <VStack
                        direction="row"
                        gap="0"
                        px="4"
                        color="brand.200"
                        alignItems="flex-end"
                    >
                        <Text minW="8ch" color="brand.600" >Dark Mode</Text>

                        <Switch.Root defaultChecked size="lg" outline="none" width="min-content" justifyContent="right" onCheckedChange={(e) => toggleMode(e)}>
                            <Switch.HiddenInput />
                            <Switch.Control backgroundColor="brand.500">
                                <Switch.Thumb borderColor="brand.200" color="brand.1000">
                                    <Switch.ThumbIndicator fallback={<HiX />}>
                                        <HiCheck />
                                    </Switch.ThumbIndicator>
                                </Switch.Thumb>
                            </Switch.Control>
                        </Switch.Root>
                    </VStack>
                </Stack>
            </ChakraProvider>
        </>
    )
}

export default AppLayout
