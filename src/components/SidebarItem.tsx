import { HStack, Box, Text } from "@chakra-ui/react";

const SidebarItem = ({ icon, label, active, isCollapsed }: { icon: React.ReactNode; label: string; active: boolean; isCollapsed: boolean }) => (
  <HStack
    p={2}
    bg={active ? "brand.100" : "transparent"}
    color={(active ? "brand.800" : "brand.100")}
    cursor="pointer"
    _hover={{ bg: (!active ? "brand.150" : "" ), color: (!active ? "brand.900" : "") }}
    borderRadius="md"
    // gap={4}
     className="abc"
    transition="all 0.2s"
  >
    <Box fontSize="20px">{icon}</Box>
    {!isCollapsed && <Text fontSize="sm" fontWeight="bold" letterSpacing="wide">{label}</Text>}
  </HStack>
);

export default SidebarItem;
