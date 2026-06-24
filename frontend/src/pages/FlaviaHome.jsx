import { Box, Flex, Text, Heading, Grid } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

// ─── Tokens — light bone + velvet green ──────────────────────────────────────
const PAPER   = "#EFEAE0";    // warm bone — page background
const SURFACE = "#E6DFD2";    // slightly deeper variant for raised surfaces
const INK     = "#1A1F1B";    // near-black, green undertone — primary text
const MUTED   = "#5E665E";    // sage-gray — body secondary
const SOFT    = "#8F8E80";    // light caption gray — eyebrows
const HAIR    = "rgba(26, 31, 27, 0.10)";
const UMBER   = "#22443A";    // VELVET — signature accent (Barrier bg, hover, italic accents)
const VELVET  = "#22443A";    // alias

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
// All in-page reveals use the same deep expo-out curve and longer durations
// so the page feels deliberate. Trigger earlier (amount: 0.05) so a reveal
// has already started by the time the user's eye reaches it.
const EXPO = [0.16, 1, 0.3, 1];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 1.4, delay, ease: EXPO },
});

const slowFade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 2.0, delay, ease: EXPO },
});

const imgReveal = {
  initial: { opacity: 0, scale: 1.08 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 2.4, ease: EXPO },
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
    <Box borderTop={`1px solid ${light ? "rgba(239,234,224,0.18)" : HAIR}`} />
  );
}

// Animated hairline that draws in on scroll (scaleX 0 → 1, expo-out)
function AnimatedHairline({ light = false, delay = 0 }) {
  return (
    <Box overflow="hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: "1px",
          background: light ? "rgba(239,234,224,0.25)" : HAIR,
          transformOrigin: "left",
        }}
      />
    </Box>
  );
}

// Big chapter title — used at the top of every section
function SectionOpener({ num, title, caption, light = false }) {
  const titleColor = light ? PAPER : INK;
  const captionColor = light ? "rgba(239,234,224,0.55)" : SOFT;

  return (
    <Box pt={{ base: 12, md: 16 }} pb={{ base: 10, md: 14 }}>
      <AnimatedHairline light={light} />
      <Flex justify="space-between" wrap="wrap" gap={4}
        pt={{ base: 6, md: 8 }} pb={{ base: 8, md: 10 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Text fontFamily={MONO} fontSize="11px"
            letterSpacing="0.36em" textTransform="uppercase"
            color={captionColor} fontWeight="400"
          >{num}</Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <Text fontFamily={MONO} fontSize="11px"
            letterSpacing="0.36em" textTransform="uppercase"
            color={captionColor} fontWeight="400"
          >{caption}</Text>
        </motion.div>
      </Flex>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Heading as="h2"
          fontFamily={SERIF} fontWeight="400" fontStyle="italic"
          fontSize={{ base: "5xl", md: "8xl", lg: "9xl" }}
          color={titleColor} lineHeight="0.92"
          letterSpacing="-0.03em"
          style={{
            fontVariationSettings: FRA_DISPLAY,
            textWrap: "balance",
          }}
        >{title}</Heading>
      </motion.div>
    </Box>
  );
}

// ─── Scroll progress bar — always-visible velvet strip at top of viewport ───
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: "3px",
        background: VELVET,
        transformOrigin: "left",
        scaleX: scrollYProgress,
        zIndex: 30,
      }}
    />
  );
}

// ─── Curtain — two velvet panels with interlocking triangular teeth ─────────
function leftPanelClip(teeth = 20) {
  const pts = ["0% 0%", "88% 0%"];
  for (let i = 0; i < teeth; i++) {
    const mid = ((i + 0.5) / teeth) * 100;
    const end = ((i + 1) / teeth) * 100;
    pts.push(`100% ${mid.toFixed(2)}%`);
    pts.push(`88% ${end.toFixed(2)}%`);
  }
  pts.push("0% 100%");
  return `polygon(${pts.join(", ")})`;
}

