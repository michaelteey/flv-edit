import { Box, Flex, Text, Heading, Grid, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MkNavBar from "../components/NavBar";

// ─── Tokens ───────────────────────────────────────────────────────────────────
const BG     = "#f5f0eb";
const DARK   = "#141210";
const TEXT   = "#1a1a1a";
const MUTED  = "#999";
const BORDER = "#ddd5cb";
const LINKTREE = "https://linktr.ee/wearevaya_?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
const EMAIL    = "hello@vayaevents.com";

// ─── Imagery (Pexels) ─────────────────────────────────────────────────────────
const IMG = {
  heroBanner:    "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg?auto=compress&cs=tinysrgb&w=1800",
  aboutPortrait: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1200",
  founderImg:    "https://images.pexels.com/photos/3756168/pexels-photo-3756168.jpeg?auto=compress&cs=tinysrgb&w=1200",
  eventsAtmos:   "https://images.pexels.com/photos/7162250/pexels-photo-7162250.jpeg?auto=compress&cs=tinysrgb&w=1600",
  soundBowls:    "https://images.pexels.com/photos/11889669/pexels-photo-11889669.jpeg?auto=compress&cs=tinysrgb&w=1400",
  candles:       "https://images.pexels.com/photos/7795755/pexels-photo-7795755.jpeg?auto=compress&cs=tinysrgb&w=1200",
  brandsImg:     "https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&w=1200",
  background:    "https://images.pexels.com/photos/31359311/pexels-photo-31359311.jpeg?auto=compress&cs=tinysrgb&w=1800",
};

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

// ─── Primitives ───────────────────────────────────────────────────────────────
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

function Rule() {
  return <Box borderTop={`1px solid ${BORDER}`} />;
}

function TextLink({ href, children, muted = false, light = false }) {
  const color = light ? "rgba(245,240,235,0.6)" : muted ? MUTED : TEXT;
  const borderColor = light ? "rgba(245,240,235,0.3)" : muted ? BORDER : TEXT;
  return (
    <Box
      as="a"
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      fontFamily="'Raleway', sans-serif"
      fontSize="10px"
      letterSpacing="0.22em"
      textTransform="uppercase"
      color={color}
      textDecoration="none"
      borderBottom={`1px solid ${borderColor}`}
      pb="2px"
      _hover={{ opacity: 0.6 }}
      style={{ transition: "opacity 0.2s" }}
    >
      {children}
    </Box>
  );
}

// Breaks out of the max-width container
function FullBleed({ children }) {
  return (
    <Box mx={{ base: -6, md: -12 }}>
      {children}
    </Box>
  );
}

// Two-col label row
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

// ─── Hero ─────────────────────────────────────────────────────────────────────
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
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            color={TEXT}
            lineHeight="1.05"
            mb={8}
            maxWidth="620px"
          >
            Intentional wellness
            <br />
            <em>experiences in London.</em>
          </Heading>
        </motion.div>

        <motion.div {...fade(0.4)}>
          <Text
            fontFamily="'Raleway', sans-serif"
            fontSize="sm"
            color={MUTED}
            lineHeight="1.85"
            maxWidth="380px"
            mb={10}
          >
            Sensory-led events that help you reconnect — with your body,
            your mind, and with others. Sound healing, yin yoga, red light
            therapy, aromatherapy, and more.
          </Text>
          <Flex gap={8} align="center" wrap="wrap">
            <TextLink href={LINKTREE}>Book an event</TextLink>
            <TextLink href={`mailto:${EMAIL}`} muted>Work with us</TextLink>
          </Flex>
        </motion.div>
      </Box>

      <FullBleed>
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box
            as="img"
            src={IMG.heroBanner}
            alt="Vaya wellness experience"
            width="100%"
            height={{ base: "55vw", md: "62vh" }}
            objectFit="cover"
            display="block"
          />
        </motion.div>
      </FullBleed>
    </>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection() {
  const stats = [
    { n: "12+",  label: "Events hosted" },
    { n: "500+", label: "Guests welcomed" },
    { n: "14",   label: "Brand partners" },
    { n: "2024", label: "Est. London" },
  ];

  return (
    <motion.div {...fade(0)}>
      <Rule />

      {/* Full-bleed split: image left, portrait right */}
      <FullBleed>
        <SimpleGrid columns={{ base: 1, md: 2 }} minHeight={{ md: "560px" }}>
          <Box overflow="hidden">
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ height: "100%" }}
            >
              <Box
                as="img"
                src={IMG.aboutPortrait}
                alt="Vaya founder"
                width="100%"
                height={{ base: "70vw", md: "100%" }}
                objectFit="cover"
                display="block"
              />
            </motion.div>
          </Box>

          <Box
            bg="#ede8e1"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            px={{ base: 8, md: 14 }}
            py={{ base: 12, md: 16 }}
            gap={8}
          >
            <motion.div {...fade(0.1)}>
              <Cap>Our story</Cap>
            </motion.div>
            <motion.div {...fade(0.2)}>
              <Heading
                fontFamily="'Playfair Display', serif"
                fontWeight="400"
                fontSize={{ base: "2xl", md: "3xl" }}
                color={TEXT}
                lineHeight="1.3"
                mb={5}
              >
                Founded on the belief that
                <br />
                <em>self-care is a journey,</em>
                <br />
                not a destination.
              </Heading>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="sm"
                color={MUTED}
                lineHeight="1.9"
                mb={5}
              >
                Vaya was created by Flavia from a deep passion for wellness
                and meaningful connection. Every experience is designed with
                intention — to nurture calm, foster community, and remind
                people to slow down.
              </Text>
              <TextLink href="/about" muted>Meet the team</TextLink>
            </motion.div>

            {/* Stats */}
            <motion.div {...fade(0.3)}>
              <Box borderTop={`1px solid ${BORDER}`} pt={8}>
                <SimpleGrid columns={2} gap={6}>
                  {stats.map(({ n, label }) => (
                    <Box key={label}>
                      <Text
                        fontFamily="'Playfair Display', serif"
                        fontSize="2xl"
                        color={TEXT}
                        lineHeight="1"
                        mb={1}
                      >
                        {n}
                      </Text>
                      <Cap>{label}</Cap>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </motion.div>
          </Box>
        </SimpleGrid>
      </FullBleed>
    </motion.div>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  { name: "Sound Healing",       desc: "Restorative gong baths & vibrational therapy" },
  { name: "Yin Yoga & Movement", desc: "Gentle somatic flow for the nervous system" },
  { name: "Red Light Therapy",   desc: "Science-backed cellular restoration" },
  { name: "Aromatherapy",        desc: "Scent-led sensory rituals & workshops" },
  { name: "Brand Activations",   desc: "Immersive co-created experiences" },
  { name: "Community Events",    desc: "Ongoing London wellness series" },
];

function ServicesSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Row label="What we offer">
        <Box>
          {services.map(({ name, desc }, i) => (
            <Flex
              key={name}
              borderBottom={`1px solid ${BORDER}`}
              py={5}
              align="center"
              justify="space-between"
              gap={6}
              role="group"
              _first={{ borderTop: `1px solid ${BORDER}` }}
            >
              <Flex align="baseline" gap={5} flex={1}>
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="9px"
                  color={MUTED}
                  letterSpacing="0.2em"
                  minWidth="20px"
                  flexShrink={0}
                >
                  {String(i + 1).padStart(2, "0")}
                </Text>
                <Box>
                  <Text
                    fontFamily="'Playfair Display', serif"
                    fontSize={{ base: "md", md: "lg" }}
                    color={TEXT}
                    mb="2px"
                  >
                    {name}
                  </Text>
                  <Text
                    fontFamily="'Raleway', sans-serif"
                    fontSize="xs"
                    color={MUTED}
                    display={{ base: "none", md: "block" }}
                  >
                    {desc}
                  </Text>
                </Box>
              </Flex>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="sm"
                color={MUTED}
                opacity={0}
                _groupHover={{ opacity: 1 }}
                style={{ transition: "opacity 0.2s" }}
                flexShrink={0}
              >
                →
              </Text>
            </Flex>
          ))}
        </Box>
      </Row>
    </motion.div>
  );
}

// ─── Events ───────────────────────────────────────────────────────────────────
const events = [
  { date: "01 Feb 2026", name: "Flow into Stillness",  type: "Yin Yoga + Sound Healing",     past: true  },
  { date: "08 Mar 2026", name: "Red Light Immersion",  type: "Sound + Red Light Therapy",    past: true  },
  { date: "29 Mar 2026", name: "Scent meets Sound",    type: "Aromatherapy + Sound Healing", past: false },
  { date: "10 Apr 2026", name: "Sound Series Finale",  type: "Live Vocals + Sound Bath",     past: false },
];

function EventsSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />

      <FullBleed>
        <SimpleGrid columns={{ base: 1, md: 2 }} minHeight={{ md: "480px" }}>
          {/* Dark text panel left */}
          <Box
            bg={DARK}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            px={{ base: 8, md: 14 }}
            py={{ base: 12, md: 16 }}
            gap={6}
          >
            <Cap light>Spring / Summer 2026</Cap>
            <Heading
              fontFamily="'Playfair Display', serif"
              fontWeight="400"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              color="#f5f0eb"
              lineHeight="1.1"
            >
              Our next
              <br />
              <em>experiences.</em>
            </Heading>
            <Text
              fontFamily="'Raleway', sans-serif"
              fontSize="sm"
              color="rgba(245,240,235,0.5)"
              lineHeight="1.85"
              maxWidth="320px"
            >
              Intimate, curated events across London. Each one designed to
              help you slow down, feel more, and leave lighter.
            </Text>
            <TextLink href={LINKTREE} light>View all on Instagram</TextLink>
          </Box>

          {/* Image right */}
          <Box overflow="hidden">
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ height: "100%" }}
            >
              <Box
                as="img"
                src={IMG.eventsAtmos}
                alt="Vaya event atmosphere"
                width="100%"
                height={{ base: "70vw", md: "100%" }}
                objectFit="cover"
                display="block"
              />
            </motion.div>
          </Box>
        </SimpleGrid>
      </FullBleed>

      <Row label="Events">
        <Box>
          {events.map(({ date, name, type, past }, i) => (
            <motion.div key={name} {...fade(i * 0.06)}>
              <Box
                as="a"
                href={LINKTREE}
                target="_blank"
                display="block"
                textDecoration="none"
                role="group"
              >
                <Flex
                  borderBottom={`1px solid ${BORDER}`}
                  py={5}
                  align="center"
                  justify="space-between"
                  gap={4}
                  wrap={{ base: "wrap", md: "nowrap" }}
                  _first={{ borderTop: `1px solid ${BORDER}` }}
                  _hover={{ bg: "rgba(0,0,0,0.02)" }}
                  style={{ transition: "background 0.15s" }}
                >
                  <Box flex={1}>
                    <Text
                      fontFamily="'Playfair Display', serif"
                      fontSize={{ base: "md", md: "lg" }}
                      color={past ? MUTED : TEXT}
                      mb="3px"
                    >
                      {name}
                    </Text>
                    <Text fontFamily="'Raleway', sans-serif" fontSize="xs" color={MUTED}>
                      {type}
                    </Text>
                  </Box>

                  <Flex align="center" gap={6} flexShrink={0}>
                    <Text
                      fontFamily="'Raleway', sans-serif"
                      fontSize="xs"
                      color={MUTED}
                      letterSpacing="0.06em"
                      display={{ base: "none", md: "block" }}
                    >
                      {date}
                    </Text>
                    {past ? (
                      <Text
                        fontFamily="'Raleway', sans-serif"
                        fontSize="9px"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        color={MUTED}
                        opacity={0.45}
                      >
                        Past
                      </Text>
                    ) : (
                      <Box
                        bg={TEXT}
                        color={BG}
                        px={4}
                        py="8px"
                        fontFamily="'Raleway', sans-serif"
                        fontSize="9px"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                      >
                        Book →
                      </Box>
                    )}
                  </Flex>
                </Flex>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Row>
    </motion.div>
  );
}

// ─── For Brands ───────────────────────────────────────────────────────────────
const brandOfferings = [
  {
    title: "Co-Branded Events",
    body:  "We integrate your brand authentically into our curated wellness experiences — product sampling, storytelling moments, and genuine audience engagement.",
  },
  {
    title: "Bespoke Activations",
    body:  "From intimate workshops to multi-sensory brand experiences, we design and deliver end-to-end activations tailored to your audience and values.",
  },
  {
    title: "Workplace Wellbeing",
    body:  "Help your team reset and reconnect. We bring sound healing, movement, and nervous system workshops directly into your space.",
  },
];

const brandPartners = [
  "Boncharge", "Tenzing", "Virtue Drinks", "Ancient & Brave",
  "Brisco Wellness", "London Nootropics", "Drink Living Things",
  "Misty Aromatherapy", "Upcircle Beauty", "LSKD", "Biomel.life",
  "Frankfurt Food Co", "Alchemy Official", "Poco Vino",
];

function ForBrandsSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />

      {/* Dark full-bleed panel */}
      <FullBleed>
        <Box bg={DARK}>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            {/* Left: pitch */}
            <Box
              px={{ base: 8, md: 14 }}
              py={{ base: 14, md: 20 }}
              display="flex"
              flexDirection="column"
              gap={10}
            >
              <Box>
                <Cap light>For Brands</Cap>
                <Heading
                  fontFamily="'Playfair Display', serif"
                  fontWeight="400"
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  color="#f5f0eb"
                  lineHeight="1.1"
                  mt={5}
                  mb={6}
                >
                  Where conscious brands
                  <br />
                  <em>show up differently.</em>
                </Heading>
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="sm"
                  color="rgba(245,240,235,0.5)"
                  lineHeight="1.9"
                  maxWidth="400px"
                >
                  We partner with brands that believe in authentic connection.
                  Our audience is engaged, health-conscious, and seeking
                  experiences that mean something. We help you show up in a
                  way that resonates — not just reaches.
                </Text>
              </Box>

              {/* Three offering types */}
              <Box borderTop="1px solid rgba(245,240,235,0.1)" pt={8}>
                <Flex direction="column" gap={0}>
                  {brandOfferings.map(({ title, body }, i) => (
                    <motion.div key={title} {...fade(i * 0.1)}>
                      <Box
                        borderBottom="1px solid rgba(245,240,235,0.08)"
                        py={5}
                      >
                        <Text
                          fontFamily="'Playfair Display', serif"
                          fontSize="md"
                          color="#f5f0eb"
                          mb={2}
                        >
                          {title}
                        </Text>
                        <Text
                          fontFamily="'Raleway', sans-serif"
                          fontSize="xs"
                          color="rgba(245,240,235,0.4)"
                          lineHeight="1.85"
                          maxWidth="360px"
                        >
                          {body}
                        </Text>
                      </Box>
                    </motion.div>
                  ))}
                </Flex>
              </Box>

              <Box>
                <TextLink href={`mailto:${EMAIL}`} light>Get in touch — {EMAIL}</TextLink>
              </Box>
            </Box>

            {/* Right: stacked images */}
            <Box display="flex" flexDirection="column">
              <Box overflow="hidden" flex={1}>
                <motion.div
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  style={{ height: "100%" }}
                >
                  <Box
                    as="img"
                    src={IMG.brandsImg}
                    alt="Luxury brand products"
                    width="100%"
                    height={{ base: "60vw", md: "50%" }}
                    objectFit="cover"
                    display="block"
                    minHeight={{ md: "280px" }}
                  />
                </motion.div>
              </Box>
              <Box overflow="hidden" flex={1}>
                <Box
                  as="img"
                  src={IMG.candles}
                  alt="Aromatherapy products"
                  width="100%"
                  height={{ base: "60vw", md: "50%" }}
                  objectFit="cover"
                  display="block"
                  minHeight={{ md: "280px" }}
                />
              </Box>
            </Box>
          </SimpleGrid>

          {/* Partner brands strip */}
          <Box
            borderTop="1px solid rgba(245,240,235,0.08)"
            px={{ base: 8, md: 14 }}
            py={8}
          >
            <Flex align="center" gap={6} wrap="wrap">
              <Cap light>Partners</Cap>
              <Flex wrap="wrap" gap={{ base: 4, md: 6 }}>
                {brandPartners.map((b) => (
                  <Text
                    key={b}
                    fontFamily="'Raleway', sans-serif"
                    fontSize="10px"
                    letterSpacing="0.1em"
                    color="rgba(245,240,235,0.25)"
                  >
                    {b}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </Box>
        </Box>
      </FullBleed>
    </motion.div>
  );
}

// ─── Visual Break ─────────────────────────────────────────────────────────────
function VisualBreak() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <FullBleed>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={0}>
          <Box
            as="img"
            src={IMG.soundBowls}
            alt="Sound bowls"
            width="100%"
            height={{ base: "60vw", md: "360px" }}
            objectFit="cover"
            display="block"
          />
          <Box
            bg="#1a1714"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={{ base: 10, md: 14 }}
            minHeight={{ base: "auto", md: "360px" }}
          >
            <Text
              fontFamily="'Playfair Display', serif"
              fontStyle="italic"
              fontSize={{ base: "xl", md: "xl" }}
              color="rgba(245,240,235,0.75)"
              lineHeight="1.7"
              textAlign="center"
            >
              "We create moments
              <br />where people can pause,
              <br />breathe, and simply <em>be.</em>"
            </Text>
          </Box>
          <Box
            as="img"
            src={IMG.founderImg}
            alt="Vaya founder"
            width="100%"
            height={{ base: "60vw", md: "360px" }}
            objectFit="cover"
            objectPosition="top"
            display="block"
          />
        </SimpleGrid>
      </FullBleed>
    </motion.div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:  "Absolutely loved this slow, intentional morning for myself — calming scents, gentle sounds, warm drinks, and beautiful community.",
    source: "Sound & Aromatherapy Workshop",
  },
  {
    quote:  "Such an amazing way to reconnect with myself and my emotions. That felt truly healing, exactly what I needed.",
    source: "Sound Healing Series",
  },
];

function TestimonialsSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <FullBleed>
        <Box position="relative" overflow="hidden">
          <Box
            as="img"
            src={IMG.background}
            alt="Misty forest"
            width="100%"
            height={{ base: "80vw", md: "520px" }}
            objectFit="cover"
            display="block"
            style={{ filter: "brightness(0.5)" }}
          />
          <Box
            position="absolute"
            inset={0}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            p={{ base: 8, md: 16 }}
            gap={10}
          >
            <Cap light>Kind words</Cap>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 16 }}>
              {testimonials.map((t, i) => (
                <motion.div key={i} {...fade(i * 0.15)}>
                  <Text
                    fontFamily="'Playfair Display', serif"
                    fontStyle="italic"
                    fontSize={{ base: "md", md: "lg" }}
                    color="rgba(245,240,235,0.9)"
                    lineHeight="1.75"
                    mb={4}
                  >
                    "{t.quote}"
                  </Text>
                  <Text
                    fontFamily="'Raleway', sans-serif"
                    fontSize="9px"
                    letterSpacing="0.22em"
                    textTransform="uppercase"
                    color="rgba(245,240,235,0.4)"
                  >
                    — {t.source}
                  </Text>
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </FullBleed>
    </motion.div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Flex
        py={10}
        justify="space-between"
        align="center"
        wrap="wrap"
        gap={4}
      >
        <Text
          fontFamily="'Playfair Display', serif"
          fontStyle="italic"
          fontSize="xl"
          color={TEXT}
        >
          Vaya
        </Text>
        <Flex gap={8} wrap="wrap">
          {[
            ["Instagram", LINKTREE],
            ["Events", "/events"],
            ["About", "/about"],
            ["Contact", `mailto:${EMAIL}`],
          ].map(([label, href]) => (
            <Box
              key={label}
              as="a"
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              fontFamily="'Raleway', sans-serif"
              fontSize="9px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color={MUTED}
              textDecoration="none"
              _hover={{ color: TEXT }}
              style={{ transition: "color 0.2s" }}
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Box bg={BG} minHeight="100vh">
      <Box position="sticky" top={0} zIndex={10} bg={BG}>
        <MkNavBar />
      </Box>
      <Box maxWidth="960px" mx="auto" px={{ base: 6, md: 12 }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <EventsSection />
        <ForBrandsSection />
        <VisualBreak />
        <TestimonialsSection />
        <Footer />
      </Box>
    </Box>
  );
}
