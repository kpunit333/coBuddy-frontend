import { Box, Button, Center, Checkbox, Circle, Container, Grid, GridItem, Heading, HStack, IconButton, Input, Stack, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { LuLayers, LuEyeOff, LuEye } from "react-icons/lu";

const Auth = () => {

  const [login, setLogin] = useState(true);

  const toggleAuthMode = () => {
    setLogin(!login);
  }

  return (
    <>
      <Box
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="purple.950"
      >
        <Box width="100%" bg="brand.900" overflow="hidden" >
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} h="100vh">

            <GridItem
              position="relative"
              bg="brand.800"
              display={{ base: "none", md: "block" }}
              overflow="hidden"
            >
              <Box position="absolute" inset="0" bgGradient="radial(circle at 20% 30%, brand.700, transparent)" opacity="0.5" />
              <Box
                position="absolute"
                top="-10%"
                left="-10%"
                w="120%"
                h="120%"
                bgGradient="conic(from 180deg at 50% 50%, brand.900, brand.600, brand.900)"
                opacity="0.2"
              />

              <Box
                position="absolute"
                bottom="10%"
                right="-5%"
                w="300px"
                h="300px"
                border="2px solid"
                borderColor="brand.600"
                transform="rotate(45deg)"
                opacity="0.2"
              />

              <Center h="full" p={20} flexDirection="column" alignItems="flex-start" zIndex={2} position="relative">
                <HStack color="brand.0" mb={12}>
                  <Circle size="40px" bg="brand.500" boxShadow="0 0 20px rgba(151, 87, 255, 0.4)">
                    <LuLayers size={20} />
                  </Circle>
                  <Heading size="md" letterSpacing="widest" fontWeight="black" textTransform="uppercase">
                    System <Text as="span" color="brand.300">v3.0</Text>
                  </Heading>
                </HStack>

                <VStack align="flex-start" >
                  <Heading size="3xl" color="brand.0" fontWeight="extrabold" lineHeight="1" letterSpacing="tight">
                    Design <br /> Accelerated.
                  </Heading>
                  <Box w="60px" h="4px" bg="brand.400" />
                  <Text color="brand.50" fontSize="lg" maxW="400px" opacity={0.8}>
                    Experience the next generation of enterprise data management with our sharp, high-performance interface.
                  </Text>
                </VStack>
              </Center>
            </GridItem>

            <GridItem bg="brand.900" display="flex" alignItems="center" justifyContent="center" p={8}>
              {login ? <Login switchAuthMode={toggleAuthMode} /> : <Register switchAuthMode={toggleAuthMode} />}
            </GridItem>
          </Grid>
        </Box>
        <Box
          position="absolute"
          zIndex={0}
          opacity="0.07"
          color="brand.50"
          pointerEvents="none"
        >
          <LuLayers size="400px" />
        </Box>
      </Box>
    </>
  )
}

export default Auth;
