import { Box, Flex, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import flow from "../assets/flowintostill.jpeg";

const testimonials = [
  {
    text: "Thank you for your kind touch and warmth I felt. It was absolutely amazing and powerful. I have such an amazing experience every time I come.",
    author: "Workshop Attendee",
  },
  {
    text: "I am so grateful for this space you have created. Every session leaves me feeling grounded, energised, and truly seen.",
    author: "Community Member",
  },
];

export function MkQuote() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} height="100%">
      {/* Left: full-bleed image */}
      <Box position="relative" overflow="hidden" minHeight={{ base: "40vh", md: "auto" }}>
        <motion.div
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ height: "100%" }}
        >
          <Image
            src={flow}
            objectFit="cover"
            height="100%"
            width="100%"
          />
        </motion.div>
        {/* Subtle dark tint */}
        <Box position="absolute" inset={0} bg="rgba(10,10,10,0.25)" />
      </Box>

      {/* Right: testimonials on cream */}
      <Flex
        direction="column"
        justify="center"
        px={{ base: 8, md: 16 }}
        py={16}
        bg="#f8f4ef"
        borderTop="1px solid #e0d8d0"
        gap={10}
      >
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
            mb={6}
          >
            Kind Words
          </Text>
          <Heading
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            fontSize={{ base: "3xl", md: "4xl" }}
            lineHeight="1.1"
            color="#0d0d0d"
          >
            From our<br /><em>community.</em>
          </Heading>
        </motion.div>

        <Flex direction="column" gap={8}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <Box borderTop="1px solid #e0d8d0" pt={6}>
                <Text
                  fontFamily="'Playfair Display', serif"
                  fontStyle="italic"
                  fontSize="lg"
                  color="#0d0d0d"
                  lineHeight="1.7"
                  mb={4}
                >
                  "{t.text}"
                </Text>
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="10px"
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  color="#999"
                >
                  — {t.author}
                </Text>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </SimpleGrid>
  );
}
