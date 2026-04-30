import { useState } from "react";
import { Box, Flex, Text, Heading, Grid, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import MkNavBar from "../components/NavBar";
import logo from "../assets/logo2.png";
import imgMoveGroove from "../assets/move-and-groove.jpg";
import imgScentMeetsSound from "../assets/scent-meets-sound.jpg";

const BG     = "#FDF6EE";
const DARK   = "#2a1e1a";
const TEXT   = "#403631";
const MUTED  = "#9a8878";
const BORDER = "#e8ddd5";
const ACCENT = "#EC6F51";
const EMAIL  = "hello@vayaevents.com";
const CONTACT = "/contact";
const LINKTREE = "https://www.instagram.com/wearevaya_/";
const EB     = "https://www.eventbrite.co.uk/o/112025993841";
const EB_MOVE_GROOVE = "https://www.eventbrite.co.uk/e/yoga-and-live-dj-move-groove-with-vaya-tickets-1988231040564?aff=ebdssbdestsearch";

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
  const isExternal = href?.startsWith("http");
  return (
    <Box as={isExternal ? "a" : RouterLink}
      {...(isExternal ? { href, target: "_blank" } : { to: href })}
      fontFamily="'Raleway', sans-serif" fontSize="10px" letterSpacing="0.22em"
      textTransform="uppercase" color={col} textDecoration="none"
      borderBottom={`1px solid ${bdr}`} pb="2px"
      display="inline-flex" alignItems="center"
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
    name: "Move & Groove",
    type: "Yoga + Music",
    date: "23 May 2026",
    time: "11:15 AM – 1:15 PM",
    location: "London",
    desc: "A feel-good morning of movement and music. Flow through a yoga practice set to uplifting sounds — energising, joyful, and designed to get you out of your head and into your body.",
    img: imgMoveGroove,
    link: EB_MOVE_GROOVE,
  },
  {
    num: "02",
    name: "A Moment With Me with NILA M.",
    type: "Soundbath, journalling and breathwork",
    date: "TBC",
    time: "TBC",
    location: "London",
    desc: "An intimate evening with NILA M. — a deeply moving sound journey blending crystal singing bowls, gong, and live vocal harmonics. Expect stillness, surrender, and something that stays with you.",
    img: IMG.bowls,
    link: EB,
  },
];

