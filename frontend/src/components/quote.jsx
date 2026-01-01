import {Box, Flex, SimpleGrid, Separator, Heading, AbsoluteCenter, Blockquote,Text,Image} from "@chakra-ui/react";


import flow from "../assets/flowintostill.jpeg"

export function MkQuote() {
    return (
        <Box height="100%" width="100%" py={{md: "5vh"}}>
            <Box
              height="100%"
              border="0px solid red"
              scrollSnapAlign="center"
              position="relative"
              //left="50%"
              //width="99.3dvw"
              //marginLeft="-50dvw"
            >

                <Image
                    src={flow}
                    objectFit="cover"
                    height="100%"
                    width="100%"
                    position="absolute"
                    rounded={{md:"40px"}}
                />

                <Box
                    position="absolute"
                    height="100%"
                    width="100%"
                    inset={0}
                    bg="rgba(255,255,255,0.3)"
                >

                    <Flex mx="15dvw"  height="100%" direction="column" align="center" justify="center">
                        <Heading my={5} size="3xl" color="white">Kind Words From Our Community</Heading>

                        <Box bg="white" rounded="xl" p={5} my={5}>
                            <Blockquote.Root>
                              <Blockquote.Content>
                                <Text>
“Thank you for your kind touch and warmth I felt. It was absolutely amazing and powerful. I have such an amazing experience every time I come, I am so grateful for this space you have created”
                                </Text>
                              </Blockquote.Content>
                            </Blockquote.Root>
                        </Box>

                        <Box bg="white" rounded="xl" p={5} my={5}>
                            <Blockquote.Root>
                              <Blockquote.Content>
                                <Text>
“Thank you for your kind touch and warmth I felt. It was absolutely amazing and powerful. I have such an amazing experience every time I come, I am so grateful for this space you have created”
                                </Text>
                              </Blockquote.Content>
                            </Blockquote.Root>
                        </Box>

                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
