import {
  Box,
  Stack,
  Table,
  Text,
  Avatar,
  Circle,
  Float
} from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import { useLoader } from '../contextHooks/useLoader';
import { get } from '../customHooks/Api';
import { useAuth } from '../hooks/useAuth';
import { LuPlus } from 'react-icons/lu';

const Profile = () => {

  const [demoUsers, setUsers] = useState([]);
  const { setShowLoader } = useLoader();
  const { user } = useAuth();

  const fetchUsers = async () => {
    setShowLoader(true);
    const response = await get("USERS_URL");
    setUsers(response.data);    
    setShowLoader(false);
    return response;
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | undefined >(undefined);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a local URL for previewing the image
      setPreview(URL.createObjectURL(file));
      console.log("Selected file:", file.name);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  if (demoUsers.length == 0) return (
    <Box p={8}>
      <Text color="red.500">No demoUsers found</Text>
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
              {demoUsers.map((item: any) => (
                <Table.Row key={item._id} border={"1px solid"} borderColor={"brand.100"} backgroundColor={"brand.800"}>
                  <Table.Cell color={"brand.100"} >{item._id}</Table.Cell>
                  <Table.Cell color={"brand.100"} >{item.username}</Table.Cell>
                  <Table.Cell color={"brand.100"} >{item.fullname}</Table.Cell>
                  <Table.Cell color={"brand.100"} >{item.emailid}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>

        <Avatar.Root>
          <Avatar.Fallback name="Uchiha Sasuke" />
          <Avatar.Image src={preview} />
          <Float bgColor="brand.100" border="2px solid" borderColor="brand.900" borderRadius={100} placement="bottom-end" offsetX="1.5" offsetY="1.5" p={1} cursor="pointer"
          onClick={handleButtonClick}
          >
            <LuPlus color="brand.900" size={8} />
          </Float>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />          
        </Avatar.Root>

      </Stack>
    </Box>
  );
};

export default Profile;

