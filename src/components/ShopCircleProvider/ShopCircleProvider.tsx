import React, { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../../styles/theme'

export interface ShopCircleProviderProps {
  children: React.ReactNode,
}

const ShopCircleProvider:FC<ShopCircleProviderProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}

export default ShopCircleProvider