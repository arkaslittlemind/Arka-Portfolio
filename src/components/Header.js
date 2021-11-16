import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'


function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text space="1" fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Arkadipta Mojumder</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Student and Front End Developer</Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://www.linkedin.com/in/arkadipta-mojumder-37580a1ba/")
                    }>About Me</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://media-exp1.licdn.com/dms/image/C5603AQGpDQMX2t_a8Q/profile-displayphoto-shrink_800_800/0/1636402234507?e=1642636800&v=beta&t=SpHEpBYce4Eg09e1Xy_UqQTU-K3kdmH66CQ3j1kW2As' />
            </Flex>

        </Stack>
    )
}

export default Header