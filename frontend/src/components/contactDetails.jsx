import { Box, Flex, Heading, Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LINKTREE = "https://www.instagram.com/wearevaya_/";

const links = [
  { label: "Work With Us",  href: LINKTREE },
  { label: "Book An Event", href: LINKTREE },
  { label: "Follow Us",     href: LINKTREE },
];

export default function MkContactDetails() {
  return (
    <Box height="100dvh" bg="#0a0a0a" scrollSnapAlign="center" position="relative">
      <Center width="100%" height="100%">
        <Flex direction="column" align="center" textAlign="center" px={10} gap={14} maxWidth="600px" width="100%">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ textAlign: "center" }}
          >
            <Text
              fontSize="11px"
              fontFamily="'Raleway', sans-serif"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.35)"
              mb={8}
            >
              Get in touch
            </Text>
            <Heading
              fontFamily="'Playfair Display', serif"
              fontWeight="400"
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight="1.05"
              color="#f8f4ef"
            >
              Like what<br />
              <em>you see?</em>
            </Heading>
            <Text
              fontFamily="'Raleway', sans-serif"
              fontSize="sm"
              color="rgba(255,255,255,0.4)"
              mt={6}
              lineHeight="1.8"
            >
              Let's create something meaningful together.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {links.map(({ label, href }, i) => (
              <Box
                key={label}
                as="a"
                href={href}
                target="_blank"
                display="block"
                width="100%"
                py={4}
                textAlign="center"
                fontSize="11px"
                fontFamily="'Raleway', sans-serif"
                fontWeight="500"
                letterSpacing="0.2em"
                textTransform="uppercase"
                textDecoration="none"
                bg={i === 0 ? "#f8f4ef" : "transparent"}
                color={i === 0 ? "#0a0a0a" : "rgba(255,255,255,0.7)"}
                border={i !== 0 ? "1px solid rgba(255,255,255,0.18)" : "none"}
                _hover={{
                  bg: i === 0 ? "#e8dfd6" : "rgba(255,255,255,0.06)",
                  color: i === 0 ? "#0a0a0a" : "#f8f4ef",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                style={{ transition: "all 0.2s" }}
              >
                {label}
              </Box>
            ))}
          </motion.div>

        </Flex>
      </Center>
    </Box>
  );
}
