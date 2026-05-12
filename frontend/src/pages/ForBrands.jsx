import { Box, Flex, Text, Heading, Grid, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
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

function useTypewriter(text, speed = 85) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const t = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text]);
  return displayed;
}

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
  const isHash = href?.startsWith("#");
  return (
    <Box as={isExternal || isHash ? "a" : RouterLink}
      {...(isExternal ? { href, target: "_blank" } : isHash ? { href } : { to: href })}
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
  "LSKD", "Frank", "NILA M.", "Poco Vino",
];

// ─── Sections ─────────────────────────────────────────────────────────────────
function HeroSection() {
  const typed = useTypewriter("differently.", 120);
  return (
    <Box py={{ base: 20, md: 32 }}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
        <Cap>For Brands</Cap>
        <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          color={TEXT} lineHeight="1.05" mt={4} mb={8} maxWidth="680px"
        >
          Where conscious brands
          <br /><em>show up <Box as="span" color={ACCENT}>{typed}</Box></em>
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
          <Box as={RouterLink} to={CONTACT}
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
  const [hovered, setHovered] = useState(null);
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
          {reasons.map(({ title, body }, i) => (
            <motion.div key={title} {...fade(i * 0.08)}>
              <Flex borderBottom={`1px solid ${BORDER}`} py={5} px={4}
                gap={{ base: 4, md: 10 }}
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }}
                _first={{ borderTop: `1px solid ${BORDER}` }}
                mx={-4}
                bg={hovered === i ? "#F28B75" : "transparent"}
                cursor="default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ transition: "background 0.2s" }}
              >
                <Text fontFamily="'Playfair Display', serif" fontSize="lg"
                  color={hovered === i ? "white" : TEXT}
                  minWidth={{ md: "220px" }} flexShrink={0}
                  style={{ transition: "color 0.2s" }}
                >{title}</Text>
                <Text fontFamily="'Raleway', sans-serif" fontSize="sm"
                  color={hovered === i ? "rgba(255,255,255,0.75)" : MUTED} lineHeight="1.85"
                  style={{ transition: "color 0.2s" }}
                >{body}</Text>
              </Flex>
            </motion.div>
          ))}
        </Box>
      </Row>
    </motion.div>
  );
}

