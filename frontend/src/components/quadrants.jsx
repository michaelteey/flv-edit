import { Box, Flex, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import flow from "../assets/flowintostill.jpeg";

const services = [
  { num: "01", name: "Sound Healing",        desc: "Vibrational restoration" },
  { num: "02", name: "Restorative Movement", desc: "Flow at your own pace" },
  { num: "03", name: "Sensory Rituals",      desc: "Awaken the senses" },
  { num: "04", name: "Guided Meditation",    desc: "Inner stillness" },
  { num: "05", name: "Curated Workshops",    desc: "Learn & grow together" },
  { num: "06", name: "Wellness Retreats",    desc: "Immersive escapes" },
];

function ServiceCard({ num, name, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{ height: "100%" }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        style={{ position: "relative", overflow: "hidden", height: "100%", cursor: "pointer" }}
      >
        {/* Background image */}
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <img src={flow} alt={name} style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </motion.div>

        {/* Dark overlay — lightens on hover */}
        <motion.div
          variants={{ rest: { opacity: 1 }, hover: { opacity: 0.7 } }}
          transition={{ duration: 0.35 }}
          style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.58)" }}
        />

        {/* Content */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          justifyContent: "flex-end", padding: "20px",
          color: "white",
        }}>
          <div style={{
            fontSize: "10px",
            fontFamily: "'Raleway', sans-serif",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "6px",
          }}>
            {num}
          </div>
          <div style={{
            fontSize: "13px",
            fontFamily: "'Raleway', sans-serif",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}>
            {name}
          </div>
          <motion.div
            variants={{ rest: { opacity: 0, y: 6 }, hover: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.25 }}
            style={{
              fontSize: "11px",
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.6)",
              marginTop: "4px",
            }}
          >
            {desc}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function MkQuadrants() {
  return (
    <Box height="100%" bg="#f8f4ef">
      <Flex height="100%" direction="column" justify="center" px={{ base: 8, md: 16 }} py={12} gap={8}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Flex justify="space-between" align="flex-end" borderBottom="1px solid #e0d8d0" pb={5} mb={8}>
            <Text
              fontSize="11px"
              fontFamily="'Raleway', sans-serif"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="#999"
            >
              What We Offer
            </Text>
            <Text
              fontFamily="'Playfair Display', serif"
              fontStyle="italic"
              fontSize="2xl"
              color="#0d0d0d"
            >
              Six pathways
            </Text>
          </Flex>
        </motion.div>

        <SimpleGrid columns={{ base: 2, md: 3 }} gap="12px" flex={1} minHeight="0">
          {services.map((s, i) => (
            <ServiceCard key={s.name} {...s} delay={i * 0.06} />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
