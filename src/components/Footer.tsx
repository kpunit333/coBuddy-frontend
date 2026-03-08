import { Box, Flex, HStack, Separator, Text } from "@chakra-ui/react"
import { LuCopyright } from "react-icons/lu"

const Footer = () => {
  return (
    <>
      <Box
        as="footer"
        bg="transparent"
        py={1} px={8}
        opacity={0.5}
        borderTop="1px solid"
        borderColor="brand.200"
        fontSize="0.6rem"
        color="brand.200"
      >
        <Flex justifyContent="center" align="center">
          <HStack
            gap={6}
          >
            <HStack
              gap={2}
            >
              <LuCopyright size={12} />
              <Text textTransform="uppercase" fontWeight="bold">2026 Nexus Dynamics</Text>
            </HStack>
            <Text
              // textTransform="uppercase"
              fontWeight="bold"
            >
              All Rights Reserved
            </Text>
            <Separator orientation="vertical" h="12px" />
            <Text 
              fontWeight="bold" 
              cursor="pointer" 
              borderBottom={"1px solid"} 
              borderColor={"transparent"} 
              _hover={{ borderColor: "brand.200"}}
            >
              Privacy Policy
            </Text>
            <Text 
              fontWeight="bold" 
              cursor="pointer" 
              borderBottom={"1px solid"} 
              borderColor={"transparent"} 
              _hover={{ borderColor: "brand.200"}}
            >
              Terms of Service
            </Text>
          </HStack>

          {/* <HStack gap={2}>
              <LuShieldCheck size={14}  />
              <Text  letterSpacing="widest">AES-256 ENCRYPTED</Text>
          </HStack> */}
        </Flex>
      </Box>
    </>
  )
}

export default Footer
