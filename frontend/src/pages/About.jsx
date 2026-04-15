import { Box, Flex, Text, Heading, Grid, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MkNavBar from "../components/NavBar";

// ─── Tokens ───────────────────────────────────────────────────────────────────
const BG     = "#f5f0eb";
const DARK   = "#141210";
const TEXT   = "#1a1a1a";
const MUTED  = "#999";
const BORDER = "#ddd5cb";
const EMAIL  = "hello@vayaevents.com";
const LINKTREE = "https://linktr.ee/wearevaya_?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

const IMG = {
  hero:      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1800",
  flavia:    "https://images.pexels.com/photos/3756168/pexels-photo-3756168.jpeg?auto=compress&cs=tinysrgb&w=900",
  tudor:     "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg?auto=compress&cs=tinysrgb&w=900",
  bowls:     "https://images.pexels.com/photos/11889669/pexels-photo-11889669.jpeg?auto=compress&cs=tinysrgb&w=1400",
  forest:    "https://images.pexels.com/photos/31359311/pexels-photo-31359311.jpeg?auto=compress&cs=tinysrgb&w=1800",
};

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

function Cap({ children, light = false }) {
  return (
    <Text
      fontFamily="'Raleway', sans-serif"
      fontSize="9px"
      letterSpacing="0.28em"
      textTransform="uppercase"
      color={light ? "rgba(245,240,235,0.4)" : MUTED}
    >
      {children}
    </Text>
  );
}

function Rule() { return <Box borderTop={`1px solid ${BORDER}`} />; }

function TextLink({ href, children, muted = false, light = false }) {
  const col = light ? "rgba(245,240,235,0.6)" : muted ? MUTED : TEXT;
  const bdr = light ? "rgba(245,240,235,0.3)" : muted ? BORDER : TEXT;
  return (
    <Box
      as="a" href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      fontFamily="'Raleway', sans-serif"
      fontSize="10px" letterSpacing="0.22em" textTransform="uppercase"
      color={col} textDecoration="none"
      borderBottom={`1px solid ${bdr}`} pb="2px"
      _hover={{ opacity: 0.6 }} style={{ transition: "opacity 0.2s" }}
    >
      {children}
    </Box>
  );
}

function FullBleed({ children }) {
  return <Box mx={{ base: -6, md: -12 }}>{children}</Box>;
}

function Row({ label, children, py = 16 }) {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "180px 1fr" }}
      gap={{ base: 6, md: 16 }}
      py={{ base: py / 2, md: py }}
    >
      <Cap>{label}</Cap>
      <Box>{children}</Box>
    </Grid>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <>
      <Box py={{ base: 20, md: 32 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <Heading
            fontFamily="'Playfair Display', serif"
            fontWeight="400"
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
            color={TEXT}
            lineHeight="1.0"
            mb={8}
          >
            Our<br /><em>story.</em>
          </Heading>
        </motion.div>
        <motion.div {...fade(0.35)}>
          <Text
            fontFamily="'Raleway', sans-serif"
            fontSize="sm" color={MUTED}
            lineHeight="1.85" maxWidth="380px"
          >
            Vaya was born from a belief that wellness should be felt,
            not just consumed — and that the best experiences are
            shared with others.
          </Text>
        </motion.div>
      </Box>

      <FullBleed>
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box
            as="img" src={IMG.hero}
            alt="Vaya founder in meditation"
            width="100%" height={{ base: "60vw", md: "68vh" }}
            objectFit="cover" objectPosition="center 30%"
            display="block"
          />
        </motion.div>
      </FullBleed>
    </>
  );
}

function FounderSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <FullBleed>
        <SimpleGrid columns={{ base: 1, md: 2 }} minHeight={{ md: "580px" }}>
          <Box
            bg="#ede8e1"
            display="flex" flexDirection="column"
            justifyContent="center"
            px={{ base: 8, md: 14 }} py={{ base: 12, md: 16 }}
            gap={7}
          >
            <Cap>Founder</Cap>
            <Heading
              fontFamily="'Playfair Display', serif"
              fontWeight="400"
              fontSize={{ base: "3xl", md: "4xl" }}
              color={TEXT} lineHeight="1.15"
            >
              Flavia
            </Heading>
            <Box borderTop={`1px solid ${BORDER}`} pt={6}>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="sm" color={MUTED} lineHeight="1.9" mb={4}
              >
                Founded by Flavia and driven by a deep passion for wellness
                and the balance between tradition and innovation, Vaya was
                created to bring harmony to life — crafting meaningful
                experiences that people genuinely look forward to.
              </Text>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="sm" color={MUTED} lineHeight="1.9" mb={4}
              >
                What began as a personal journey into self-care evolved into
                a clear mission: to create moments where people can slow down,
                reconnect, and rediscover what truly matters — themselves,
                the people around them, and the present moment.
              </Text>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="sm" color={MUTED} lineHeight="1.9"
              >
                Every experience is designed with intention: to nurture
                connection, calm, and support self-care — because self-care
                is not a destination, it's a journey best experienced together.
              </Text>
            </Box>
          </Box>

          <Box overflow="hidden">
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ height: "100%" }}
            >
              <Box
                as="img" src={IMG.flavia}
                alt="Flavia, Vaya founder"
                width="100%" height={{ base: "80vw", md: "100%" }}
                objectFit="cover" objectPosition="top"
                display="block"
              />
            </motion.div>
          </Box>
        </SimpleGrid>
      </FullBleed>
    </motion.div>
  );
}

function TeamSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <FullBleed>
        <SimpleGrid columns={{ base: 1, md: 2 }} minHeight={{ md: "540px" }}>
          <Box overflow="hidden" order={{ base: 2, md: 1 }}>
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ height: "100%" }}
            >
              <Box
                as="img" src={IMG.tudor}
                alt="Tudor, Head of Partnerships"
                width="100%" height={{ base: "80vw", md: "100%" }}
                objectFit="cover" objectPosition="center top"
                display="block"
              />
            </motion.div>
          </Box>

          <Box
            bg="#ede8e1"
            display="flex" flexDirection="column"
            justifyContent="center"
            px={{ base: 8, md: 14 }} py={{ base: 12, md: 16 }}
            gap={7} order={{ base: 1, md: 2 }}
          >
            <Cap>Head of Partnerships</Cap>
            <Heading
              fontFamily="'Playfair Display', serif"
              fontWeight="400"
              fontSize={{ base: "3xl", md: "4xl" }}
              color={TEXT} lineHeight="1.15"
            >
              Tudor
            </Heading>
            <Box borderTop={`1px solid ${BORDER}`} pt={6}>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="sm" color={MUTED} lineHeight="1.9" mb={4}
              >
                Tudor's passion lies in creating experiences that bring people
                together in meaningful ways. With a background in event
                management and hands-on experience delivering everything from
                large-scale conferences to intimate community gatherings, he
                brings structure, creativity, and intention to every Vaya
                experience.
              </Text>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="sm" color={MUTED} lineHeight="1.9"
              >
                He believes that wellness should be accessible, inviting, and
                rooted in genuine connection. In a world that moves quickly,
                Tudor is committed to creating spaces where people can pause,
                breathe, and simply be.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </FullBleed>
    </motion.div>
  );
}

function ValuesSection() {
  const values = [
    { title: "Intention",   body: "Every detail is chosen with purpose. Nothing is accidental." },
    { title: "Connection",  body: "Real moments between real people. Community over consumption." },
    { title: "Accessibility", body: "Wellness is for everyone. We keep our experiences welcoming and open." },
    { title: "Authenticity", body: "We work with brands and people who share our values, not just our aesthetic." },
    { title: "Rest",        body: "Slowing down is a radical act. We create space for it unapologetically." },
  ];

  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Row label="What we believe">
        <Box>
          {values.map(({ title, body }, i) => (
            <motion.div key={title} {...fade(i * 0.07)}>
              <Flex
                borderBottom={`1px solid ${BORDER}`}
                py={5} gap={8}
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }}
                _first={{ borderTop: `1px solid ${BORDER}` }}
              >
                <Text
                  fontFamily="'Playfair Display', serif"
                  fontSize={{ base: "lg", md: "xl" }}
                  color={TEXT} minWidth="180px"
                >
                  {title}
                </Text>
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="sm" color={MUTED} lineHeight="1.8"
                >
                  {body}
                </Text>
              </Flex>
            </motion.div>
          ))}
        </Box>
      </Row>
    </motion.div>
  );
}

function QuoteSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <FullBleed>
        <Box position="relative" overflow="hidden">
          <Box
            as="img" src={IMG.forest}
            alt="Misty forest"
            width="100%" height={{ base: "60vw", md: "50vh" }}
            objectFit="cover" display="block"
            style={{ filter: "brightness(0.45)" }}
          />
          <Box
            position="absolute" inset={0}
            display="flex" alignItems="center" justifyContent="center"
            px={{ base: 8, md: 20 }}
          >
            <Text
              fontFamily="'Playfair Display', serif"
              fontStyle="italic"
              fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
              color="rgba(245,240,235,0.92)"
              lineHeight="1.3" textAlign="center"
              maxWidth="700px"
            >
              "Every experience we create is a reminder that you deserve
              to feel good — not someday, but now."
            </Text>
          </Box>
        </Box>
      </FullBleed>
    </motion.div>
  );
}

function CollaborateSection() {
  const types = [
    { title: "Brands & Collaborations", body: "We work with brands to create intentional, sensory-led wellness experiences that connect with audiences and leave a lasting impact. From product placement to co-branded workshops and bespoke multi-sensory activations." },
    { title: "Workplace Wellbeing",     body: "We partner with forward-thinking companies to create wellbeing experiences that help teams reset, recharge, and reconnect. From sound sessions and nervous system workshops to bespoke activations." },
    { title: "Private Events",          body: "Looking to host a branded wellness event? We co-create unique, wellness-led activations tailored to your brand, your audience, and your goals." },
  ];

  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Row label="Work with us">
        <Box>
          <Text
            fontFamily="'Raleway', sans-serif"
            fontSize="sm" color={MUTED} lineHeight="1.9"
            maxWidth="480px" mb={10}
          >
            We're always open to meaningful collaborations. If you share our
            values, we'd love to hear from you.
          </Text>

          {types.map(({ title, body }, i) => (
            <motion.div key={title} {...fade(i * 0.1)}>
              <Box borderTop={`1px solid ${BORDER}`} py={7} _last={{ borderBottom: `1px solid ${BORDER}` }}>
                <Text
                  fontFamily="'Playfair Display', serif"
                  fontSize="xl" color={TEXT} mb={3}
                >
                  {title}
                </Text>
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="sm" color={MUTED} lineHeight="1.9"
                  maxWidth="520px"
                >
                  {body}
                </Text>
              </Box>
            </motion.div>
          ))}

          <Box mt={10}>
            <TextLink href={`mailto:${EMAIL}`}>{EMAIL}</TextLink>
          </Box>
        </Box>
      </Row>
    </motion.div>
  );
}

function Footer() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Flex py={10} justify="space-between" align="center" wrap="wrap" gap={4}>
        <Text fontFamily="'Playfair Display', serif" fontStyle="italic" fontSize="xl" color={TEXT}>
          Vaya
        </Text>
        <Flex gap={8} wrap="wrap">
          {[["Instagram", LINKTREE], ["Events", "/events"], ["For Brands", "/brands"], ["Contact", `mailto:${EMAIL}`]].map(([label, href]) => (
            <Box
              key={label} as="a" href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              fontFamily="'Raleway', sans-serif" fontSize="9px"
              letterSpacing="0.22em" textTransform="uppercase"
              color={MUTED} textDecoration="none"
              _hover={{ color: TEXT }} style={{ transition: "color 0.2s" }}
            >
              {label}
            </Box>
          ))}
        </Flex>
        <Cap>London · Est. 2024</Cap>
      </Flex>
    </motion.div>
  );
}

export default function About() {
  return (
    <Box bg={BG} minHeight="100vh">
      <Box position="sticky" top={0} zIndex={10} bg={BG}>
        <MkNavBar />
      </Box>
      <Box maxWidth="960px" mx="auto" px={{ base: 6, md: 12 }}>
        <HeroSection />
        <FounderSection />
        <TeamSection />
        <ValuesSection />
        <QuoteSection />
        <CollaborateSection />
        <Footer />
      </Box>
    </Box>
  );
}
