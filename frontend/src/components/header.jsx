import {Box, Flex, Text, Stack, Heading, Image} from "@chakra-ui/react";

import flow from "../assets/flowintostill.jpeg"

function MkHeader() {
    return (
            <Box height="100%" py={{md:"5vh"}}>
                <Box
                    border="0px solid black"
                    height="100%"
                    position="relative"
                >
                    <Image
                        src={flow}
                        objectFit="cover"
                        height="100%"
                        width="100%"
                        border = "0px solid black"
                        rounded={{md:"40px"}}
                    />

                    <Box
                        position="absolute"
                        inset={0}
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
            </Box>
    )
}

export default MkHeader;
