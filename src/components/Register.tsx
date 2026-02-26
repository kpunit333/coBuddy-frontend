import {
  Box,
  Button,
  Container,
  Field,
  Heading,
  Input,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import React, { useState } from 'react';

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', e);
  };

  const authHandler = (e: unknown) => {
    console.log("emitted : ", e);    
  }

const Register = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <Container maxW="md" py={12}>
      <VStack gap={8}>
        <Heading size="xl">Register</Heading>
        <Box
          as="form"
          onSubmit={handleSubmit}
          w="full"
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="md"
        >
          <Stack gap={4}>
            <Field.Root required>
              <Field.Label>Username</Field.Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </Field.Root>
            <Field.Root required>
              <Field.Label>Email</Field.Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </Field.Root>
            <Field.Root required>
              <Field.Label>Password</Field.Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </Field.Root>
            <Button type="submit" colorScheme="blue" size="lg" w="full">
              Register
            </Button>
            <Text textAlign="center" color="blue.500">
              Already have an account?{' '}
              <Text as="span" color="blue.500" cursor="pointer" onClick={authHandler}>
                Login
              </Text>
            </Text>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Register;
