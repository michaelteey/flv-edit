import { Box, Flex, Text, Heading, Grid, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MkNavBar from "../components/NavBar";
import logo from "../assets/logo2.png";

const BG     = "#FDF6EE";
const DARK   = "#2a1e1a";
const TEXT   = "#403631";
const MUTED  = "#9a8878";
const BORDER = "#e8ddd5";
const ACCENT = "#EC6F51";
const CHARCOAL = "#403631";
const EMAIL  = "hello@vayaevents.com";
const CONTACT = "/contact";
const LINKTREE = "https://www.instagram.com/wearevaya_/";

const IMG = {
  hero:    "https://images.pexels.com/photos/31359311/pexels-photo-31359311.jpeg?auto=compress&cs=tinysrgb&w=1800",
  candles: "https://images.pexels.com/photos/7795755/pexels-photo-7795755.jpeg?auto=compress&cs=tinysrgb&w=1200",
  bowls:   "https://images.pexels.com/photos/11889669/pexels-photo-11889669.jpeg?auto=compress&cs=tinysrgb&w=1200",
  atmos:   "https://images.pexels.com/photos/7162250/pexels-photo-7162250.jpeg?auto=compress&cs=tinysrgb&w=1400",
  yoga:    "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg?auto=compress&cs=tinysrgb&w=1400",
  brands:  "https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&w=1200",
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

const offerings = [
  {
    num: "01", title: "Co-Branded Events", img: IMG.atmos,
    desc: "We integrate your brand authentically into our curated wellness experiences through product sampling and storytelling moments. This drives genuine audience engagement.",
    includes: ["Product placement & sampling", "Brand storytelling moments", "Audience engagement design", "Co-branded content creation", "Post-event social coverage"],
  },
  {
    num: "02", title: "Bespoke Activations", img: IMG.bowls,
    desc: "From intimate workshops to full multi-sensory brand experiences, we design and deliver activations from the ground up. You bring the brief. We bring the concept, curation, logistics, and execution — all rooted in genuine wellness.",
    includes: ["Concept & creative direction", "Venue sourcing & set design", "Practitioner & speaker curation", "Brand product integration", "Full event management"],
  },
  {
    num: "03", title: "Corporate Wellbeing", img: IMG.yoga,
    desc: "Help your team reset, recharge, and reconnect. We bring guided sound sessions, movement, and nervous system workshops directly into your workplace — designed to make a real difference, not just tick a box.",
    includes: ["Sound healing sessions", "Breathwork & nervous system workshops", "Guided movement & yoga", "Aromatherapy rituals", "Scalable to any team size"],
  },
];

const brandVoices = [
  {
    quote:  "Every detail was thoroughly considered. It made the whole process feel easy and enjoyable — we felt really supported as a brand.",
    author: "Misty Aromatherapy",
  },
  {
    quote:  "Thank you again for such a lovely collaboration for the International Women's Day sound bath — it was such a beautiful event and a pleasure to be a part of.",
    author: "Bon Charge",
  },
];

const process = [
  { n: "01", title: "Get in touch",   body: "Drop us an email or DM with a brief intro — who you are, what you're looking for and any other details you think we should know." },
  { n: "02", title: "Discovery call", body: "We'll jump on a call to understand your brand goals, audience and budget and just get to meet you. Actual conversations are always better than text." },
  { n: "03", title: "Proposal",       body: "We'll gather our thoughts, carefully design something for you or integrate you into one of our bespoke experiences and come back with a full proposal — a clear idea of what we'd create together." },
  { n: "04", title: "Co-creation",    body: "We refine together. Your input shapes the final experience so it genuinely reflects both our brands." },
  { n: "05", title: "Delivery",       body: "We handle everything from pre-event logistics to on-the-day coordination. You show up, we make it happen." },
];

const partners = [
  "Bon Charge", "Tenzing", "Ancient & Brave", "Brisco Super Mocha",
  "London Nootropics", "Living Things", "Misty Aromatherapy",
  "LSKD", "Frank", "Nila M.", "Poco Vino",
];

// ─── Sections ─────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <Box py={{ base: 20, md: 32 }}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
        <Cap>For Brands</Cap>
        <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          color={TEXT} lineHeight="1.05" mt={4} mb={8} maxWidth="680px"
        >
          Where conscious brands
          <br /><em>show up <Box as="span" color={ACCENT}>differently.</Box></em>
        </Heading>
      </motion.div>
      <motion.div {...fade(0.4)}>
        <Text fontFamily="'Raleway', sans-serif" fontSize="sm"
          color={MUTED} lineHeight="1.9" maxWidth="420px" mb={10}
        >
          Our audience is health-conscious, engaged and seeking experiences
          that genuinely mean something. We help you reach them in a way
          that is felt more profoundly.
        </Text>
        <Flex gap={8} wrap="wrap" align="center">
          <Box as="a" href={CONTACT}
            fontFamily="'Raleway', sans-serif" fontSize="10px"
            letterSpacing="0.22em" textTransform="uppercase"
            bg={ACCENT} color="white"
            px={6} py="12px" textDecoration="none"
            _hover={{ bg: "#EC6F51" }} style={{ transition: "background 0.2s" }}
          >
            Start a conversation
          </Box>
          <TextLink href="#offerings" muted>See what we offer</TextLink>
        </Flex>
      </motion.div>
    </Box>
  );
}

