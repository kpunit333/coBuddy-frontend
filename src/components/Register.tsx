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
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { post } from '../customHooks/Api';
import httpConstant from '../constants/HttpConstants';

let authData = {};

const AuthHandler = async () => {
  console.log(httpConstant["SIGNUP_URL"]);
  
  const response = await post("SIGNUP_URL", undefined, authData);  
  console.log(response);  
}

const InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event?.target?.value;
  const name = event?.target?.name;

  console.log(name, value);

  authData = {
    ...authData,
    [name]: value
  }

  console.log(authData);  

}

const Register = ({ switchAuthMode }) => {

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
          <VStack gap={6} align="stretch">
            <VStack gap={2} align="flex-start">
              <Heading size="lg" color="brand.100" fontWeight="extrabold">
                Create Account
              </Heading>
              <Text color="brand.200" fontSize="xs" textTransform="uppercase" letterSpacing="0.2em" fontWeight="bold">
                Join the Nexus Network
              </Text>
            </VStack>

            <Stack gap={5}>
              <Stack gap={0}>
                <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                  Full Name
                </Text>
                <Input
                  variant="flushed"
                  name='fullname'
                  placeholder="John Doe"
                  color="brand.50"
                  px={2}
                  borderBottomColor="brand.400"
                  _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                  _placeholder={{ color: "brand.200" }}
                  onChange={InputChangeHandler}
                />
              </Stack>

              <Stack gap={0}>
                <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                  Username
                </Text>
                <Input
                  variant="flushed"
                  name='username'
                  placeholder="john_doe"
                  color="brand.50"
                  px={2}
                  borderBottomColor="brand.400"
                  _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                  _placeholder={{ color: "brand.200" }}
                  onChange={InputChangeHandler}
                />
              </Stack>

              <Stack gap={0}>
                <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                  Operator ID / Email
                </Text>
                <Input
                  variant="flushed"
                  name='emailid'
                  placeholder="username@nexus.core"
                  color="brand.50"
                  px={2}
                  borderBottomColor="brand.400"
                  _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                  _placeholder={{ color: "brand.200" }}
                  onChange={InputChangeHandler}
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
                    name='password'
                    placeholder="Create Password"
                    color="brand.50"
                    px={2}
                    borderBottomColor="brand.400"
                    _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                    _placeholder={{ color: "brand.200" }}
                    onChange={InputChangeHandler}
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

              <Stack gap={0}>
                <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                  Verify Key
                </Text>
                <Input
                  type="password"
                  variant="flushed"
                  name='confirm_password'
                  placeholder="Repeat Password"
                  color="brand.50"
                  px={2}
                  borderBottomColor="brand.400"
                  _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                  _placeholder={{ color: "brand.200" }}
                />
              </Stack>

              <HStack justify="flex-start" py={2}>
                <Checkbox.Root defaultChecked colorPalette="brand">
                  <Checkbox.HiddenInput />
                  <Checkbox.Control bg="brand.0" borderColor="brand.300" borderRadius="none">
                    <Checkbox.Indicator color="brand.1000" />
                  </Checkbox.Control>
                  <Checkbox.Label color="brand.50" fontSize="xs" fontWeight="bold" ml={2}>
                    I agree to the Terms of Service
                  </Checkbox.Label>
                </Checkbox.Root>
              </HStack>

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
                onClick={AuthHandler}
              >
                Register Account
              </Button>
            </Stack>

            <HStack justify="center" gap={4}>
              <Text color="brand.300" fontSize="xs" fontWeight="bold">Already have an account?</Text>
              <Button
                variant="plain"
                color="brand.300"
                fontSize="xs"
                fontWeight="black"
                textTransform="uppercase"
                _hover={{ color: "brand.200" }}
                onClick={switchAuthMode}
              >
                Login
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </>
  );
};

export default Register;
