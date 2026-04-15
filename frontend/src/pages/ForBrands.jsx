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
  hero:     "https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&w=1800",
  candles:  "https://images.pexels.com/photos/7795755/pexels-photo-7795755.jpeg?auto=compress&cs=tinysrgb&w=1200",
  bowls:    "https://images.pexels.com/photos/11889669/pexels-photo-11889669.jpeg?auto=compress&cs=tinysrgb&w=1200",
  atmos:    "https://images.pexels.com/photos/7162250/pexels-photo-7162250.jpeg?auto=compress&cs=tinysrgb&w=1400",
  yoga:     "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg?auto=compress&cs=tinysrgb&w=1400",
  forest:   "https://images.pexels.com/photos/31359311/pexels-photo-31359311.jpeg?auto=compress&cs=tinysrgb&w=1800",
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
      fontFamily="'Raleway', sans-serif" fontSize="9px"
      letterSpacing="0.28em" textTransform="uppercase"
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const offerings = [
  {
    num: "01",
    title: "Co-Branded Events",
    img: IMG.atmos,
    desc: "We integrate your brand authentically into our curated wellness experiences. Whether it's product sampling at a sound bath, a gifting moment at a yin yoga session, or a bespoke immersive ritual — your brand shows up in a way that feels natural, meaningful, and memorable.",
    includes: ["Product placement & sampling", "Brand storytelling moments", "Audience engagement design", "Co-branded content creation", "Post-event social coverage"],
  },
  {
    num: "02",
    title: "Bespoke Activations",
    img: IMG.bowls,
    desc: "From intimate workshops to full multi-sensory brand experiences, we design and deliver activations from the ground up. You bring the brief. We bring the concept, curation, logistics, and execution — all rooted in genuine wellness.",
    includes: ["Concept & creative direction", "Venue sourcing & set design", "Practitioner & speaker curation", "Brand product integration", "Full event management"],
  },
  {
    num: "03",
    title: "Workplace Wellbeing",
    img: IMG.yoga,
    desc: "Help your team reset, recharge, and reconnect. We bring guided sound sessions, movement, and nervous system workshops directly into your workplace — designed to make a real difference, not just tick a box.",
    includes: ["Sound healing sessions", "Breathwork & nervous system workshops", "Guided movement & yin yoga", "Aromatherapy rituals", "Scalable to any team size"],
  },
];

const partners = [
  "Boncharge", "Tenzing", "Virtue Drinks", "Ancient & Brave",
  "Brisco Wellness", "London Nootropics", "Drink Living Things",
  "Misty Aromatherapy", "Upcircle Beauty", "LSKD", "Biomel.life",
  "Frankfurt Food Co", "Alchemy Official", "Poco Vino",
];

