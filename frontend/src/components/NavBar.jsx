import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import logo2 from "../assets/logo2.png";

const CONTACT = "/contact";

export default function MkNavbar() {
  return (
    <Box>
      {/* Announcement bar */}
      <Box bg="#f5ece2" py="7px" textAlign="center">
        <Text
          fontSize="10px"
          fontFamily="'Raleway', sans-serif"
          letterSpacing="0.22em"
          textTransform="uppercase"
          color="#403631"
        >
          London wellness events —{" "}
          <Link href="/events" textDecoration="underline" _hover={{ opacity: 0.6 }}>
            See what's next
          </Link>
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
        {/* Logo image */}
        <Box as="a" href="/" textDecoration="none">
          <Box as="img" src={logo2} alt="Vaya" height="72px" display="block" />
        </Box>

        <HStack gap={8}>
          {[
            ["Home",         "/"],
            ["About",        "/about"],
            ["Events",       "/events"],
            ["Work with us", "/brands"],
            ["Get in touch", CONTACT],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              fontSize="10px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              fontFamily="'Raleway', sans-serif"
              fontWeight="500"
              color="#403631"
              textDecoration="none"
              _hover={{ color: "#EC6F51", textDecoration: "none" }}
              transition="color 0.2s"
            >
              {label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
