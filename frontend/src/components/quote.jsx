import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import flow from "../assets/flowintostill.jpeg";

const testimonials = [
  {
    text: "Thank you for your kind touch and warmth I felt. It was absolutely amazing and powerful. I have such an amazing experience every time I come.",
    author: "Community Member",
  },
  {
    text: "I am so grateful for this space you have created. Every session leaves me feeling grounded, energised, and truly seen.",
    author: "Community Member",
  },
];

export function MkQuote() {
  return (
    <Box height="100%" py={{ md: "5vh" }}>
      <Box height="100%" position="relative" overflow="hidden" rounded={{ md: "40px" }}>
        <Image
          src={flow}
          objectFit="cover"
          height="100%"
          width="100%"
          position="absolute"
          inset={0}
        />

        {/* Deep forest green gradient overlay */}
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(135deg, rgba(28,43,20,0.88) 0%, rgba(0,0,0,0.72) 100%)"
        />

        <Box position="absolute" inset={0}>
          <Flex
            height="100%"
            direction="column"
            align="center"
            justify="center"
            px={{ base: 6, md: "10dvw" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              <Text
                fontSize="xs"
                fontFamily="'Raleway', sans-serif"
                letterSpacing="0.3em"
                textTransform="uppercase"
                color="rgba(255,255,255,0.5)"
                mb={3}
              >
                Testimonials
              </Text>
              <Heading size="2xl" fontWeight="400" color="white">
                Kind Words From Our Community
              </Heading>
            </motion.div>

            <Flex gap={6} direction={{ base: "column", md: "row" }} width="100%">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  style={{ flex: 1 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.18 }}
                >
                  <Box
                    bg="rgba(255,255,255,0.08)"
                    border="1px solid rgba(255,255,255,0.14)"
                    rounded="24px"
                    p={8}
                    height="100%"
                    style={{ backdropFilter: "blur(12px)" }}
                  >
                    <Text
                      fontSize="4xl"
                      color="rgba(255,255,255,0.35)"
                      lineHeight="1"
                      mb={4}
                      fontFamily="'Playfair Display', serif"
                    >
                      "
                    </Text>
                    <Text color="rgba(255,255,255,0.88)" lineHeight="1.85" fontSize="sm">
                      {t.text}
                    </Text>
                    <Text
                      mt={6}
                      color="rgba(255,255,255,0.42)"
                      fontSize="xs"
                      letterSpacing="0.18em"
                      textTransform="uppercase"
                      fontFamily="'Raleway', sans-serif"
                    >
                      — {t.author}
                    </Text>
                  </Box>
                </motion.div>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