function rightPanelClip(teeth = 20) {
  const pts = ["100% 0%", "12% 0%"];
  for (let i = 0; i < teeth; i++) {
    const mid = ((i + 0.5) / teeth) * 100;
    const end = ((i + 1) / teeth) * 100;
    pts.push(`0% ${mid.toFixed(2)}%`);
    pts.push(`12% ${end.toFixed(2)}%`);
  }
  pts.push("100% 100%");
  return `polygon(${pts.join(", ")})`;
}

function Curtain() {
  const [opened, setOpened] = useState(false);

  // Scroll lock while the curtain is closed. preventDefault on wheel +
  // touchmove halts wheel/touch scroll. overflow: hidden as belt-and-
  // suspenders. NO scrollTo in cleanup — that was causing random jumps
  // back to top after the curtain opened.
  useEffect(() => {
    if (opened) return;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const block = (e) => e.preventDefault();
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
    };
  }, [opened]);

  useEffect(() => {
    const onKey = (e) => {
      if (["Enter", " ", "Space"].includes(e.key)) setOpened(true);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const leftClip  = leftPanelClip(20);
  const rightClip = rightPanelClip(20);

  return (
    <Box position="fixed" inset={0} zIndex={50}
      pointerEvents={opened ? "none" : "auto"}
      onClick={() => setOpened(true)}
      onTouchStart={() => setOpened(true)}
      cursor={opened ? "default" : "pointer"}
      role="button"
      tabIndex={opened ? -1 : 0}
      aria-label="Tap to enter"
    >
      {/* Brand text + tap cue, centred on the curtain */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{
          opacity: opened ? 0 : 1,
          y: opened ? -32 : 0,
        }}
        transition={{
          duration: opened ? 0.8 : 1.6,
          delay: opened ? 0 : 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
          pointerEvents: "none",
          padding: "0 24px",
        }}
      >
        <Text fontFamily={MONO} fontSize="11px"
          letterSpacing="0.36em" textTransform="uppercase"
          color="rgba(239,234,224,0.55)" mb={{ base: 4, md: 6 }}
        >
          Flavia Danes · MMXXVI
        </Text>
        <Text fontFamily={SERIF} fontStyle="italic"
          fontSize={{ base: "8xl", md: "12xl", lg: "13xl" }}
          color={PAPER} lineHeight="1"
          letterSpacing="-0.04em"
          style={{ fontVariationSettings: FRA_DISPLAY_ITALIC }}
        >
          Danes.
        </Text>
        <Text fontFamily={MONO} fontSize="10px"
          letterSpacing="0.36em" textTransform="uppercase"
          color="rgba(239,234,224,0.4)" mt={{ base: 8, md: 12 }}
        >
          Tap to enter
        </Text>
      </motion.div>

      {/* Left panel — jagged right edge, exits left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: opened ? "-110%" : "0%" }}
        transition={{ duration: 2.0, ease: [0.83, 0, 0.17, 1] }}
        style={{
          position: "absolute",
          top: 0, left: 0, bottom: 0,
          width: "56vw",
          background: VELVET,
          clipPath: leftClip,
          WebkitClipPath: leftClip,
          zIndex: 2,
        }}
      />

      {/* Right panel — jagged left edge, exits right */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: opened ? "110%" : "0%" }}
        transition={{ duration: 2.0, ease: [0.83, 0, 0.17, 1] }}
        style={{
          position: "absolute",
          top: 0, right: 0, bottom: 0,
          width: "56vw",
          background: VELVET,
          clipPath: rightClip,
          WebkitClipPath: rightClip,
          zIndex: 2,
        }}
      />
    </Box>
  );
}

// ─── Section Gate — fixed overlay driven by a scroll-tracker element ────────
//
// We don't use position: sticky because it always leaves a tail equal to the
// sticky child height (= 100vh of blank scroll). Instead a 100vh tall ref
// acts as the "scroll track", and a position: fixed overlay is shown while
// the user is scrolling through that track. Once the track scrolls past,
// the overlay fades out and the next section begins immediately — no blank.

function SectionGate({ num, title, caption = "Tap to open" }) {
  const ref = useRef(null);
  const tappedRef = useRef(false);
  // offset: ["start end", "start start"] →
  //   progress 0 when tracker.top is at viewport.BOTTOM (just appeared at the
  //   bottom of the screen) — i.e. the user has just scrolled enough for
  //   "Begin a Conversation" to come into view.
  //   progress 1 when tracker.top is at viewport.TOP — i.e. the gate has
  //   fully scrolled up into the viewport and Introduction is gone.
  // Total scroll for progress 0 → 1 = exactly one viewport (100vh).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Render overlay only while the tracker is intersecting the viewport.
  // Outside that, overlay is unmounted — no opacity ramp, no bleed.
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Tap-to-open gate. Once the panels have fully covered the viewport, lock
  // scroll and wait for the user to tap. Tap triggers a smooth scroll past
  // the track, which drives the explode animation via the existing spring.
  const [locked, setLocked] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!tappedRef.current && v >= 0.6 && v < 1) {
      setLocked(true);
    }
    // Re-arm the gate only when the user has scrolled fully back above it,
    // so re-entry (scroll back up then down) requires another tap.
    if (v <= 0.05) {
      tappedRef.current = false;
    }
  });

  const handleTap = () => {
    tappedRef.current = true;
    // Release the scroll lock synchronously: setLocked(false) commits async,
    // but scrollTo({behavior:"smooth"}) is silently clamped while the root
    // has overflow:hidden. The lock effect cleanup re-clears these on the
    // next commit — idempotent.
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    setLocked(false);
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + rect.bottom + 20,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!locked) return;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const block = (e) => e.preventDefault();
    const onKey = (e) => {
      if (["Enter", " ", "Space"].includes(e.key)) handleTap();
    };
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
      window.removeEventListener("keydown", onKey);
    };
  }, [locked]);

  // Smooth the raw scroll progress through a spring so every scroll-bound
  // animation in the gate has weight and inertia. The spring "follows" the
  // user's scroll position instead of snapping with it, which is what makes
  // the rise + title + explode feel deliberate rather than mechanical.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    mass: 0.6,
    restDelta: 0.0005,
  });

  // Phase A — slow rise. Panels start at 100vh (off-screen below) and rise
  // to 0vh over the first 58% of progress — synced with the Introduction
  // scrolling up. Slightly longer than before so the rise reads as
  // intentional, not abrupt.
  const panelY = useTransform(smooth, [0, 0.58], ["100vh", "0vh"]);

  // Phase B — title fades in once cover is full, holds for 24% of progress
  // (≈ 24vh of unhurried reading), then fades out as the panels begin to
  // unlock. titleY uses a longer travel for a softer lift.
  const titleOpacity = useTransform(smooth, [0.58, 0.66, 0.84, 0.90], [0, 1, 1, 0]);
  const titleY       = useTransform(smooth, [0.58, 0.92], [56, -70]);
  const titleScale   = useTransform(smooth, [0.58, 0.70, 0.92], [0.94, 1, 1.02]);

  // Phase C — explode. Panels translateX 0 → ±70vw across 0.86 → 0.99 so the
  // animation finishes with momentum (panels are well past viewport edge)
  // and never "stops short" before the overlay unmounts.
  const leftX  = useTransform(smooth, [0.86, 0.99], ["0vw", "-70vw"]);
  const rightX = useTransform(smooth, [0.86, 0.99], ["0vw",  "70vw"]);

  const leftClip  = leftPanelClip(20);
  const rightClip = rightPanelClip(20);

  return (
    <Box ref={ref} position="relative" height="10vh" className="flv-gate">
      {(active || locked) && (
        <motion.div
          onClick={locked ? handleTap : undefined}
          role={locked ? "button" : undefined}
          tabIndex={locked ? 0 : -1}
          aria-label={locked ? "Tap to open" : undefined}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 40,
            pointerEvents: locked ? "auto" : "none",
            cursor: locked ? "pointer" : "default",
            overflow: "hidden",
          }}
        >
          {/* Title overlay — visible after the curtain is fully closed */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 24px",
              zIndex: 4,
              pointerEvents: "none",
              opacity: titleOpacity,
              y: titleY,
              scale: titleScale,
            }}
          >
            <Text fontFamily={MONO} fontSize="11px"
              letterSpacing="0.36em" textTransform="uppercase"
              color="rgba(239,234,224,0.55)" mb={{ base: 4, md: 6 }}
            >{num}</Text>
            <Heading
              fontFamily={SERIF} fontStyle="italic" fontWeight="400"
              fontSize={{ base: "7xl", md: "10xl", lg: "12xl" }}
              color={PAPER} lineHeight="1" letterSpacing="-0.04em"
              textAlign="center"
              style={{ fontVariationSettings: FRA_DISPLAY_ITALIC, textWrap: "balance" }}
            >{title}</Heading>
            <Text fontFamily={MONO} fontSize="10px"
              letterSpacing="0.36em" textTransform="uppercase"
              color="rgba(239,234,224,0.4)" mt={{ base: 8, md: 12 }}
            >{caption}</Text>
          </motion.div>

          {/* Left curtain panel */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "56vw",
              background: VELVET,
              clipPath: leftClip,
              WebkitClipPath: leftClip,
              zIndex: 2,
              y: panelY,
              x: leftX,
            }}
          />

          {/* Right curtain panel */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "56vw",
              background: VELVET,
              clipPath: rightClip,
              WebkitClipPath: rightClip,
              zIndex: 2,
              y: panelY,
              x: rightX,
            }}
          />
        </motion.div>
      )}
    </Box>
  );
}

