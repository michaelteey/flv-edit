import { Box, Flex, Text, Heading, Grid, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const BG       = "#F4EFE5";  // warm cream
const TEXT     = "#1A1410";  // near-black, slight warmth
const MUTED    = "#7A6B5E";  // taupe
const SOFT     = "#A39588";  // softer taupe
const BORDER   = "#E0D8CC";  // subtle warm border
const ACCENT   = "#3D2F22";  // deep espresso (rare use)

const SERIF    = "'EB Garamond', 'Playfair Display', serif";
const SANS     = "'Inter', 'Raleway', sans-serif";

const EMAIL    = "hello@flaviadanes.com";
const INSTA    = "https://www.instagram.com/wearevaya_/";

// ─── Primitives ───────────────────────────────────────────────────────────────
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: [0.22, 0.61, 0.36, 1] },
});

function Eyebrow({ children, light = false }) {
  return (
    <Text fontFamily={SANS} fontSize="11px"
      letterSpacing="0.3em" textTransform="uppercase"
      color={light ? "rgba(244,239,229,0.55)" : SOFT}
      fontWeight="400"
    >{children}</Text>
  );
}

function Rule({ light = false }) {
  return <Box borderTop={`1px solid ${light ? "rgba(244,239,229,0.18)" : BORDER}`} />;
}

function FullBleed({ children }) {
  return <Box mx={{ base: -6, md: -10, lg: -16 }}>{children}</Box>;
}

function TextLink({ href, children, dark = false }) {
  const col = dark ? "#F4EFE5" : TEXT;
  const isExternal = href?.startsWith("http") || href?.startsWith("mailto");
  return (
    <Box as={isExternal ? "a" : RouterLink}
      {...(isExternal ? { href, target: href.startsWith("mailto") ? undefined : "_blank" } : { to: href })}
      fontFamily={SANS} fontSize="11px" letterSpacing="0.24em"
      textTransform="uppercase" color={col} textDecoration="none"
      borderBottom={`1px solid ${col}`} pb="3px"
      display="inline-flex" alignItems="center"
      _hover={{ opacity: 0.55 }} style={{ transition: "opacity 0.3s" }}
    >{children}</Box>
  );
}

// ─── Imagery ──────────────────────────────────────────────────────────────────
const IMG = {
  portrait:    "https://images.pexels.com/photos/3756168/pexels-photo-3756168.jpeg?auto=compress&cs=tinysrgb&w=1400",
  coreview1:   "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1800",
  coreview2:   "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200",
  cme1:        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1800",
  cme2:        "https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=1200",
  vaya1:       "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg?auto=compress&cs=tinysrgb&w=1800",
  vaya2:       "https://images.pexels.com/photos/11889669/pexels-photo-11889669.jpeg?auto=compress&cs=tinysrgb&w=1200",
  detail:      "https://images.pexels.com/photos/31359311/pexels-photo-31359311.jpeg?auto=compress&cs=tinysrgb&w=1800",
};

