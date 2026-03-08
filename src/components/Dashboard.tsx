import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const StatCard = ({ label, value }) => (
    <Box p={6} bg="brand.800" border="1px solid" borderColor="brand.200" borderRadius="md">
        <Text fontSize="xs" fontWeight="black" textTransform="uppercase" mb={2} color="brand.50" >{label}</Text>
        <Heading size="xl" fontWeight="black" color="brand.300">{value}</Heading>
    </Box>
);

const Dashboard = () => {
    return (
        <>
            <Container maxW="full" p={8} flex="1">
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mb={10}>
                    <StatCard label="Total Nodes" value="1,284" />
                    <StatCard label="Active Sessions" value="42" />
                    <StatCard label="System Integrity" value="99.9%" />
                </SimpleGrid>

                {/* Large Content Block */}
                <Box
                    p={8}
                    bg="brand.800"
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="brand.200"
                    borderRadius="md"
                >
                    <Heading size="md" mb={4} color="brand.100" fontWeight="bold">System Overview</Heading>
                    <Text color="brand.300" >
                        Welcome to the Nexus Core. Experience the next generation of enterprise data management with our sharp, high-performance interface.
                    </Text>
                </Box>
            </Container>
        </>
    )
}

export default Dashboard
