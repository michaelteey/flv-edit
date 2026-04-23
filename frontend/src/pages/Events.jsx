import { Box, Flex, Text, Heading, Grid, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MkNavBar from "../components/NavBar";

const BG     = "#FDF6EE";
const DARK   = "#2a1e1a";
const TEXT   = "#403631";
const MUTED  = "#9a8878";
const BORDER = "#e8ddd5";
const ACCENT = "#EC6F51";
const EMAIL  = "hello@vayaevents.com";
const LINKTREE = "https://linktr.ee/wearevaya_?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
const EB     = "https://www.eventbrite.co.uk"; // replace with your Eventbrite organiser page

const IMG = {
  hero:    "https://images.pexels.com/photos/7162250/pexels-photo-7162250.jpeg?auto=compress&cs=tinysrgb&w=1800",
  yoga:    "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg?auto=compress&cs=tinysrgb&w=1200",
  bowls:   "https://images.pexels.com/photos/11889669/pexels-photo-11889669.jpeg?auto=compress&cs=tinysrgb&w=1200",
  candles: "https://images.pexels.com/photos/7795755/pexels-photo-7795755.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

function Cap({ children, light = false }) {
  return (
    <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
      letterSpacing="0.28em" textTransform="uppercase"
      color={light ? "rgba(253,246,238,0.4)" : MUTED}
    >{children}</Text>
  );
}
function Rule() { return <Box borderTop={`1px solid ${BORDER}`} />; }
function TextLink({ href, children, muted = false, light = false }) {
  const col = light ? "rgba(253,246,238,0.7)" : muted ? MUTED : TEXT;
  const bdr = light ? "rgba(253,246,238,0.3)" : muted ? BORDER : TEXT;
  return (
    <Box as="a" href={href} target={href?.startsWith("http") ? "_blank" : undefined}
      fontFamily="'Raleway', sans-serif" fontSize="10px" letterSpacing="0.22em"
      textTransform="uppercase" color={col} textDecoration="none"
      borderBottom={`1px solid ${bdr}`} pb="2px"
      _hover={{ opacity: 0.6 }} style={{ transition: "opacity 0.2s" }}
    >{children}</Box>
  );
}
function FullBleed({ children }) { return <Box mx={{ base: -6, md: -12 }}>{children}</Box>; }
function Row({ label, children, py = 16 }) {
  return (
    <Grid templateColumns={{ base: "1fr", md: "180px 1fr" }}
      gap={{ base: 6, md: 16 }} py={{ base: py / 2, md: py }}
    >
      <Cap>{label}</Cap>
      <Box>{children}</Box>
    </Grid>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const upcomingEvents = [
  {
    num: "01",
    name: "Movement & Stillness",
    type: "Yoga + Sound Healing",
    date: "TBC",
    time: "TBC",
    location: "London",
    desc: "A morning of intentional movement and deep restoration. We begin with a grounding yoga practice before settling into a full sound healing immersion — leaving you lighter, clearer, and more connected.",
    img: IMG.yoga,
    ebLink: EB,
  },
  {
    num: "02",
    name: "Nila M. Sound Experience",
    type: "Sound Bath + Live Vocals",
    date: "TBC",
    time: "TBC",
    location: "London",
    desc: "An intimate evening with Nila M. — a deeply moving sound journey blending crystal singing bowls, gong, and live vocal harmonics. Expect stillness, surrender, and something that stays with you.",
    img: IMG.bowls,
    ebLink: EB,
  },
];

const pastEvents = [
  { name: "Flow into Stillness",  type: "Yin Yoga + Sound Healing",    date: "01 Feb 2026" },
  { name: "Red Light Immersion",  type: "Sound + Red Light Therapy",   date: "08 Mar 2026" },
  { name: "Scent meets Sound",    type: "Aromatherapy + Sound Healing", date: "29 Mar 2026" },
  { name: "Stillness after Dark", type: "Sound Healing + Live Vocals",  date: "10 Apr 2026" },
];

// ─── Sections ─────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <>
      <Box py={{ base: 20, md: 32 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
          <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
            color={TEXT} lineHeight="1.0" mb={8}
          >
            Upcoming<br /><em>experiences.</em>
          </Heading>
        </motion.div>
        <motion.div {...fade(0.35)}>
          <Text fontFamily="'Raleway', sans-serif" fontSize="sm" color={MUTED}
            lineHeight="1.85" maxWidth="420px" mb={10}
          >
            Intimate, curated wellness experiences across London and beyond.
            Each one designed to help you slow down, feel more and leave lighter.
          </Text>
          <TextLink href={EB}>Book on Eventbrite</TextLink>
        </motion.div>
      </Box>

      <FullBleed>
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box as="img" src={IMG.hero} alt="Vaya event atmosphere"
            width="100%" height={{ base: "60vw", md: "68vh" }}
            objectFit="cover" display="block"
          />
        </motion.div>
      </FullBleed>
    </>
  );
}

function UpcomingSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Row label="Coming up">
        <Flex direction="column" gap={0}>
          {upcomingEvents.map(({ num, name, type, date, time, location, desc, img, ebLink }, i) => (
            <motion.div key={num} {...fade(i * 0.1)}>
              <Box borderBottom={`1px solid ${BORDER}`} py={10}
                _first={{ borderTop: `1px solid ${BORDER}` }}
              >
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 16 }}>
                  <Box>
                    <Flex align="center" gap={4} mb={5}>
                      <Text fontFamily="'Raleway', sans-serif" fontSize="9px" letterSpacing="0.2em" color={MUTED}>{num}</Text>
                      <Box bg={ACCENT} color="white" px={3} py="6px"
                        fontFamily="'Raleway', sans-serif" fontSize="9px"
                        letterSpacing="0.18em" textTransform="uppercase"
                      >
                        Upcoming
                      </Box>
                    </Flex>

                    <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
                      fontSize={{ base: "2xl", md: "3xl" }} color={TEXT} lineHeight="1.2" mb={2}
                    >{name}</Heading>
                    <Text fontFamily="'Raleway', sans-serif" fontSize="xs" color={MUTED} mb={6}>{type}</Text>
                    <Text fontFamily="'Raleway', sans-serif" fontSize="sm" color={MUTED} lineHeight="1.9" mb={8}>{desc}</Text>

                    <Flex direction="column" gap={2} mb={8}>
                      {[["Date", date], ["Time", time], ["Location", location]].map(([k, v]) => (
                        <Flex key={k} gap={4} align="center">
                          <Cap>{k}</Cap>
                          <Text fontFamily="'Raleway', sans-serif" fontSize="xs" color={TEXT} letterSpacing="0.04em">{v}</Text>
                        </Flex>
                      ))}
                    </Flex>

                    <Box as="a" href={ebLink} target="_blank"
                      display="inline-block" bg={ACCENT} color="white"
                      px={8} py="12px"
                      fontFamily="'Raleway', sans-serif" fontSize="10px"
                      letterSpacing="0.22em" textTransform="uppercase"
                      textDecoration="none"
                      _hover={{ bg: "#D75E48" }} style={{ transition: "background 0.2s" }}
                    >
                      Reserve your spot →
                    </Box>
                  </Box>

                  <Box overflow="hidden">
                    <motion.div initial={{ scale: 1.06 }} whileInView={{ scale: 1 }}
                      viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                      <Box as="img" src={img} alt={name}
                        width="100%" height={{ base: "60vw", md: "320px" }}
                        objectFit="cover" display="block"
                      />
                    </motion.div>
                  </Box>
                </SimpleGrid>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </Row>
    </motion.div>
  );
}

function WhatToExpectSection() {
  const expects = [
    { title: "Curated space",     body: "Every venue is chosen with intention — warm, intimate, and designed to help you arrive fully." },
    { title: "Guided experience", body: "Led by expert practitioners with deep knowledge of their craft and invested in the Vaya experience." },
    { title: "Community",         body: "Small group sizes so you can genuinely connect, not just be in the same room." },
    { title: "Nourishment",       body: "We partner with conscious wellness brands to bring you drinks, snacks or goodies to take home." },
  ];
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Row label="What to expect">
        <Box>
          {expects.map(({ title, body }, i) => (
            <motion.div key={title} {...fade(i * 0.07)}>
              <Flex borderBottom={`1px solid ${BORDER}`} py={5}
                gap={{ base: 4, md: 10 }}
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }}
                _first={{ borderTop: `1px solid ${BORDER}` }}
              >
                <Text fontFamily="'Playfair Display', serif" fontSize="lg" color={TEXT}
                  minWidth={{ md: "200px" }} flexShrink={0}
                >{title}</Text>
                <Text fontFamily="'Raleway', sans-serif" fontSize="sm" color={MUTED} lineHeight="1.85">{body}</Text>
              </Flex>
            </motion.div>
          ))}
        </Box>
      </Row>
    </motion.div>
  );
}

function PastSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Row label="Past experiences" py={12}>
        <Box>
          {pastEvents.map(({ name, type, date }) => (
            <Flex key={name} borderBottom={`1px solid ${BORDER}`} py={4}
              justify="space-between" align="center"
              _first={{ borderTop: `1px solid ${BORDER}` }}
            >
              <Box>
                <Text fontFamily="'Playfair Display', serif" fontSize="lg" color={MUTED} mb="2px">{name}</Text>
                <Text fontFamily="'Raleway', sans-serif" fontSize="xs" color={MUTED} opacity={0.6}>{type}</Text>
              </Box>
              <Text fontFamily="'Raleway', sans-serif" fontSize="xs" color={MUTED} letterSpacing="0.06em">{date}</Text>
            </Flex>
          ))}
        </Box>
      </Row>
    </motion.div>
  );
}

function StayInTouchSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <FullBleed>
        <Box bg={DARK}>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box px={{ base: 8, md: 14 }} py={{ base: 14, md: 20 }}
              display="flex" flexDirection="column" gap={8}
            >
              <Cap light>Stay in the loop</Cap>
              <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
                fontSize={{ base: "3xl", md: "4xl" }} color="#FDF6EE" lineHeight="1.15"
              >
                New events drop<br /><em>on Instagram first.</em>
              </Heading>
              <Text fontFamily="'Raleway', sans-serif" fontSize="sm"
                color="rgba(253,246,238,0.5)" lineHeight="1.85" maxWidth="340px"
              >
                Follow us to be the first to know about upcoming experiences,
                early bird spots, and behind-the-scenes from our events.
              </Text>
              <Flex gap={8} wrap="wrap">
                <TextLink href={LINKTREE} light>Follow on Instagram</TextLink>
                <TextLink href={`mailto:${EMAIL}`} light muted>Get in touch</TextLink>
              </Flex>
            </Box>
            <Box overflow="hidden">
              <Box as="img" src={IMG.yoga} alt="Yoga event"
                width="100%" height={{ base: "70vw", md: "100%" }}
                objectFit="cover" display="block" minHeight={{ md: "440px" }}
                style={{ filter: "brightness(0.7)" }}
              />
            </Box>
          </SimpleGrid>
        </Box>
      </FullBleed>
    </motion.div>
  );
}

