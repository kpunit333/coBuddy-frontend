import { Flex, Heading, HStack, Text, Avatar, Box } from "@chakra-ui/react"
import { useAuth } from "../hooks/useAuth";

const Header = () => {

  const { user } = useAuth();
  console.log(user);
  

  return (
    <>
      <Flex h="60px" px={8} alignItems="center" justifyContent="space-between" borderBottom="2px solid" borderColor="brand.150">
        <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
          <Text as="span" color="brand.50">Design</Text> <Text as="span" color="brand.600">Accelerated.</Text>
        </Heading>
        <HStack gap={4}>
          <HStack
            fontSize="sm"
            color="brand.200"
            mt={1}
          >
            <Text > Welcome, </Text>
            <Text > { user?.username } </Text>
          </HStack>
          <Box p={0.5} border="2px solid" borderColor="brand.500" borderRadius={"30px"} >
            <Avatar.Root size={"xs"}>
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
          </Box>
        </HStack>
      </Flex>
    </>
  )
}

export default Header;
