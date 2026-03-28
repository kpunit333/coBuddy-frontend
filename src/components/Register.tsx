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
  VStack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { post } from '../customHooks/Api';
import { registerSchema } from '../schemas/auth';
import type z from 'zod';

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = ({ switchAuthMode }: { switchAuthMode: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "all"
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const { ...submitData } = data;
      const response = await post("SIGNUP_URL", undefined, submitData);
      if (response.success) {
        console.log("registration successful");        
        switchAuthMode();
      } else {
        console.log("registration failed", response.message);
      }
    } catch (error) {
      console.log("registration error", error);
    }
  };


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

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack gap={5}>
                <Stack gap={0}>
                  <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                    Full Name
                  </Text>
                  <Input
                    variant="flushed"
                    placeholder="John Doe"
                    color="brand.50"
                    px={2}
                    height={8}
                    borderBottomColor="brand.400"
                    _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                    _placeholder={{ color: "brand.200" }}
                    {...register('fullname')}
                  />
                  {errors.fullname && <Text color="red.600" paddingX={2} paddingY={0}  fontSize="xs">{errors.fullname.message}</Text>}
                </Stack>

                <Stack gap={0}>
                  <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                    Username
                  </Text>
                  <Input
                    variant="flushed"
                    placeholder="john_doe"
                    color="brand.50"
                    px={2}
                    height={8}
                    borderBottomColor="brand.400"
                    _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                    _placeholder={{ color: "brand.200" }}
                    {...register('username')}
                  />
                  {errors.username && <Text color="red.600" paddingX={2} paddingY={0}  fontSize="xs">{errors.username.message}</Text>}
                </Stack>

                <Stack gap={0}>
                  <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                    Email
                  </Text>
                  <Input
                    variant="flushed"
                    placeholder="username@nexus.core"
                    color="brand.50"
                    px={2}
                    height={8}
                    borderBottomColor="brand.400"
                    _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                    _placeholder={{ color: "brand.200" }}
                    {...register('emailId')}
                  />
                  {errors.emailId && <Text color="red.600" paddingX={2} paddingY={0}  fontSize="xs">{errors.emailId.message}</Text>}
                </Stack>

                <Stack gap={0}>
                  <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                    Password
                  </Text>
                  <Box position="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      variant="flushed"
                      placeholder="Create Password"
                      color="brand.50"
                      px={2}
                      height={8}
                      borderBottomColor="brand.400"
                      _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                      _placeholder={{ color: "brand.200" }}
                      {...register('password')}
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
                  {errors.password && <Text color="red.600" paddingX={2} paddingY={0}  fontSize="xs">{errors.password.message}</Text>}
                </Stack>

                <Stack gap={0}>
                  <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase" letterSpacing="widest">
                    Confirm Password
                  </Text>
                  <Input
                    type="password"
                    variant="flushed"
                    placeholder="Repeat Password"
                    color="brand.50"
                    px={2}
                    height={8}
                    borderBottomColor="brand.400"
                    _focus={{ borderBottomColor: "brand.300", borderBottomWidth: "2px" }}
                    _placeholder={{ color: "brand.200" }}
                    {...register('confirm_password')}
                  />
                  {errors.confirm_password && <Text color="red.600" paddingX={2} paddingY={0}  fontSize="xs">{errors.confirm_password.message}</Text>}
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
                  type="submit"
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
                  Register
                </Button>
              </Stack>
            </form>

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
