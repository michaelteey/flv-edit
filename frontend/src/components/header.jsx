import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import flow from "../assets/flowintostill.jpeg";

function MkHeader() {
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

        {/* Dark gradient overlay */}
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(160deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)"
          zIndex={1}
        />

        {/* Text content */}
        <Box
          position="absolute"
          inset={0}
          zIndex={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box textAlign="center" color="white" px={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Heading
                fontSize={{ base: "8xl", md: "10xl" }}
                fontFamily="'Playfair Display', serif"
                fontWeight="400"
                fontStyle="italic"
                letterSpacing="-0.01em"
                lineHeight="0.9"
              >
                Vaya
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            >
              <Text
                mt={8}
                fontSize={{ base: "xs", md: "sm" }}
                fontFamily="'Raleway', sans-serif"
                fontWeight="300"
                letterSpacing="0.35em"
                textTransform="uppercase"
                color="rgba(255,255,255,0.85)"
              >
                By your side on the Journey of Self-Care
              </Text>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MkHeader;
