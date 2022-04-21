import React, { FC } from 'react'
import { FormControl, FormLabel, Input, Stack, useColorModeValue } from '@chakra-ui/react'
import Button from '../../Button'

// use extends dummy don't repeate code in other components 🤗
interface Input {
  id: string,
  placeholder: string,
  screenReaderLabel: string,
  type: string,
}

interface FormFieldArray extends Array<Input>{}

export interface SubscribeFormProps {
  inputFields: FormFieldArray,
  buttonText: string,
}

const SubscribeForm:FC<SubscribeFormProps> = ({ inputFields, buttonText }) => (
  <Stack
    as="form"
    spacing="3"
    onSubmit={(e) => {
      e.preventDefault()
      // manage form submission
    }}
  >
    <>
      {inputFields?.map((inputField, key) => (
        <FormControl id={inputField?.id} key={key}>
          <FormLabel srOnly>{inputField?.screenReaderLabel}</FormLabel>
          <Input
            type={inputField?.type}
            placeholder={inputField?.placeholder}
            size="lg"
            fontSize="md"
            focusBorderColor={useColorModeValue('green.500', 'green.200')}
          />
        </FormControl>
      ))}
    </>
    <Button
      type="submit"
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="md"
      colorScheme="green"
      size="lg"
    >
      {buttonText}
    </Button>
  </Stack>
)

export default SubscribeForm