const process = [
  { n: "01", title: "Get in touch",    body: "Drop us an email or DM with a brief intro — who you are, what you're looking for, and any timelines." },
  { n: "02", title: "Discovery call",  body: "We'll jump on a call to understand your brand, goals, audience, and budget. No templates, just a real conversation." },
  { n: "03", title: "Proposal",        body: "We'll come back with a tailored concept — a clear idea of what we'd create together and how it would work." },
  { n: "04", title: "Co-creation",     body: "We refine together. Your input shapes the final experience so it genuinely reflects both our brands." },
  { n: "05", title: "We deliver",      body: "We handle everything from logistics to on-the-day coordination. You show up, we make it happen." },
];

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <FullBleed>
      <Box
        position="relative" overflow="hidden"
        minHeight={{ base: "92vh", md: "88vh" }}
        display="flex" alignItems="center"
      >
        {/* Background image */}
        <Box
          as="img" src={IMG.forest} alt=""
          position="absolute" inset={0}
          width="100%" height="100%"
          objectFit="cover" display="block"
          style={{ filter: "brightness(0.32)" }}
        />

        {/* Content — constrained to match rest of page */}
        <Box
          position="relative" zIndex={1}
          width="100%" maxWidth="960px"
          mx="auto" px={{ base: 6, md: 12 }}
          py={{ base: 20, md: 28 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <Cap light>For Brands</Cap>
            <Heading
              fontFamily="'Playfair Display', serif"
              fontWeight="400"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              color="#f5f0eb" lineHeight="1.08"
              mt={5} mb={7} maxWidth="580px"
            >
              Where conscious brands
              <br /><em>show up differently.</em>
            </Heading>
          </motion.div>

          <motion.div {...fade(0.4)}>
            <Text
              fontFamily="'Raleway', sans-serif"
              fontSize="sm" color="rgba(245,240,235,0.5)"
              lineHeight="1.9" maxWidth="400px" mb={10}
            >
              Our audience is health-conscious, engaged, and seeking experiences
              that genuinely mean something. We help you reach them in a way
              that resonates — not just reaches.
            </Text>
            <Flex gap={8} wrap="wrap">
              <TextLink href={`mailto:${EMAIL}`} light>Start a conversation</TextLink>
              <TextLink href="#offerings" light muted>See what we offer</TextLink>
            </Flex>
          </motion.div>
        </Box>
      </Box>
    </FullBleed>
  );
}

