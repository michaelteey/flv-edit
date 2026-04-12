import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import flow from "../assets/flowintostill.jpeg";

const services = [
  { name: "Sound Healing",        sub: "Restore through vibration" },
  { name: "Restorative Movement", sub: "Flow at your own pace" },
  { name: "Sensory Rituals",      sub: "Awaken your senses" },
  { name: "Guided Meditation",    sub: "Find your inner stillness" },
  { name: "Curated Workshops",    sub: "Learn & grow together" },
  { name: "Wellness Retreats",    sub: "Immersive escapes" },
];

function ServiceCard({ name, sub, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{ height: "100%" }}
    >
      {/* Variant propagation: whileHover="hover" flows to all children */}
      <motion.div
        initial="rest"
        whileHover="hover"
        style={{
          position: "relative",
          borderRadius: "28px",
          overflow: "hidden",
          height: "100%",
          cursor: "pointer",
        }}
      >
        {/* Zoom image on hover */}
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <img
            src={flow}
            alt={name}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </motion.div>

        {/* Overlay darkens slightly on hover */}
        <motion.div
          variants={{ rest: { opacity: 1 }, hover: { opacity: 0.65 } }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.42)",
          }}
        />

        {/* Text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            padding: "16px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {name}
          </span>
          <motion.span
            variants={{ rest: { opacity: 0, y: 10 }, hover: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.28, delay: 0.05 }}
            style={{
              marginTop: "8px",
              fontSize: "10px",
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            {sub}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function MkQuadrants() {
  return (
    <Box height="100%">
      <Flex height="100%" direction="column" justify="center" align="center">
        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          gap="18px"
          width="90%"
          height="85%"
          maxWidth="880px"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.name} {...s} delay={i * 0.07} />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
