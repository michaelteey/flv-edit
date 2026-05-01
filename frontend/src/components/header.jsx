import { Box, Flex, Text, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import flow from "../assets/flowintostill.jpeg";

function MkHeader() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} height="100%">
      {/* Left: Full-bleed image */}
      <Box position="relative" overflow="hidden" minHeight={{ base: "50vh", md: "auto" }}>
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ height: "100%" }}
        >
          <Image
            src={flow}
            objectFit="cover"
            height="100%"
            width="100%"
          />
        </motion.div>
      </Box>

      {/* Right: Editorial text panel */}
      <Flex
        direction="column"
        justify="flex-end"
        px={{ base: 8, md: 16 }}
        pb={{ base: 12, md: 20 }}
        pt={{ base: 10, md: 0 }}
        bg="#f8f4ef"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
        >
          <Text
            fontSize="11px"
            fontFamily="'Raleway', sans-serif"
            letterSpacing="0.25em"
            textTransform="uppercase"
            color="#999"
            mb={6}
          >
            London, Est. 2024
          </Text>

          <Heading
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            lineHeight="1.0"
            color="#0d0d0d"
            mb={3}
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
          >
            hello flavia
          </Heading>
          <Heading
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            fontStyle="italic"
            lineHeight="1.0"
            color="#0d0d0d"
            mb={10}
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
          >
            my love my true love
          </Heading>

          <Text
            fontFamily="'Raleway', sans-serif"
            fontSize="sm"
            color="#555"
            lineHeight="1.85"
            maxWidth="380px"
            mb={12}
            fontWeight="400"
          >
            Immersive, intentional wellness experiences for those who understand
            that self-care is not a destination — it's a journey.
          </Text>

          {/* Flat agency-style buttons — no rounded corners */}
          <Flex gap={3} wrap="wrap">
            <Box
              as="a"
              href="/events"
              bg="#0d0d0d"
              color="#f8f4ef"
              px={8}
              py={4}
              fontSize="11px"
              fontFamily="'Raleway', sans-serif"
              fontWeight="500"
              letterSpacing="0.2em"
              textTransform="uppercase"
              textDecoration="none"
              display="inline-block"
              _hover={{ bg: "#333" }}
              style={{ transition: "background 0.2s" }}
            >
              Explore Events
            </Box>
            <Box
              as="a"
              href="/about"
              border="1px solid #0d0d0d"
              color="#0d0d0d"
              px={8}
              py={4}
              fontSize="11px"
              fontFamily="'Raleway', sans-serif"
              fontWeight="500"
              letterSpacing="0.2em"
              textTransform="uppercase"
              textDecoration="none"
              display="inline-block"
              _hover={{ bg: "#0d0d0d", color: "#f8f4ef" }}
              style={{ transition: "background 0.2s, color 0.2s" }}
            >
              Our Story
            </Box>
          </Flex>
        </motion.div>
      </Flex>
    </SimpleGrid>
  );
}

export default MkHeader;
