import { Box, Flex, Text, Heading, Grid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

// ─── Tokens — dark editorial ─────────────────────────────────────────────────
const PAPER   = "#0F0E0C";    // deep warm ink, primary background
const SURFACE = "#181613";    // slightly raised surface
const INK     = "#EDE6D7";    // warm bone — primary text on dark
const MUTED   = "#8A8174";    // warm taupe — body secondary
const SOFT    = "#5F594F";    // eyebrow / mono caption
const HAIR    = "rgba(237, 230, 215, 0.12)";
const UMBER   = "#C9A461";    // champagne — rare accent

// Font stacks
const SERIF = "'Instrument Serif', 'EB Garamond', Georgia, serif";
const SANS  = "'Instrument Sans', 'Inter', system-ui, sans-serif";
const MONO  = "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace";

// Instrument Serif is single-weight; we lean on size + italic for contrast
const FRA_DISPLAY = '"wght" 400';
const FRA_DISPLAY_ITALIC = '"wght" 400';
const FRA_TITLE   = '"wght" 400';
const FRA_LEDE    = '"wght" 400';

const EMAIL = "hello@flaviadanes.com";
const INSTA = "https://www.instagram.com/wearevaya_/";

// ─── Motion ───────────────────────────────────────────────────────────────────
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

const slowFade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] },
});