const pastEvents = [
  { name: "Flow into Stillness",  type: "Yin Yoga + Sound Healing",    date: "01 Feb 2026", img: "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Red Light Immersion",  type: "Sound + Red Light Therapy",   date: "08 Mar 2026", img: "https://images.pexels.com/photos/7162250/pexels-photo-7162250.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Scent meets Sound",    type: "Aromatherapy + Sound Healing", date: "29 Mar 2026", img: imgScentMeetsSound },
  { name: "Stillness after Dark", type: "Sound Healing + Live Vocals",  date: "10 Apr 2026", img: "https://images.pexels.com/photos/11889669/pexels-photo-11889669.jpeg?auto=compress&cs=tinysrgb&w=800" },
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
          <TextLink href={LINKTREE}>Follow us for updates</TextLink>
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
          {upcomingEvents.map(({ num, name, type, date, time, location, desc, img, link }, i) => (
            <motion.div key={num} {...fade(i * 0.1)}>
              <Box borderBottom={`1px solid ${BORDER}`} py={10}
                _first={{ borderTop: `1px solid ${BORDER}` }}
              >
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 16 }}>
                  <Box>
                    <Flex align="center" gap={4} mb={5}>
                      <Text fontFamily="'Raleway', sans-serif" fontSize="9px" letterSpacing="0.2em" color={MUTED}>{num}</Text>
                      <Box border={`1px solid ${BORDER}`} color={MUTED} px={3} py="6px"
                        fontFamily="'Raleway', sans-serif" fontSize="9px"
                        letterSpacing="0.18em" textTransform="uppercase"
                      >
                        Up Next
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

                    {link ? (
                      <Box as="a" href={link} target="_blank"
                        fontFamily="'Raleway', sans-serif" fontSize="10px"
                        letterSpacing="0.22em" textTransform="uppercase"
                        bg={ACCENT} color="white" px={6} py="12px"
                        textDecoration="none" display="inline-block"
                        _hover={{ bg: "#F28B75" }} style={{ transition: "background 0.2s" }}
                      >Book now</Box>
                    ) : (
                      <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
                        letterSpacing="0.22em" textTransform="uppercase" color={MUTED}
                      >Booking coming soon</Text>
                    )}
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
  const [hovered, setHovered] = useState(null);
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
                cursor="default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <Text fontFamily="'Playfair Display', serif" fontSize={{ base: "lg", md: "xl" }}
                  color={hovered === i ? ACCENT : TEXT}
                  minWidth={{ md: "200px" }} flexShrink={0}
                  style={{ transition: "color 0.2s" }}
                >{title}</Text>
                <Text fontFamily="'Raleway', sans-serif" fontSize="xs" color={MUTED} lineHeight="1.85">{body}</Text>
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
      <Box py={{ base: 10, md: 14 }}>
        <Text fontFamily="'Raleway', sans-serif" fontSize="11px" letterSpacing="0.24em" textTransform="uppercase" color={MUTED} mb={8}>Past experiences</Text>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
          {pastEvents.map(({ name, type, date, img }, i) => (
            <motion.div key={name} {...fade(i * 0.08)}>
              <Box>
                <Box overflow="hidden" mb={3}>
                  <Box as="img" src={img} alt={name}
                    width="100%" height={{ base: "40vw", md: "220px" }}
                    objectFit="cover" display="block"
                    style={{ transition: "transform 0.4s ease" }}
                    _hover={{ transform: "scale(1.03)" }}
                  />
                </Box>
                <Text fontFamily="'Playfair Display', serif" fontSize="sm" color={TEXT} mb={1}>{name}</Text>
                <Text fontFamily="'Raleway', sans-serif" fontSize="9px" letterSpacing="0.12em" textTransform="uppercase" color={MUTED} mb={1}>{type}</Text>
                <Text fontFamily="'Raleway', sans-serif" fontSize="9px" color={MUTED} opacity={0.6}>{date}</Text>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>
    </motion.div>
  );
}

function StayInTouchSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Flex py={{ base: 12, md: 16 }} gap={8} align="center" justify="space-between" wrap="wrap">
        <Box>
          <Cap>Stay in the loop</Cap>
          <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
            fontSize={{ base: "2xl", md: "3xl" }} color={TEXT} lineHeight="1.15" mt={3}
          >
            New events on <em style={{ color: ACCENT }}>Instagram first.</em>
          </Heading>
        </Box>
        <Flex gap={6} wrap="wrap" align="center">
          <Box as="a" href={LINKTREE} target="_blank"
            fontFamily="'Raleway', sans-serif" fontSize="10px"
            letterSpacing="0.22em" textTransform="uppercase"
            bg={ACCENT} color="white" px={6} py="12px"
            textDecoration="none"
            _hover={{ bg: "#EC6F51" }} style={{ transition: "background 0.2s" }}
          >Follow on Instagram</Box>
          <TextLink href={CONTACT} muted>Get in touch</TextLink>
        </Flex>
      </Flex>
    </motion.div>
  );
}

function Footer() {
  return (
    <motion.div {...fade(0)}>
      <Box borderTop={`1px solid ${BORDER}`} />
      <Box px={{ base: 6, md: 12 }} py={10}>
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <Box as={RouterLink} to="/" textDecoration="none">
            <Box as="img" src={logo} alt="Vaya" height="72px" display="block" />
          </Box>
          <Flex gap={8} wrap="wrap">
            {[["Instagram", LINKTREE], ["About", "/about"], ["For Brands", "/brands"], ["Contact", CONTACT]].map(([label, href]) => (
              <Box key={label}
                as={href.startsWith("http") ? "a" : RouterLink}
                {...(href.startsWith("http") ? { href, target: "_blank" } : { to: href })}
                fontFamily="'Raleway', sans-serif" fontSize="9px"
                letterSpacing="0.22em" textTransform="uppercase"
                color={MUTED} textDecoration="none"
                _hover={{ color: TEXT }} style={{ transition: "color 0.2s" }}
              >{label}</Box>
            ))}
          </Flex>
          <Cap>London · Est. 2025</Cap>
        </Flex>
      </Box>
    </motion.div>
  );
}

export default function Events() {
  return (
    <Box bg={BG} minHeight="100vh">
      <Box position="sticky" top={0} zIndex={10} bg={BG}><MkNavBar /></Box>
      <Box maxWidth="1280px" mx="auto" px={{ base: 6, md: 12 }}>
        <HeroSection />
        <UpcomingSection />
        <WhatToExpectSection />
        <PastSection />
        <StayInTouchSection />
      </Box>
      <Footer />
    </Box>
  );
}
