import React from 'react';
import { ChakraProvider, Box, Container, } from '@chakra-ui/react';
import theme from '../src/styles/theme';

const ThemeDecorator = storyFn => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        as="section"
        py={{ base: '4', md: '8' }}
        h="85vh"
        bg="#f7fafc"
      >
        <Container maxW="100vw">
          {storyFn()}
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default ThemeDecorator;
