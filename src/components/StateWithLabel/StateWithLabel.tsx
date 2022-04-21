import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import Stat from '../Stat'

export interface StateWithLabelProps {
  stats: { label: string; value: string }[]
}

const StateWithLabel = (props: StateWithLabelProps) => {
  const { stats } = props;

  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: '5', md: '6' }}>
      {stats?.map(({ label, value }) => (
        <Stat key={label} label={label} value={value} />
      ))}
    </SimpleGrid>
  )
}

export default StateWithLabel
