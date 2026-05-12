import { Box, Flex, HStack, Text } from "@chakra-ui/react";
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
        <Box as={RouterLink} to="/" textDecoration="none">
          <Box as="img" src={logo2} alt="Vaya" height={{ base: "64px", md: "120px" }} display="block" />
        </Box>

        <HStack gap={8}>
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
              fontSize="10px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              fontFamily="'Raleway', sans-serif"
              fontWeight="500"
              color="#403631"
              textDecoration="none"
              _hover={{ color: "#F28B75" }}
              style={{ transition: "color 0.2s" }}
            >
              {label}
            </Box>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
