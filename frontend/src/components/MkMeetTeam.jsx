import { Box, Flex, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, delay },
});

function Eyebrow({ children }) {
  return (
    <Text
      fontSize="xs"
      fontFamily="'Raleway', sans-serif"
      letterSpacing="0.3em"
      textTransform="uppercase"
      color="#8b6954"
      mb={4}
    >
      {children}
    </Text>
  );
}

export function MkMeetTeamOne() {
  return (
    <Box height="100%">
      <Flex height="100%" direction="column" justify="center" gap={5} px={{ base: 8, md: 10 }}>
        <motion.div {...fadeUp(0)}>
          <Eyebrow>Our Founder</Eyebrow>
          <Heading size="4xl" fontWeight="400">Meet The Team</Heading>
        </motion.div>

        <motion.div {...fadeUp(0.18)}>
          <Text color="#4a4a4a" lineHeight="1.9">
            Founded by Flavia and driven by a deep passion for wellness and the balance between tradition and innovation, Vaya was created to bring harmony to life by crafting meaningful wellness experiences that people genuinely look forward to.
          </Text>
        </motion.div>

        <motion.div {...fadeUp(0.28)}>
          <Text color="#4a4a4a" lineHeight="1.9">
            What began as a personal journey into self-care has evolved into a clear mission: to create moments where people can slow down, reconnect, and rediscover what truly matters — themselves, the people around them, and the present moment.
          </Text>
        </motion.div>

        <motion.div {...fadeUp(0.38)}>
          <Text color="#4a4a4a" lineHeight="1.9">
            Every experience is designed with intention: to nurture connection, calm, and support self-care — because self-care is not a destination, it's a journey best experienced together.
          </Text>
        </motion.div>
      </Flex>
    </Box>
  );
}

export function MkMeetTeamTwo() {
  return (
    <Box height="100%">
      <Flex height="100%" direction="column" justify="center" gap={5} px={{ base: 8, md: 10 }}>
        <motion.div {...fadeUp(0)}>
          <Eyebrow>Head of Partnerships</Eyebrow>
          <Heading size="4xl" fontWeight="400">Dream Team</Heading>
        </motion.div>

        <motion.div {...fadeUp(0.18)}>
          <Text color="#4a4a4a" lineHeight="1.9">
            Joined by Flavia is Tudor, Head of Partnerships at Vaya, whose passion lies in creating experiences that bring people together in meaningful ways. With a background in event management and hands-on experience delivering everything from large-scale conferences to intimate community gatherings, Tudor brings structure, creativity, and intention to every Vaya experience.
          </Text>
        </motion.div>

        <motion.div {...fadeUp(0.32)}>
          <Text color="#4a4a4a" lineHeight="1.9">
            He believes that wellness should be accessible, inviting, and rooted in genuine connection. In a world that moves quickly and asks so much of us, Tudor is committed to creating spaces where people can pause, breathe, and simply be.
          </Text>
        </motion.div>
      </Flex>
    </Box>
  );
}

export function MkMeetTeamThree() {
  return (
    <Box>
      <Flex
        direction="column"
        justify="center"
        minHeight="100dvh"
        px={{ base: 8, md: 16 }}
        py={16}
        gap={10}
      >
        <motion.div {...fadeUp(0)}>
          <Eyebrow>Collaborate</Eyebrow>
          <Heading size={{ base: "4xl", md: "5xl" }} fontWeight="400">Work With Us</Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
          <motion.div {...fadeUp(0.2)}>
            <Box borderTop="1px solid #2c3420" pt={6}>
              <Heading size="xl" fontWeight="400" mb={5}>Brands & Collaborations</Heading>
              <Text color="#4a4a4a" lineHeight="1.9">
                We work with brands to create intentional, sensory-led wellness experiences that connect with audiences and leave a lasting impact. From product placement in signature Vaya events to co-branded workshops and bespoke multi-sensory activations — every experience is immersive, meaningful, and memorable.
              </Text>
            </Box>
          </motion.div>

          <motion.div {...fadeUp(0.35)}>
            <Box borderTop="1px solid #2c3420" pt={6}>
              <Heading size="xl" fontWeight="400" mb={5}>Workplace Wellbeing</Heading>
              <Text color="#4a4a4a" lineHeight="1.9">
                As a one-stop shop, we partner with forward-thinking companies to create wellbeing experiences that help teams reset, recharge, and reconnect. From guided sound sessions and nervous system workshops to bespoke activations, we co-create programs that nurture both your people and your culture.
              </Text>
            </Box>
          </motion.div>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

export function MkMeetTeamFour() {
  return (
    <Box>
      <Flex
        direction="column"
        justify="center"
        minHeight="100dvh"
        px={{ base: 8, md: 16 }}
        py={16}
        gap={8}
      >
        <motion.div {...fadeUp(0)}>
          <Eyebrow>Hosting</Eyebrow>
          <Heading size={{ base: "3xl", md: "4xl" }} fontWeight="400" maxWidth="560px">
            Host a Branded Wellness Experience
          </Heading>
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <Text color="#4a4a4a" lineHeight="1.9" maxWidth="560px">
            We create experiences that inspire mindfulness and meaningful connection. If you're interested in hosting a branded event with Vaya, get in touch so we can understand your goals and co-create a unique, wellness-led activation tailored to your brand and audience.
          </Text>
        </motion.div>
      </Flex>
    </Box>
  );
}
