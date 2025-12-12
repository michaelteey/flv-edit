import { Box, Flex, Stack, Heading, Button, Image,Text} from "@chakra-ui/react"


export default function MkEvents ({children, heading, webLink,image,date}) {
return (


        <Box
            height="100dvh"
            border="0px solid green"
            scrollSnapAlign="center"
            position="relative"
        >
            <Flex height="100%" width="100%"  justify="center" align="center">
                <Box
                    rounded="40px"
                    border="1px solid black"
                    padding={10}
                    margin={10}
                >
                <Stack>
                    <Heading size="lg">{heading}</Heading>
                    {children}
                    <Image
                        src={image}
                    />
                    <Text>{date}</Text>
                    <Button as="a" href={webLink} >Book Now</Button>
                </Stack>
                </Box>
            </Flex>
        </Box>
)
}
