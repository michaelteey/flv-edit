import { useState } from "react";
import { Box, Flex, Text, Heading, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MkNavBar from "../components/NavBar";
import logo from "../assets/logo2.png";

const BG     = "#FDF6EE";
const TEXT   = "#403631";
const MUTED  = "#9a8878";
const BORDER = "#e8ddd5";
const ACCENT = "#EC6F51";
const LINKTREE = "https://www.instagram.com/wearevaya_/";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

function Cap({ children }) {
  return (
    <Text fontFamily="'Raleway', sans-serif" fontSize="9px"
      letterSpacing="0.28em" textTransform="uppercase" color={MUTED}
    >{children}</Text>
  );
}
function Rule() { return <Box borderTop={`1px solid ${BORDER}`} />; }

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

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", type: "", message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...form,
        }).toString(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Box bg={BG} minHeight="100vh">
      <Box position="sticky" top={0} zIndex={10} bg={BG}><MkNavBar /></Box>
      <Box maxWidth="1280px" mx="auto" px={{ base: 6, md: 12 }}>

        {/* Hero */}
        <Box py={{ base: 20, md: 32 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
            <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              color={TEXT} lineHeight="1.0" mb={8}
            >
              Get in<br /><em>touch.</em>
            </Heading>
          </motion.div>
          <motion.div {...fade(0.35)}>
            <Text fontFamily="'Raleway', sans-serif" fontSize="sm" color={MUTED}
              lineHeight="1.85" maxWidth="420px"
            >
              Whether you're a brand, a business, or someone who just wants
              to know what's coming next — we'd love to hear from you.
            </Text>
          </motion.div>
        </Box>

        <Rule />

        {/* Form */}
        <Grid templateColumns={{ base: "1fr", md: "180px 1fr" }}
          gap={{ base: 6, md: 16 }} py={{ base: 12, md: 20 }}
        >
          <Cap>Your message</Cap>

          {status === "success" ? (
            <motion.div {...fade(0)}>
              <Box py={10}>
                <Heading fontFamily="'Playfair Display', serif" fontWeight="400"
                  fontSize={{ base: "2xl", md: "3xl" }} color={TEXT} mb={4}
                >
                  Thank you.
                </Heading>
                <Text fontFamily="'Raleway', sans-serif" fontSize="sm" color={MUTED} lineHeight="1.85" mb={8}>
                  We've received your message and will be in touch soon.
                </Text>
                <Box as="a" href="/"
                  fontFamily="'Raleway', sans-serif" fontSize="10px"
                  letterSpacing="0.22em" textTransform="uppercase"
                  color={MUTED} textDecoration="none"
                  borderBottom={`1px solid ${BORDER}`} pb="2px"
                  _hover={{ opacity: 0.6 }} style={{ transition: "opacity 0.2s" }}
                >
                  Back to home
                </Box>
              </Box>
            </motion.div>
          ) : (
            <motion.div {...fade(0.1)}>
              <Box as="form" name="contact" method="POST" data-netlify="true"
                onSubmit={handleSubmit} maxWidth="560px"
              >
                <input type="hidden" name="form-name" value="contact" />

                <Flex direction="column" gap={8}>
                  {/* Name */}
                  <Box>
                    <Cap>Name</Cap>
                    <input
                      type="text" name="name" required
                      placeholder="Your name"
                      value={form.name} onChange={handleChange}
                      style={inputStyle}
                    />
                  </Box>

                  {/* Email */}
                  <Box>
                    <Cap>Email</Cap>
                    <input
                      type="email" name="email" required
                      placeholder="your@email.com"
                      value={form.email} onChange={handleChange}
                      style={inputStyle}
                    />
                  </Box>

                  {/* Type */}
                  <Box>
                    <Cap>I'm reaching out about</Cap>
                    <select
                      name="type" value={form.type} onChange={handleChange}
                      style={{ ...inputStyle, appearance: "none", cursor: "pointer", color: form.type ? TEXT : MUTED }}
                    >
                      <option value="" disabled>Select one</option>
                      <option value="Brand Partnership">Brand Partnership</option>
                      <option value="Corporate Wellbeing">Corporate Wellbeing</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </Box>

                  {/* Message */}
                  <Box>
                    <Cap>Message</Cap>
                    <textarea
                      name="message" required rows={5}
                      placeholder="Tell us a bit about what you're looking for…"
                      value={form.message} onChange={handleChange}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: "120px",
                        borderBottom: "none",
                        border: `1px solid ${BORDER}`,
                        padding: "12px",
                        marginTop: "8px",
                      }}
                    />
                  </Box>

                  {/* Submit */}
                  <Box>
                    <Box as="button" type="submit"
                      disabled={status === "submitting"}
                      bg={ACCENT} color="white"
                      px={10} py="14px"
                      fontFamily="'Raleway', sans-serif" fontSize="10px"
                      letterSpacing="0.22em" textTransform="uppercase"
                      border="none" cursor="pointer"
                      opacity={status === "submitting" ? 0.6 : 1}
                      _hover={{ bg: "#D75E48" }} style={{ transition: "background 0.2s" }}
                    >
                      {status === "submitting" ? "Sending…" : "Send message"}
                    </Box>
                    {status === "error" && (
                      <Text fontFamily="'Raleway', sans-serif" fontSize="xs" color="red.500" mt={3}>
                        Something went wrong. Please try again or email us directly.
                      </Text>
                    )}
                  </Box>
                </Flex>
              </Box>
            </motion.div>
          )}
        </Grid>

        {/* Footer */}
        <Rule />
        <Flex py={10} justify="space-between" align="center" wrap="wrap" gap={4}>
          <Box as="a" href="/" textDecoration="none">
            <Box as="img" src={logo} alt="Vaya" height="72px" display="block" />
          </Box>
          <Flex gap={8} wrap="wrap">
            {[["Instagram", LINKTREE], ["Events", "/events"], ["For Brands", "/brands"], ["About", "/about"]].map(([label, href]) => (
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

      </Box>
    </Box>
  );
}
