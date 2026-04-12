import { Box, Flex, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

function MkBelowHeader() {
  return (
    <Box height="100%" bg="#f8f4ef">
      <Flex
        height="100%"
        direction="column"
        justify="center"
        px={{ base: 8, md: 16 }}
        py={16}
        gap={12}
        borderTop="1px solid #e0d8d0"
      >
        {/* Top row: label + large number */}
        <Flex justify="space-between" align="flex-start" wrap="wrap" gap={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Text
              fontSize="11px"
              fontFamily="'Raleway', sans-serif"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="#999"
              mb={5}
            >
              About Us
            </Text>
            <Heading
              fontFamily="'Playfair Display', serif"
              fontWeight="400"
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight="1.05"
              color="#0d0d0d"
              maxWidth="520px"
            >
              A London-based<br />
              <em>wellness collective</em>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ textAlign: "right" }}
          >
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize="7xl"
              fontWeight="400"
              color="#e0d8d0"
              lineHeight="1"
            >
              01
            </Text>
          </motion.div>
        </Flex>

        {/* Body text columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
            <Text
              fontFamily="'Raleway', sans-serif"
              fontSize="sm"
              color="#555"
              lineHeight="1.9"
            >
              We are dedicated to creating immersive experiences that nourish the
              mind, body, and inner world. Through thoughtfully designed events,
              we help you slow down, reconnect, and cultivate meaningful
              connection.
            </Text>
            <Text
              fontFamily="'Raleway', sans-serif"
              fontSize="sm"
              color="#555"
              lineHeight="1.9"
            >
              In collaboration with inspiring practitioners and thoughtful brands,
              we create spaces where you can nurture your inner world, deepen
              relationships, and leave feeling enriched, energised, and grounded.
            </Text>
          </SimpleGrid>
        </motion.div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Box
            as="a"
            href="/about"
            fontSize="11px"
            fontFamily="'Raleway', sans-serif"
            fontWeight="500"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="#0d0d0d"
            textDecoration="none"
            display="inline-flex"
            alignItems="center"
            gap={3}
            _hover={{ color: "#888" }}
            style={{ transition: "color 0.2s" }}
          >
            Read Our Story
            <Box as="span" borderTop="1px solid currentColor" width="40px" display="inline-block" />
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
}

export default MkBelowHeader;
