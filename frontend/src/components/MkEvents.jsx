import { Box, Flex, Heading, Button, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function MkEvents({ children, heading, webLink, image, date }) {
  return (
    <Box height="100dvh" scrollSnapAlign="center" position="relative">
      <Flex height="100%" width="100%" justify="center" align="center" px={6}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%", maxWidth: "820px" }}
        >
          <Box
            bg="white"
            rounded="32px"
            overflow="hidden"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.07)" }}
          >
            <Flex direction={{ base: "column", md: "row" }} height={{ md: "460px" }}>
              {/* Image */}
              <Box
                flex={1}
                position="relative"
                overflow="hidden"
                minHeight={{ base: "240px", md: "auto" }}
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  style={{ height: "100%" }}
                >
                  <Image
                    src={image}
                    objectFit="cover"
                    height="100%"
                    width="100%"
                  />
                </motion.div>
              </Box>

              {/* Content */}
              <Flex flex={1} direction="column" justify="center" p={10} gap={4}>
                <Text
                  fontSize="xs"
                  fontFamily="'Raleway', sans-serif"
                  letterSpacing="0.22em"
                  textTransform="uppercase"
                  color="#8b6954"
                  fontWeight="500"
                >
                  {date}
                </Text>

                <Heading size="2xl" fontWeight="400" lineHeight="1.2">
                  {heading}
                </Heading>

                <Text color="#4a4a4a" lineHeight="1.85" fontSize="sm" flex={1}>
                  {children}
                </Text>

                <Button
                  bg="#2c3420"
                  color="white"
                  rounded="full"
                  alignSelf="flex-start"
                  px={8}
                  as="a"
                  href={webLink}
                  target="_blank"
                  fontFamily="'Raleway', sans-serif"
                  fontWeight="500"
                  letterSpacing="0.08em"
                  _hover={{ bg: "#1a2012" }}
                  style={{ transition: "background 0.2s, transform 0.2s" }}
                >
                  Book Now
                </Button>
              </Flex>
            </Flex>
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
}
