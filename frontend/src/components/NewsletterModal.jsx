import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const BG     = "#FDF6EE";
const TEXT   = "#403631";
const MUTED  = "#9a8878";
const BORDER = "#e8ddd5";
const ACCENT = "#EC6F51";
const ML_SUBSCRIBE_URL = "https://assets.mailerlite.com/jsonp/2086737/forms/186367181833897792/subscribe";

const inputStyle = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: `1px solid ${BORDER}`,
  outline: "none",
  padding: "10px 0",
  fontFamily: "'Raleway', sans-serif",
  fontSize: "14px",
  color: TEXT,
  letterSpacing: "0.02em",
};

function NewsletterModal({ open, onClose }) {
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const iframeName = "ml-newsletter-iframe-modal";
  const awaiting = useRef(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setName("");
      setEmail("");
      awaiting.current = false;
    }
  }, [open]);

  const handleSubmit = (e) => {
    if (!email) { e.preventDefault(); return; }
    awaiting.current = true;
    setStatus("submitting");
  };

  const handleIframeLoad = () => {
    if (!awaiting.current) return;
    awaiting.current = false;
    setStatus("success");
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="newsletter-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(42,30,26,0.55)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
        >
          <motion.div
            key="newsletter-card"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: BG,
              width: "100%", maxWidth: "520px",
              padding: "40px 32px 36px",
              position: "relative",
            }}
          >
            <Box as="button" type="button" onClick={onClose}
              aria-label="Close newsletter"
              position="absolute" top="14px" right="16px"
              background="transparent" border="none" cursor="pointer"
              color={MUTED} fontSize="22px" lineHeight="1"
              padding="6px"
              _hover={{ color: TEXT }} style={{ transition: "color 0.2s" }}
            >×</Box>

            {status === "success" ? (
              <Box>
                <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
                  fontSize="2xl" color={TEXT} mb={3}
                >You're in.</Heading>
                <Text fontFamily="'Raleway', sans-serif" fontSize="15px"
                  color={MUTED} lineHeight="1.85" mb={6}
                >
                  Thanks {name ? `${name}` : ""}. We'll keep you in the loop on
                  upcoming events and the occasional special offer.
                </Text>
                <Box as="button" type="button" onClick={onClose}
                  fontFamily="'Raleway', sans-serif" fontSize="10px"
                  letterSpacing="0.22em" textTransform="uppercase"
                  bg={ACCENT} color="white"
                  px={6} py="12px" border="none" cursor="pointer"
                  _hover={{ bg: "#D85F44" }} style={{ transition: "background 0.2s" }}
                >Close</Box>
              </Box>
            ) : (
              <>
                <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
                  letterSpacing="0.28em" textTransform="uppercase" color={MUTED} mb={3}
                >Newsletter</Text>
                <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
                  fontSize={{ base: "2xl", md: "3xl" }} color={TEXT}
                  lineHeight="1.2" mb={3}
                >Stay in the loop.</Heading>
                <Text fontFamily="'Raleway', sans-serif" fontSize="15px"
                  color={MUTED} lineHeight="1.85" mb={8}
                >
                  Be the first to hear about upcoming Vaya events and the
                  occasional special offer. No spam — promise.
                </Text>

                <Box as="form"
                  action={ML_SUBSCRIBE_URL}
                  method="POST"
                  target={iframeName}
                  onSubmit={handleSubmit}
                >
                  <Flex direction="column" gap={5}>
                    <Box>
                      <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
                        letterSpacing="0.28em" textTransform="uppercase" color={MUTED}
                      >First name</Text>
                      <input
                        type="text"
                        name="fields[name]"
                        autoComplete="given-name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                      />
                    </Box>
                    <Box>
                      <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
                        letterSpacing="0.28em" textTransform="uppercase" color={MUTED}
                      >Email</Text>
                      <input
                        type="email"
                        name="fields[email]"
                        required
                        autoComplete="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={inputStyle}
                      />
                    </Box>
                    <input type="hidden" name="ml-submit" value="1" />
                    <input type="hidden" name="anticsrf" value="true" />
                    <Box as="button" type="submit"
                      disabled={status === "submitting"}
                      bg={ACCENT} color="white"
                      px={10} py="14px"
                      fontFamily="'Raleway', sans-serif" fontSize="10px"
                      letterSpacing="0.22em" textTransform="uppercase"
                      border="none" cursor="pointer"
                      alignSelf="flex-start"
                      opacity={status === "submitting" ? 0.6 : 1}
                      _hover={{ bg: "#D85F44" }} style={{ transition: "background 0.2s" }}
                      mt={2}
                    >
                      {status === "submitting" ? "Joining…" : "Subscribe"}
                    </Box>
                  </Flex>
                </Box>

                <iframe
                  name={iframeName}
                  title="newsletter-response"
                  onLoad={handleIframeLoad}
                  style={{ display: "none" }}
                />
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default function NewsletterButton({ children = "Join newsletter" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box as="button" type="button"
        onClick={() => setOpen(true)}
        fontFamily="'Raleway', sans-serif" fontSize="9px"
        letterSpacing="0.22em" textTransform="uppercase"
        bg={ACCENT} color="white"
        px={4} py="8px" border="none" cursor="pointer"
        _hover={{ bg: "#D85F44" }} style={{ transition: "background 0.2s" }}
      >{children}</Box>
      <NewsletterModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
