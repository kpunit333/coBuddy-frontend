import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const HomeLayout = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            <Box minH="100vh" bg="brand.900" color="brand.0" display="flex" overflow="hidden">

                {/* --- SIDEBAR --- */}
                <Box height={"100vh"} position={"relative"} top={0} left={0} >
                    <Sidebar toggleMenu={setIsCollapsed} />
                </Box>

                {/* --- MAIN CONTENT AREA --- */}
                <Flex height={"100vh"} marginLeft={isCollapsed? "55px": "240px"} flexDirection="column" flex="1" overflowY="auto" transition={"all 0.3s"}>

                    {/* Top Header */}
                    <Header />

                    {/* Dashboard Content */}
                    <Box height={"100vh"} >
                        <Outlet />
                    </Box>

                    {/* --- FOOTER --- */}
                    <Footer />
                </Flex>
            </Box>
        </>
    )
}

export default HomeLayout
