import { Box, Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo2 from "../assets/logo2.png";

const CONTACT = "/contact";

export default function MkNavbar() {
  return (
    <Box>
      {/* Announcement bar */}
      <Box bg="#F28B75" py={{ base: "6px", md: "12px" }} textAlign="center">
        <Text
          fontSize={{ base: "9px", md: "10px" }}
          fontFamily="'Raleway', sans-serif"
          letterSpacing="0.22em"
          textTransform="uppercase"
          color="#403631"
        >
          London wellness events —{" "}
          <Box as={RouterLink} to="/events"
            display="inline" textDecoration="underline"
            _hover={{ opacity: 0.6 }} style={{ transition: "opacity 0.2s" }}
          >
            See what's next
          </Box>
        </Text>
      </Box>

      {/* Nav */}
      <Flex
        as="nav"
        px={{ base: 6, md: 12 }}
        py={3}
        align="center"
        justify="space-between"
        borderBottom="1px solid #e8ddd5"
        bg="#FDF6EE"
      >
        {/* Logo */}
        <Box as={RouterLink} to="/" textDecoration="none" flexShrink={0}>
          <Box as="img" src={logo2} alt="Vaya"
            height="120px" display={{ base: "none", md: "block" }}
          />
          <Box display={{ base: "block", md: "none" }}
            fontFamily="'Playfair Display', serif"
            fontSize="26px" lineHeight={1}
            color="#0d0d0d" letterSpacing="0.02em"
          >Vaya</Box>
        </Box>

        <Flex gap={{ base: 4, md: 8 }} rowGap={2} wrap="wrap"
          justify="flex-end" align="center"
        >
          {[
            ["Home",         "/"],
            ["About",        "/about"],
            ["Events",       "/events"],
            ["Work with us", "/brands"],
            ["Get in touch", CONTACT],
          ].map(([label, href]) => (
            <Box
              key={label}
              as={RouterLink}
              to={href}
              fontSize={{ base: "9px", md: "10px" }}
              letterSpacing={{ base: "0.16em", md: "0.22em" }}
              textTransform="uppercase"
              fontFamily="'Raleway', sans-serif"
              fontWeight="500"
              color="#403631"
              textDecoration="none"
              whiteSpace="nowrap"
              _hover={{ color: "#F28B75" }}
              style={{ transition: "color 0.2s" }}
            >
              {label}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
