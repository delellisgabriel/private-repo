import React, { FC } from 'react'
import { Button as CButton, ButtonProps } from '@chakra-ui/react'

const Button:FC<ButtonProps>  = (props) => {

  return (
    <CButton {...props}>
      {props.children}
    </CButton>
  )
}

export default Button
