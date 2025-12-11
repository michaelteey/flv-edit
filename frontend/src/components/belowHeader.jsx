import {Box, Flex, Text, Stack, Heading, Image, Button} from "@chakra-ui/react";

import flow from "../assets/flowintostill.jpeg"

function MkBelowHeader() {
    return (
        <Box height="100%" border="0px solid red">

            <Flex height="100%" width="100%" border="0px solid blue" direction="column" justify="center" gap="4" p={10}>

                <Heading my={5} size="4xl">About Us</Heading>

                <Text>
                    We are a London-based wellness collective, dedicated to creating immersive experiences that nourish the mind, body, and inner world. Through thoughtfully designed events, we help you slow down, reconnect, and cultivate meaningful connection.
                </Text>

                <Text>
                    Step inside Vaya and discover a new way of being; tailored experiences to reset, recharge, and prioritise your wellbeing. From restorative movement and sensory rituals to guided meditations and curated workshops, every experience is designed with intention to foster presence, creativity, and self-care. 
                </Text>
                <Text>
                In collaboration with inspiring practitioners and thoughtful brands, we create spaces where you can nurture your inner world, deepen relationships, and leave feeling enriched, energised, and grounded.
                </Text>

                <Flex justify="center" width="100%" gap="40px">
                    <Button flex="1">Join Our Next Event</Button>
                    <Button flex="1">Work With Us</Button>
                </Flex>
             </Flex>

        </Box>
    )
}

export default MkBelowHeader;
