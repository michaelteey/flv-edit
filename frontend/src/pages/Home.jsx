import { Box, Flex, Text, Heading, SimpleGrid, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MkNavBar from "../components/NavBar";
import flow from "../assets/flowintostill.jpeg";

// ─── Design tokens ────────────────────────────────────────────────────────────
const BG     = "#f3ede6";
const DARK   = "#1c1916";
const TEXT   = "#1a1a1a";
const MUTED  = "#8a8078";
const BORDER = "#e0d5cb";
const BTN    = "#c8b5d0"; // dusty lavender — inspired by Self Love Lab
const LINKTREE = "https://linktr.ee/wearevaya_?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
const EMAIL  = "hello@vayaevents.com";

// ─── Shared micro-components ─────────────────────────────────────────────────
function Label({ dark = false, mb = 5, children }) {
  return (
    <Text
      fontSize="10px"
      fontFamily="'Raleway', sans-serif"
      letterSpacing="0.28em"
      textTransform="uppercase"
      color={dark ? "rgba(255,255,255,0.35)" : MUTED}
      mb={mb}
    >
      {children}
    </Text>
  );
}

function Display({ italic, dark, fontSize, children, ...rest }) {
  return (
    <Heading
      fontFamily="'Playfair Display', serif"
      fontWeight="400"
      fontStyle={italic ? "italic" : "normal"}
      color={dark ? "#f3ede6" : TEXT}
      lineHeight="0.95"
      fontSize={fontSize}
      {...rest}
    >
      {children}
    </Heading>
  );
}

function Body({ dark = false, children, ...rest }) {
  return (
    <Text
      fontFamily="'Raleway', sans-serif"
      fontSize="sm"
      color={dark ? "rgba(255,255,255,0.5)" : MUTED}
      lineHeight="1.9"
      {...rest}
    >
      {children}
    </Text>
  );
}

function SoftBtn({ href, outline = false, dark = false, children }) {
  const base = {
    as: "a",
    href,
    display: "inline-block",
    textDecoration: "none",
    px: 8,
    py: "14px",
    fontSize: "10px",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "500",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    style: { transition: "all 0.2s" },
  };
  if (outline) return (
    <Box
      {...base}
      border={`1px solid ${dark ? "rgba(255,255,255,0.22)" : BORDER}`}
      color={dark ? "rgba(255,255,255,0.6)" : TEXT}
      _hover={{ bg: dark ? "rgba(255,255,255,0.05)" : "rgba(200,181,208,0.12)", borderColor: dark ? "rgba(255,255,255,0.45)" : MUTED }}
    >
      {children}
    </Box>
  );
  return (
    <Box
      {...base}
      bg={dark ? "#f3ede6" : BTN}
      color={dark ? DARK : TEXT}
      _hover={{ opacity: 0.82 }}
    >
      {children}
    </Box>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, delay },
});

// ─── 1. HERO ─────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} minHeight={{ base: "auto", md: "calc(100vh - 88px)" }}>
      {/* Image */}
      <Box overflow="hidden" minHeight={{ base: "70vw", md: "auto" }}>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ height: "100%" }}
        >
          <Image src={flow} objectFit="cover" height="100%" width="100%" />
        </motion.div>
      </Box>

      {/* Text panel */}
      <Flex
        direction="column"
        justify="flex-end"
        px={{ base: 8, md: 14 }}
        pb={{ base: 14, md: 24 }}
        pt={{ base: 12, md: 0 }}
        bg={BG}
      >
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <Label mb={8}>London · Wellness Events · Est. 2024</Label>

          <Display fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }} mb={1}>
            Self-care is
          </Display>
          <Display italic fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }} mb={10}>
            a journey.
          </Display>

          <Body maxWidth="340px" mb={10}>
            Intentional, sensory-led wellness experiences in London — for those
            who believe moments should be felt, not just seen.
          </Body>

          <Flex gap={3} wrap="wrap">
            <SoftBtn href="/events">Explore Events</SoftBtn>
            <SoftBtn href="/about" outline>Our Story</SoftBtn>
          </Flex>
        </motion.div>
      </Flex>
    </SimpleGrid>
  );
}

