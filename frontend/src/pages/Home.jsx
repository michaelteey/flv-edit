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

import MkHeader from "../components/header"
import MkBelowHeader from "../components/belowHeader"
import MkContactDetails from "../components/contactDetails"
import MkNavBar from "../components/NavBar"
import { MkQuadrants } from "../components/quadrants"
import { MkStackText} from "../components/stackText"
import { MkQuote } from "../components/quote"

function App() {
  return (
    <Box bg="#f5f0e6" border="0px solid black" position="relative">
              <Box position="absolute" color="black"  width="100%" left={0} top={0} height="60px" zIndex="3" bg="#f5f0e6">
                  <MkNavBar>
                  </MkNavBar>
              </Box>

              <Box height="100dvh" border="0px solid yellow" width="100%"  overflowY="scroll" scrollSnapType="y mandatory" scrollPaddingTop="60px">


                <Flex width="100%" height="100%" align="center" justify="center" flexDirection="column"> 
                <Box maxWidth="100dvh" height="calc(100% - 60px)" border="0px solid blue">

                    {/* hello */}
                    <Box
                        height="100%"
                        border="0px solid green"
                        scrollSnapAlign="start"
                        position="relative"
                        marginTop="60px"
                    >
                        <MkHeader>
                        </MkHeader>
                    </Box>

                    {/* belowHeader*/}
                    <Box
                        height="100%"
                        border="0px solid green"
                        scrollSnapAlign="start"
                        position="relative"
                    >
                        <MkBelowHeader>
                        </MkBelowHeader>
                    </Box>

                    {/* quadrants */}
                    <Box
                        height="100%"
                        maxWidth="100%"
                        border="0px solid green"
                        scrollSnapAlign="start"
                        position="relative"
                    >
                        <MkQuadrants>
                        </MkQuadrants>
                    </Box>


                    {/* quadrants */}
                    <Box
                        height="100%"
                        border="0px solid green"
                        scrollSnapAlign="start"
                        position="relative"
                    >
                        <MkStackText>
                        </MkStackText>
                    </Box>


                    {/* quotes */}
                    <Box
                        height="100%"
                        border="0px solid green"
                        scrollSnapAlign="start"
                        position="relative"
                    >
                        <MkQuote>
                        </MkQuote>
                    </Box>

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
                </Flex>
              </Box>
    </Box>
  );
}

export default App;

