import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

export default function MkNavbar() {
  return (
    <Box>
      {/* Announcement bar */}
      <Box bg="#ead4c6" py="7px" textAlign="center">
        <Text
          fontSize="10px"
          fontFamily="'Raleway', sans-serif"
          letterSpacing="0.22em"
          textTransform="uppercase"
          color="#1a1a1a"
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
        py={5}
        align="center"
        justify="space-between"
        borderBottom="1px solid #e0d5cb"
        bg="#f5f0eb"
      >
        <Text
          fontSize="xl"
          fontFamily="'Playfair Display', serif"
          fontWeight="400"
          fontStyle="italic"
          color="#1a1a1a"
        >
          Vaya
        </Text>

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
              color="#1a1a1a"
              textDecoration="none"
              _hover={{ color: "#8a8078", textDecoration: "none" }}
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
