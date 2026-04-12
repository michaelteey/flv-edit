import { Box, Flex, Heading, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function MkEvents({ children, heading, webLink, image, date }) {
  return (
    <Box height="100dvh" scrollSnapAlign="center" position="relative" bg="#f8f4ef">
      <SimpleGrid columns={{ base: 1, md: 2 }} height="100%">
        {/* Left: image */}
        <Box position="relative" overflow="hidden" minHeight={{ base: "40vh", md: "auto" }}>
          <motion.div
            initial="rest"
            whileHover="hover"
            style={{ height: "100%" }}
          >
            <motion.div
              variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ height: "100%" }}
            >
              <Image src={image} objectFit="cover" height="100%" width="100%" />
            </motion.div>
          </motion.div>
        </Box>

        {/* Right: content */}
        <Flex
          direction="column"
          justify="center"
          px={{ base: 8, md: 16 }}
          py={16}
          gap={6}
          borderLeft={{ md: "1px solid #e0d8d0" }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              {date}
            </Text>

            <Heading
              fontFamily="'Playfair Display', serif"
              fontWeight="400"
              fontSize={{ base: "3xl", md: "4xl" }}
              color="#0d0d0d"
              lineHeight="1.1"
              mb={6}
            >
              {heading}
            </Heading>

            <Box borderTop="1px solid #e0d8d0" pt={6} mb={10}>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="sm"
                color="#555"
                lineHeight="1.9"
              >
                {children}
              </Text>
            </Box>

            <Box
              as="a"
              href={webLink}
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
              _hover={{ bg: "#333" }}
              style={{ transition: "background 0.2s" }}
            >
              Book Now
            </Box>
          </motion.div>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
