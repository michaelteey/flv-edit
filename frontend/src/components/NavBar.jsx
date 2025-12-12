import { Box, Flex, HStack, Link, Spacer, Button, Heading} from "@chakra-ui/react";

export default function MkNavbar() {
  return (
    <Flex as="nav" p="4" borderBottom="1px solid">
      <Heading>Vaya</Heading> 
      <Spacer/>
      <HStack spacing="6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
      </HStack>
    </Flex>
  );
}

