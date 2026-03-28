import { Box, Circle, Flex, Heading, IconButton, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { LuBell, LuChevronLeft, LuChevronRight, LuHouse, LuInfo, LuLayers, LuLogOut, LuMessageCircle, LuPlus, LuSearch, LuSettings, LuUser } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import SidebarItem from './SidebarItem';

const upperSideItemList = [
    {
        label: "Home",
        icon: <LuHouse />,
        path: 'home'
    },
    {
        label: "About",
        icon: <LuInfo />,
        path: 'about'
    },
    {
        label: "Create",
        icon: <LuPlus />,
        path: 'create'
    },
    {
        label: "Search",
        icon: <LuSearch />,
        path: 'search'
    },
    {
        label: "Messages",
        icon: <LuMessageCircle />,
        path: 'chat'
    },
    {
        label: "Notifications",
        icon: <LuBell />,
        path: 'notifications'
    },
]

const lowerSideItemList = [
    {
        label: "Profile",
        icon: <LuUser />,
        path: 'profile'
    },
    {
        label: "Settings",
        icon: <LuSettings />,
        path: 'settings'
    },
]

const Sidebar = ({ toggleMenu }: { toggleMenu: (isCollapsed: boolean) => void }) => {

    const [ activeItem, setActiveItem] = useState(upperSideItemList[0]);
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleActiveItem = (item: any) => {
        setActiveItem(item);
        const itemPath = item?.path ?? "";
        navigate(itemPath);
        toggleMenu(isCollapsed);
    }

    const collapseHandler = () => {
        setIsCollapsed(!isCollapsed);
        toggleMenu(!isCollapsed);
    }

    return (
        <>
            <Box
                as="nav"
                w={isCollapsed ? "55px" : "240px"}
                height={"100%"}
                bg="brand.800"
                borderRight="1px solid"
                borderColor="brand.200"
                transition="width 0.3s ease"
                display="flex"
                flexDirection="column"
                position="fixed"
                zIndex={10}
                px={2}
            >
                {/* Toggle Button */}
                <IconButton
                    aria-label="Toggle Sidebar"
                    variant="ghost"
                    position="absolute"
                    right="-20px"
                    top="40px"
                    bg="brand.500"
                    color="brand.50"
                    borderRadius="none" // Sharp edges
                    size="xs"
                    _hover={{ bg: "brand.400" }}
                    onClick={collapseHandler}
                >
                    {isCollapsed ? <LuChevronRight /> : <LuChevronLeft />}
                </IconButton>

                {/* Branding Area */}
                <Flex py={4} height={"60px"} mb={10} alignContent="center" gap={4} borderBottom={"2px solid"} borderColor="brand.150" >
                    <Circle size="32px" bg="brand.500">
                        <LuLayers size={18} />
                    </Circle>
                    {!isCollapsed && (
                        <Heading mt={1} size="md" color="brand.50" letterSpacing="widest" fontWeight="black">
                            NEXUS
                        </Heading>
                    )}
                </Flex>

                {/* Navigation Links */}
                <VStack align="stretch" gap={2} flex="1">                    
                    {
                        upperSideItemList.map((item)=>(
                            <Box key={item.path} onClick={()=>{handleActiveItem(item)}}>
                                <SidebarItem active={activeItem.path === item.path} icon={item.icon} label={item.label} isCollapsed={isCollapsed} />
                            </Box>
                        ))
                    }
                </VStack>

                {/* Bottom Actions */}
                <Box borderColor="brand.150">
                    <VStack py={1} align="stretch" gap={2} flex="1">   
                        {
                            lowerSideItemList.map((item)=>(
                                <Box key={item.path} onClick={()=>{handleActiveItem(item)}}>
                                    <SidebarItem active={activeItem.path === item.path} icon={item.icon} label={item.label} isCollapsed={isCollapsed} />
                                </Box>
                            ))
                        }
                    </VStack>
                    <Box py={1} borderTop="1px solid"  borderColor="brand.150">
                        <SidebarItem active={false} icon={<LuLogOut />} label="Logout" isCollapsed={isCollapsed} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Sidebar;
