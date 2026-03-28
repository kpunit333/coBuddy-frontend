import {
  Box,
  Stack,
  Table,
  Text
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLoader } from '../contextHooks/useLoader';
import { get } from '../customHooks/Api';

const Profile = () => {

  const [users, setUsers] = useState([]);
  const { setShowLoader } = useLoader();

  const fetchUsers = async () => {
    setShowLoader(true);
    const response = await get("USERS_URL");
    setUsers(response.data);    
    setShowLoader(false);
    return response;
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  if (users.length == 0) return (
    <Box p={8}>
      <Text color="red.500">No users found</Text>
    </Box>
  );

  return (
    <Box p={6}>
      <Stack gap="10">
          <Table.Root key={"outline"} size="sm" variant={"outline"}>
            <Table.Header>
              <Table.Row border={"1px solid"} borderColor={"brand.100"} backgroundColor={"brand.100"} >
                <Table.ColumnHeader color={"brand.800"} >ID</Table.ColumnHeader>
                <Table.ColumnHeader color={"brand.800"} >Username</Table.ColumnHeader>
                <Table.ColumnHeader color={"brand.800"} >Fullname</Table.ColumnHeader>
                <Table.ColumnHeader color={"brand.800"} >Email ID</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body >
              {users.map((item: any) => (
                <Table.Row key={item._id} border={"1px solid"} borderColor={"brand.100"} backgroundColor={"brand.800"}>
                  <Table.Cell color={"brand.100"} >{item._id}</Table.Cell>
                  <Table.Cell color={"brand.100"} >{item.username}</Table.Cell>
                  <Table.Cell color={"brand.100"} >{item.fullname}</Table.Cell>
                  <Table.Cell color={"brand.100"} >{item.emailid}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
      </Stack>
    </Box>
  );
};

export default Profile;