// ─── 2. PATH SPLIT ───────────────────────────────────────────────────────────
function PathSplitSection() {
  const panel = (href, label, heading, body, dark) => (
    <Box
      as="a"
      href={href}
      display="block"
      textDecoration="none"
      position="relative"
      overflow="hidden"
      minHeight={{ base: "56vw", md: "520px" }}
      role="group"
      cursor="pointer"
    >
      {/* Background */}
      <Box
        position="absolute"
        inset={0}
        bg={dark ? DARK : "#e8ddd4"}
        _groupHover={{ opacity: 0.92 }}
        style={{ transition: "opacity 0.3s" }}
      />

      {/* Subtle image overlay on the community side */}
      {!dark && (
        <Box position="absolute" inset={0}>
          <Image src={flow} objectFit="cover" height="100%" width="100%" opacity={0.18} />
        </Box>
      )}

      {/* Content */}
      <Flex
        position="relative"
        zIndex={1}
        direction="column"
        justify="flex-end"
        height="100%"
        p={{ base: 8, md: 14 }}
        pb={{ base: 10, md: 16 }}
        gap={5}
      >
        <Label dark={dark} mb={3}>{label}</Label>
        <Display
          dark={dark}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          lineHeight="1.1"
        >
          {heading}
        </Display>
        <Body dark={dark} maxWidth="320px">{body}</Body>
        <Box
          display="inline-flex"
          alignItems="center"
          gap={3}
          mt={2}
          fontSize="10px"
          fontFamily="'Raleway', sans-serif"
          fontWeight="500"
          letterSpacing="0.22em"
          textTransform="uppercase"
          color={dark ? "rgba(243,237,230,0.7)" : TEXT}
          _groupHover={{ gap: "20px" }}
          style={{ transition: "all 0.3s" }}
        >
          {dark ? "Work With Us" : "Explore Events"}
          <Box
            as="span"
            display="inline-block"
            borderTop="1px solid currentColor"
            width="32px"
            _groupHover={{ width: "52px" }}
            style={{ transition: "width 0.3s" }}
          />
        </Box>
      </Flex>
    </Box>
  );

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} borderTop={`1px solid ${BORDER}`}>
      {panel("/events",  "For You",    <>For the<br /><em>community.</em></>,   "A space to recharge, reflect and connect. Sound baths, movement, sensory rituals — curated for you.", false)}
      {panel("/about",  "For Brands", <>For the<br /><em>brands.</em></>,       "A platform for authentic storytelling. Co-create immersive experiences that genuinely connect.", true)}
    </SimpleGrid>
  );
}

// ─── 3. MANIFESTO ────────────────────────────────────────────────────────────
function ManifestoSection() {
  return (
    <Box
      bg={BG}
      borderTop={`1px solid ${BORDER}`}
      px={{ base: 8, md: 16 }}
      py={{ base: 20, md: 28 }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 14, md: 24 }}>
        {/* Left: big pull quote */}
        <motion.div {...fadeUp(0)}>
          <Label mb={7}>Our mission</Label>
          <Display
            italic
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            lineHeight="1.25"
          >
            "We create intentional, sensory-led wellness experiences that help
            you reconnect — with your body, your mind, and with others."
          </Display>
          <Text
            fontFamily="'Playfair Display', serif"
            fontSize="7xl"
            fontWeight="400"
            color="#e6d5cb"
            lineHeight="1"
            mt={10}
            userSelect="none"
          >
            01
          </Text>
        </motion.div>

        {/* Right: body + CTA */}
        <motion.div {...fadeUp(0.15)}>
          <Box borderTop={`1px solid ${TEXT}`} pt={7} mb={8}>
            <Body mb={5}>
              From restorative movement and mindful workshops to immersive
              environments and co-branded activations, every experience is
              designed to nourish the body, calm the mind and leave an impact.
            </Body>
            <Body>
              For our community: a space to recharge, reflect and connect.
              For brands: a platform for authentic storytelling and meaningful
              engagement.
            </Body>
          </Box>
          <SoftBtn href="/events">Join the journey</SoftBtn>
        </motion.div>
      </SimpleGrid>
    </Box>
  );
}

