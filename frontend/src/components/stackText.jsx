import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function MkStackText() {
  return (
    <Box height="100%" bg="#f8f4ef">
      <Flex
        height="100%"
        direction="column"
        justify="center"
        px={{ base: 8, md: 16 }}
        py={16}
        gap={14}
        borderTop="1px solid #e0d8d0"
      >
        {/* Section label */}
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
            The Journey
          </Text>

          <Heading
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            lineHeight="1.0"
            color="#0d0d0d"
            maxWidth="700px"
          >
            Come on the journey
            <br />
            <em>with us.</em>
          </Heading>
        </motion.div>

        {/* Two columns */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={0}>
          {[
            {
              label: "Restore",
              body: "At Vaya, we celebrate flow, self-exploration, and presence. Self-care is a journey, not a destination — this is your space to slow down, tune in, and reconnect.",
            },
            {
              label: "Regenerate",
              body: "Through restorative movement and mindful rituals in spaces that truly carry a special energy, you can explore what inspires and nourishes you, cultivating awareness, connection, and a deeper sense of wellbeing.",
            },
          ].map(({ label, body }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <Box
                borderTop="1px solid #0d0d0d"
                pt={8}
                pr={{ md: i === 0 ? 16 : 0 }}
                pl={{ md: i === 1 ? 16 : 0 }}
                borderLeft={{ md: i === 1 ? "1px solid #e0d8d0" : "none" }}
              >
                <Heading
                  fontFamily="'Playfair Display', serif"
                  fontWeight="400"
                  fontSize="2xl"
                  color="#0d0d0d"
                  mb={5}
                >
                  {label}
                </Heading>
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="sm"
                  color="#555"
                  lineHeight="1.9"
                >
                  {body}
                </Text>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
