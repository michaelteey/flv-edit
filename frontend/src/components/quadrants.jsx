import {Box, Flex, SimpleGrid, Image} from "@chakra-ui/react";


import flow from "../assets/flowintostill.jpeg"

export function MkQuadrants() {
    return (
        <Box height="100%" border="0px solid red">
            <Flex height="100%"  width="100%" direction="column" justify="center" align="center" border="0px solid red"> 
                <SimpleGrid columns={2} gap="40px" width="80%" height="80%" maxWidth="100dvh" border="0px solid white">
                    <Box
                        border="0px solid black"
                        position="relative"
                        borderRadius="40px"
                        overflow="hidden"
                    >
                        <Image
                            src={flow}
                            position="absolute"
                            height="100%"
                            width="100%"
                            bg="rgba(0,0,0,1)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                            bg="rgba(255,255,255,0.5)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                        >
                            <Flex height="100%" align="center" justify="center">
                                Sound Healing
                            </Flex>
                        </Box>
                    </Box>

                    <Box
                        border="0px solid black"
                        position="relative"
                        borderRadius="40px"
                        overflow="hidden"
                    >
                        <Image
                            src={flow}
                            position="absolute"
                            height="100%"
                            width="100%"
                            bg="rgba(0,0,0,1)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                            bg="rgba(255,255,255,0.5)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                        >
                            <Flex height="100%" align="center" justify="center">
                                Sound Healing
                            </Flex>
                        </Box>
                    </Box>

                    <Box
                        border="0px solid black"
                        position="relative"
                        borderRadius="40px"
                        overflow="hidden"
                    >
                        <Image
                            src={flow}
                            position="absolute"
                            height="100%"
                            width="100%"
                            bg="rgba(0,0,0,1)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                            bg="rgba(255,255,255,0.5)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                        >
                            <Flex height="100%" align="center" justify="center">
                                Sound Healing
                            </Flex>
                        </Box>
                    </Box>

                    <Box
                        border="0px solid black"
                        position="relative"
                        borderRadius="40px"
                        overflow="hidden"
                    >
                        <Image
                            src={flow}
                            position="absolute"
                            height="100%"
                            width="100%"
                            bg="rgba(0,0,0,1)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                            bg="rgba(255,255,255,0.5)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                        >
                            <Flex height="100%" align="center" justify="center">
                                Sound Healing
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        border="0px solid black"
                        position="relative"
                        borderRadius="40px"
                        overflow="hidden"
                    >
                        <Image
                            src={flow}
                            position="absolute"
                            height="100%"
                            width="100%"
                            bg="rgba(0,0,0,1)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                            bg="rgba(255,255,255,0.5)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                        >
                            <Flex height="100%" align="center" justify="center">
                                Sound Healing
                            </Flex>
                        </Box>
                    </Box>

                    <Box
                        border="0px solid black"
                        position="relative"
                        borderRadius="40px"
                        overflow="hidden"
                    >
                        <Image
                            src={flow}
                            position="absolute"
                            height="100%"
                            width="100%"
                            bg="rgba(0,0,0,1)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                            bg="rgba(255,255,255,0.5)"
                        />
                        <Box
                            position="absolute"
                            inset={0}
                        >
                            <Flex height="100%" align="center" justify="center">
                                Sound Healing
                            </Flex>
                        </Box>

                        <Box
                            border="0px solid black"
                            position="relative"
                            borderRadius="40px"
                            overflow="hidden"
                        >
                            <Image
                                src={flow}
                                position="absolute"
                                height="100%"
                                width="100%"
                                bg="rgba(0,0,0,1)"
                            />
                            <Box
                                position="absolute"
                                inset={0}
                                bg="rgba(255,255,255,0.5)"
                            />
                            <Box
                                position="absolute"
                                inset={0}
                            >
                                <Flex height="100%" align="center" justify="center">
                                    Sound Healing
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Box>
    )
}


