import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

export default function MkNavbar() {
  return (
    <Flex as="nav" px={8} py={4} align="center" justify="space-between">
      <Text
        fontSize="2xl"
        fontFamily="'Playfair Display', serif"
        fontWeight="400"
        fontStyle="italic"
        letterSpacing="0.03em"
      >
        Vaya
      </Text>
      <HStack gap={8}>
        {[["Home", "/"], ["About", "/about"], ["Events", "/events"]].map(([label, href]) => (
          <Link
            key={label}
            href={href}
            fontSize="xs"
            letterSpacing="0.18em"
            textTransform="uppercase"
            fontFamily="'Raleway', sans-serif"
            fontWeight="500"
            color="inherit"
            textDecoration="none"
            _hover={{ opacity: 0.5, textDecoration: "none" }}
            transition="opacity 0.2s"
          >
            {label}
          </Link>
        ))}
      </HStack>
    </Flex>
  );
}
