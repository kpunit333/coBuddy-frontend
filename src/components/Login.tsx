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
import useGet from '../customHooks/useGet';
import usePost from '../customHooks/usePost';
import { useLoader } from '../contextHooks/useLoader';

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', e);
  };

  const authHandler = (e: unknown) => {
    console.log("emitted : ", e);    
    // if (switchAuthMode) {
      // switchAuthMode(e);
    // }
  };

const data: any[] = [
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }
  ];

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [list, setList] = useState(data);

  const { setShowLoader } = useLoader();
  
  const Display = async () => {
    setShowLoader(true);
    const res = await useGet('GET_POST');
    const list = res;
    setShowLoader(false);
    setList(list);
  };

  const save = async () => {
    console.log("Display");
    const data = {
      userId: 1,
      title: "title",
      body: "body"
    }
    const res = await usePost('SAVE_POST', data);
    const list = res;
    console.log(list);    
  };

  return (
    <>
      <div>
        {
          list?.map((item) => (
            <Text as="span" color="blue.500" cursor="pointer" key={item.id}>
              {item.id}
            </Text>
          ))
        }
      </div>
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
              <Button type="button" colorPalette={'teal'} color={'black'} variant="outline" size="lg" w="full" onClick={Display}>
                fetch data
              </Button>
              <Button type="button" colorPalette={'teal'} color={'black'} variant="outline" size="lg" w="full" onClick={save}>
                save data
              </Button>
            </Stack>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Login;
