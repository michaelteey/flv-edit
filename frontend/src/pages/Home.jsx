import { Box, Flex } from "@chakra-ui/react";

import MkHeader from "../components/header";
import MkBelowHeader from "../components/belowHeader";
import MkContactDetails from "../components/contactDetails";
import MkNavBar from "../components/NavBar";
import { MkQuadrants } from "../components/quadrants";
import { MkStackText } from "../components/stackText";
import { MkQuote } from "../components/quote";

// Nav height: ~36px announcement bar + ~72px nav = ~108px
const NAV_H = "108px";

function App() {
  return (
    <Box bg="#f8f4ef" position="relative">
      {/* Fixed nav */}
      <Box
        position="fixed"
        width="100%"
        left={0}
        top={0}
        zIndex={10}
        bg="#f8f4ef"
      >
        <MkNavBar />
      </Box>

      {/* Scrollable content offset by nav height */}
      <Box
        marginTop={NAV_H}
        height={`calc(100dvh - ${NAV_H})`}
        overflowY="scroll"
        scrollSnapType="y mandatory"
      >
        {/* Hero */}
        <Box height="100%" scrollSnapAlign="start">
          <MkHeader />
        </Box>

        {/* About */}
        <Box height="100%" scrollSnapAlign="start">
          <MkBelowHeader />
        </Box>

        {/* Services */}
        <Box height="100%" scrollSnapAlign="start">
          <MkQuadrants />
        </Box>

        {/* Journey */}
        <Box height="100%" scrollSnapAlign="start">
          <MkStackText />
        </Box>

        {/* Testimonials */}
        <Box height="100%" scrollSnapAlign="start">
          <MkQuote />
        </Box>

        {/* CTA */}
        <Box height="100dvh" scrollSnapAlign="center">
          <MkContactDetails />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