const imgReveal = {
  initial: { opacity: 0, scale: 1.06 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
};

// ─── Primitives ───────────────────────────────────────────────────────────────
function Mono({ children, light = false, color, ...rest }) {
  return (
    <Text
      fontFamily={MONO} fontSize="10px"
      letterSpacing="0.18em" textTransform="uppercase"
      color={color || (light ? "rgba(242,237,227,0.55)" : SOFT)}
      fontWeight="400"
      {...rest}
    >{children}</Text>
  );
}

function Hairline({ light = false }) {
  return (
    <Box borderTop={`1px solid ${light ? "rgba(242,237,227,0.12)" : HAIR}`} />
  );
}

function FullBleed({ children, mx }) {
  return (
    <Box mx={mx ?? { base: -6, md: -10, lg: -16 }}>
      {children}
    </Box>
  );
}

function Underlink({ href, children, dark = false }) {
  const col = dark ? "#F2EDE3" : INK;
  const isExternal = href?.startsWith("http") || href?.startsWith("mailto");
  return (
    <Box as={isExternal ? "a" : RouterLink}
      {...(isExternal ? { href, target: href.startsWith("mailto") ? undefined : "_blank" } : { to: href })}
      fontFamily={MONO} fontSize="11px" letterSpacing="0.2em"
      textTransform="uppercase" color={col} textDecoration="none"
      borderBottom={`1px solid ${col}`} pb="4px"
      display="inline-flex" alignItems="center"
      _hover={{ opacity: 0.5 }} style={{ transition: "opacity 0.4s" }}
    >{children}</Box>
  );
}

// ─── Imagery ──────────────────────────────────────────────────────────────────
const IMG = {
  plate:    "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=2400",
  coreview: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=2400",
  cme:      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=2400",
  vaya:     "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg?auto=compress&cs=tinysrgb&w=2400",
  openex:   "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=2400",
};

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={20}
      px={{ base: 6, md: 10, lg: 16 }}
      py={{ base: 5, md: 6 }}
      bg={scrolled ? "rgba(242,237,227,0.88)" : "transparent"}
      style={{
        transition: "background 0.5s ease, backdrop-filter 0.5s",
        backdropFilter: scrolled ? "saturate(140%) blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(140%) blur(16px)" : "none",
      }}
    >
      <Flex justify="space-between" align="center">
        <Box as="a" href="#top" textDecoration="none">
          <Text fontFamily={SERIF} fontWeight="400"
            fontSize={{ base: "15px", md: "16px" }}
            color={INK}
            style={{ fontVariationSettings: '"opsz" 14, "SOFT" 30, "wght" 400' }}
          >
            Flavia Danes
          </Text>
        </Box>
        <Flex gap={{ base: 5, md: 9 }} align="center">
          <Box as="a" href="#index" textDecoration="none">
            <Mono color={INK}>Index</Mono>
          </Box>
          <Box as="a" href="#about" textDecoration="none">
            <Mono color={INK}>Practice</Mono>
          </Box>
          <Box as="a" href="#contact" textDecoration="none">
            <Mono color={INK}>Enquire</Mono>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

// ─── Hero — negative space, type-only (Phoebe Philo / Margiela doctrine) ─────
function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <Box id="top" position="relative"
      minHeight={{ base: "100vh", md: "100vh" }}
      px={{ base: 6, md: 10, lg: 16 }}
      display="flex" flexDirection="column"
      justifyContent="space-between"
      pt={{ base: 28, md: 32 }} pb={{ base: 8, md: 10 }}
    >
      {/* Top-right edge marker */}
      <Box position="absolute" top={{ base: 24, md: 28 }} right={{ base: 6, md: 10, lg: 16 }}>
        <motion.div {...slowFade(0.4)}>
          <Mono>Vol. 01 · Spring</Mono>
        </motion.div>
      </Box>

      <motion.div style={{ opacity, y }}>
        <Box mt={{ base: 16, md: 24 }}>
          <motion.div {...reveal(0.1)}>
            <Mono>An Independent Practice · London · Est. 2020</Mono>
          </motion.div>

          {/* The wordmark */}
          <motion.div {...reveal(0.3)}>
            <Heading as="h1"
              fontFamily={SERIF} fontWeight="400"
              fontSize={{ base: "23vw", md: "17vw", lg: "14.5vw" }}
              color={INK}
              lineHeight="0.86"
              letterSpacing="-0.035em"
              mt={{ base: 10, md: 14 }}
              mb={{ base: 0, md: 0 }}
              style={{
                fontVariationSettings: FRA_DISPLAY,
                textWrap: "balance",
                fontFeatureSettings: '"ss01", "dlig", "kern", "liga"',
              }}
            >
              Flavia
            </Heading>
            <Heading as="span"
              display="block"
              fontFamily={SERIF}
              fontStyle="italic" fontWeight="400"
              fontSize={{ base: "23vw", md: "17vw", lg: "14.5vw" }}
              color={INK}
              lineHeight="0.86"
              letterSpacing="-0.03em"
              pl={{ base: 0, md: "0.04em" }}
              style={{
                fontVariationSettings: FRA_DISPLAY_ITALIC,
                textWrap: "balance",
                fontFeatureSettings: '"ss01", "dlig", "kern", "liga"',
              }}
            >
              Danes.
            </Heading>
          </motion.div>
        </Box>
      </motion.div>

      {/* Footer meta row — four micro-cards */}
      <motion.div {...slowFade(0.7)}>
        <Box pt={{ base: 16, md: 14 }}>
          <Hairline />
          <Grid templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
            gap={{ base: 8, md: 10 }} pt={{ base: 8, md: 10 }}
          >
            <Box>
              <Mono>Practice</Mono>
              <Text fontFamily={SERIF} mt={3}
                fontSize={{ base: "lg", md: "xl" }}
                color={INK} lineHeight="1.3"
                style={{ fontVariationSettings: FRA_LEDE, fontStyle: "italic" }}
              >
                Event specialism<br />&amp; brand partnerships.
              </Text>
            </Box>
            <Box>
              <Mono>Currently</Mono>
              <Text fontFamily={SERIF} mt={3}
                fontSize={{ base: "lg", md: "xl" }}
                color={INK} lineHeight="1.3"
                style={{ fontVariationSettings: FRA_LEDE, fontStyle: "italic" }}
              >
                Interim Head of<br />Events, CoreView.
              </Text>
            </Box>
            <Box>
              <Mono>Studio</Mono>
              <Text fontFamily={SERIF} mt={3}
                fontSize={{ base: "lg", md: "xl" }}
                color={INK} lineHeight="1.3"
                style={{ fontVariationSettings: FRA_LEDE, fontStyle: "italic" }}
              >
                London,<br />by appointment.
              </Text>
            </Box>
            <Box>
              <Mono>Enquiries</Mono>
              <Box mt={3}>
                <Underlink href={`mailto:${EMAIL}`}>{EMAIL}</Underlink>
              </Box>
            </Box>
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
}

// ─── Plate — a single editorial photograph (Pentagram opener) ────────────────
function Plate() {
  return (
    <Box pt={{ base: 0, md: 0 }}>
      <FullBleed mx={0}>
        <motion.div {...imgReveal}>
          <Box as="img" src={IMG.plate} alt="Plate"
            width="100%" display="block"
            style={{ aspectRatio: "16 / 9", objectFit: "cover", objectPosition: "center 30%" }}
          />
        </motion.div>
      </FullBleed>
      <Box px={{ base: 6, md: 10, lg: 16 }} pt={{ base: 4, md: 5 }}>
        <Flex justify="space-between" wrap="wrap" gap={4}>
          <Mono>Plate I · A room set</Mono>
          <Mono>London, 2025 · Photography by — TBC</Mono>
        </Flex>
      </Box>
    </Box>
  );
}

