import {Box, Flex, Stack, SimpleGrid, Separator, Heading, Text} from "@chakra-ui/react";

export function MkStackText() {
    return (
        <Box height="100%">
            
            <Flex p={10} gap={5} direction="column" justify="center" height="100%" width="100%" border="0px solid black">

                <Heading size="5xl">Come On The Journey With Us</Heading>

                <Box  border="0px solid black">
                    <Heading my={5} size="3xl">Restore</Heading>
                    <Text>
                        At Vaya, we celebrate flow, self-exploration, and presence. Self-care is a journey, not a destination; this is your space to slow down, tune in, and reconnect. 
                    </Text>
                </Box>

                <Box  border="0px solid black">
                    <Heading my={5} size="3xl">Regenerate</Heading>
                    <Text>Through restorative movement and mindful rituals in spaces that truly carry a special energy, you can explore what inspires and nourishes you, cultivating awareness, connection, and a deeper sense of wellbeing.</Text>

                </Box>

            </Flex>
        </Box>
    )
}


