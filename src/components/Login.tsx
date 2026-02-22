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
import { useState } from 'react';


const Login = ({ switchAuthMode }: { switchAuthMode?: (e: unknown) => void }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  const authHandler = (e: unknown) => {
    console.log("emitted : ", e);    
    if (switchAuthMode) {
      switchAuthMode(e);
    }
  };

  const display = () => {
    console.log("hiii");
  };
  
  return (
    <>
      <Container maxW="md" py={12}>
        <VStack gap={8}>
          <Heading size="xl">Login</Heading>
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
              <Field.Root >
                <Field.Label>Email</Field.Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </Field.Root>
              <Field.Root >
                <Field.Label>Password</Field.Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </Field.Root>
              <Button type="submit" colorScheme="blue" size="lg" w="full">
                Login
              </Button>
              <Text textAlign="center" color="blue.500">
                Don't have an account?{' '}
                <Text as="span" color="blue.500" cursor="pointer" onClick={authHandler}>
                  Register
                </Text>
              </Text>
              <Button type="button" colorPalette={'teal'} color={'black'} variant="outline" size="lg" w="full" onClick={display}>
                fetch data
              </Button>
            </Stack>
          </Box>
        </VStack>
        <Text as="span" color="blue.500" cursor="pointer" onClick={display}>
          fetch text
        </Text>
        <Button type="button" colorPalette={'teal'} color={'black'} variant="outline" size="lg" w="full" onClick={display}>
          fetch data
        </Button>
      </Container>
    </>
  );
};

export default Login;