function Footer() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Flex py={10} justify="space-between" align="center" wrap="wrap" gap={4}>
        <Text fontFamily="'Playfair Display', serif" fontStyle="italic" fontSize="xl" color={TEXT}>Vaya</Text>
        <Flex gap={8} wrap="wrap">
          {[["Instagram", LINKTREE], ["About", "/about"], ["For Brands", "/brands"], ["Contact", `mailto:${EMAIL}`]].map(([label, href]) => (
            <Box key={label} as="a" href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              fontFamily="'Raleway', sans-serif" fontSize="9px"
              letterSpacing="0.22em" textTransform="uppercase"
              color={MUTED} textDecoration="none"
              _hover={{ color: TEXT }} style={{ transition: "color 0.2s" }}
            >{label}</Box>
          ))}
        </Flex>
        <Cap>London · Est. 2025</Cap>
      </Flex>
    </motion.div>
  );
}

export default function Events() {
  return (
    <Box bg={BG} minHeight="100vh">
      <Box position="sticky" top={0} zIndex={10} bg={BG}><MkNavBar /></Box>
      <Box maxWidth="960px" mx="auto" px={{ base: 6, md: 12 }}>
        <HeroSection />
        <UpcomingSection />
        <WhatToExpectSection />
        <PastSection />
        <StayInTouchSection />
        <Footer />
      </Box>
    </Box>
  );
}