// ─── 3. OFFERINGS ────────────────────────────────────────────────────────────
const offerings = [
  { num: "01", name: "Sound Healing",        desc: "Restorative vibration & gong baths" },
  { num: "02", name: "Yin Yoga & Movement",  desc: "Gentle flow & somatic practice" },
  { num: "03", name: "Red Light Therapy",    desc: "Nervous system reset" },
  { num: "04", name: "Aromatherapy",         desc: "Scent-led sensory rituals" },
  { num: "05", name: "Brand Activations",    desc: "Conscious co-creation with brands" },
  { num: "06", name: "Community Events",     desc: "Ongoing London series" },
];

function OfferingsSection() {
  return (
    <Box
      bg={BG}
      borderTop={`1px solid ${BORDER}`}
      px={{ base: 8, md: 16 }}
      py={{ base: 16, md: 24 }}
    >
      <Flex justify="space-between" align="flex-end" mb={12} wrap="wrap" gap={4}>
        <motion.div {...fadeUp(0)}>
          <Label mb={4}>What we do</Label>
          <Display fontSize={{ base: "3xl", md: "5xl" }}>
            Six pathways<br />
            <em>to wellness.</em>
          </Display>
        </motion.div>
      </Flex>

      <Box>
        {offerings.map(({ num, name, desc }, i) => (
          <motion.div key={num} {...fadeUp(i * 0.07)}>
            <Flex
              borderTop={`1px solid ${BORDER}`}
              py={5}
              align="center"
              justify="space-between"
              gap={6}
              role="group"
              _hover={{ bg: "rgba(200,181,208,0.09)" }}
              style={{ transition: "background 0.2s" }}
              _last={{ borderBottom: `1px solid ${BORDER}` }}
            >
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="9px"
                letterSpacing="0.2em"
                color={MUTED}
                minWidth="28px"
              >
                {num}
              </Text>
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize={{ base: "lg", md: "xl" }}
                color={TEXT}
                flex={1}
              >
                {name}
              </Text>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="xs"
                color={MUTED}
                flex={1}
                display={{ base: "none", md: "block" }}
              >
                {desc}
              </Text>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="sm"
                color={MUTED}
                _groupHover={{ color: TEXT }}
                style={{ transition: "color 0.2s" }}
              >
                →
              </Text>
            </Flex>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

// ─── 4. BRANDS ───────────────────────────────────────────────────────────────
const brandPartners = [
  "Boncharge",       "Tenzing",           "Virtue Drinks",
  "Ancient & Brave", "Brisco Wellness",   "London Nootropics",
  "Drink Living Things", "Misty Aromatherapy", "Upcircle Beauty",
  "LSKD",            "Biomel.life",       "Frankfurt Food Co",
  "Alchemy Official", "Poco Vino",
];

function BrandsSection() {
  return (
    <Box bg={DARK} px={{ base: 8, md: 16 }} py={{ base: 20, md: 32 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 16, md: 24 }}>
        {/* Left: pitch */}
        <motion.div {...fadeUp(0)}>
          <Label dark mb={8}>For Brands</Label>
          <Display
            dark
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            mb={10}
          >
            A platform for<br />
            <em>authentic engagement.</em>
          </Display>

          <Box borderTop="1px solid rgba(255,255,255,0.1)" pt={8}>
            <Body dark mb={6}>
              We work with brands to create intentional, sensory-led experiences
              that connect with real audiences. From product placement in signature
              Vaya events to co-branded workshops and bespoke multi-sensory
              activations — every collaboration is immersive, meaningful, and
              memorable.
            </Body>
            <Body dark mb={10}>
              Our DMs and inbox are open. We'd love to connect with brands that
              align with Vaya's values and want to show up differently.
            </Body>

            <Box
              as="a"
              href={`mailto:${EMAIL}`}
              display="inline-block"
              bg="#f3ede6"
              color={DARK}
              px={8}
              py="14px"
              fontSize="10px"
              fontFamily="'Raleway', sans-serif"
              fontWeight="500"
              letterSpacing="0.22em"
              textTransform="uppercase"
              textDecoration="none"
              _hover={{ opacity: 0.86 }}
              style={{ transition: "opacity 0.2s" }}
            >
              {EMAIL}
            </Box>
          </Box>
        </motion.div>

        {/* Right: partners list */}
        <motion.div {...fadeUp(0.15)}>
          <Label dark mb={8}>Brands we've worked with</Label>
          <Box>
            {brandPartners.map((brand, i) => (
              <Flex
                key={brand}
                borderTop="1px solid rgba(255,255,255,0.07)"
                py={4}
                align="center"
                justify="space-between"
                _last={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="sm"
                  color="rgba(255,255,255,0.45)"
                  letterSpacing="0.04em"
                >
                  {brand}
                </Text>
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="9px"
                  letterSpacing="0.18em"
                  textTransform="uppercase"
                  color="rgba(255,255,255,0.2)"
                >
                  Partner
                </Text>
              </Flex>
            ))}
          </Box>
        </motion.div>
      </SimpleGrid>
    </Box>
  );
}

// ─── 5. EVENTS ───────────────────────────────────────────────────────────────
const events = [
  {
    num: "01",
    name: "Flow into Stillness",
    type: "Yin Yoga + Sound Healing",
    date: "01 Feb 2026",
    status: "past",
  },
  {
    num: "02",
    name: "Red Light Immersion",
    type: "Sound + Red Light Therapy",
    date: "08 Mar 2026",
    status: "past",
  },
  {
    num: "03",
    name: "Scent meets Sound",
    type: "Aromatherapy + Sound Healing",
    date: "29 Mar 2026",
    status: "upcoming",
  },
  {
    num: "04",
    name: "Sound Series Finale",
    type: "Live Vocals + Sound Bath",
    date: "10 Apr 2026",
    status: "upcoming",
  },
];

function EventsSection() {
  return (
    <Box
      bg={BG}
      borderTop={`1px solid ${BORDER}`}
      px={{ base: 8, md: 16 }}
      py={{ base: 16, md: 24 }}
    >
      <Flex justify="space-between" align="flex-end" mb={12} wrap="wrap" gap={6}>
        <motion.div {...fadeUp(0)}>
          <Label mb={4}>Upcoming</Label>
          <Display fontSize={{ base: "3xl", md: "5xl" }}>
            Our next<br />
            <em>experiences.</em>
          </Display>
        </motion.div>
        <motion.div {...fadeUp(0.2)}>
          <SoftBtn href={LINKTREE} outline>View all</SoftBtn>
        </motion.div>
      </Flex>

      <Box>
        {events.map(({ num, name, type, date, status }, i) => (
          <motion.div key={num} {...fadeUp(i * 0.08)}>
            <Box
              as="a"
              href={LINKTREE}
              target="_blank"
              display="block"
              textDecoration="none"
              role="group"
            >
              <Flex
                borderTop={`1px solid ${BORDER}`}
                py={6}
                align="center"
                gap={{ base: 4, md: 8 }}
                wrap="wrap"
                _hover={{ bg: "rgba(200,181,208,0.1)" }}
                _last={{ borderBottom: `1px solid ${BORDER}` }}
                style={{ transition: "background 0.2s" }}
              >
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="9px"
                  color={MUTED}
                  letterSpacing="0.15em"
                  minWidth="28px"
                >
                  {num}
                </Text>

                <Box flex={2}>
                  <Text
                    fontFamily="'Playfair Display', serif"
                    fontSize={{ base: "lg", md: "xl" }}
                    color={TEXT}
                    mb="2px"
                  >
                    {name}
                  </Text>
                  <Text
                    fontFamily="'Raleway', sans-serif"
                    fontSize="xs"
                    color={MUTED}
                  >
                    {type}
                  </Text>
                </Box>

                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="xs"
                  color={MUTED}
                  letterSpacing="0.08em"
                  display={{ base: "none", md: "block" }}
                >
                  {date}
                </Text>

                <Box
                  bg={status === "upcoming" ? BTN : "transparent"}
                  border={status !== "upcoming" ? `1px solid ${BORDER}` : "none"}
                  color={status === "upcoming" ? TEXT : MUTED}
                  px={5}
                  py={2}
                  fontSize="9px"
                  fontFamily="'Raleway', sans-serif"
                  letterSpacing="0.18em"
                  textTransform="uppercase"
                  minWidth="88px"
                  textAlign="center"
                >
                  {status === "upcoming" ? "Book Now" : "Sold Out"}
                </Box>
              </Flex>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

// ─── 6. TESTIMONIALS ─────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "Absolutely loved this slow, intentional morning for myself — calming scents, gentle sounds, warm drinks, and beautiful community. Exactly the space I needed to soften, switch off, and truly unwind.",
    author: "Aromatherapy & Sound Workshop",
  },
  {
    quote:
      "Loved every second of this soundbath experience. It was such an amazing way to reconnect with myself and my emotions.",
    author: "Sound Healing Series",
  },
  {
    quote:
      "That felt truly healing, exactly what I needed. Thank you so much.",
    author: "Flow into Stillness",
  },
];

function TestimonialsSection() {
  return (
    <Box bg={BG} borderTop={`1px solid ${BORDER}`}>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        {/* Image */}
        <Box overflow="hidden" minHeight={{ base: "60vw", md: "640px" }} position="relative">
          <motion.div
            initial={{ scale: 1.07 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ height: "100%" }}
          >
            <Image src={flow} objectFit="cover" height="100%" width="100%" />
          </motion.div>
          <Box position="absolute" inset={0} bg="rgba(28,25,22,0.18)" />
        </Box>

        {/* Quotes */}
        <Flex
          direction="column"
          justify="center"
          px={{ base: 8, md: 14 }}
          py={{ base: 16, md: 20 }}
          gap={10}
        >
          <motion.div {...fadeUp(0)}>
            <Label mb={5}>Kind words</Label>
            <Display fontSize={{ base: "3xl", md: "4xl" }}>
              From our<br />
              <em>community.</em>
            </Display>
          </motion.div>

          {testimonials.map((t, i) => (
            <motion.div key={i} {...fadeUp(0.1 + i * 0.1)}>
              <Box borderTop={`1px solid ${BORDER}`} pt={6}>
                <Text
                  fontFamily="'Playfair Display', serif"
                  fontStyle="italic"
                  fontSize="md"
                  color={TEXT}
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
                  color={MUTED}
                >
                  — {t.author}
                </Text>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

// ─── 7. CTA ──────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <Box
      bg={BG}
      borderTop={`1px solid ${BORDER}`}
      px={{ base: 8, md: 16 }}
      py={{ base: 20, md: 32 }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 12, md: 24 }} alignItems="center">
        <motion.div {...fadeUp(0)}>
          <Display fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}>
            Join us in creating<br />
            <em>moments that are felt.</em>
          </Display>
        </motion.div>

        <motion.div {...fadeUp(0.18)}>
          <Flex direction="column" gap={3} maxWidth="320px">
            <SoftBtn href="/events">Explore Events</SoftBtn>
            <SoftBtn href={`mailto:${EMAIL}`} outline>Work With Us</SoftBtn>
            <SoftBtn href={LINKTREE} outline>Follow on Instagram</SoftBtn>
          </Flex>
          <Text
            fontFamily="'Raleway', sans-serif"
            fontSize="10px"
            color={MUTED}
            letterSpacing="0.15em"
            mt={8}
          >
            {EMAIL}
          </Text>
        </motion.div>
      </SimpleGrid>
    </Box>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Box bg={BG}>
      <Box position="sticky" top={0} zIndex={10} bg={BG}>
        <MkNavBar />
      </Box>
      <HeroSection />
      <PathSplitSection />
      <ManifestoSection />
      <OfferingsSection />
      <BrandsSection />
      <EventsSection />
      <TestimonialsSection />
      <CTASection />
    </Box>
  );
}
