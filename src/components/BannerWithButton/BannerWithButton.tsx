import {
  Box,
  CloseButton,
  Container,
  Icon,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

import Button from '../Button'

const BannerWithButton = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box bg="white" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container maxW="100vw" py={{ base: '4', md: '2.5' }} position="relative">
          <CloseButton display={{ sm: 'none' }} position="absolute" right="2" top="2" />
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            justify="space-between"
            spacing={{ base: '3', md: '2' }}
          >
            <Stack
              spacing="4"
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'start', md: 'center' }}
            >
              {!isMobile && (
                <Square size="12" bg="bg-subtle" borderRadius="md">
                  FiInfo Icon
                </Square>
              )}
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: '0.5', md: '1.5' }}
                pe={{ base: '4', sm: '0' }}
              >
                <Text fontWeight="medium">We just launched a new app.</Text>
                <Text color="muted">Check our list of awesome apps</Text>
              </Stack>
            </Stack>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: '3', sm: '2' }}
              align={{ base: 'stretch', sm: 'center' }}
            >
              <Button variant="solid" colorScheme="green" isFullWidth>
                Check apps
              </Button>
              <CloseButton display={{ base: 'none', sm: 'inline-flex' }} />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default BannerWithButton
