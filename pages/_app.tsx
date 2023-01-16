import type { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme  from "@styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box as="main" w="100vw" h="100vh">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
