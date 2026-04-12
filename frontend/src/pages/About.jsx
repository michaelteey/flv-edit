import { useState } from "react";
import {
  Heading,
  AbsoluteCenter,
  Center,
  Button,
  ScrollArea,
  Box,
  Em,
  Stack,
  Flex,
  Separator,
  Text,
  Highlight,
  Image,
  defineTextStyles,
  Blockquote,
  SimpleGrid,
  Tabs,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  IconButton,
  Carousel,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import flow from "../assets/flowintostill.jpeg"

import MkContactDetails from "../components/contactDetails"
import MkNavBar from "../components/NavBar"
import {MkMeetTeamOne} from "../components/MkMeetTeam"
import {MkMeetTeamTwo} from "../components/MkMeetTeam"
import {MkMeetTeamThree} from "../components/MkMeetTeam"
import {MkMeetTeamFour} from "../components/MkMeetTeam"

export default function App() {
  return (
    <Box bg="#f5f0e6" border="0px solid black" position="relative">
      <Box position="absolute" color="black"  width="100%" left={0} top={0} height="60px" zIndex="3" bg="#f5f0e6">
          <MkNavBar>
          </MkNavBar>
      </Box>

      <Box height="100dvh" border="0px solid yellow" width="100%"  overflowY="scroll" scrollSnapType="y mandatory" scrollPaddingTop="60px">


        <Flex width="100%" height="100%" align="center" justify="center" flexDirection="column"> 
        <Box maxWidth="120dvh" height="calc(100% - 60px)" border="0px solid blue">


            {/* heading */}
            <Box
                height="100%"
                scrollSnapAlign="start"
                position="relative"
                marginTop="60px"
            >
                <Center height="100%">
                    <Heading size="6xl">About.</Heading>
                </Center>
            </Box>

            {/* big image */}
            <Box height="100%">
                <SimpleGrid height="100%" columns={{"base":1, "md": 2}} gap="40px">
                    <Box
                        height="100%"
                        scrollSnapAlign="start"
                        position="relative"
                        py="10vh"
                    >
                        <Image
                            src={flow}
                            objectFit="cover"
                            height="100%"
                            width="100%"
                            rounded="40px"
                        />
                    </Box>

                    {/* meet the team*/}
                    <Box
                        height="100%"
                        border="0px solid green"
                        scrollSnapAlign="start"
                        position="relative"
                    >
                        <MkMeetTeamOne>
                        </MkMeetTeamOne>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box
              height="100%"
              border="0px solid red"
              scrollSnapAlign="center"
              position="relative"
            >
              <AbsoluteCenter>
                <Blockquote.Root>
                  <Blockquote.Content>
                    <Text fontSize="2xl">
                      Because your event should leave a MARK.
                    </Text>
                  </Blockquote.Content>
                </Blockquote.Root>
              </AbsoluteCenter>
            </Box>


            {/* big image */}
            <SimpleGrid columns={{"base":1, "md": 2}} gap="40px">
                {/* meet the team*/}
                <Box
                    height="100%"
                    border="0px solid green"
                    scrollSnapAlign="center"
                    position="relative"
                >
                    <MkMeetTeamTwo>
                    </MkMeetTeamTwo>
                </Box>
      


                    <Box
                        height="100%"
                        border="0px solid green"
                        scrollSnapAlign="center"
                        position="relative"
                        py = "10vh"
                    >
                        <Image
                            src={flow}
                            objectFit="cover"
                            height="100%"
                            width="100%"
                            rounded="40px"
                        />
                    </Box>


                </SimpleGrid>


        


            {/* for brands */}
            <Box
                height="100%"
                border="0px solid green"
                scrollSnapAlign="center"
                position="relative"
            >
                <MkMeetTeamThree>
                </MkMeetTeamThree>
            </Box>


            {/* big image */}
            <Box
                height="100%"
                border="0px solid green"
                scrollSnapAlign="center"
                position="relative"
                py="10vh"
            >
                <Image
                    src={flow}
                    objectFit="cover"
                    height="100%"
                    width="100%"
                    rounded="40px"
                />
            </Box>

            {/* host an event */}
            <Box
                height="100%"
                border="0px solid green"
                scrollSnapAlign="center"
                position="relative"
            >
                <MkMeetTeamFour>
                </MkMeetTeamFour>
            </Box>

            {/* contact details */}
            <Box
                height="100%"
                border="0px solid green"
                scrollSnapAlign="center"
                position="relative"
            >
                <MkContactDetails>
                </MkContactDetails>
            </Box>
        </Box>
        </Flex>
        </Box>
      

    </Box>
    )
}