// ─── Introduction — Pentagram narrow-column prose ─────────────────────────────
function Introduction() {
  return (
    <Box id="about" px={{ base: 6, md: 10, lg: 16 }}
      py={{ base: 28, md: 44 }}
    >
      <Hairline />
      <Grid templateColumns={{ base: "1fr", md: "1fr 4fr 1fr" }}
        gap={{ base: 8, md: 14 }}
        pt={{ base: 14, md: 20 }}
      >
        <Box display={{ base: "block", md: "block" }}>
          <motion.div {...reveal(0)}>
            <Mono>§ I</Mono>
          </motion.div>
        </Box>

        <Box>
          <motion.div {...reveal(0.05)}>
            <Mono>On Practice</Mono>
          </motion.div>

          <motion.div {...reveal(0.15)}>
            <Heading as="h2"
              fontFamily={SERIF} fontWeight="400"
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              color={INK} lineHeight="1.1"
              letterSpacing="-0.018em"
              mt={6} mb={{ base: 10, md: 14 }}
              maxWidth="900px"
              style={{
                fontVariationSettings: FRA_TITLE,
                textWrap: "balance",
                hangingPunctuation: "first allow-end last",
              }}
            >
              Flavia Danes <Box as="span" color={SOFT}>(b. 1996, Sibiu)</Box>{" "}
              is a London-based event specialist
              and brand partnerships consultant — most recently
              Interim Head of Events at{" "}
              <Box as="span" fontStyle="italic">CoreView</Box>, after three
              years producing EMEA programmes for{" "}
              <Box as="span" fontStyle="italic">CME Group</Box>.
            </Heading>
          </motion.div>

          <motion.div {...reveal(0.25)}>
            <Text fontFamily={SANS}
              fontSize={{ base: "16px", md: "17px" }}
              fontWeight="300" color={MUTED}
              lineHeight="1.85"
              maxWidth="640px"
              mb={5}
              style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
            >
              Trained at the University of Sheffield; raised in the
              medieval town of Sibiu, where she began programming
              community events as a teenager. The instinct has carried —
              an eye for detail and a capacity for the volume of
              information a serious programme demands.
            </Text>
            <Text fontFamily={SANS}
              fontSize={{ base: "16px", md: "17px" }}
              fontWeight="300" color={MUTED}
              lineHeight="1.85"
              maxWidth="640px"
              mb={5}
              style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
            >
              Flagship work at{" "}
              <Box as="span" fontStyle="italic" color={INK}>CME Group</Box>{" "}
              included executive hospitality around the{" "}
              <Box as="span" fontStyle="italic" color={INK}>Saracens Showdown</Box>{" "}
              at Tottenham Hotspur Stadium, and the{" "}
              <Box as="span" fontStyle="italic" color={INK}>ISLA Securities Finance &amp; Collateral Management Conference</Box>{" "}
              in Madrid — designing and delivering CME's presence on the floor.
            </Text>
            <Text fontFamily={SANS}
              fontSize={{ base: "16px", md: "17px" }}
              fontWeight="300" color={MUTED}
              lineHeight="1.85"
              maxWidth="640px"
              mb={10}
              style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
            >
              Outside the corporate calendar she founded{" "}
              <Box as="span" fontStyle="italic" color={INK}>FIRE</Box> — a
              London women's community for wellness and brand-led gathering
              — running a sold-out programme of events with conscious
              wellness brands as partners on curation and product.
            </Text>
          </motion.div>

          <motion.div {...reveal(0.35)}>
            <Underlink href="#contact">Begin a Conversation</Underlink>
          </motion.div>
        </Box>

        <Box />
      </Grid>
    </Box>
  );
}