function WhyVayaSection() {
  const reasons = [
    { title: "Engaged audience",     body: "Our community comes to Vaya events with intention. They're not passive attendees — they're genuinely open, present, and receptive." },
    { title: "Authentic integration", body: "We never plaster logos or hand out bags of stuff. Your brand becomes part of the experience in a way that feels natural and considered." },
    { title: "Curated reach",        body: "Small, intimate events mean real impressions. The people in the room remember the brands that showed up well." },
    { title: "Values-led",           body: "We only work with brands that align with our ethos — health, wellness, sustainability, and genuine care for people." },
  ];

  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Row label="Why Vaya">
        <Box>
          <Text
            fontFamily="'Raleway', sans-serif"
            fontSize="sm" color={MUTED} lineHeight="1.9"
            maxWidth="480px" mb={10}
          >
            We've hosted 12+ events with 500+ guests and worked with 14 brand
            partners. Here's why they keep coming back.
          </Text>
          {reasons.map(({ title, body }, i) => (
            <motion.div key={title} {...fade(i * 0.08)}>
              <Flex
                borderBottom={`1px solid ${BORDER}`} py={5}
                gap={{ base: 4, md: 10 }}
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }}
                _first={{ borderTop: `1px solid ${BORDER}` }}
              >
                <Text
                  fontFamily="'Playfair Display', serif"
                  fontSize="lg" color={TEXT}
                  minWidth={{ md: "220px" }} flexShrink={0}
                >
                  {title}
                </Text>
                <Text fontFamily="'Raleway', sans-serif" fontSize="sm" color={MUTED} lineHeight="1.85">
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

function OfferingsSection() {
  return (
    <Box id="offerings">
      <Rule />
      {offerings.map(({ num, title, img, desc, includes }, i) => (
        <motion.div key={num} {...fade(0)}>
          <Box borderBottom={`1px solid ${BORDER}`} py={{ base: 14, md: 20 }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 20 }}>
              {/* Text side — alternates */}
              <Box order={{ base: 1, md: i % 2 === 0 ? 1 : 2 }}>
                <Flex align="center" gap={4} mb={6}>
                  <Text
                    fontFamily="'Raleway', sans-serif"
                    fontSize="9px" letterSpacing="0.2em" color={MUTED}
                  >
                    {num}
                  </Text>
                  <Box width="32px" borderTop={`1px solid ${BORDER}`} />
                </Flex>

                <Heading
                  fontFamily="'Playfair Display', serif"
                  fontWeight="400" fontSize={{ base: "2xl", md: "3xl" }}
                  color={TEXT} lineHeight="1.2" mb={5}
                >
                  {title}
                </Heading>

                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="sm" color={MUTED} lineHeight="1.9" mb={8}
                >
                  {desc}
                </Text>

                <Box borderTop={`1px solid ${BORDER}`} pt={6}>
                  <Cap>Includes</Cap>
                  <Flex direction="column" gap={2} mt={4}>
                    {includes.map((item) => (
                      <Flex key={item} align="center" gap={3}>
                        <Box
                          width="4px" height="4px" borderRadius="full"
                          bg={MUTED} flexShrink={0}
                        />
                        <Text fontFamily="'Raleway', sans-serif" fontSize="xs" color={MUTED}>
                          {item}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                </Box>
              </Box>

              {/* Image side */}
              <Box overflow="hidden" order={{ base: 0, md: i % 2 === 0 ? 2 : 1 }}>
                <motion.div
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: "easeOut" }}
                >
                  <Box
                    as="img" src={img} alt={title}
                    width="100%" height={{ base: "60vw", md: "420px" }}
                    objectFit="cover" display="block"
                  />
                </motion.div>
              </Box>
            </SimpleGrid>
          </Box>
        </motion.div>
      ))}
    </Box>
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
              <Flex
                borderBottom={`1px solid ${BORDER}`} py={5} gap={8}
                align={{ base: "flex-start", md: "center" }}
                _first={{ borderTop: `1px solid ${BORDER}` }}
              >
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="9px" letterSpacing="0.2em" color={MUTED}
                  minWidth="28px" flexShrink={0}
                >
                  {n}
                </Text>
                <Box>
                  <Text
                    fontFamily="'Playfair Display', serif"
                    fontSize="lg" color={TEXT} mb={2}
                  >
                    {title}
                  </Text>
                  <Text fontFamily="'Raleway', sans-serif" fontSize="sm" color={MUTED} lineHeight="1.85">
                    {body}
                  </Text>
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
      <Rule />
      <Row label="Brands we've worked with" py={12}>
        <Flex wrap="wrap" gap={3}>
          {partners.map((b) => (
            <Box
              key={b}
              fontFamily="'Raleway', sans-serif"
              fontSize="11px" letterSpacing="0.06em"
              color={MUTED} border={`1px solid ${BORDER}`}
              px={4} py="10px"
            >
              {b}
            </Box>
          ))}
        </Flex>
      </Row>
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
              <Heading
                fontFamily="'Playfair Display', serif"
                fontWeight="400"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                color="#f5f0eb" lineHeight="1.1" mt={5}
              >
                Ready to create
                <br /><em>something meaningful?</em>
              </Heading>
            </Box>
            <Box>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="sm" color="rgba(245,240,235,0.5)"
                lineHeight="1.9" mb={8}
              >
                Tell us about your brand, your goals, and what you're
                imagining. We'll come back with a concept. No obligation,
                no templates — just a real conversation about what we
                could create together.
              </Text>
              <Flex direction="column" gap={4} alignItems="flex-start">
                <TextLink href={`mailto:${EMAIL}`} light>{EMAIL}</TextLink>
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
        <Text fontFamily="'Playfair Display', serif" fontStyle="italic" fontSize="xl" color={TEXT}>
          Vaya
        </Text>
        <Flex gap={8} wrap="wrap">
          {[["Home", "/"], ["Events", "/events"], ["About", "/about"], ["Contact", `mailto:${EMAIL}`]].map(([label, href]) => (
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

export default function ForBrands() {
  return (
    <Box bg={BG} minHeight="100vh">
      <Box position="sticky" top={0} zIndex={10} bg={BG}>
        <MkNavBar />
      </Box>
      <HeroSection />
      <Box maxWidth="960px" mx="auto" px={{ base: 6, md: 12 }}>
        <WhyVayaSection />
        <OfferingsSection />
        <ProcessSection />
        <PartnersSection />
        <CTASection />
        <Footer />
      </Box>
    </Box>
  );
}
