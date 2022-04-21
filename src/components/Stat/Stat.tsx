import { Box, Heading, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import React, { FC } from 'react'

interface StatProps {
  label: string,
  value: string,
}
export const Stat:FC<StatProps> = (props) => {
  const { label, value, ...boxProps } = props
  return (
    <Box
      px={{ base: '4', md: '6' }}
      py={{ base: '5', md: '6' }}
      bg="#ffffff"
      borderRadius="lg"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      {...boxProps}
    >
      <Stack>
        <Text fontSize="md" color="muted">
          {label}
        </Text>
        <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })}>{value}</Heading>
      </Stack>
    </Box>
  )
}

export default Stat