// ─── Header ───────────────────────────────────────────────────────────────────
function MinimalHeader() {
  return (
    <Box position="absolute" top={0} left={0} right={0} zIndex={10}
      px={{ base: 6, md: 10, lg: 16 }} py={{ base: 7, md: 9 }}
    >
      <Flex justify="space-between" align="center">
        <Box as={RouterLink} to="/" textDecoration="none">
          <Text fontFamily={SERIF} fontWeight="400"
            fontSize={{ base: "18px", md: "20px" }} letterSpacing="0.02em"
            color={TEXT}
          >Flavia Danes</Text>
        </Box>
        <Flex gap={{ base: 6, md: 10 }} align="center">
          {[
            ["Work",     "#work"],
            ["About",    "#about"],
            ["Contact",  "#contact"],
          ].map(([label, href]) => (
            <Box key={label} as="a" href={href}
              fontFamily={SANS} fontSize="11px"
              letterSpacing="0.24em" textTransform="uppercase"
              color={TEXT} textDecoration="none" fontWeight="400"
              _hover={{ opacity: 0.55 }} style={{ transition: "opacity 0.3s" }}
            >{label}</Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <Box minHeight={{ base: "92vh", md: "100vh" }} position="relative"
      display="flex" alignItems="center"
      px={{ base: 6, md: 10, lg: 16 }}
      pt={{ base: 28, md: 32 }} pb={{ base: 16, md: 20 }}
    >
      <Box maxWidth="1000px">
        <motion.div {...fade(0.1)}>
          <Eyebrow>Event Strategy & Production · London</Eyebrow>
        </motion.div>

        <motion.div {...fade(0.25)}>
          <Heading as="h1"
            fontFamily={SERIF} fontWeight="400"
            fontSize={{ base: "5xl", md: "8xl", lg: "9xl" }}
            color={TEXT} lineHeight="0.95"
            letterSpacing="-0.01em"
            mt={{ base: 8, md: 10 }}
            mb={{ base: 10, md: 14 }}
          >
            Flavia<br />
            <Box as="span" fontStyle="italic" fontWeight="400">Danes</Box>
          </Heading>
        </motion.div>

        <motion.div {...fade(0.45)}>
          <Text fontFamily={SERIF} fontStyle="italic" fontWeight="400"
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            color={MUTED} lineHeight="1.4"
            maxWidth="640px" mb={{ base: 10, md: 12 }}
          >
            An independent producer of considered events —
            building moments that feel inevitable, not orchestrated.
          </Text>
        </motion.div>

        <motion.div {...fade(0.6)}>
          <Flex gap={8} wrap="wrap" align="center">
            <TextLink href="#work">Selected Work</TextLink>
            <TextLink href="#contact">Get in Touch</TextLink>
          </Flex>
        </motion.div>
      </Box>

      <Box position="absolute" bottom={{ base: 6, md: 10 }} right={{ base: 6, md: 10, lg: 16 }}>
        <motion.div {...fade(1.0)}>
          <Eyebrow>Est. London</Eyebrow>
        </motion.div>
      </Box>
    </Box>
  );
}

// ─── Introduction ─────────────────────────────────────────────────────────────
function Introduction() {
  return (
    <Box id="about" px={{ base: 6, md: 10, lg: 16 }} py={{ base: 24, md: 40 }}>
      <Rule />
      <Grid templateColumns={{ base: "1fr", md: "1fr 1.4fr" }}
        gap={{ base: 12, md: 24 }} pt={{ base: 14, md: 24 }}
      >
        <motion.div {...fade(0)}>
          <Box overflow="hidden">
            <Box as="img" src={IMG.portrait} alt="Flavia Danes"
              width="100%" display="block"
              style={{ aspectRatio: "4 / 5", objectFit: "cover" }}
            />
          </Box>
        </motion.div>

        <Box pt={{ md: 4 }}>
          <motion.div {...fade(0.1)}>
            <Eyebrow>A Note</Eyebrow>
          </motion.div>

          <motion.div {...fade(0.2)}>
            <Heading as="h2"
              fontFamily={SERIF} fontWeight="400"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              color={TEXT} lineHeight="1.15"
              mt={6} mb={{ base: 8, md: 12 }} maxWidth="640px"
            >
              I produce events that move
              quietly — and land precisely.
            </Heading>
          </motion.div>

          <motion.div {...fade(0.3)}>
            <Text fontFamily={SANS} fontSize={{ base: "15px", md: "17px" }}
              fontWeight="300" color={TEXT} lineHeight="1.75"
              maxWidth="540px" mb={6}
            >
              Six years of producing corporate, financial and lifestyle
              events across EMEA — most recently as Senior Global Marketing
              Events Manager at <Box as="span" fontStyle="italic">CoreView</Box>,
              previously leading the EMEA programme at <Box as="span" fontStyle="italic">CME Group</Box>,
              and in parallel as founder of the wellness studio
              <Box as="span" fontStyle="italic"> Vaya</Box>.
            </Text>
            <Text fontFamily={SANS} fontSize={{ base: "15px", md: "17px" }}
              fontWeight="300" color={MUTED} lineHeight="1.75"
              maxWidth="540px" mb={10}
            >
              My work spans strategy, production and creative direction —
              from 300-person investor days to intimate brand activations.
              I take long retainers, considered commissions and the occasional
              ambitious one-off. Every project starts with a conversation.
            </Text>
            <TextLink href="#contact">Start a Conversation</TextLink>
          </motion.div>
        </Box>
      </Grid>
    </Box>
  );
}

// ─── Selected Work ────────────────────────────────────────────────────────────
const caseStudies = [
  {
    num:    "01",
    client: "CoreView",
    title:  "Global marketing events programme",
    role:   "Senior Global Marketing Events Manager · 2026 — Present",
    body:   "Owning CoreView's global marketing events — strategy, programme architecture and end-to-end delivery across EMEA and North America. Building the practice from the ground up to support an ambitious go-to-market motion.",
    img:    IMG.coreview1,
    alt:    IMG.coreview2,
    side:   "right",
  },
  {
    num:    "02",
    client: "CME Group",
    title:  "EMEA events for the world's leading derivatives marketplace",
    role:   "Senior Corporate Marketing & Events Manager · 2023 — 2026",
    body:   "Led the end-to-end planning and execution of high-profile in-person, virtual and hybrid events across EMEA — 20 to 300 attendees, multi-currency budgets up to £250K. Owned executive hospitality, sponsorships and client engagement; ran post-event analysis to demonstrate measurable ROI. Acted as the global team's go-to Cvent expert.",
    img:    IMG.cme1,
    alt:    IMG.cme2,
    side:   "left",
  },
  {
    num:    "03",
    client: "Vaya",
    title:  "A wellness studio, built alongside",
    role:   "Founder · 2025 — 2026",
    body:   "Founded a sensory-led wellness experience agency while in a full-time role — owning event vision, concept design, venue sourcing, ticketing strategy across Eventbrite and CLIQ, and partnerships with conscious wellness brands. Now paused as a public programme while Flavia returns to independent client work.",
    img:    IMG.vaya1,
    alt:    IMG.vaya2,
    side:   "right",
    founderNote: true,
  },
];

function CaseStudy({ num, client, title, role, body, img, alt, side, founderNote }) {
  const reverse = side === "left";
  return (
    <motion.div {...fade(0)}>
      <Box py={{ base: 16, md: 28 }} px={{ base: 6, md: 10, lg: 16 }}>
        <Grid templateColumns={{ base: "1fr", md: reverse ? "1fr 1fr" : "1fr 1fr" }}
          gap={{ base: 10, md: 20 }} alignItems="center"
        >
          {/* Image side */}
          <Box order={{ base: 1, md: reverse ? 2 : 1 }}>
            <Box overflow="hidden">
              <motion.div
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Box as="img" src={img} alt={`${client} — ${title}`}
                  width="100%" display="block"
                  style={{ aspectRatio: "4 / 5", objectFit: "cover" }}
                />
              </motion.div>
            </Box>
          </Box>

          {/* Text side */}
          <Box order={{ base: 2, md: reverse ? 1 : 2 }} pt={{ md: 8 }}>
            <Flex gap={4} mb={6} align="center">
              <Text fontFamily={SANS} fontSize="11px" letterSpacing="0.24em"
                color={SOFT}
              >{num} —</Text>
              <Eyebrow>{client}</Eyebrow>
            </Flex>
            <Heading as="h3"
              fontFamily={SERIF} fontWeight="400"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              color={TEXT} lineHeight="1.15"
              mb={5} maxWidth="540px"
            >{title}</Heading>
            <Text fontFamily={SANS} fontSize="13px"
              letterSpacing="0.05em" color={MUTED} mb={8}
              fontStyle="italic" fontWeight="300"
            >{role}</Text>
            <Text fontFamily={SANS} fontSize={{ base: "15px", md: "16px" }}
              fontWeight="300" color={TEXT} lineHeight="1.85"
              maxWidth="500px" mb={founderNote ? 6 : 0}
            >{body}</Text>
            {founderNote && (
              <Text fontFamily={SERIF} fontStyle="italic"
                fontSize={{ base: "15px", md: "16px" }}
                color={MUTED} lineHeight="1.7"
                maxWidth="500px"
              >
                Founded by Flavia · paused as a public programme in 2026
                while she returns to independent client work.
              </Text>
            )}
          </Box>
        </Grid>
      </Box>
    </motion.div>
  );
}

function SelectedWork() {
  return (
    <Box id="work">
      <Box px={{ base: 6, md: 10, lg: 16 }}>
        <Rule />
        <Flex justify="space-between" align={{ md: "flex-end" }}
          wrap="wrap" gap={6} pt={{ base: 14, md: 20 }} mb={{ base: 4, md: 0 }}
        >
          <Box>
            <motion.div {...fade(0)}>
              <Eyebrow>Selected Work</Eyebrow>
            </motion.div>
            <motion.div {...fade(0.1)}>
              <Heading as="h2"
                fontFamily={SERIF} fontWeight="400"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                color={TEXT} lineHeight="1.0"
                letterSpacing="-0.01em" mt={6}
              >
                A decade<br /><Box as="span" fontStyle="italic">in the room.</Box>
              </Heading>
            </motion.div>
          </Box>
          <motion.div {...fade(0.2)}>
            <Text fontFamily={SANS} fontSize="14px" fontWeight="300"
              color={MUTED} lineHeight="1.8" maxWidth="320px"
            >
              Three programmes that defined the last few years of practice.
              Full press kit and references available on request.
            </Text>
          </motion.div>
        </Flex>
      </Box>

      {caseStudies.map((cs) => <CaseStudy key={cs.num} {...cs} />)}
    </Box>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  { num: "I",   title: "Event strategy",         body: "Programme design, audience strategy, format and narrative architecture for flagship moments." },
  { num: "II",  title: "Production & delivery",  body: "End-to-end production: agency selection, run-of-show, vendor management, on-the-day command." },
  { num: "III", title: "Creative direction",     body: "Concept development, art direction, sensory design and brand integration for considered events." },
  { num: "IV",  title: "Long-term partnership",  body: "Retained advisory for in-house teams building an event practice from the ground up." },
];

function Services() {
  const [hovered, setHovered] = useState(null);
  return (
    <Box bg={ACCENT} color="#F4EFE5" px={{ base: 6, md: 10, lg: 16 }}
      py={{ base: 24, md: 36 }}
    >
      <motion.div {...fade(0)}>
        <Eyebrow light>What I offer</Eyebrow>
      </motion.div>
      <motion.div {...fade(0.1)}>
        <Heading as="h2"
          fontFamily={SERIF} fontWeight="400"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          color="#F4EFE5" lineHeight="1.0"
          letterSpacing="-0.01em" mt={6} mb={{ base: 14, md: 20 }}
        >
          Four ways<br /><Box as="span" fontStyle="italic">we might work.</Box>
        </Heading>
      </motion.div>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={0}>
        {services.map(({ num, title, body }, i) => (
          <motion.div key={num} {...fade(i * 0.08)}>
            <Box
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              borderTop="1px solid rgba(244,239,229,0.18)"
              borderBottom={{ md: i >= 2 ? "1px solid rgba(244,239,229,0.18)" : "none" }}
              borderRight={{ md: i % 2 === 0 ? "1px solid rgba(244,239,229,0.18)" : "none" }}
              py={{ base: 10, md: 14 }} px={{ base: 0, md: 10 }}
              style={{ transition: "background 0.4s" }}
              bg={hovered === i ? "rgba(244,239,229,0.04)" : "transparent"}
            >
              <Flex gap={6} align="baseline" mb={4}>
                <Text fontFamily={SERIF} fontStyle="italic"
                  fontSize="lg" color="rgba(244,239,229,0.5)"
                >{num}</Text>
                <Heading as="h3" fontFamily={SERIF} fontWeight="400"
                  fontSize={{ base: "2xl", md: "3xl" }} color="#F4EFE5"
                >{title}</Heading>
              </Flex>
              <Text fontFamily={SANS} fontSize="15px" fontWeight="300"
                color="rgba(244,239,229,0.7)" lineHeight="1.8"
                maxWidth="440px" pl={{ base: 0, md: 10 }}
              >{body}</Text>
            </Box>
          </motion.div>
        ))}
      </Grid>
    </Box>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────
const experience = [
  { date: "Jun 2026 —",       role: "Senior Global Marketing Events Manager", org: "CoreView" },
  { date: "Aug 2025 — Jun 2026", role: "Founder",                              org: "Vaya Events · alongside CME" },
  { date: "Oct 2023 — Jun 2026", role: "Senior Corporate Marketing & Events Manager", org: "CME Group · London" },
  { date: "Mar 2023 — Oct 2023", role: "Events Delivery Manager, EMEA",        org: "OpenExchange · London" },
  { date: "Jun 2022 — Mar 2023", role: "Senior Project Manager, EMEA",         org: "OpenExchange · London" },
  { date: "Feb 2021 — May 2022", role: "Project Manager, EMEA",                org: "OpenExchange · Remote" },
  { date: "Nov 2020 — Feb 2021", role: "Associate Video Specialist",           org: "OpenExchange · Freelance" },
];

function Experience() {
  return (
    <Box px={{ base: 6, md: 10, lg: 16 }} py={{ base: 24, md: 36 }}>
      <Rule />
      <Grid templateColumns={{ base: "1fr", md: "320px 1fr" }}
        gap={{ base: 10, md: 20 }} pt={{ base: 14, md: 20 }}
      >
        <Box>
          <motion.div {...fade(0)}>
            <Eyebrow>Experience</Eyebrow>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <Heading as="h2"
              fontFamily={SERIF} fontWeight="400"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              color={TEXT} lineHeight="1.0" mt={6}
            >
              The<br /><Box as="span" fontStyle="italic">trajectory.</Box>
            </Heading>
          </motion.div>
        </Box>

        <Box>
          {experience.map(({ date, role, org }, i) => (
            <motion.div key={role} {...fade(i * 0.06)}>
              <Grid templateColumns={{ base: "1fr", md: "160px 1fr" }}
                gap={{ base: 2, md: 8 }}
                py={{ base: 6, md: 8 }}
                borderBottom={`1px solid ${BORDER}`}
                _first={{ borderTop: `1px solid ${BORDER}` }}
              >
                <Text fontFamily={SANS} fontSize="12px"
                  letterSpacing="0.18em" color={SOFT}
                  textTransform="uppercase" pt={{ md: 1 }}
                >{date}</Text>
                <Box>
                  <Heading as="h3"
                    fontFamily={SERIF} fontWeight="400"
                    fontSize={{ base: "xl", md: "2xl" }}
                    color={TEXT} lineHeight="1.2" mb={1}
                  >{role}</Heading>
                  <Text fontFamily={SANS} fontSize="14px"
                    fontStyle="italic" fontWeight="300" color={MUTED}
                  >{org}</Text>
                </Box>
              </Grid>
            </motion.div>
          ))}
        </Box>
      </Grid>
    </Box>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <Box id="contact" px={{ base: 6, md: 10, lg: 16 }}
      py={{ base: 24, md: 40 }}
    >
      <Rule />
      <Box pt={{ base: 14, md: 24 }} maxWidth="900px">
        <motion.div {...fade(0)}>
          <Eyebrow>Get in Touch</Eyebrow>
        </motion.div>

        <motion.div {...fade(0.1)}>
          <Heading as="h2"
            fontFamily={SERIF} fontWeight="400"
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
            color={TEXT} lineHeight="0.95"
            letterSpacing="-0.01em" mt={8} mb={{ base: 10, md: 14 }}
          >
            Let's begin<br /><Box as="span" fontStyle="italic">with a conversation.</Box>
          </Heading>
        </motion.div>

        <motion.div {...fade(0.2)}>
          <Text fontFamily={SANS} fontSize={{ base: "16px", md: "18px" }}
            fontWeight="300" color={MUTED} lineHeight="1.7"
            maxWidth="540px" mb={12}
          >
            Whether you're building an event practice from scratch
            or refining a flagship moment, I'd love to hear about it.
            A short note is plenty — I respond personally within a few days.
          </Text>
        </motion.div>

        <motion.div {...fade(0.3)}>
          <Flex direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 14 }} align={{ md: "flex-end" }}
          >
            <Box>
              <Eyebrow>Email</Eyebrow>
              <Text fontFamily={SERIF} fontSize={{ base: "2xl", md: "3xl" }}
                color={TEXT} mt={3}
              >
                <Box as="a" href={`mailto:${EMAIL}`}
                  textDecoration="none" color={TEXT}
                  borderBottom={`1px solid ${TEXT}`} pb="2px"
                  _hover={{ opacity: 0.55 }} style={{ transition: "opacity 0.3s" }}
                >{EMAIL}</Box>
              </Text>
            </Box>
            <Box>
              <Eyebrow>Elsewhere</Eyebrow>
              <Box mt={3}>
                <TextLink href={INSTA}>Instagram</TextLink>
              </Box>
            </Box>
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <Box px={{ base: 6, md: 10, lg: 16 }} py={{ base: 8, md: 10 }}
      borderTop={`1px solid ${BORDER}`}
    >
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Text fontFamily={SERIF} fontSize="15px" color={TEXT}>
          Flavia Danes
        </Text>
        <Eyebrow>© 2026 · London</Eyebrow>
      </Flex>
    </Box>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FlaviaHome() {
  return (
    <Box bg={BG} minHeight="100vh" color={TEXT}>
      <MinimalHeader />
      <Hero />
      <Introduction />
      <SelectedWork />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </Box>
  );
}