function WhyVayaSection() {
  const reasons = [
    { title: "Engaged audience",      body: "Our community comes to Vaya events with intention. They're not passive attendees — they genuinely seek out brands and experiences to enhance their wellbeing journey." },
    { title: "Authentic integration", body: "We don't plaster logos or hand out bags of stuff just because. Depending on the type of experience we work on and your involvement, your brand will be integrated in the overall atmosphere in a way that feels natural and considered." },
    { title: "Curated reach",         body: "Intimate events mean real impressions. The people in the room remember the brands that showed up." },
    { title: "Values-led",            body: "We only work with brands that align with what we believe in — health, wellness and genuine care for people." },
  ];
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Row label="Why Vaya">
        <Box>
          <Text fontFamily="'Raleway', sans-serif" fontSize="sm" color={MUTED}
            lineHeight="1.9" maxWidth="480px" mb={10}
          >
            We've hosted 15+ events and worked with 10+ brand partners.
            Here's why they love working with us.
          </Text>
          {reasons.map(({ title, body }, i) => (
            <motion.div key={title} {...fade(i * 0.08)}>
              <Flex borderBottom={`1px solid ${BORDER}`} py={5}
                gap={{ base: 4, md: 10 }}
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }}
                _first={{ borderTop: `1px solid ${BORDER}` }}
              >
                <Text fontFamily="'Playfair Display', serif" fontSize="lg" color={TEXT}
                  minWidth={{ md: "220px" }} flexShrink={0}>{title}</Text>
                <Text fontFamily="'Raleway', sans-serif" fontSize="sm" color={MUTED} lineHeight="1.85">{body}</Text>
              </Flex>
            </motion.div>
          ))}
        </Box>
      </Row>
    </motion.div>
  );
}

function OfferingsSection() {
  return (
    <Box id="offerings" style={{ scrollMarginTop: "80px" }}>
      <Rule />
      {offerings.map(({ num, title, desc, includes }, i) => (
        <motion.div key={num} {...fade(i * 0.08)}>
          <Grid templateColumns={{ base: "1fr", md: "180px 1fr" }}
            gap={{ base: 6, md: 16 }}
            borderBottom={`1px solid ${BORDER}`}
            py={{ base: 10, md: 14 }}
            _first={{ borderTop: `1px solid ${BORDER}` }}
          >
            <Box>
              <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
                letterSpacing="0.2em" color={MUTED} mb={2}>{num}</Text>
              <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
                fontSize={{ base: "xl", md: "2xl" }} color={TEXT} lineHeight="1.2"
              >{title}</Heading>
            </Box>
            <Box>
              <Text fontFamily="'Raleway', sans-serif" fontSize="sm"
                color={MUTED} lineHeight="1.9" mb={6}>{desc}</Text>
              <Flex wrap="wrap" gap={2}>
                {includes.map((item) => (
                  <Box key={item}
                    fontFamily="'Raleway', sans-serif" fontSize="9px"
                    letterSpacing="0.12em" textTransform="uppercase"
                    color={MUTED} border={`1px solid ${BORDER}`}
                    px={3} py="6px"
                  >{item}</Box>
                ))}
              </Flex>
            </Box>
          </Grid>
        </motion.div>
      ))}
    </Box>
  );
}

function BrandVoicesSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <FullBleed>
        <Box bg="#e8d9c8" px={{ base: 8, md: 16 }} py={{ base: 14, md: 20 }}>
          <Cap>Brand voices</Cap>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 16 }} mt={8}>
            {brandVoices.map(({ quote, author }, i) => (
              <motion.div key={author} {...fade(i * 0.15)}>
                <Box borderTop={`2px solid ${CHARCOAL}`} pt={6}>
                  <Text fontFamily="'Playfair Display', serif" fontStyle="italic"
                    fontSize={{ base: "lg", md: "xl" }} color={TEXT}
                    lineHeight="1.7" mb={5}
                  >
                    "{quote}"
                  </Text>
                  <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
                    letterSpacing="0.22em" textTransform="uppercase" color={MUTED}
                  >
                    — {author}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </Box>
      </FullBleed>
    </motion.div>
  );
}

function ProcessSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Row label="How it works">
        <Box>
          {process.map(({ n, title, body }, i) => (
            <motion.div key={n} {...fade(i * 0.07)}>
              <Flex borderBottom={`1px solid ${BORDER}`} py={5} gap={8}
                align={{ base: "flex-start", md: "center" }}
                _first={{ borderTop: `1px solid ${BORDER}` }}
              >
                <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
                  letterSpacing="0.2em" color={MUTED} minWidth="28px" flexShrink={0}
                >{n}</Text>
                <Box>
                  <Text fontFamily="'Playfair Display', serif" fontSize="lg" color={TEXT} mb={2}>{title}</Text>
                  <Text fontFamily="'Raleway', sans-serif" fontSize="sm" color={MUTED} lineHeight="1.85">{body}</Text>
                </Box>
              </Flex>
            </motion.div>
          ))}
        </Box>
      </Row>
    </motion.div>
  );
}

function PartnersSection() {
  return (
    <motion.div {...fade(0)}>
      <FullBleed>
        <Box bg="#e8d9c8" px={{ base: 8, md: 16 }} py={{ base: 12, md: 16 }}>
          <Cap>Brands we've worked with</Cap>
          <Flex wrap="wrap" align="baseline" mt={6} gap={0} rowGap={1}>
            {partners.map((name, i) => (
              <Box key={name} display="inline-flex" alignItems="baseline">
                <Text
                  fontFamily="'Playfair Display', serif"
                  fontWeight="400"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  color={TEXT}
                  lineHeight="1.4"
                >
                  {name}
                </Text>
                {i < partners.length - 1 && (
                  <Text
                    as="span"
                    fontFamily="'Raleway', sans-serif"
                    fontSize={{ base: "lg", md: "xl" }}
                    color={MUTED}
                    px={{ base: 2, md: 3 }}
                    lineHeight="1.4"
                  >·</Text>
                )}
              </Box>
            ))}
          </Flex>
        </Box>
      </FullBleed>
    </motion.div>
  );
}

function CTASection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <FullBleed>
        <Box bg={DARK} px={{ base: 8, md: 16 }} py={{ base: 16, md: 24 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 20 }} alignItems="center">
            <Box>
              <Cap light>Let's talk</Cap>
              <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                color="#FDF6EE" lineHeight="1.1" mt={5}
              >
                Ready to create<br /><em>something meaningful?</em>
              </Heading>
            </Box>
            <Box>
              <Text fontFamily="'Raleway', sans-serif" fontSize="sm"
                color="rgba(253,246,238,0.5)" lineHeight="1.9" mb={8}
              >
                Tell us about your brand, your goals, and what you're imagining.
                We'll come back with a concept. No obligation, no templates —
                just a real conversation about what we could create together.
              </Text>
              <Flex direction="column" gap={4} alignItems="flex-start">
                <Box as="a" href={CONTACT}
                  fontFamily="'Raleway', sans-serif" fontSize="10px"
                  letterSpacing="0.22em" textTransform="uppercase"
                  bg={ACCENT} color="white"
                  px={6} py="12px" textDecoration="none"
                  _hover={{ bg: "#EC6F51" }} style={{ transition: "background 0.2s" }}
                >
                  Start a conversation
                </Box>
                <TextLink href={LINKTREE} light muted>Or DM us on Instagram</TextLink>
              </Flex>
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
        <Box as="a" href="/" textDecoration="none">
          <Text fontFamily="'Playfair Display', serif" fontStyle="italic"
            fontSize="3xl" color={TEXT} letterSpacing="-0.01em" lineHeight="1"
          >vaya</Text>
        </Box>
        <Flex gap={8} wrap="wrap">
          {[["Home", "/"], ["Events", "/events"], ["About", "/about"], ["Contact", CONTACT]].map(([label, href]) => (
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

export default function ForBrands() {
  return (
    <Box bg={BG} minHeight="100vh">
      <Box position="sticky" top={0} zIndex={10} bg={BG}><MkNavBar /></Box>
      <Box maxWidth="1280px" mx="auto" px={{ base: 6, md: 12 }}>
        <HeroSection />
        <WhyVayaSection />
        <PartnersSection />
        <OfferingsSection />
        <BrandVoicesSection />
        <ProcessSection />
        <CTASection />
        <Footer />
      </Box>
    </Box>
  );
}
