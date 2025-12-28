import {Box, Flex, Stack, SimpleGrid, Separator, Heading, Text} from "@chakra-ui/react";

export function MkStackText() {
    return (
        <Box>
            
            <Flex p={10} gap={5} direction="column" justify="center" height="100dvh" width="100%" border="0px solid black">

                <Heading size="5xl">Come On The Journey With Us</Heading>

                <Box  border="0px solid black">
                    <Heading my={5} size="3xl">Restore</Heading>
                    <Text>
                        At Vaya, we celebrate flow, self-exploration, and presence. Self-care is a journey, not a destination; this is your space to slow down, tune in, and reconnect. 
                    </Text>
                </Box>

                <Box  border="0px solid black">
                    <Heading my={5} size="3xl">Regenerate</Heading>
                    <Text>Because we believe self-love isn’t one-size-fits-all,  it’s a formula you create for yourself. Here, you’re the scientist and the subject. You get to test out new tools, mix inner work with real rest, and observe what actually supports your body, mind, and nervous system.</Text>

                </Box>

            </Flex>
        </Box>
    )
}


