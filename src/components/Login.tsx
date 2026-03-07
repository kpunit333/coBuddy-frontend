import {
  Box,
  Button,
  Checkbox,
  Container,
  Heading,
  HStack,
  IconButton,
  Input,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { LuEye, LuEyeOff } from "react-icons/lu";

const Login = ({ switchAuthMode }) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Container maxW="md" p={0}>
        <Box
          p={{ base: 8, md: 10 }}
          bg="brand.800"
          backdropFilter="blur(20px)"
          borderRadius="md"
          border="1px solid"
          borderColor="brand.200"
          boxShadow="2xl"
        >
          <VStack gap={8} align="stretch">
            <VStack gap={2} align="flex-start">
              <Heading size="lg" color="brand.100" fontWeight="extrabold">
                Portal Login
              </Heading>
              <Text color="brand.200" fontSize="xs" textTransform="uppercase" letterSpacing="0.2em" fontWeight="bold">
                Secure Authorization Required
              </Text>
            </VStack>

            <Stack gap={5}>
              <Stack gap={0}>
                <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                  Operator ID
                </Text>
                <Input
                  variant="flushed"
                  placeholder="Username"
                  color="brand.50"
                  px={2}
                  borderBottomColor="brand.400"
                  _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                  _placeholder={{ color: "brand.200" }}
                />
              </Stack>

              <Stack gap={0}>
                <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                  Access Key
                </Text>
                <Box position="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    variant="flushed"
                    placeholder="Password"
                    color="brand.50"
                    px={2}
                    borderBottomColor="brand.400"
                    _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                    _placeholder={{ color: "brand.200" }}
                  />
                  <IconButton
                    aria-label="Toggle password"
                    variant="ghost"
                    position="absolute"
                    right="0"
                    bottom="1"
                    size="sm"
                    color="brand.600"
                    _hover={{ color: "brand.50", backgroundColor: "brand.800" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <LuEyeOff /> : <LuEye />}
                  </IconButton>
                </Box>
              </Stack>

              <HStack justify="space-between">
                <Checkbox.Root defaultChecked colorPalette="brand">
                  <Checkbox.HiddenInput />
                  <Checkbox.Control bg="brand.0" borderColor="brand.300" borderRadius="none" >
                    <Checkbox.Indicator color="brand.1000" />
                  </Checkbox.Control>
                  <Checkbox.Label color="brand.50" fontSize="xs" fontWeight="bold" ml={2}>
                    Trust this device
                  </Checkbox.Label>
                </Checkbox.Root>
                <Button variant="ghost" color="brand.300" fontSize="xs" fontWeight="bold" textTransform="uppercase">
                  Forgot?
                </Button>
              </HStack>

              {/* Sharp Button with Glow */}
              <Button
                bg="brand.500"
                color="brand.0"
                size="lg"
                borderRadius="md"
                fontSize="xs"
                fontWeight="black"
                textTransform="uppercase"
                letterSpacing="widest"
                h="14"
                _hover={{
                  bg: "brand.400",
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 30px rgba(122, 47, 255, 0.4)",
                }}
                _active={{ bg: "brand.600" }}
              >
                Authenticate Entry
              </Button>
            </Stack>

            <HStack justify="center" gap={4}>
              <Text color="brand.300" fontSize="xs" fontWeight="bold" >Don't have an account?</Text>
              <Button variant="plain" color="brand.300" fontSize="xs" fontWeight="black" textTransform="uppercase"
              _hover={{ color: "brand.200" }}
              onClick={switchAuthMode}
              >
                Register
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </>
  )
};

export default Login;
