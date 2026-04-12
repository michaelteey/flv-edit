import { Box, Flex, Heading, Button, Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LINKTREE =
  "https://linktr.ee/wearevaya_?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGng9ILv-7HtkHZnLD9IC11Upm9PS8Zihby2M2F6Ok5ODoaEsPZuqk0TTlqIIM_aem_U9V1GkkznHJ0TYZMVdgJTg";

export default function MkContactDetails() {
  return (
    <Box
      height="100dvh"
      bg="#2c3420"
      scrollSnapAlign="center"
      position="relative"
    >
      <Center width="100%" height="100%">
        <Flex
          direction="column"
          align="center"
          justify="center"
          textAlign="center"
          px={10}
          gap={6}
          maxWidth="480px"
          width="100%"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ width: "100%", textAlign: "center" }}
          >
            <Text
              fontSize="xs"
              fontFamily="'Raleway', sans-serif"
              letterSpacing="0.3em"
              textTransform="uppercase"
              color="rgba(245,240,230,0.45)"
              mb={5}
            >
              Get in touch
            </Text>
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="400"
              fontStyle="italic"
              color="#f5f0e6"
            >
              Like What You See?
            </Heading>
            <Text color="rgba(245,240,230,0.5)" fontSize="sm" mt={4} lineHeight="1.7">
              Let's create something meaningful together.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Button
              bg="#f5f0e6"
              color="#2c3420"
              rounded="full"
              width="100%"
              size="lg"
              as="a"
              href={LINKTREE}
              target="_blank"
              fontFamily="'Raleway', sans-serif"
              fontWeight="500"
              letterSpacing="0.08em"
              _hover={{ bg: "rgba(245,240,230,0.87)" }}
              style={{ transition: "background 0.2s, transform 0.2s" }}
            >
              Work With Us
            </Button>
            <Button
              variant="outline"
              borderColor="rgba(245,240,230,0.28)"
              color="#f5f0e6"
              rounded="full"
              width="100%"
              size="lg"
              as="a"
              href={LINKTREE}
              target="_blank"
              fontFamily="'Raleway', sans-serif"
              fontWeight="400"
              letterSpacing="0.08em"
              _hover={{ borderColor: "rgba(245,240,230,0.7)", bg: "rgba(245,240,230,0.06)" }}
              style={{ transition: "all 0.2s" }}
            >
              Book An Event
            </Button>
            <Button
              variant="outline"
              borderColor="rgba(245,240,230,0.28)"
              color="#f5f0e6"
              rounded="full"
              width="100%"
              size="lg"
              as="a"
              href={LINKTREE}
              target="_blank"
              fontFamily="'Raleway', sans-serif"
              fontWeight="400"
              letterSpacing="0.08em"
              _hover={{ borderColor: "rgba(245,240,230,0.7)", bg: "rgba(245,240,230,0.06)" }}
              style={{ transition: "all 0.2s" }}
            >
              Follow Us
            </Button>
          </motion.div>
        </Flex>
      </Center>
    </Box>
  );
}