// ─── Index — Stefan Beckman / COLLINS contents page ───────────────────────────
const caseStudies = [
  {
    num:    "I.",
    client: "CoreView",
    title:  "Building a global events practice end-to-end.",
    role:   "Interim Head of Events",
    span:   "2026 — Present",
    place:  "London · EMEA & North America",
    body:   "Stepped in to lead CoreView's events function end-to-end — strategy, programme architecture, agency partners, on-the-day command — supporting an ambitious go-to-market motion across two continents. A short, decisive engagement.",
    stat:   { value: "Interim", label: "Head of Events" },
    img:    IMG.coreview,
  },
  {
    num:    "II.",
    client: "CME Group",
    title:  "Saracens Showdown to ISLA Madrid — three years of flagship programmes.",
    role:   "Senior Corporate Marketing & Events Manager",
    span:   "Oct. 2023 — Jun. 2026",
    place:  "London · EMEA",
    body:   "Owned end-to-end execution of CME Group's EMEA events programme — from executive hospitality around the Saracens Showdown at Tottenham Hotspur Stadium, to the principal CME presence at the ISLA Securities Finance & Collateral Management Conference in Madrid. Twenty to three hundred attendees, in-person, virtual and hybrid. Multi-currency budgets to £250,000; reference Cvent practitioner for the global team.",
    stat:   { value: "£250K", label: "Programme budgets" },
    img:    IMG.cme,
  },
  {
    num:    "III.",
    client: "FIRE",
    title:  "A women's community for wellness and brand-led gathering — sold out, run alongside.",
    role:   "Founder",
    span:   "2025 — 2026",
    place:  "London",
    body:   "Founded FIRE as a community-first wellness programme for women in London — securing partnerships with conscious wellness brands for curation, product and goodie bags, and selling out the calendar of events through the year. A working model for connecting brand to community without the marketing-deck flatness — community-builder first, sponsor wrangler second.",
    stat:   { value: "Sold-out", label: "12-month programme" },
    img:    IMG.vaya,
    footnote: "Founded by Flavia in parallel with her CME role. Paused as a public programme in 2026 as she returns to independent client work.",
  },
  {
    num:    "IV.",
    client: "OpenExchange",
    title:  "Three-year progression delivering virtual events for major financial institutions.",
    role:   "Project Manager → Senior PM → Delivery Manager",
    span:   "Nov. 2020 — Oct. 2023",
    place:  "London · Remote",
    body:   "Delivered AGMs, investor days, results presentations and global roadshows for Citi, Bank of America, London Stock Exchange Group, UBS and Davy — through the virtual era of corporate communications. Progressed from Project Manager to Senior PM to Delivery Manager, leading a team of seven and the EMEA delivery function before moving to CME.",
    stat:   { value: "07", label: "Project managers led" },
    img:    IMG.openex,
  },
];

