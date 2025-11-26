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

import flow from "./assets/flowintostill.jpeg"

function App() {
  return (
    <Box bg="#f5f0e6" border="0px solid black">
      <Box height="100dvh" border="0px solid yellow" width="100%"  overflowY="scroll" scrollSnapType="y mandatory">
        <Box
          height="100dvh"
          border="0px solid green"
          scrollSnapAlign="center"
          position="relative"
        >
          <Flex
            height="100%"
            direction="column"
            align="center"
            justify="center"
          >
            <Heading fontSize="6xl">The FLV Edit</Heading>
            <Separator m="5" />
            <Text>events. done. right.</Text>
          </Flex>
        </Box>

        <Separator />

        <Box
          height="100dvh"
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

        <Separator />

        {/* 
        <Box height="100vh" relative="relative" scrollSnapAlign="center">
          <Flex height="100%" justify="center" align="center">
            <SimpleGrid width="80%" columns={2} gap={0}>
              <Box border="1px solid black" height="30vh">
                <Flex h="100%" align="center" justify="center">
                  About us
                </Flex>
              </Box>

              <Box border="1px solid black" height="30vh">
                <Flex h="100%" align="center" justify="center">
                  Upcoming Events
                </Flex>
              </Box>

              <Box border="1px solid black" height="30vh">
                <Flex h="100%" align="center" justify="center">
                  Past Events
                </Flex>
              </Box>

              <Box border="1px solid black" height="30vh">
                <Flex h="100%" align="center" justify="center">
                  Contact Us
                </Flex>
              </Box>
            </SimpleGrid>
          </Flex>
        </Box>

        <Separator />
        */}

        <Box
          height="100dvh"
          scrollSnapAlign="center"
          position="relative"
          border="0px solid blue"
        >
          <Flex
            height="100%"
            direction="column"
            justify="center"
            align="center"
          >
            <Box margin="5">
              <Heading size="5xl">About Us</Heading>
            </Box>
            <Stack margin="5" border="solid 0px black">
              <Box margin="5">
                <Text>Self-care is a lifelong journey, not a destination.</Text>
                <br />
                <Text>
                  Through restorative movement and immersive sensory
                  experiences, we create moments that nourish your body, mind
                  and inner world.
                </Text>
                <br />
                <Text>
                  We design experiences that invite connection, creativity and a
                  deeper sense of presence.
                </Text>

                <Separator m="5" size="lg" />

                <Text>
                  In collaboration with thoughtful brands and inspiring
                  practitioners, we shape environments that support meaningful
                  relationships, both with yourself and with others.
                </Text>
                <br />
                <Text>
                  Our intention is to help you prioritise your wellbeing in ways
                  that feel enriching, energising and truly lasting.
                </Text>
                <br />
              </Box>
            </Stack>
          </Flex>
        </Box>


        {/* next events tabs  */}
        <Box
          height="100dvh"
          width="100%"
          border="0px solid red"
          scrollSnapAlign="center"
          position="relative"
        >
          <Flex
            height="100%"
            border="solid 0px red"
            direction="column"
            justify="center"
            align="center"
          >
    
            <Box margin="5">
              <Heading size="5xl">NEXT EVENT</Heading>
            </Box>
            <Box
                border="0px solid green"
                height="50vh"
                width="50vh"
                maxWidth="90vw"
                bgImage={`url(${flow})`}
                bgSize="cover"
            >
      
            </Box>
            
            <br/>
            <Heading size="3xl">Flow Into Stillness</Heading>
            <br/>
            <Text size="3xl">A wellness series. Part 1/4</Text>
            <br/>
            <Button as="a" href="https://www.eventbrite.co.uk/e/flow-into-stillness-the-sound-healing-journey-series-tickets-1975119983038?aff=oddtdtcreator">Book Now</Button>
      
          </Flex>
        </Box>


        {/* past events */}
        <Box
          height="100dvh"
          width="100%"
          border="0px solid red"
          scrollSnapAlign="center"
          position="relative"
        >
          <Flex
            height="100%"
            border="solid 0px red"
            direction="column"
            justify="center"
            align="center"
          >
    
           <Heading size="5xl"> PAST EVENTS </Heading>


          </Flex>
        </Box>


        {/* past events - soundbath*/}
        <Box
          height="100dvh"
          width="100%"
          border="0px solid red"
          scrollSnapAlign="center"
          position="relative"
          p="4"
        >
          <Flex
            height="100%"
            border="solid 0px red"
            direction="column"
            justify="center"
            align="center"
          >
    
           <Heading size="5xl"> SOUND BATH</Heading>

            <Text>25 attendees - mushroom-infused drinks - incredible goodiebag</Text>

            <Box overflowX="auto"
                overflowY="hidden"
                height="55vh"
                maxWidth="90vw"
                border="solid 0px green"
            >
                <Flex gap="4" h="100%" align="center"  w="max-content">
                    <Box w="50vh" rounded="lg" h="50vh" bgImage={`url(${flow})`} bgSize="cover" />
                    <Box w="50vh" rounded="lg" h="50vh" bgImage={`url(${flow})`} bgSize="cover" />
                    <Box w="50vh" rounded="lg" h="50vh" bgImage={`url(${flow})`} bgSize="cover" />
                </Flex>

            </Box>
    
      


          </Flex>
        </Box>


        {/* tabs  */}
        <Box
          height="100dvh"
          width="100%"
          border="0px solid red"
          scrollSnapAlign="center"
          position="relative"
          display="none"
        >
          <Flex
            height="100%"
            border="solid 0px red"
            direction="column"
            justify="start"
            align="center"
          >
            <Box margin="5">
              <Heading size="5xl">PAST EVENTS</Heading>
            </Box>

            <Tabs.Root
              defaultValue="boxing"
              justify="center"
              border="solid 0px blue"
              height="100%"
              width="100%"
            >
              <Tabs.List>
                <Tabs.Trigger value="boxing">The Boxing.</Tabs.Trigger>
                <Tabs.Trigger value="soundbath">The Soundbath</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="boxing" height="100%">
                <Box
                  height="100%"
                  width="100%"
                  my="5"
                  border="0px solid green"
                  position="relative"
                >
                  <Flex height="100%" direction="column" align="center">
                    <Box margin="5">
                      <Heading size="3xl">The Boxing.</Heading>
                    </Box>
                    <Stack width="100%" border="solid 0px black">
                      <Box margin="5">
                        <Text>yeah. we did a sick boxing event. and what</Text>
                      </Box>

                      <Carousel.Root
                        slideCount="3"
                        border="0px solid red"
                        height="100vw"
                        maxH="50vh"
                        width="100%"
                      >
                        <Carousel.ItemGroup>
                          <Carousel.Item key="1" index="1">
                            <Box
                              w="100vw"
                              h="100%"
                              border="0px solid red"
                              rounded="lg"
                              fontSize="2.5rem"
                            >
                              <Skeleton height="100vw" width="100%" />
                            </Box>
                          </Carousel.Item>

                          <Carousel.Item key="1" index="1">
                            <Box
                              w="100%"
                              h="100%"
                              border="0px solid red"
                              rounded="lg"
                              fontSize="2.5rem"
                            >
                              <Skeleton height="100vw" width="100%" />
                            </Box>
                          </Carousel.Item>

                          <Carousel.Item key="1" index="1">
                            <Box
                              w="100%"
                              h="100%"
                              border="0px solid red"
                              rounded="lg"
                              fontSize="2.5rem"
                            >
                              <Skeleton height="100vw" width="100%" />
                            </Box>
                          </Carousel.Item>
                        </Carousel.ItemGroup>

                        <Carousel.Control justifyContent="center" gap="4">
                          <Carousel.PrevTrigger asChild>
                            <IconButton size="xs" variant="ghost">
                              <LuChevronLeft />
                            </IconButton>
                          </Carousel.PrevTrigger>

                          <Carousel.Indicators />

                          <Carousel.NextTrigger asChild>
                            <IconButton size="xs" variant="ghost">
                              <LuChevronRight />
                            </IconButton>
                          </Carousel.NextTrigger>
                        </Carousel.Control>
                      </Carousel.Root>
                    </Stack>
                  </Flex>
                </Box>
              </Tabs.Content>

            </Tabs.Root>
          </Flex>
        </Box>


        <Separator />

        <Box
          my="5"
          height="100dvh"
          border="0px solid red"
          scrollSnapAlign="center"
          position="relative"
        >
          <Flex
            height="100%"
            direction="column"
            align="center"
            justify="center"
          >
            <Box m="5">
              <Heading size="5xl">Work With Us</Heading>
            </Box>

            <Button as="a" href="https://linktr.ee/wearevaya_?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGng9ILv-7HtkHZnLD9IC11Upm9PS8Zihby2M2F6Ok5ODoaEsPZuqk0TTlqIIM_aem_U9V1GkkznHJ0TYZMVdgJTg">Book Now</Button>

          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
