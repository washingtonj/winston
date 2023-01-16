import { extendTheme } from "@chakra-ui/react";
import { INTER, KANIT } from './fonts'

const theme = extendTheme({
  fonts: {
    heading: `${KANIT.style.fontFamily}, sans-serif !important`,
    body: `${INTER.style.fontFamily}, sans-serif !important`,
  }
});

export default theme

