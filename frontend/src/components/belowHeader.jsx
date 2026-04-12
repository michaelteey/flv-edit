import { Box, Flex, Text, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

function MkBelowHeader() {
  return (
    <Box height="100%">
      <Flex
        height="100%"
        direction="column"
        justify="center"
        px={{ base: 8, md: 16 }}
        py={10}
        gap={8}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <Text
            fontSize="xs"
            fontFamily="'Raleway', sans-serif"
            letterSpacing="0.3em"
            textTransform="uppercase"
            color="#8b6954"
            mb={4}
          >
            Who we are
          </Text>
          <Heading
            size={{ base: "3xl", md: "5xl" }}
            fontWeight="400"
            lineHeight="1.15"
            maxWidth="680px"
          >
            A London-based wellness collective
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
            <Text color="#4a4a4a" lineHeight="1.9" fontSize="md">
              We are dedicated to creating immersive experiences that nourish the mind, body, and inner world. Through thoughtfully designed events, we help you slow down, reconnect, and cultivate meaningful connection.
            </Text>
            <Text color="#4a4a4a" lineHeight="1.9" fontSize="md">
              Step inside Vaya and discover a new way of being — tailored experiences to reset, recharge, and prioritise your wellbeing. Every experience is designed with intention to foster presence, creativity, and self-care.
            </Text>
          </SimpleGrid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <Flex gap={4} wrap="wrap">
            <Button
              bg="#2c3420"
              color="white"
              rounded="full"
              px={8}
              size="md"
              as="a"
              href="/events"
              _hover={{ bg: "#1a2012" }}
              style={{ transition: "background 0.2s, transform 0.2s" }}
            >
              Join Our Next Event
            </Button>
            <Button
              variant="outline"
              borderColor="#2c3420"
              color="#2c3420"
              rounded="full"
              px={8}
              size="md"
              as="a"
              href="/about"
              _hover={{ bg: "rgba(44,52,32,0.07)" }}
              style={{ transition: "background 0.2s" }}
            >
              Work With Us
            </Button>
          </Flex>
        </motion.div>
      </Flex>
    </Box>
  );
}

export default MkBelowHeader;
