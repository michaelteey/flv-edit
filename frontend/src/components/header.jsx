import {Box, Flex, Text, Stack, Heading, Image} from "@chakra-ui/react";

import flow from "../assets/flowintostill.jpeg"

function MkHeader() {
    return (
            <Box
                border="0px solid black"
                height="100%"
                position="relative"
                py="10vh"
            >
                <Image
                    src={flow}
                    objectFit="cover"
                    height="100%"
                    width="100%"
                    rounded="40px"
                    border = "0px solid black"
                />

                <Box
                    position="absolute"
                    left="0"
                    top="10vh"
                    height="80vh"
                    rounded="40px"
                    width="100%"
                    bg="rgba(255,255,255,0.3)"
                    //bg="#f5f0e6"
                    zIndex={1}
                />

                <Box
                    position="absolute"
                    inset={0}
                    zIndex={2}
                > 
                    <Flex margin={5} color="white" height="100%" direction="column" align="center" justify="center">        
                        <Heading size="6xl">VAYA</Heading>
                        <br/>
                        <Heading size="lg">By your side on the Journey of Self-Care </Heading>
                    </Flex>
                </Box>
            </Box>

    )
}

export default MkHeader;