// ─── Continuous scroll accents — corner spinner + sidebar + bottom drift ────
function ScrollAccents() {
  const { scrollYProgress } = useScroll();
  const cornerRotate = useTransform(scrollYProgress, [0, 1], [0, 540]);
  const sidebarY     = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const bottomBarX   = useTransform(scrollYProgress, [0, 1], [-40, 200]);

  return (
    <Box position="fixed" inset={0} pointerEvents="none" zIndex={3}
      style={{ overflow: "hidden" }}
    >
      <motion.div style={{
        position: "absolute",
        top: "calc(3vh + 18px)", right: "calc(3vw + 18px)",
        rotate: cornerRotate,
        opacity: 0.32,
      }}>
        <svg width={56} height={56} viewBox="0 0 100 100" style={{ display: "block" }}>
          <polygon points="50,4 96,96 4,96" fill={VELVET} />
        </svg>
      </motion.div>

      <motion.div style={{
        position: "absolute",
        top: "10vh", left: "1.4vw",
        y: sidebarY,
        opacity: 0.18,
      }}>
        <svg width={28} height={340} viewBox="0 0 28 340" style={{ display: "block" }}>
          <polygon points="14,0 28,340 0,340" fill={VELVET} />
        </svg>
      </motion.div>

      <motion.div style={{
        position: "absolute",
        bottom: "2vh", left: "10vw",
        x: bottomBarX,
        opacity: 0.16,
      }}>
        <svg width={320} height={20} viewBox="0 0 320 20" style={{ display: "block" }}>
          <polygon points="0,20 160,0 320,20" fill={VELVET} />
        </svg>
      </motion.div>
    </Box>
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

// ─── Header ─────────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box position="fixed" top="3px" left={0} right={0} zIndex={20}
      px={{ base: 6, md: 10, lg: 16 }}
      py={{ base: 5, md: 6 }}
      bg={scrolled ? "rgba(239,234,224,0.86)" : "transparent"}
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
          <Box as="a" href="#about" textDecoration="none">
            <Mono color={INK}>Practice</Mono>
          </Box>
          <Box as="a" href="#offering" textDecoration="none">
            <Mono color={INK}>Offering</Mono>
          </Box>
          <Box as="a" href="#index" textDecoration="none">
            <Mono color={INK}>Index</Mono>
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
  // Smooth the parallax through a spring so the Hero "drifts" out instead of
  // tracking the scroll pixel-for-pixel. Slightly longer transition window
  // (0 → 700) so the fade reads more deliberate.
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 35,
    mass: 0.5,
    restDelta: 0.5,
  });
  const opacity = useTransform(smoothScrollY, [0, 700], [1, 0]);
  const y       = useTransform(smoothScrollY, [0, 700], [0, 110]);

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
              color={VELVET}
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
      py={{ base: 16, md: 28 }}
    >
      <SectionOpener
        num="§ I"
        title="On Practice."
        caption="A note from London"
      />

      <Grid templateColumns={{ base: "1fr", md: "1fr 3fr 1fr" }}
        gap={{ base: 8, md: 14 }}
      >
        <Box display={{ base: "none", md: "block" }} />

        <Box>
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
              <Box as="span" fontStyle="italic" color={VELVET}>CoreView</Box>, after three
              years producing EMEA programmes for{" "}
              <Box as="span" fontStyle="italic" color={VELVET}>CME Group</Box>.
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
              <Box as="span" fontStyle="italic" color={INK}>Vaya</Box> — a
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
    client: "Vaya",
    title:  "A women's community for wellness and brand-led gathering — sold out, run alongside.",
    role:   "Founder",
    span:   "2025 — 2026",
    place:  "London",
    body:   "Founded Vaya as a community-first wellness programme for women in London — securing partnerships with conscious wellness brands for curation, product and goodie bags, and selling out the calendar of events through the year. A working model for connecting brand to community without the marketing-deck flatness — community-builder first, sponsor wrangler second.",
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
    <Box id="index" px={{ base: 6, md: 10, lg: 16 }} pt={{ base: 8, md: 12 }} pb={{ base: 16, md: 28 }}>
      <Flex justify="space-between" wrap="wrap" gap={4} mb={{ base: 10, md: 14 }}>
        <Text fontFamily={MONO} fontSize="11px"
          letterSpacing="0.36em" textTransform="uppercase" color={SOFT}
        >§ III</Text>
        <Text fontFamily={MONO} fontSize="11px"
          letterSpacing="0.36em" textTransform="uppercase" color={SOFT}
        >Selected · Four Engagements</Text>
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
          <Mono>{`§ IV·${cs.num}  ·  ${cs.client}`}</Mono>
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
                  color={VELVET} mt={1} lineHeight="1"
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

