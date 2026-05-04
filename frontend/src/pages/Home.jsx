import { Box, Flex, Text, Heading, Grid, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import MkNavBar from "../components/NavBar";
import logo2 from "../assets/logo2.png";
import imgMoveGroove from "../assets/move-and-groove.jpg";
import imgScentMeetsSound from "../assets/scent-meets-sound.jpg";
import imgStillnessAfterDark from "../assets/stillness-after-dark.jpg";
import imgRedLight from "../assets/red-light-immersion.jpg";
import imgFlowIntoStillness from "../assets/flow-into-stillness.jpg";
import imgHerAutumnReset from "../assets/her-autumn-reset.jpg";

// ─── Tokens ───────────────────────────────────────────────────────────────────
const BG       = "#FDF6EE";
const DARK     = "#2a1e1a";
const TEXT     = "#403631";
const MUTED    = "#9a8878";
const BORDER   = "#e8ddd5";
const ACCENT   = "#EC6F51";
const LINKTREE = "https://www.instagram.com/wearevaya_/";
const EMAIL    = "hello@vayaevents.com";
const CONTACT    = "/contact";
const NEWSLETTER = "https://form.jotform.com/252685067130355";
const EB            = "https://www.eventbrite.co.uk/o/112025993841";
const EB_MOVE_GROOVE = "https://www.eventbrite.co.uk/e/yoga-and-live-dj-move-groove-with-vaya-tickets-1988231040564?aff=ebdssbdestsearch";
const EB_HER_SPRING_RESET = "https://www.eventbrite.co.uk/e/her-spring-reset-sound-bath-journaling-meditation-retreat-women-only-tickets-1988235100708";

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

function ScrollTypewriter({ text, speed = 55, as: Component = "span", ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    setDisplayed("");
    const t = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [inView, text, speed]);
  return (
    <Component ref={ref} {...rest}>
      {displayed}
      {inView && displayed.length < text.length && (
        <Box as="span" opacity={0.6}>|</Box>
      )}
    </Component>
  );
}

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
      fontFamily="'Raleway', sans-serif" fontSize="13px"
      letterSpacing="0.28em" textTransform="uppercase"
      color={light ? "rgba(245,240,235,0.4)" : MUTED}
    >
      {children}
    </Text>
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
      <Text fontFamily="'Raleway', sans-serif" fontSize="15px" letterSpacing="0.24em" textTransform="uppercase" color={MUTED}>{label}</Text>
      <Box>{children}</Box>
    </Grid>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const typed = useTypewriter("truly feel.", 160);
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
            maxWidth="680px"
          >
            Intentional wellness experiences
            <br />that make people{" "}
            <Box as="span" fontWeight="700" fontStyle="italic" color={ACCENT}
              fontFamily="'Playfair Display', serif"
            >{typed}<Box as="span" style={{ borderRight: "2px solid currentColor", marginLeft: "2px", animation: "blink 1s step-end infinite" }} /></Box>
          </Heading>
        </motion.div>

        <motion.div {...fade(0.4)}>
          <Text
            fontFamily="'Raleway', sans-serif"
            fontSize="sm" color={MUTED} lineHeight="1.85"
            maxWidth="420px" mb={4}
          >
            Sensory-led events that help you reconnect with your body,
            your mind and others.
          </Text>
          <Text
            fontFamily="'Raleway', sans-serif"
            fontSize="sm" color={MUTED} lineHeight="1.85"
            maxWidth="420px" mb={10}
          >
            Vaya integrates the physical with the mental, emotional and
            spiritual wellbeing, focusing on creating experiences that are
            truly allowing you to disconnect.
          </Text>
          <Flex gap={8} align="center" wrap="wrap">
            <TextLink href={EB}>Book an event</TextLink>
            <TextLink href="/brands" muted>Work with us</TextLink>
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
            as="img" src={IMG.heroBanner}
            alt="Vaya wellness experience"
            width="100%" height={{ base: "55vw", md: "62vh" }}
            objectFit="cover" display="block"
          />
        </motion.div>
      </FullBleed>
    </>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection() {
  const stats = [
    { n: "15+",  label: "Events hosted" },
    { n: "150+", label: "Guests welcomed" },
    { n: "14",   label: "Brand partners" },
    { n: "2025", label: "Est. London" },
  ];

  return (
    <motion.div {...fade(0)}>
      <Rule />
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
                as="img" src={IMG.aboutPortrait}
                alt="Vaya founder"
                width="100%" height={{ base: "70vw", md: "100%" }}
                objectFit="cover" display="block"
              />
            </motion.div>
          </Box>

          <Box
            bg="#FDF6EE"
            display="flex" flexDirection="column" justifyContent="center"
            px={{ base: 8, md: 14 }} py={{ base: 12, md: 16 }} gap={8}
          >
            <motion.div {...fade(0.1)}>
              <Cap>Our story</Cap>
            </motion.div>
            <motion.div {...fade(0.2)}>
              <Heading
                fontFamily="'Playfair Display', serif"
                fontWeight="400"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                color="#1a1410" lineHeight="1.2" mb={5}
              >
                Founded on the belief that
                <br />
                <ScrollTypewriter
                  as={Box}
                  text="self-care is a journey,"
                  fontStyle="italic"
                  color={ACCENT}
                />
                <br />
                not a destination.
              </Heading>
              <Text
                fontFamily="'Raleway', sans-serif"
                fontSize="md" color={MUTED} lineHeight="1.9" mb={5}
              >
                Vaya was created from a deep passion for wellness and
                meaningful connection. Every experience is carefully curated
                and designed with intention. We are here to nurture, foster
                community and remind people to take a break and look inwards.
              </Text>
            </motion.div>

            <motion.div {...fade(0.3)}>
              <Box borderTop={`1px solid ${BORDER}`} pt={8}>
                <SimpleGrid columns={2} gap={6}>
                  {stats.map(({ n, label }) => (
                    <Box key={label}>
                      <Text
                        fontFamily="'Playfair Display', serif"
                        fontSize="2xl" color="#EC6F51" lineHeight="1" mb={1}
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
  { name: "Drink Rituals & Social Wellbeing",         desc: "Curated beverage experiences woven into every gathering" },
  { name: "Mindful Movement Experiences",              desc: "Yoga, Pilates & somatic practices for every body" },
  { name: "Sound Healing, Meditation & Breathwork",   desc: "Restorative vibration, gong baths & nervous system resets" },
  { name: "Red Light Therapy",                        desc: "Science-backed cellular restoration & recovery" },
  { name: "Aromatherapy",                             desc: "Scent-led sensory rituals & handcrafted blends" },
  { name: "Brand Activations",                        desc: "Immersive co-created experiences for conscious brands" },
  { name: "Corporate Wellbeing",                      desc: "Bringing wellness directly into the workplace" },
];

function ServicesSection() {
  const [hovered, setHovered] = useState(null);
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Row label="What we offer">
        <Box>
          {services.map(({ name, desc }, i) => (
            <Flex
              key={name}
              borderBottom={`1px solid ${BORDER}`}
              py={5} px={4} align="center" justify="space-between"
              gap={6}
              _first={{ borderTop: `1px solid ${BORDER}` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              bg={hovered === i ? "#F28B75" : "transparent"}
              style={{ transition: "background 0.2s" }}
            >
              <Flex align="baseline" gap={5} flex={1}>
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="9px" color={MUTED}
                  letterSpacing="0.2em" minWidth="20px" flexShrink={0}
                >
                  {String(i + 1).padStart(2, "0")}
                </Text>
                <Box>
                  <Text
                    fontFamily="'Playfair Display', serif"
                    fontSize={{ base: "md", md: "lg" }} mb="2px"
                    color={TEXT}
                  >
                    {name}
                  </Text>
                  <Text
                    fontFamily="'Raleway', sans-serif"
                    fontSize="xs" color={MUTED}
                    display={{ base: "none", md: "block" }}
                  >
                    {desc}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          ))}
        </Box>
      </Row>
    </motion.div>
  );
}

// ─── Events ───────────────────────────────────────────────────────────────────
const events = [
  { date: "05 Oct 2025", name: "Her Autumn Reset",              type: "Soundbath Experience",                past: true,  link: null },
  { date: "01 Feb 2026", name: "Flow into Stillness",           type: "Yin Yoga + Sound Healing",            past: true,  link: null },
  { date: "08 Mar 2026", name: "Red Light Immersion",           type: "Sound + Red Light Therapy",           past: true,  link: null },
  { date: "29 Mar 2026", name: "Scent meets Sound",             type: "Aromatherapy + Sound Healing",        past: true,  link: null },
  { date: "10 Apr 2026", name: "Stillness after Dark",          type: "Sound Healing + Live Vocals",         past: true,  link: null },
  { date: "23 May 2026", name: "Move & Groove",                 type: "Yoga + Music",                        past: false, link: EB_MOVE_GROOVE },
  { date: "TBC",         name: "A Moment With Me with NILA M.", type: "Soundbath, journalling & breathwork", past: false, link: EB_HER_SPRING_RESET },
];

function EventsSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />

      <FullBleed>
        <SimpleGrid columns={{ base: 1, md: 2 }} minHeight={{ md: "480px" }}>
          <Box
            bg="#FDF6EE"
            display="flex" flexDirection="column" justifyContent="center"
            px={{ base: 8, md: 14 }} py={{ base: 12, md: 16 }} gap={6}
          >
            <Heading
              fontFamily="'Playfair Display', serif"
              fontWeight="400"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              color={ACCENT} lineHeight="1.1"
            >
              Our next<br /><em>experiences.</em>
            </Heading>
            <Text
              fontFamily="'Raleway', sans-serif"
              fontSize="sm" color={MUTED}
              lineHeight="1.85" maxWidth="320px"
            >
              Intimate, curated events across London. Each one designed to
              help you slow down, feel more, and leave lighter.
            </Text>
            <TextLink href={EB}>Book now</TextLink>
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
                as="img" src={IMG.eventsAtmos}
                alt="Vaya event atmosphere"
                width="100%" height={{ base: "70vw", md: "100%" }}
                objectFit="cover" display="block"
              />
            </motion.div>
          </Box>
        </SimpleGrid>
      </FullBleed>

      <Row label="Events">
        <Box>
          {events.slice(-4).map(({ date, name, type, past, link }, i) => (
            <motion.div key={name + i} {...fade(i * 0.06)}>
              <Flex
                borderBottom={`1px solid ${BORDER}`}
                py={5} align="center" justify="space-between"
                gap={4} wrap={{ base: "wrap", md: "nowrap" }}
                _first={{ borderTop: `1px solid ${BORDER}` }}
              >
                <Box flex={1}>
                  <Text
                    fontFamily="'Playfair Display', serif"
                    fontSize={{ base: "md", md: "lg" }}
                    color={past ? MUTED : TEXT} mb="3px"
                  >
                    {name}
                  </Text>
                  <Text fontFamily="'Raleway', sans-serif" fontSize="xs" color={MUTED}>
                    {type}
                  </Text>
                </Box>
                <Flex align="center" gap={6} flexShrink={0}>
                  <Text
                    fontFamily="'Raleway', sans-serif" fontSize="xs"
                    color={MUTED} letterSpacing="0.06em"
                    display={{ base: "none", md: "block" }}
                  >
                    {date}
                  </Text>
                  {past ? (
                    <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
                      letterSpacing="0.2em" textTransform="uppercase"
                      color={MUTED} opacity={0.45}
                    >Past</Text>
                  ) : link ? (
                    <Box as="a" href={link} target="_blank"
                      fontFamily="'Raleway', sans-serif" fontSize="9px"
                      letterSpacing="0.2em" textTransform="uppercase"
                      bg={ACCENT} color="white" px={3} py="5px"
                      textDecoration="none"
                      _hover={{ bg: "#F28B75" }} style={{ transition: "background 0.2s" }}
                    >Book now</Box>
                  ) : (
                    <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
                      letterSpacing="0.2em" textTransform="uppercase"
                      color={MUTED} opacity={0.45}
                    >Coming soon</Text>
                  )}
                </Flex>
              </Flex>
            </motion.div>
          ))}
        </Box>
      </Row>
    </motion.div>
  );
}

// ─── For Brands (home teaser) ─────────────────────────────────────────────────
const brandOfferings = [
  {
    title: "Co-Branded Events",
    body:  "We integrate your brand authentically into our curated wellness experiences through product sampling and storytelling moments. This drives genuine audience engagement.",
  },
  {
    title: "Bespoke Activations",
    body:  "From intimate workshops to multi-sensory brand experiences, we design and deliver end-to-end activations tailored to your audience and values.",
  },
  {
    title: "Corporate Wellbeing",
    body:  "Help your team reset and reconnect. We bring sound healing, movement, and nervous system workshops directly into your space.",
  },
];

const brandPartners = [
  "Bon Charge", "Tenzing", "Ancient & Brave", "Brisco Super Mocha",
  "London Nootropics", "Living Things", "Misty Aromatherapy",
  "LSKD", "Frank", "NILA M.", "Poco Vino",
];

function ForBrandsSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <FullBleed>
        <Box bg={DARK}>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box
              px={{ base: 8, md: 14 }} py={{ base: 14, md: 20 }}
              display="flex" flexDirection="column" gap={10}
            >
              <Box>
                <Cap light>For Brands</Cap>
                <Heading
                  fontFamily="'Playfair Display', serif"
                  fontWeight="400"
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  color="#f5f0eb" lineHeight="1.1" mt={5} mb={6}
                >
                  Where conscious brands
                  <br /><em>show up differently.</em>
                </Heading>
                <Text
                  fontFamily="'Raleway', sans-serif"
                  fontSize="sm" color="rgba(245,240,235,0.5)"
                  lineHeight="1.9" maxWidth="400px"
                >
                  Our audience is health-conscious, engaged and seeking
                  experiences that genuinely mean something. We help you
                  reach them in a way that is felt more profoundly.
                </Text>
              </Box>

              <Box borderTop="1px solid rgba(245,240,235,0.1)" pt={8}>
                <Flex direction="column" gap={0}>
                  {brandOfferings.map(({ title, body }, i) => (
                    <motion.div key={title} {...fade(i * 0.1)}>
                      <Box borderBottom="1px solid rgba(245,240,235,0.08)" py={5}>
                        <Text
                          fontFamily="'Playfair Display', serif"
                          fontSize="md" color="#f5f0eb" mb={2}
                        >
                          {title}
                        </Text>
                        <Text
                          fontFamily="'Raleway', sans-serif"
                          fontSize="xs" color="rgba(245,240,235,0.4)"
                          lineHeight="1.85" maxWidth="360px"
                        >
                          {body}
                        </Text>
                      </Box>
                    </motion.div>
                  ))}
                </Flex>
              </Box>

              <Box>
                <TextLink href={CONTACT} light>Get in touch — {EMAIL}</TextLink>
              </Box>
            </Box>

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
                    as="img" src={IMG.brandsImg} alt="Luxury brand products"
                    width="100%" height={{ base: "60vw", md: "50%" }}
                    objectFit="cover" display="block" minHeight={{ md: "280px" }}
                  />
                </motion.div>
              </Box>
              <Box overflow="hidden" flex={1}>
                <Box
                  as="img" src={IMG.candles} alt="Aromatherapy products"
                  width="100%" height={{ base: "60vw", md: "50%" }}
                  objectFit="cover" display="block" minHeight={{ md: "280px" }}
                />
              </Box>
            </Box>
          </SimpleGrid>

          {/* Partner brands strip */}
          <Box
            borderTop="1px solid rgba(245,240,235,0.08)"
            px={{ base: 8, md: 14 }} py={8}
          >
            <Flex align="center" gap={6} wrap="wrap">
              <Cap light>Partners</Cap>
              <Flex wrap="wrap" gap={{ base: 4, md: 6 }}>
                {brandPartners.map((b) => (
                  <Text
                    key={b}
                    fontFamily="'Raleway', sans-serif"
                    fontSize="10px" letterSpacing="0.1em"
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
        <Box
          as="img" src={IMG.founderImg} alt="Vaya experience"
          width="100%" height={{ base: "60vw", md: "420px" }}
          objectFit="cover" objectPosition="top" display="block"
        />
      </FullBleed>
    </motion.div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:  "Thank you. I felt a release of negative energy! I'm leaving feeling light, relaxed, with a calm nervous system. Less anxious.",
    source: "Red light therapy and sound healing experience",
  },
  {
    quote:  "A beautiful space to unwind and connect. Loved the different instruments & sounds created. Will be back — thank you!",
    source: "Sound healing and live vocals experience",
  },
  {
    quote:  "Loved every second of it. Aromatherapy was great and so was the soundbath. Great experience.",
    source: "Sound and aromatherapy workshop",
  },
];

function TestimonialsSection() {
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Grid templateColumns={{ base: "1fr", md: "180px 1fr" }}
        gap={{ base: 6, md: 16 }} py={{ base: 12, md: 16 }}
      >
        <Cap>Kind words</Cap>
        <Box
          display="flex" gap={8} overflowX="auto" pb={5}
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          css={{
            "&::-webkit-scrollbar": { height: "6px" },
            "&::-webkit-scrollbar-track": { background: BORDER },
            "&::-webkit-scrollbar-thumb": { background: "#F28B75", borderRadius: "3px" },
            "scrollbarWidth": "thin",
            "scrollbarColor": `#F28B75 ${BORDER}`,
          }}
        >
          {testimonials.map((t, i) => (
            <Box key={i} flexShrink={0} width={{ base: "85vw", md: "440px" }}
              borderTop={`2px solid ${BORDER}`} pt={6}
              style={{ scrollSnapAlign: "start" }}
            >
              <Text
                fontFamily="'Playfair Display', serif" fontStyle="italic"
                fontSize={{ base: "sm", md: "md" }}
                color={TEXT} lineHeight="1.8" mb={5}
              >
                "{t.quote}"
              </Text>
              <Text
                fontFamily="'Raleway', sans-serif" fontSize="9px"
                letterSpacing="0.22em" textTransform="uppercase" color={MUTED}
              >
                — {t.source}
              </Text>
            </Box>
          ))}
        </Box>
      </Grid>
    </motion.div>
  );
}

// ─── Brand Partners ───────────────────────────────────────────────────────────
const brandPartnersList = [
  "Bon Charge", "Tenzing", "Ancient & Brave", "Brisco Super Mocha",
  "London Nootropics", "Living Things", "Misty Aromatherapy",
  "LSKD", "Frank", "NILA M.", "Poco Vino",
];

function BrandPartnersSection() {
  const items = [...brandPartnersList, ...brandPartnersList]; // duplicate for seamless loop
  return (
    <motion.div {...fade(0)}>
      <Rule />
      <Box py={{ base: 10, md: 14 }} overflow="hidden">
        <Text fontFamily="'Raleway', sans-serif" fontSize="11px" letterSpacing="0.24em" textTransform="uppercase" color={MUTED} mb={6}>Brands we've worked with</Text>
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

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <motion.div {...fade(0)}>
      <Box borderTop={`1px solid ${BORDER}`} />
      <Box px={{ base: 6, md: 12 }} py={10}>
        <Flex justify="space-between" align="center" wrap="wrap" gap={6}>
          <Box as={RouterLink} to="/" textDecoration="none">
            <Box as="img" src={logo2} alt="Vaya" height="72px" display="block" />
          </Box>
          <Flex gap={8} wrap="wrap" align="center">
            {[["Instagram", LINKTREE], ["Events", "/events"], ["About", "/about"], ["Contact", CONTACT]].map(([label, href]) => (
              <Box
                key={label}
                as={href.startsWith("http") ? "a" : RouterLink}
                {...(href.startsWith("http") ? { href, target: "_blank" } : { to: href })}
                fontFamily="'Raleway', sans-serif" fontSize="9px"
                letterSpacing="0.22em" textTransform="uppercase"
                color={MUTED} textDecoration="none"
                _hover={{ color: TEXT }} style={{ transition: "color 0.2s" }}
              >
                {label}
              </Box>
            ))}
            <Box as="a" href={NEWSLETTER} target="_blank"
              fontFamily="'Raleway', sans-serif" fontSize="9px"
              letterSpacing="0.22em" textTransform="uppercase"
              bg={ACCENT} color="white"
              px={4} py="8px" textDecoration="none"
              _hover={{ bg: "#F28B75" }} style={{ transition: "background 0.2s" }}
            >
              Join newsletter
            </Box>
          </Flex>
          <Cap>London · Est. 2025</Cap>
        </Flex>
      </Box>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Box bg={BG} minHeight="100vh">
      <Box position="sticky" top={0} zIndex={10} bg={BG}><MkNavBar /></Box>
      <Box maxWidth="1280px" mx="auto" px={{ base: 6, md: 12 }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BrandPartnersSection />
        <EventsSection />
        <VisualBreak />
        <TestimonialsSection />
      </Box>
      <Footer />
    </Box>
  );
}
