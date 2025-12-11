import {Box, Flex, Heading, Button,Center} from "@chakra-ui/react"

export default function MkContactDetails () {
    return (
        <Box
          my="5"
          height="100dvh"
          border="0px solid red"
          scrollSnapAlign="center"
          position="relative"
        >
        <Center width="100%" height="100%">
          <Flex
            height="100%"
            maxWidth="80dvh"
            direction="column"
            align="center"
            justify="center"
            border="0px solid green"
            p={10}
            gap={5}
          >
            <Heading border="0px solid yellow" textAlign="center" size="5xl">Like What You See?</Heading>

            <Button width="100%" as="a" href="https://linktr.ee/wearevaya_?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGng9ILv-7HtkHZnLD9IC11Upm9PS8Zihby2M2F6Ok5ODoaEsPZuqk0TTlqIIM_aem_U9V1GkkznHJ0TYZMVdgJTg">Work With Us</Button>

            <Button width="100%" as="a" href="https://linktr.ee/wearevaya_?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGng9ILv-7HtkHZnLD9IC11Upm9PS8Zihby2M2F6Ok5ODoaEsPZuqk0TTlqIIM_aem_U9V1GkkznHJ0TYZMVdgJTg">Book An Event</Button>

            <Button width="100%" as="a" href="https://linktr.ee/wearevaya_?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGng9ILv-7HtkHZnLD9IC11Upm9PS8Zihby2M2F6Ok5ODoaEsPZuqk0TTlqIIM_aem_U9V1GkkznHJ0TYZMVdgJTg">Follow Us</Button>
          </Flex>
        </Center>
        </Box>
    )
}
