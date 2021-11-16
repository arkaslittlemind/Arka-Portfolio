import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex } from '@chakra-ui/layout';




function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                
            </Box>
            
        </Flex>
    )
}

export default Profile