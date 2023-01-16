import Head from "next/head";
import { Box, Heading, Text, Flex, Container } from "@chakra-ui/react";
import { Header, Button } from "@components/index";
import { PACIFICO } from '@styles/fonts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Winston</title>
        <meta
          name="description"
          content="A intuitive and modern ordering manager system."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container maxW="container.lg">
        <Flex
          as="section"
          h="80vh"
          w="100%"
          gap="4"
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Box as="span" textAlign="center">
            <Heading as="h1" fontSize="4xl" fontWeight="900">
              A intuitive and modern ordering manager system.
            </Heading>
            <Text>
              Wiston is a user-friendly ordering system that streamlines the
              process of placing orders for businesses of all sizes.
            </Text>
          </Box>
          <Button>
            Get Started
            <Text ml="1.5" className={PACIFICO.className}>Winston</Text>
          </Button>
        </Flex>
      </Container>
    </>
  );
}