function IndexContents() {
  const [hover, setHover] = useState(null);
  return (
    <Box id="index" px={{ base: 6, md: 10, lg: 16 }} py={{ base: 24, md: 36 }}>
      <Hairline />
      <Flex justify="space-between" align="flex-end"
        wrap="wrap" gap={6} pt={{ base: 12, md: 18 }} mb={{ base: 10, md: 14 }}
      >
        <motion.div {...reveal(0)}>
          <Mono>§ II · Index of Engagements</Mono>
        </motion.div>
        <motion.div {...reveal(0.1)}>
          <Mono>Selected · Four Entries</Mono>
        </motion.div>
      </Flex>

      <Box>
        {caseStudies.map((cs, i) => (
          <motion.a key={cs.num} href={`#case-${i}`} {...reveal(i * 0.05)}
            style={{ textDecoration: "none", display: "block" }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <Grid templateColumns={{ base: "auto 1fr auto", md: "60px 1fr 1fr auto" }}
              gap={{ base: 4, md: 10 }}
              py={{ base: 6, md: 8 }}
              borderBottom={`1px solid ${HAIR}`}
              _first={{ borderTop: `1px solid ${HAIR}` }}
              alignItems="baseline"
              style={{ transition: "padding 0.5s" }}
              cursor="pointer"
            >
              <Mono color={hover === i ? INK : SOFT}>{cs.num}</Mono>
              <Heading as="h3"
                fontFamily={SERIF} fontWeight="400"
                fontStyle="italic"
                fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                color={hover === i ? UMBER : INK}
                letterSpacing="-0.015em"
                lineHeight="1.05"
                style={{
                  fontVariationSettings: FRA_TITLE,
                  textWrap: "balance",
                  transition: "color 0.5s",
                }}
              >
                {cs.client}
              </Heading>
              <Box display={{ base: "none", md: "block" }}>
                <Mono color={hover === i ? INK : SOFT}>{cs.role}</Mono>
              </Box>
              <Mono color={hover === i ? INK : SOFT}>{cs.span}</Mono>
            </Grid>
          </motion.a>
        ))}
      </Box>
    </Box>
  );
}

// ─── Case Study — COLLINS pattern: typographic intro slab, then image ────────
function CaseStudy({ cs, index }) {
  return (
    <Box id={`case-${index}`}>
      <Box px={{ base: 6, md: 10, lg: 16 }}
        py={{ base: 16, md: 28 }}
      >
        <Flex justify="space-between" wrap="wrap" gap={4}
          pb={{ base: 8, md: 12 }}
        >
          <Mono>{`§ III·${cs.num}  ·  ${cs.client}`}</Mono>
          <Mono>{cs.span}</Mono>
        </Flex>

        {/* Centered narrow column — Pentagram pattern */}
        <Box maxWidth="900px" mx="auto" textAlign={{ base: "left", md: "left" }}>
          <motion.div {...reveal(0)}>
            <Heading as="h2"
              fontFamily={SERIF} fontWeight="400"
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              color={INK} lineHeight="1.08"
              letterSpacing="-0.022em"
              mb={{ base: 8, md: 12 }}
              style={{
                fontVariationSettings: FRA_TITLE,
                textWrap: "balance",
                hangingPunctuation: "first allow-end last",
              }}
            >
              {cs.title}
            </Heading>
          </motion.div>

          <motion.div {...reveal(0.15)}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
              gap={{ base: 6, md: 8 }}
              borderTop={`1px solid ${HAIR}`}
              pt={{ base: 6, md: 8 }}
              mb={{ base: 6, md: 8 }}
            >
              <Box>
                <Mono>Role</Mono>
                <Text fontFamily={SERIF} fontStyle="italic"
                  fontSize={{ base: "md", md: "lg" }}
                  color={INK} mt={2} lineHeight="1.35"
                  style={{ fontVariationSettings: FRA_LEDE }}
                >{cs.role}</Text>
              </Box>
              <Box>
                <Mono>Where</Mono>
                <Text fontFamily={SERIF} fontStyle="italic"
                  fontSize={{ base: "md", md: "lg" }}
                  color={INK} mt={2} lineHeight="1.35"
                  style={{ fontVariationSettings: FRA_LEDE }}
                >{cs.place}</Text>
              </Box>
              <Box>
                <Mono>Scale</Mono>
                <Text fontFamily={SERIF}
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color={INK} mt={1} lineHeight="1"
                  letterSpacing="-0.02em"
                  style={{ fontVariationSettings: FRA_TITLE }}
                >{cs.stat.value}</Text>
                <Mono mt={1}>{cs.stat.label}</Mono>
              </Box>
            </Grid>
          </motion.div>
        </Box>
      </Box>

      {/* Full-bleed editorial image */}
      <FullBleed mx={0}>
        <motion.div {...imgReveal}>
          <Box as="img" src={cs.img} alt={`${cs.client} — ${cs.title}`}
            width="100%" display="block"
            style={{ aspectRatio: "16 / 9", objectFit: "cover" }}
          />
        </motion.div>
      </FullBleed>

      {/* Narrow column body — Pentagram pattern */}
      <Box px={{ base: 6, md: 10, lg: 16 }}
        pt={{ base: 6, md: 8 }} pb={{ base: 14, md: 24 }}
      >
        <Flex justify="space-between" wrap="wrap" gap={4} mb={{ base: 10, md: 14 }}>
          <Mono>{`Plate · ${cs.client}`}</Mono>
          <Mono>Reportage · Photography by — TBC</Mono>
        </Flex>

        <Box maxWidth="720px" mx="auto">
          <motion.div {...reveal(0.1)}>
            <Text fontFamily={SANS}
              fontSize={{ base: "16px", md: "17px" }}
              fontWeight="300" color={INK}
              lineHeight="1.85"
              mb={cs.footnote ? 8 : 0}
              style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
            >{cs.body}</Text>
            {cs.footnote && (
              <Box borderTop={`1px solid ${HAIR}`} pt={6}>
                <Text fontFamily={SERIF} fontStyle="italic"
                  fontSize={{ base: "14px", md: "15px" }}
                  color={MUTED} lineHeight="1.65"
                  style={{ fontVariationSettings: FRA_LEDE }}
                >{cs.footnote}</Text>
              </Box>
            )}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}

// ─── Disciplines — woven, not gridded ────────────────────────────────────────
function Disciplines() {
  return (
    <Box px={{ base: 6, md: 10, lg: 16 }} py={{ base: 24, md: 36 }}>
      <Hairline />
      <Grid templateColumns={{ base: "1fr", md: "1fr 4fr 1fr" }}
        gap={{ base: 8, md: 14 }}
        pt={{ base: 14, md: 20 }}
      >
        <Box>
          <motion.div {...reveal(0)}>
            <Mono>§ IV</Mono>
          </motion.div>
        </Box>

        <Box>
          <motion.div {...reveal(0.05)}>
            <Mono>On Discipline</Mono>
          </motion.div>

          <motion.div {...reveal(0.15)}>
            <Heading as="h2"
              fontFamily={SERIF} fontWeight="400"
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              color={INK} lineHeight="1.1"
              letterSpacing="-0.018em"
              mt={6} mb={{ base: 10, md: 14 }}
              maxWidth="900px"
              style={{
                fontVariationSettings: FRA_TITLE,
                textWrap: "balance",
                hangingPunctuation: "first allow-end last",
              }}
            >
              The practice is two engagements held in one hand.{" "}
              <Box as="span" fontStyle="italic">Event specialism</Box> — coming
              in to execute, or co-execute, a programme end-to-end when the
              in-house team is at capacity. And{" "}
              <Box as="span" fontStyle="italic">brand partnerships</Box> —
              designing and brokering the connection between brand and
              community, with an eye for the curation that makes a
              partnership feel inevitable rather than transactional.
            </Heading>
          </motion.div>

          <motion.div {...reveal(0.25)}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={{ base: 8, md: 14 }} mb={10}>
              <Box borderTop={`1px solid ${HAIR}`} pt={6}>
                <Mono>One.</Mono>
                <Text fontFamily={SERIF} fontStyle="italic"
                  fontSize={{ base: "xl", md: "2xl" }}
                  color={INK} lineHeight="1.25" mt={3} mb={4}
                  style={{ fontVariationSettings: FRA_LEDE }}
                >
                  The event specialist.
                </Text>
                <Text fontFamily={SANS} fontSize="15px"
                  fontWeight="300" color={MUTED} lineHeight="1.8"
                  style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
                >
                  Programme strategy, production, creative direction and
                  on-the-day command — from twenty-person dinners to
                  three-hundred-person flagship conferences. Brought in
                  as interim head, retained advisor, or named producer.
                </Text>
              </Box>
              <Box borderTop={`1px solid ${HAIR}`} pt={6}>
                <Mono>Two.</Mono>
                <Text fontFamily={SERIF} fontStyle="italic"
                  fontSize={{ base: "xl", md: "2xl" }}
                  color={INK} lineHeight="1.25" mt={3} mb={4}
                  style={{ fontVariationSettings: FRA_LEDE }}
                >
                  The partnerships consultant.
                </Text>
                <Text fontFamily={SANS} fontSize="15px"
                  fontWeight="300" color={MUTED} lineHeight="1.8"
                  style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
                >
                  Connecting brands to communities of trust. Designing
                  curation moments — product, founder presence, goodie-bag
                  craft — that read as gift, not sponsorship. Useful for
                  brands building real audience, not impression counts.
                </Text>
              </Box>
            </Grid>
          </motion.div>

          <motion.div {...reveal(0.35)}>
            <Text fontFamily={SANS}
              fontSize={{ base: "16px", md: "17px" }}
              fontWeight="300" color={MUTED}
              lineHeight="1.85"
              maxWidth="640px"
              style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
            >
              Engagements are bespoke. Most begin as a single conversation
              and grow into a retainer. References, press notes and a
              capability deck are available on request.
            </Text>
          </motion.div>
        </Box>

        <Box />
      </Grid>
    </Box>
  );
}

// ─── Index of Engagements — full timeline ────────────────────────────────────
const experience = [
  { date: "Jun. 2026 —",         role: "Interim Head of Events",                 org: "CoreView · London"   },
  { date: "Aug. 2025 — Jun. 2026", role: "Founder",                              org: "FIRE · women's community, London" },
  { date: "Oct. 2023 — Jun. 2026", role: "Senior Corporate Marketing & Events",  org: "CME Group · London"  },
  { date: "Mar. 2023 — Oct. 2023", role: "Events Delivery Manager, EMEA",        org: "OpenExchange · London"},
  { date: "Jun. 2022 — Mar. 2023", role: "Senior Project Manager, EMEA",         org: "OpenExchange · London"},
  { date: "Feb. 2021 — May. 2022", role: "Project Manager, EMEA",                org: "OpenExchange · Remote"},
  { date: "Nov. 2020 — Feb. 2021", role: "Associate Video Specialist",           org: "OpenExchange · Freelance"},
];

const clients = [
  "CME Group", "CoreView", "Citi", "Bank of America",
  "London Stock Exchange Group", "UBS", "Davy", "Plato Partnerships",
];

function Index() {
  return (
    <Box px={{ base: 6, md: 10, lg: 16 }} py={{ base: 24, md: 36 }}>
      <Hairline />
      <Grid templateColumns={{ base: "1fr", md: "1fr 4fr 1fr" }}
        gap={{ base: 8, md: 14 }}
        pt={{ base: 14, md: 20 }}
      >
        <Box>
          <motion.div {...reveal(0)}>
            <Mono>§ V</Mono>
          </motion.div>
        </Box>

        <Box>
          <motion.div {...reveal(0.05)}>
            <Mono>The Trajectory · Selected Roles, 2020 — 2026</Mono>
          </motion.div>

          <Box mt={{ base: 10, md: 14 }}>
            {experience.map(({ date, role, org }, i) => (
              <motion.div key={role + date} {...reveal(i * 0.04)}>
                <Grid templateColumns={{ base: "1fr", md: "220px 1fr" }}
                  gap={{ base: 2, md: 10 }}
                  py={{ base: 6, md: 7 }}
                  borderBottom={`1px solid ${HAIR}`}
                  _first={{ borderTop: `1px solid ${HAIR}` }}
                >
                  <Mono>{date}</Mono>
                  <Box>
                    <Heading as="h3"
                      fontFamily={SERIF} fontWeight="400"
                      fontSize={{ base: "xl", md: "2xl" }}
                      color={INK} lineHeight="1.2" mb={1}
                      letterSpacing="-0.01em"
                      style={{ fontVariationSettings: FRA_LEDE, textWrap: "balance" }}
                    >{role}</Heading>
                    <Text fontFamily={SERIF}
                      fontSize={{ base: "14px", md: "15px" }}
                      fontStyle="italic" color={MUTED}
                      style={{ fontVariationSettings: FRA_LEDE }}
                    >{org}</Text>
                  </Box>
                </Grid>
              </motion.div>
            ))}
          </Box>

          {/* Clients in prose */}
          <motion.div {...reveal(0.2)}>
            <Box mt={{ base: 14, md: 20 }}>
              <Mono>Selected Clients</Mono>
              <Text fontFamily={SERIF} fontStyle="italic"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                color={INK} lineHeight="1.4"
                mt={5} maxWidth="900px"
                style={{
                  fontVariationSettings: FRA_TITLE,
                  textWrap: "balance",
                  hangingPunctuation: "first allow-end last",
                }}
              >
                {clients.map((c, i) => (
                  <Box as="span" key={c}>
                    {c}{i < clients.length - 1 ? ", " : "."}
                  </Box>
                ))}
              </Text>
            </Box>
          </motion.div>
        </Box>

        <Box />
      </Grid>
    </Box>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <Box id="contact" bg={SURFACE} px={{ base: 6, md: 10, lg: 16 }}
      py={{ base: 28, md: 44 }}
    >
      <Box maxWidth="1400px" mx="auto">
        <motion.div {...reveal(0)}>
          <Mono>§ VI · Enquiries</Mono>
        </motion.div>

        <motion.div {...reveal(0.1)}>
          <Heading as="h2"
            fontFamily={SERIF} fontWeight="400"
            fontSize={{ base: "5xl", md: "8xl", lg: "10xl" }}
            color={INK} lineHeight="0.92"
            letterSpacing="-0.028em"
            mt={8} mb={{ base: 14, md: 20 }}
            maxWidth="1200px"
            style={{
              fontVariationSettings: FRA_DISPLAY,
              textWrap: "balance",
              hangingPunctuation: "first allow-end last",
            }}
          >
            Begin with{" "}
            <Box as="span" fontStyle="italic"
              style={{ fontVariationSettings: FRA_DISPLAY_ITALIC }}
            >a long conversation.</Box>
          </Heading>
        </motion.div>

        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }}
          gap={{ base: 12, md: 14 }}
        >
          <motion.div {...reveal(0.2)}>
            <Mono>Direct</Mono>
            <Text fontFamily={SERIF}
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              color={INK} mt={4} lineHeight="1.2"
              style={{
                fontVariationSettings: FRA_TITLE,
                textWrap: "balance",
              }}
            >
              <Box as="a" href={`mailto:${EMAIL}`}
                textDecoration="none" color={INK}
                borderBottom={`1px solid ${INK}`} pb="4px"
                _hover={{ opacity: 0.5 }} style={{ transition: "opacity 0.4s" }}
              >{EMAIL}</Box>
            </Text>
            <Text fontFamily={SANS} fontSize="14px" fontWeight="300"
              color={MUTED} lineHeight="1.75" mt={6} maxWidth="420px"
              style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
            >
              A short note is plenty. Replies are personal,
              usually within a few working days.
            </Text>
          </motion.div>

          <motion.div {...reveal(0.3)}>
            <Mono>Studio</Mono>
            <Text fontFamily={SERIF} fontStyle="italic"
              fontSize={{ base: "xl", md: "2xl" }}
              color={INK} mt={4} lineHeight="1.4"
              style={{ fontVariationSettings: FRA_LEDE }}
            >
              London,<br />by appointment.
            </Text>
          </motion.div>

          <motion.div {...reveal(0.4)}>
            <Mono>Elsewhere</Mono>
            <Box mt={4}>
              <Underlink href={INSTA}>Instagram</Underlink>
            </Box>
          </motion.div>
        </Grid>
      </Box>
    </Box>
  );
}

