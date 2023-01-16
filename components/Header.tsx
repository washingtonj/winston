import { Box, Container, Flex, Button } from "@chakra-ui/react";
import { PACIFICO } from "styles/fonts";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Header() {
  return (
    <Box as="header">
      <Container maxW="container.lg" paddingY={4}>
        <Flex align="center" justify="space-between">
          <h5 style={{ fontSize: "24px" }} className={PACIFICO.className}>
            Winston
          </h5>

          <Button variant="unstyled">
            <GitHubLogoIcon width="20" height="20 " />
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
