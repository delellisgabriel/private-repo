import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {},
    },
    defaultProps: {
      variant: 'primary'
    }
  },
  fonts: {
    body: "'Satoshi variable', sans-serif",
  },
  colors: {
    green: {
      "50": "#EEF6F3",
      "100": "#D0E7DF",
      "200": "#B2D7CA",
      "300": "#93C8B5",
      "400": "#75B8A0",
      "500": "#366957",
      "600": "#458770",
      "700": "#346554",
      "800": "#234338",
      "900": "#11221C"
    },
    terracotta: {
      "50": "#F8E8D8",
      "100": "#F2D8C7",
      "200": "#E6C5B5",
      "300": "#D9B3A3",
      "400": "#CC9E8F",
      "500": "#da6c63",
      "600": "#c05a5a",
      "700": "#a94a4a",
      "800": "#933a3a",
      "900": "#7f2a2a",
    },
    strawyellow: {
      "50": "#FDF8E8",
      "100": "#FDF2D8",
      "200": "#FDE6C5",
      "300": "#FDD9B3",
      "400": "#FDCF9E",
      "500": "#f3cd85",
      "600": "#e6b965",
      "700": "#d9a853",
      "800": "#cc923f",
      "900": "#b88b2b",
    }
  }
})

export default theme