// ─── Colophon ─────────────────────────────────────────────────────────────────
function Colophon() {
  return (
    <Box px={{ base: 6, md: 10, lg: 16 }} py={{ base: 10, md: 14 }}
      bg={INK} color={PAPER}
    >
      <Hairline light />
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }}
        gap={{ base: 8, md: 10 }} pt={{ base: 8, md: 10 }}
      >
        <Box>
          <Text fontFamily={SERIF} fontSize={{ base: "lg", md: "xl" }}
            color={PAPER} mb={3}
            style={{ fontVariationSettings: FRA_LEDE }}
          >
            Flavia Danes
          </Text>
          <Text fontFamily={SERIF} fontStyle="italic"
            fontSize={{ base: "13px", md: "14px" }}
            color="rgba(242,237,227,0.55)" lineHeight="1.6" maxWidth="380px"
            style={{ fontVariationSettings: FRA_LEDE }}
          >
            An independent practice in event strategy and production —
            in publication since 2020, in London.
          </Text>
        </Box>
        <Box>
          <Mono light>Colophon</Mono>
          <Text fontFamily={MONO} fontSize="11px"
            color="rgba(242,237,227,0.55)" lineHeight="1.7" mt={3}
            letterSpacing="0.02em"
          >
            Set in Fraunces<br />
            and Inter v4 ·<br />
            Metadata in<br />
            JetBrains Mono.
          </Text>
        </Box>
        <Box>
          <Mono light>Index</Mono>
          <Box mt={3}>
            {[["Practice", "#about"], ["Engagements", "#index"], ["Enquire", "#contact"]].map(([l, h]) => (
              <Box key={l} as="a" href={h} display="block" mb={1}
                fontFamily={MONO} fontSize="11px" letterSpacing="0.04em"
                color="rgba(242,237,227,0.75)" textDecoration="none"
                _hover={{ color: PAPER }} style={{ transition: "color 0.3s" }}
              >{l}</Box>
            ))}
          </Box>
        </Box>
        <Box>
          <Mono light>Year</Mono>
          <Text fontFamily={MONO} fontSize="11px"
            color="rgba(242,237,227,0.75)" mt={3}
          >MMXXVI · London</Text>
        </Box>
      </Grid>
    </Box>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FlaviaHome() {
  return (
    <Box bg={PAPER} minHeight="100vh" color={INK}>
      <Header />
      <Hero />
      <Plate />
      <Introduction />
      <IndexContents />

      {/* Case studies — COLLINS pattern, each with intro slab + full-bleed image */}
      {caseStudies.map((cs, i) => (
        <CaseStudy key={cs.num} cs={cs} index={i} />
      ))}

      <Disciplines />
      <Index />
      <Contact />
      <Colophon />
    </Box>
  );
}