function OfferingsSection() {
  const [active, setActive] = useState(0);
  const current = offerings[active];
  return (
    <Box id="offerings" style={{ scrollMarginTop: "80px" }}>
      <Rule />
      <Box py={{ base: 10, md: 14 }}>
        <Cap>What we offer</Cap>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }} mt={6}>
          {offerings.map(({ num, title, img }, i) => {
            const isActive = active === i;
            return (
              <Box key={num}
                onClick={() => setActive(i)}
                cursor="pointer"
                position="relative"
                overflow="hidden"
                role="button"
                aria-pressed={isActive}
                style={{ aspectRatio: "4 / 5", transition: "transform 0.3s ease" }}
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Box as="img" src={img} alt={title}
                  width="100%" height="100%"
                  objectFit="cover" display="block"
                  style={{ transition: "transform 0.6s ease, filter 0.3s ease" }}
                  _hover={{ transform: "scale(1.04)" }}
                />
                <Box position="absolute" inset={0}
                  bg={isActive ? "rgba(64,54,49,0.65)" : "rgba(64,54,49,0.35)"}
                  style={{ transition: "background 0.3s ease" }}
                />
                <Flex position="absolute" inset={0} direction="column"
                  justify="space-between" p={{ base: 5, md: 6 }} color="white"
                >
                  <Text fontFamily="'Raleway', sans-serif" fontSize="10px"
                    letterSpacing="0.24em" color="rgba(255,255,255,0.75)"
                  >{num}</Text>
                  <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
                    fontSize={{ base: "xl", md: "2xl" }} lineHeight="1.15"
                  >{title}</Heading>
                </Flex>
                {isActive && (
                  <Box position="absolute" left={0} right={0} bottom={0} height="3px" bg="#F28B75" />
                )}
              </Box>
            );
          })}
        </SimpleGrid>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.num}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Grid templateColumns={{ base: "1fr", md: "180px 1fr" }}
              gap={{ base: 6, md: 16 }}
              mt={{ base: 8, md: 10 }}
              borderTop={`1px solid ${BORDER}`}
              pt={{ base: 8, md: 10 }}
            >
              <Cap>Details</Cap>
              <Box>
                <Text fontFamily="'Raleway', sans-serif" fontSize="15px"
                  color={MUTED} lineHeight="1.9" mb={6}
                >{current.desc}</Text>
                <Flex wrap="wrap" gap={2}>
                  {current.includes.map((item) => (
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
        </AnimatePresence>
      </Box>
    </Box>
  );
}

function BrandVoicesSection() {
  const [index, setIndex] = useState(0);
  const total = brandVoices.length;
  const current = brandVoices[index];
  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Box py={{ base: 14, md: 20 }}>
        <Flex align="center" justify="space-between" mb={{ base: 8, md: 10 }} gap={4}>
          <Cap>Brand voices</Cap>
          <Text fontFamily="'Raleway', sans-serif" fontSize="11px"
            letterSpacing="0.22em" color={MUTED}
          >
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </Text>
        </Flex>

        <Box minHeight={{ base: "260px", md: "220px" }} position="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.author}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Box maxWidth="820px">
                <Box as="span" fontFamily="'Playfair Display', serif"
                  fontSize={{ base: "80px", md: "120px" }} color="#F28B75"
                  lineHeight="0.6" display="block" mb={2}
                >“</Box>
                <Text fontFamily="'Playfair Display', serif" fontStyle="italic"
                  fontSize={{ base: "xl", md: "3xl" }} color={TEXT}
                  lineHeight="1.4" mb={8}
                >
                  {current.quote}
                </Text>
                <Text fontFamily="'Raleway', sans-serif" fontSize="11px"
                  letterSpacing="0.24em" textTransform="uppercase" color={MUTED}
                >
                  — {current.author}
                </Text>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        <Flex align="center" gap={4} mt={{ base: 8, md: 10 }}>
          <Box as="button" type="button" onClick={goPrev} aria-label="Previous voice"
            width="48px" height="48px" border={`1px solid ${BORDER}`}
            background="transparent" color={TEXT} cursor="pointer"
            display="inline-flex" alignItems="center" justifyContent="center"
            fontFamily="'Raleway', sans-serif" fontSize="20px"
            _hover={{ bg: "#F28B75", color: "white", borderColor: "#F28B75" }}
            style={{ transition: "background 0.2s, color 0.2s, border-color 0.2s" }}
          >←</Box>
          <Box as="button" type="button" onClick={goNext} aria-label="Next voice"
            width="48px" height="48px" border={`1px solid ${BORDER}`}
            background="transparent" color={TEXT} cursor="pointer"
            display="inline-flex" alignItems="center" justifyContent="center"
            fontFamily="'Raleway', sans-serif" fontSize="20px"
            _hover={{ bg: "#F28B75", color: "white", borderColor: "#F28B75" }}
            style={{ transition: "background 0.2s, color 0.2s, border-color 0.2s" }}
          >→</Box>

          <Flex gap={2} ml={{ base: 4, md: 6 }}>
            {brandVoices.map((v, i) => (
              <Box key={v.author} as="button" type="button"
                onClick={() => setIndex(i)}
                aria-label={`Voice ${i + 1}`}
                width="28px" height="2px" border="none"
                bg={i === index ? "#F28B75" : BORDER}
                cursor="pointer" padding={0}
                style={{ transition: "background 0.2s" }}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    </motion.div>
  );
}

function ProcessSection() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Box py={{ base: 12, md: 16 }}>
        <Flex align={{ base: "flex-start", md: "center" }} justify="space-between"
          gap={6} wrap="wrap" mb={open ? { base: 10, md: 14 } : 0}
          style={{ transition: "margin 0.3s ease" }}
        >
          <Box>
            <Cap>Our process</Cap>
            <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              lineHeight="1.05" color={TEXT} mt={3}
            >
              How it <em>works.</em>
            </Heading>
          </Box>
          <Box as="button" type="button"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            bg={open ? TEXT : "#F28B75"}
            color="white"
            border="none" cursor="pointer"
            px={{ base: 8, md: 10 }} py={{ base: 4, md: 5 }}
            fontFamily="'Raleway', sans-serif" fontSize="11px"
            letterSpacing="0.24em" textTransform="uppercase"
            display="inline-flex" alignItems="center" gap={3}
            _hover={{ bg: open ? "#0d0d0d" : "#EC6F51" }}
            style={{ transition: "background 0.2s" }}
          >
            <Box as="span">{open ? "Hide the steps" : "Show me the steps"}</Box>
            <Box as="span"
              style={{
                display: "inline-block",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                fontSize: "14px",
                lineHeight: 1,
              }}
            >↓</Box>
          </Box>
        </Flex>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="process-rail"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <FullBleed>
                <Box
                  overflowX="auto" overflowY="hidden"
                  px={{ base: 6, md: 12 }} pt={{ base: 4, md: 6 }} pb={{ base: 8, md: 12 }}
                  css={{
                    "&::-webkit-scrollbar": { height: "6px" },
                    "&::-webkit-scrollbar-track": { background: BORDER },
                    "&::-webkit-scrollbar-thumb": { background: "#F28B75", borderRadius: "3px" },
                    "scrollbarWidth": "thin",
                    "scrollbarColor": `#F28B75 ${BORDER}`,
                  }}
                >
                  <Box position="relative" minWidth="max-content">
                    {/* Horizontal coral path line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "#F28B75",
                        transformOrigin: "left",
                        zIndex: 0,
                      }}
                    />
                    <Flex gap={{ base: 6, md: 10 }} align="flex-start" position="relative">
                      {process.map(({ n, title, body }, i) => (
                        <motion.div
                          key={n}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.25 + i * 0.1, ease: "easeOut" }}
                          style={{ flexShrink: 0 }}
                        >
                          <Box width={{ base: "240px", md: "260px" }}>
                            <Flex
                              width="40px" height="40px"
                              borderRadius="50%" bg="#F28B75" color="white"
                              align="center" justify="center"
                              fontFamily="'Raleway', sans-serif" fontSize="11px"
                              letterSpacing="0.1em" fontWeight="600"
                              boxShadow={`0 0 0 6px ${BG}`}
                              mb={5}
                              position="relative" zIndex={1}
                            >{n}</Flex>
                            <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
                              fontSize={{ base: "lg", md: "xl" }} color={TEXT}
                              lineHeight="1.2" mb={3}
                            >{title}</Heading>
                            <Text fontFamily="'Raleway', sans-serif" fontSize="14px"
                              color={MUTED} lineHeight="1.75"
                            >{body}</Text>
                          </Box>
                        </motion.div>
                      ))}
                    </Flex>
                  </Box>
                </Box>
              </FullBleed>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </motion.div>
  );
}

function PartnersSection() {
  const items = [...partners, ...partners]; // duplicate for seamless loop
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Box py={{ base: 10, md: 14 }} overflow="hidden">
        <Text fontFamily="'Raleway', sans-serif" fontSize="11px" letterSpacing="0.24em" textTransform="uppercase" color={MUTED} mb={6}>Brands we've worked with so far</Text>
        <Box overflow="hidden">
          <Flex
            gap={10}
            style={{ animation: "marquee 22s linear infinite", width: "max-content" }}
          >
            {items.map((name, i) => (
              <Text key={i}
                fontFamily="'Playfair Display', serif"
                fontWeight="400"
                fontSize={{ base: "2xl", md: "3xl" }}
                color={TEXT}
                whiteSpace="nowrap"
              >{name}</Text>
            ))}
          </Flex>
        </Box>
      </Box>
    </motion.div>
  );
}

function CTASection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <FullBleed>
        <Box bg="#F28B75" px={{ base: 8, md: 16 }} py={{ base: 16, md: 24 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 20 }} alignItems="center">
            <Box>
              <Text fontFamily="'Raleway', sans-serif" fontSize="14px" letterSpacing="0.28em" textTransform="uppercase" color="white" mb={5}>Let's create together</Text>
              <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                color="#FDF6EE" lineHeight="1.1"
              >
                Ready to reach people<br /><em>who actually care?</em>
              </Heading>
            </Box>
            <Box>
              <Text fontFamily="'Raleway', sans-serif" fontSize="sm"
                color="rgba(253,246,238,0.85)" lineHeight="1.9" mb={8}
              >
                Tell us about your brand and what you're imagining. We'll come back with a concept — no obligation, no templates. Just a real conversation.
              </Text>
              <Flex direction="column" gap={4} alignItems="flex-start">
                <Box as={RouterLink} to={CONTACT}
                  fontFamily="'Raleway', sans-serif" fontSize="10px"
                  letterSpacing="0.22em" textTransform="uppercase"
                  bg={TEXT} color="#FDF6EE"
                  px={6} py="12px" textDecoration="none"
                  _hover={{ bg: DARK }} style={{ transition: "background 0.2s" }}
                >
                  Start a conversation
                </Box>
                <Box as="a" href={LINKTREE} target="_blank"
                  fontFamily="'Raleway', sans-serif" fontSize="10px" letterSpacing="0.22em"
                  textTransform="uppercase" color="rgba(253,246,238,0.7)" textDecoration="none"
                  borderBottom="1px solid rgba(253,246,238,0.3)" pb="2px"
                  _hover={{ opacity: 0.6 }} style={{ transition: "opacity 0.2s" }}
                >Or DM us on Instagram</Box>
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
      <Box borderTop={`1px solid ${BORDER}`} />
      <Box px={{ base: 6, md: 12 }} py={10}>
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <Box as={RouterLink} to="/" textDecoration="none">
            <Box as="img" src={logo} alt="Vaya" height="86px" display="block" />
          </Box>
          <Flex gap={8} wrap="wrap">
            {[["Home", "/"], ["Events", "/events"], ["About", "/about"], ["Contact", CONTACT]].map(([label, href]) => (
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

export default function ForBrands() {
  return (
    <Box bg={BG} minHeight="100vh">
      <Box position="sticky" top={0} zIndex={10} bg={BG}><MkNavBar /></Box>
      <Box maxWidth="1280px" mx="auto" px={{ base: 6, md: 12 }}>
        <HeroSection />
        <WhyVayaSection />
        <PartnersSection />
        <OfferingsSection />
        <ProcessSection />
        <BrandVoicesSection />
        <CTASection />
      </Box>
      <Footer />
    </Box>
  );
}
