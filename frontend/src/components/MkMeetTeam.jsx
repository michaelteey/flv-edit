import { Box, Flex, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

function Label({ children }) {
  return (
    <Text
      fontSize="11px"
      fontFamily="'Raleway', sans-serif"
      letterSpacing="0.25em"
      textTransform="uppercase"
      color="#999"
      mb={6}
    >
      {children}
    </Text>
  );
}

function Body({ children, ...props }) {
  return (
    <Text
      fontFamily="'Raleway', sans-serif"
      fontSize="sm"
      color="#555"
      lineHeight="1.9"
      {...props}
    >
      {children}
    </Text>
  );
}

export function MkMeetTeamOne() {
  return (
    <Box height="100%" bg="#f8f4ef">
      <Flex height="100%" direction="column" justify="center" px={{ base: 8, md: 10 }} py={12} gap={6}>
        <motion.div {...fadeUp(0)}>
          <Label>Our Founder</Label>
          <Heading
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            fontSize={{ base: "3xl", md: "4xl" }}
            color="#0d0d0d"
            lineHeight="1.1"
          >
            Meet the<br /><em>team.</em>
          </Heading>
        </motion.div>

        <Box borderTop="1px solid #e0d8d0" pt={6}>
          <motion.div {...fadeUp(0.15)}>
            <Body mb={4}>
              Founded by Flavia and driven by a deep passion for wellness and the balance between tradition and innovation, Vaya was created to bring harmony to life by crafting meaningful wellness experiences that people genuinely look forward to.
            </Body>
          </motion.div>
          <motion.div {...fadeUp(0.25)}>
            <Body mb={4}>
              What began as a personal journey into self-care has evolved into a clear mission: to create moments where people can slow down, reconnect, and rediscover what truly matters — themselves, the people around them, and the present moment.
            </Body>
          </motion.div>
          <motion.div {...fadeUp(0.35)}>
            <Body>
              Every experience is designed with intention: to nurture connection, calm, and support self-care — because self-care is not a destination, it's a journey best experienced together.
            </Body>
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
}

export function MkMeetTeamTwo() {
  return (
    <Box height="100%" bg="#f8f4ef">
      <Flex height="100%" direction="column" justify="center" px={{ base: 8, md: 10 }} py={12} gap={6}>
        <motion.div {...fadeUp(0)}>
          <Label>Head of Partnerships</Label>
          <Heading
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            fontSize={{ base: "3xl", md: "4xl" }}
            color="#0d0d0d"
            lineHeight="1.1"
          >
            Dream<br /><em>team.</em>
          </Heading>
        </motion.div>

        <Box borderTop="1px solid #e0d8d0" pt={6}>
          <motion.div {...fadeUp(0.15)}>
            <Body mb={4}>
              Joined by Flavia is Tudor, Head of Partnerships at Vaya, whose passion lies in creating experiences that bring people together in meaningful ways. With a background in event management and hands-on experience delivering everything from large-scale conferences to intimate community gatherings, Tudor brings structure, creativity, and intention to every Vaya experience.
            </Body>
          </motion.div>
          <motion.div {...fadeUp(0.28)}>
            <Body>
              He believes that wellness should be accessible, inviting, and rooted in genuine connection. In a world that moves quickly, Tudor is committed to creating spaces where people can pause, breathe, and simply be.
            </Body>
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
}

export function MkMeetTeamThree() {
  return (
    <Box bg="#f8f4ef">
      <Flex
        direction="column"
        justify="center"
        minHeight="100dvh"
        px={{ base: 8, md: 16 }}
        py={16}
        gap={12}
        borderTop="1px solid #e0d8d0"
      >
        <motion.div {...fadeUp(0)}>
          <Label>Collaborate</Label>
          <Heading
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            fontSize={{ base: "4xl", md: "6xl" }}
            color="#0d0d0d"
            lineHeight="1.0"
          >
            Work<br /><em>with us.</em>
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={0}>
          {[
            {
              title: "Brands & Collaborations",
              body: "We work with brands to create intentional, sensory-led wellness experiences that connect with audiences and leave a lasting impact. From product placement in signature Vaya events to co-branded workshops and bespoke multi-sensory activations — every experience is immersive, meaningful, and memorable.",
            },
            {
              title: "Workplace Wellbeing",
              body: "As a one-stop shop, we partner with forward-thinking companies to create wellbeing experiences that help teams reset, recharge, and reconnect. From guided sound sessions and nervous system workshops to bespoke activations, we co-create programs that nurture both your people and your culture.",
            },
          ].map(({ title, body }, i) => (
            <motion.div key={title} {...fadeUp(i * 0.15)}>
              <Box
                borderTop="1px solid #0d0d0d"
                pt={8}
                pr={{ md: i === 0 ? 16 : 0 }}
                pl={{ md: i === 1 ? 16 : 0 }}
                borderLeft={{ md: i === 1 ? "1px solid #e0d8d0" : "none" }}
              >
                <Heading
                  fontFamily="'Playfair Display', serif"
                  fontWeight="400"
                  fontSize="xl"
                  color="#0d0d0d"
                  mb={5}
                >
                  {title}
                </Heading>
                <Body>{body}</Body>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

export function MkMeetTeamFour() {
  return (
    <Box bg="#f8f4ef">
      <Flex
        direction="column"
        justify="center"
        minHeight="100dvh"
        px={{ base: 8, md: 16 }}
        py={16}
        gap={8}
        borderTop="1px solid #e0d8d0"
      >
        <motion.div {...fadeUp(0)}>
          <Label>Hosting</Label>
          <Heading
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="#0d0d0d"
            lineHeight="1.1"
            maxWidth="520px"
          >
            Host a branded<br /><em>wellness experience.</em>
          </Heading>
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <Box borderTop="1px solid #e0d8d0" pt={6} maxWidth="520px">
            <Body>
              We create experiences that inspire mindfulness and meaningful connection. If you're interested in hosting a branded event with Vaya, get in touch so we can understand your goals and co-create a unique, wellness-led activation tailored to your brand and audience.
            </Body>
          </Box>
        </motion.div>

        <motion.div {...fadeUp(0.3)}>
          <Box
            as="a"
            href="https://linktr.ee/wearevaya_"
            target="_blank"
            display="inline-block"
            bg="#0d0d0d"
            color="#f8f4ef"
            px={10}
            py={4}
            fontSize="11px"
            fontFamily="'Raleway', sans-serif"
            fontWeight="500"
            letterSpacing="0.2em"
            textTransform="uppercase"
            textDecoration="none"
            mt={4}
            _hover={{ bg: "#333" }}
            style={{ transition: "background 0.2s" }}
          >
            Get in Touch
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
}
