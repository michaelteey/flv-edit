import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

export default function MkNavbar() {
  return (
    <Box>
      {/* Announcement bar */}
      <Box bg="#e8dfd6" py="8px" textAlign="center">
        <Text
          fontSize="11px"
          fontFamily="'Raleway', sans-serif"
          letterSpacing="0.2em"
          textTransform="uppercase"
          color="#111"
        >
          London-based wellness events —{" "}
          <Link href="/events" textDecoration="underline" _hover={{ opacity: 0.6 }}>
            See what's coming
          </Link>
        </Text>
      </Box>

      {/* Nav */}
      <Flex
        as="nav"
        px={{ base: 6, md: 12 }}
        py={5}
        align="center"
        justify="space-between"
        borderBottom="1px solid #e0d8d0"
      >
        <Text
          fontSize="xl"
          fontFamily="'Playfair Display', serif"
          fontWeight="400"
          fontStyle="italic"
          color="#111"
          letterSpacing="0.01em"
        >
          Vaya
        </Text>

        <HStack gap={10}>
          {[["Home", "/"], ["About", "/about"], ["Events", "/events"]].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              fontSize="11px"
              letterSpacing="0.2em"
              textTransform="uppercase"
              fontFamily="'Raleway', sans-serif"
              fontWeight="500"
              color="#111"
              textDecoration="none"
              _hover={{ color: "#888", textDecoration: "none" }}
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
