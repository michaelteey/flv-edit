import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

export default function MkNavbar() {
  return (
    <Box>
      {/* Announcement bar */}
      <Box bg="#fce8e3" py="7px" textAlign="center">
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
        py={4}
        align="center"
        justify="space-between"
        borderBottom="1px solid #e8ddd5"
        bg="#FDF6EE"
      >
        {/* Logo */}
        <Box as="a" href="/" display="flex" alignItems="center" textDecoration="none">
          <img src={logo} alt="Vaya" style={{ height: "42px", width: "auto" }} />
        </Box>

        <HStack gap={10}>
          {[["Home", "/"], ["About", "/about"], ["Events", "/events"], ["For Brands", "/brands"]].map(([label, href]) => (
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
