import {Box, Flex, Text, Stack, Heading, Image, Button} from "@chakra-ui/react";

import flow from "../assets/flowintostill.jpeg"

export function MkMeetTeamOne() {
    return (
        <Box height="100%" border="0px solid red">

            <Flex height="100%" width="100%" border="0px solid blue" direction="column" justify="center" gap="4" p={10}>

                <Heading my={5} size="4xl">Meet The Team</Heading>

                <Text>
                    Founded by Flavia and driven by a deep passion for wellness and the balance between tradition and innovation, Vaya was created to bring that harmony to life by crafting meaningful wellness experiences that people genuinely look forward to.
                </Text>
                <Text>
                    What began as a personal journey into self-care and a desire to apply her expertise as an event manager has evolved into a clear mission: to create moments where people can slow down, reconnect, and rediscover what truly matters; themselves, the people around them, and the present moment.
                </Text>
                <Text>
                    Every experience is designed with intention: to nurture connection, calm, and support self-care, because self-care is not a destination, it’s a journey best experienced together.
                </Text>

             </Flex>

        </Box>
    )
}



export function MkMeetTeamTwo() {
    return (
        <Box height="100%" border="0px solid red">

            <Flex height="100%" width="100%" border="0px solid blue" direction="column" justify="center" gap="4" p={10}>

                <Heading my={5} size="4xl">Dream Team</Heading>

                <Text>
                    Joined by Flavia is Tudor, Head of Partnerships at Vaya, whose passion lies in creating experiences that bring people together in meaningful ways. With a background in event management and hands-on experience delivering everything from large-scale conferences to intimate community gatherings, Tudor brings structure, creativity, and intention to every Vaya experience.
                </Text>
                <Text>
                    He believes that wellness should be accessible, inviting, and rooted in genuine connection. In a world that moves quickly and asks so much of us, Tudor is committed to creating spaces where people can pause, breathe, and simply *be*.
                </Text>

             </Flex>

        </Box>

    )
}


export function MkMeetTeamThree() {
    return (
        <Box>
            
            <Flex p={10} gap={5} direction="column" justify="center" height="100dvh" width="100%" border="0px solid black">

                <Heading size="5xl">Work With Us</Heading>

                <Box  border="0px solid black">
                    <Heading my={5} size="3xl">Brands and Collaborations </Heading>
                        <Text>
                                We work with brands to create intentional, sensory-led wellness experiences that connect with audiences and leave a lasting impact. From product placement in signature Vaya events to co-branded workshops and bespoke multi-sensory activations, every experience is immersive, meaningful, and memorable.
                    </Text>
                </Box>

                <Box  border="0px solid black">
                    <Heading my={5} size="3xl">Workplace Wellbeing </Heading>
                        <Text>
                            We know corporate life is where wellbeing is needed most, but finding the right supplier, securing approvals, and onboarding can feel complicated. That’s why we make it easy. As a one-stop shop, we partner with forward-thinking companies to create wellbeing experiences that help teams reset, recharge, and reconnect. From guided sound sessions and nervous system workshops to bespoke activations, we co-create programs that nurture both your people and your culture.
                        </Text>
                </Box>

            </Flex>
        </Box>
    )
}

export function MkMeetTeamFour() {
    return (
        <Box>
            
            <Flex p={10} gap={5} direction="column" justify="center" height="100dvh" width="100%" border="0px solid black">


                <Box  border="0px solid black">
                    <Heading my={5} size="3xl">Host a Branded Wellness Experience</Heading>
                        <Text>
                            We create experiences that inspire mindfulness and meaningful connection. If you’re interested in hosting a branded event with Vaya, fill out this form so we can understand your goals and co-create a unique, wellness-led activation tailored to your brand and audience.
                    </Text>
                </Box>

            </Flex>
        </Box>
    )
}
