import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function MkStackText() {
  return (
    <Box height="100%">
      <Flex
        height="100%"
        direction="column"
        justify="center"
        px={{ base: 8, md: 16 }}
        py={10}
        gap={10}
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
            The journey
          </Text>
          <Heading
            size={{ base: "3xl", md: "5xl" }}
            fontWeight="400"
            lineHeight="1.15"
            maxWidth="580px"
          >
            Come On The Journey With Us
          </Heading>
        </motion.div>

        <Flex gap={{ base: 8, md: 14 }} direction={{ base: "column", md: "row" }}>
          <motion.div
            style={{ flex: 1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <Box borderTop="1px solid #2c3420" pt={6}>
              <Heading size="xl" fontWeight="400" mb={5}>Restore</Heading>
              <Text color="#4a4a4a" lineHeight="1.9" fontSize="md">
                At Vaya, we celebrate flow, self-exploration, and presence. Self-care is a journey, not a destination — this is your space to slow down, tune in, and reconnect.
              </Text>
            </Box>
          </motion.div>

          <motion.div
            style={{ flex: 1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            <Box borderTop="1px solid #2c3420" pt={6}>
              <Heading size="xl" fontWeight="400" mb={5}>Regenerate</Heading>
              <Text color="#4a4a4a" lineHeight="1.9" fontSize="md">
                Through restorative movement and mindful rituals in spaces that truly carry a special energy, you can explore what inspires and nourishes you, cultivating awareness, connection, and a deeper sense of wellbeing.
              </Text>
            </Box>
          </motion.div>
        </Flex>
      </Flex>
    </Box>
  );
}
