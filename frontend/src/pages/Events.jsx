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

import MkContactDetails from "../components/contactDetails"
import MkNavBar from "../components/NavBar"
import MkEvents from "../components/MkEvents"
import {MkMeetTeamOne} from "../components/MkMeetTeam"
import {MkMeetTeamTwo} from "../components/MkMeetTeam"
import {MkMeetTeamThree} from "../components/MkMeetTeam"
import {MkMeetTeamFour} from "../components/MkMeetTeam"

import flow from "../assets/flowintostill.jpeg"


export default function App() {
  return (
    <Box bg="#f5f0e6" border="0px solid black" position="relative">
        
        <Box position="absolute" color="black"  width="100%" left={0} zIndex="3" bg="#f5f0e6">
          <MkNavBar>
          </MkNavBar>
        </Box>


        <Box height="100dvh" border="0px solid yellow" width="100%" overflowX="hidden" overflowY="scroll" scrollSnapType="y mandatory">
            {/* heading */}
            <Box
                height="100dvh"
                border="0px solid green"
                scrollSnapAlign="center"
                position="relative"
            >
                <Center height="100%">
                    <Heading size="6xl">Events.</Heading>
                </Center>
            </Box>

            {/* event 1*/}
            <MkEvents
                heading="Event 1"
                image={flow}
                date="1 feb. 10am. london"
            >

                an incredible lalala. join us for soem woo yay fun fun
                dynamic contents
            </MkEvents>


            {/* event 2 */}
            <MkEvents
                heading="Event 2"
                image={flow}
                date="1 mar. 10am. london"
            >

                an incredible lalala. join us for soem woo yay fun fun
                dynamic contents
            </MkEvents>

            {/* event 2 */}
            <MkEvents
                heading="Event 2"
                image={flow}
                date="1 apr. 10am. london"
            >

                an incredible lalala. join us for soem woo yay fun fun
                dynamic contents
            </MkEvents>

            {/* event 2 */}
            <MkEvents
                heading="Event 2"
                image={flow}
                date="1 may. 10am. london"
            >
            an incredible lalala. join us for soem woo yay fun fun
            </MkEvents>

            {/* contact details */}
            <Box
                height="100dvh"
                border="0px solid green"
                scrollSnapAlign="center"
                position="relative"
            >
                <MkContactDetails>
                </MkContactDetails>
            </Box>
        </Box>
    </Box>
    )
}

