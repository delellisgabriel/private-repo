import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import useModal from '../../utils/hooks/useModal'
import PopupDiscount from './PopupDiscount'
import Button from '../Button'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ShopCircleComponentLibrary/PopupDiscount',
  component: PopupDiscount,
} as ComponentMeta<typeof PopupDiscount>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PopupDiscount> = (args) => {
  const [openModal, setOpenModal] = useState(false)
  // const { toggleModal, isModalVisible, } = useModal()
  const { topText, greenText, boldText, bottomText, closeModalText, buttonText, inputFields } = args

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div>
      <Button
        variant='solid'
        size='lg'
        colorScheme='green'
        onClick={handleOpenModal}
        // onClick={toggleModal}
      >
        Check our offer! 😮
      </Button>
      <PopupDiscount
        isOpen={openModal}
        closeModal={handleCloseModal}
        // isOpen={isModalVisible}
        // closeModal={toggleModal}
        topText={topText}
        greenText={greenText}
        boldText={boldText}
        bottomText={bottomText}
        closeModalText={closeModalText}
        buttonText={buttonText}
        inputFields={inputFields}
      />
    </div>
  )
}

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  topText: 'Enter your email below & get',
  greenText: '20% off',
  boldText: 'on your next purchase',
  bottomText: '+ exclusive access to new products',
  closeModalText: `No, I don’t want discounts`,
  buttonText: 'Get my 20% off',
  inputFields: [
    {
      id: "email",
      placeholder: "Enter your email",
      screenReaderLabel: "Enter your email",
      type: "email",
    },
    // {
    //   id: "name",
    //   placeholder: "Enter your name",
    //   screenReaderLabel: "Enter your name",
    //   type: "text",
    // },
  ]
}