// ─── Offering — two pillars, three shapes, four steps. Tight + transformational ─
const shapes = [
  {
    num:   "I.",
    title: "The named producer",
    body:  "A single flagship event, owned end-to-end. Built to land, built to be remembered.",
  },
  {
    num:   "II.",
    title: "Long-form advisory",
    body:  "Retained partnership with an in-house team — building the events function that grows the brand.",
  },
  {
    num:   "III.",
    title: "Partnership programme",
    body:  "A curated season of brand-to-community moments. Community engineered into a strategic asset.",
  },
];

const process = [
  {
    num:   "I.",
    title: "Conversation",
    body:  "An unhurried first call. What the brand needs the room to do.",
  },
  {
    num:   "II.",
    title: "Brief & plan",
    body:  "A written brief inside the week — concept, scope, the shape of success.",
  },
  {
    num:   "III.",
    title: "Build & execute",
    body:  "Suppliers, run-of-show, command in the room. Calm at scale.",
  },
  {
    num:   "IV.",
    title: "Reflect & retain",
    body:  "What worked, what to take into the next engagement.",
  },
];

function Offering() {
  return (
    <Box id="offering" px={{ base: 6, md: 10, lg: 16 }} pt={{ base: 8, md: 12 }} pb={{ base: 16, md: 28 }}>
      <Flex justify="space-between" wrap="wrap" gap={4} mb={{ base: 10, md: 14 }}>
        <Text fontFamily={MONO} fontSize="11px"
          letterSpacing="0.36em" textTransform="uppercase" color={SOFT}
        >§ II</Text>
        <Text fontFamily={MONO} fontSize="11px"
          letterSpacing="0.36em" textTransform="uppercase" color={SOFT}
        >Two pillars · Three shapes · Four steps</Text>
      </Flex>

      <Grid templateColumns={{ base: "1fr", md: "1fr 3fr 1fr" }}
        gap={{ base: 8, md: 14 }}
      >
        <Box display={{ base: "none", md: "block" }} />

        <Box>
          {/* Lede — transformational, not modest */}
          <motion.div {...reveal(0.15)}>
            <Heading as="h3"
              fontFamily={SERIF} fontWeight="400"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              color={INK} lineHeight="1.0"
              letterSpacing="-0.024em"
              mt={0} mb={{ base: 10, md: 14 }}
              maxWidth="1100px"
              style={{
                fontVariationSettings: FRA_TITLE,
                textWrap: "balance",
                hangingPunctuation: "first allow-end last",
              }}
            >
              Brand is made{" "}
              <Box as="span" fontStyle="italic" color={VELVET}>to be felt</Box>{" "}
              in the room — not seen on a deck.
            </Heading>
          </motion.div>

          <motion.div {...reveal(0.22)}>
            <Text fontFamily={SANS}
              fontSize={{ base: "16px", md: "17px" }}
              fontWeight="300" color={MUTED}
              lineHeight="1.85"
              maxWidth="640px" mb={{ base: 12, md: 16 }}
              style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
            >
              Two pillars to take a brand from positioning to proof —
              events that move the room, and partnerships that turn
              an audience into a community of return.
            </Text>
          </motion.div>

          {/* Two pillars — punchier copy */}
          <motion.div {...reveal(0.28)}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={{ base: 8, md: 14 }}
              mb={{ base: 16, md: 24 }}
            >
              <Box borderTop={`1px solid ${HAIR}`} pt={6}>
                <Mono>One.</Mono>
                <Text fontFamily={SERIF} fontStyle="italic"
                  fontSize={{ base: "xl", md: "2xl" }}
                  color={VELVET} lineHeight="1.25" mt={3} mb={4}
                  style={{ fontVariationSettings: FRA_LEDE }}
                >
                  The event specialist.
                </Text>
                <Text fontFamily={SANS} fontSize="15px"
                  fontWeight="300" color={MUTED} lineHeight="1.8"
                  style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
                >
                  Programmes that turn brand into experience — and
                  experience into payback. Strategy through to the live
                  moment, owned and delivered.
                </Text>
              </Box>
              <Box borderTop={`1px solid ${HAIR}`} pt={6}>
                <Mono>Two.</Mono>
                <Text fontFamily={SERIF} fontStyle="italic"
                  fontSize={{ base: "xl", md: "2xl" }}
                  color={VELVET} lineHeight="1.25" mt={3} mb={4}
                  style={{ fontVariationSettings: FRA_LEDE }}
                >
                  The partnerships consultant.
                </Text>
                <Text fontFamily={SANS} fontSize="15px"
                  fontWeight="300" color={MUTED} lineHeight="1.8"
                  style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
                >
                  Community as a strategic asset. Brand-to-community
                  curation that builds loyalty — moments designed to
                  be remembered, returned to, and shared.
                </Text>
              </Box>
            </Grid>
          </motion.div>

          {/* Engagement shapes — three, not four */}
          <motion.div {...reveal(0)}>
            <Box pt={{ base: 6, md: 8 }} borderTop={`1px solid ${HAIR}`}>
              <Mono>How we could work · Three shapes</Mono>
              <Heading as="h3"
                fontFamily={SERIF} fontWeight="400"
                fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                color={INK} lineHeight="1.1"
                letterSpacing="-0.018em"
                mt={6} mb={{ base: 10, md: 12 }}
                maxWidth="780px"
                style={{ fontVariationSettings: FRA_TITLE, textWrap: "balance" }}
              >
                Pick the{" "}
                <Box as="span" fontStyle="italic" color={VELVET}>shape</Box> that fits the brief.
              </Heading>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
              gap={{ base: 6, md: 10 }}
              mb={{ base: 16, md: 24 }}
            >
              {shapes.map(({ num, title, body }, i) => (
                <motion.div key={num} {...reveal(i * 0.05)}>
                  <Box borderTop={`1px solid ${HAIR}`} pt={6}>
                    <Flex gap={4} mb={3} align="baseline">
                      <Mono>{num}</Mono>
                      <Text fontFamily={SERIF} fontStyle="italic"
                        fontSize={{ base: "lg", md: "xl" }}
                        color={INK} lineHeight="1.25"
                        style={{ fontVariationSettings: FRA_LEDE }}
                      >{title}.</Text>
                    </Flex>
                    <Text fontFamily={SANS} fontSize="14px"
                      fontWeight="300" color={MUTED} lineHeight="1.75"
                      style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
                    >{body}</Text>
                  </Box>
                </motion.div>
              ))}
            </Grid>
          </motion.div>

          {/* The working process */}
          <motion.div {...reveal(0)}>
            <Box pt={{ base: 6, md: 8 }} borderTop={`1px solid ${HAIR}`}>
              <Mono>What to expect · The working rhythm</Mono>
              <Heading as="h3"
                fontFamily={SERIF} fontWeight="400"
                fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                color={INK} lineHeight="1.1"
                letterSpacing="-0.018em"
                mt={6} mb={{ base: 10, md: 14 }}
                maxWidth="780px"
                style={{ fontVariationSettings: FRA_TITLE, textWrap: "balance" }}
              >
                Four steps,{" "}
                <Box as="span" fontStyle="italic" color={VELVET}>held lightly.</Box>
              </Heading>
            </Box>

            <Box>
              {process.map(({ num, title, body }, i) => (
                <motion.div key={num} {...reveal(i * 0.05)}>
                  <Grid templateColumns={{ base: "1fr", md: "60px 200px 1fr" }}
                    gap={{ base: 3, md: 10 }}
                    py={{ base: 6, md: 8 }}
                    borderBottom={`1px solid ${HAIR}`}
                    _first={{ borderTop: `1px solid ${HAIR}` }}
                    alignItems="baseline"
                  >
                    <Mono>{num}</Mono>
                    <Text fontFamily={SERIF} fontStyle="italic"
                      fontSize={{ base: "xl", md: "2xl" }}
                      color={INK} lineHeight="1.2"
                      style={{ fontVariationSettings: FRA_LEDE }}
                    >{title}.</Text>
                    <Text fontFamily={SANS} fontSize="14px"
                      fontWeight="300" color={MUTED} lineHeight="1.75"
                      maxWidth="520px"
                      style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
                    >{body}</Text>
                  </Grid>
                </motion.div>
              ))}
            </Box>

            <motion.div {...reveal(0.2)}>
              <Box mt={{ base: 10, md: 14 }}>
                <Underlink href="#contact">Begin a Conversation</Underlink>
              </Box>
            </motion.div>
          </motion.div>
        </Box>

        <Box />
      </Grid>
    </Box>
  );
}

// ─── Barrier — velvet interlude between offer and receipts ───────────────────
function Barrier() {
  const { scrollYProgress } = useScroll();
  // Subtle parallax — only on this panel
  const y = useTransform(scrollYProgress, [0.25, 0.55], [40, -40]);

  return (
    <Box bg={VELVET} color={PAPER}
      px={{ base: 6, md: 10, lg: 16 }}
      py={{ base: 32, md: 48 }}
      position="relative" overflow="hidden"
    >
      {/* Subtle texture — a soft gradient drift to mimic velvet */}
      <Box position="absolute" inset={0}
        style={{
          background: "radial-gradient(ellipse at top right, rgba(80,120,100,0.18), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Box maxWidth="1400px" mx="auto" position="relative">
        <motion.div style={{ y }}>
          <motion.div {...reveal(0)}>
            <Text fontFamily={MONO} fontSize="11px"
              letterSpacing="0.36em" textTransform="uppercase"
              color="rgba(239,234,224,0.5)" fontWeight="400"
            >
              Interlude · From offer to outcome
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginTop: 48, marginBottom: 56 }}
          >
            <Heading as="h2"
              fontFamily={SERIF} fontWeight="400" fontStyle="italic"
              fontSize={{ base: "6xl", md: "9xl", lg: "11xl" }}
              color={PAPER} lineHeight="0.92"
              letterSpacing="-0.03em"
              maxWidth="1400px"
              style={{
                fontVariationSettings: FRA_DISPLAY,
                textWrap: "balance",
              }}
            >
              Now — the work.
            </Heading>
          </motion.div>

          <motion.div {...reveal(0.25)}>
            <Text fontFamily={SANS}
              fontSize={{ base: "17px", md: "20px" }}
              fontWeight="300" color="rgba(239,234,224,0.75)"
              lineHeight="1.6"
              maxWidth="720px"
              style={{ textWrap: "pretty", letterSpacing: "-0.005em" }}
            >
              Four engagements that put the offer into practice — across
              corporate launches, financial conferences, executive
              hospitality and an independent community programme.
            </Text>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}

// ─── Index of Engagements — full timeline ────────────────────────────────────
const experience = [
  { date: "Jun. 2026 —",         role: "Interim Head of Events",                 org: "CoreView · London"   },
  { date: "Aug. 2025 — Jun. 2026", role: "Founder",                              org: "Vaya · women's community, London" },
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
    <Box px={{ base: 6, md: 10, lg: 16 }} py={{ base: 16, md: 28 }}>
      <SectionOpener
        num="§ IV"
        title="The Trajectory."
        caption="Selected Roles · 2020 — 2026"
      />

      <Grid templateColumns={{ base: "1fr", md: "1fr 3fr 1fr" }}
        gap={{ base: 8, md: 14 }}
      >
        <Box display={{ base: "none", md: "block" }} />

        <Box>

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
      py={{ base: 16, md: 28 }}
    >
      <Box maxWidth="1400px" mx="auto">
        <SectionOpener
          num="§ V"
          title="Enquiries."
          caption="A first conversation — London"
        />

        <motion.div {...reveal(0.1)}>
          <Heading as="h3"
            fontFamily={SERIF} fontWeight="400"
            fontSize={{ base: "4xl", md: "7xl", lg: "8xl" }}
            color={INK} lineHeight="0.92"
            letterSpacing="-0.028em"
            mt={0} mb={{ base: 14, md: 20 }}
            maxWidth="1200px"
            style={{
              fontVariationSettings: FRA_DISPLAY,
              textWrap: "balance",
              hangingPunctuation: "first allow-end last",
            }}
          >
            Begin with{" "}
            <Box as="span" fontStyle="italic" color={VELVET}
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
            {[["Practice", "#about"], ["Offering", "#offering"], ["Engagements", "#index"], ["Enquire", "#contact"]].map(([l, h]) => (
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
    <Box bg={PAPER} minHeight="100vh" color={INK} position="relative">
      <ScrollProgressBar />
      <Curtain />
      <Header />
      <Hero />
      <Plate />
      <Introduction />

      {/* Tap-gated curtain — covers screen with "The Offering.", taps to open */}
      <SectionGate num="§ II" title="The Offering." caption="Tap to open" />
      <Offering />

      {/* Tap-gated curtain — covers screen with "The Receipts.", taps to open */}
      <SectionGate num="§ III" title="The Receipts." caption="Tap to open — now, the work" />
      <IndexContents />

      {/* Case studies — COLLINS pattern, each with intro slab + full-bleed image */}
      {caseStudies.map((cs, i) => (
        <CaseStudy key={cs.num} cs={cs} index={i} />
      ))}

      <Index />
      <Contact />
      <Colophon />
    </Box>
  );
}
