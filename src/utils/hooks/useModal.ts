import { useState } from 'react'

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible((prevState) => !prevState)
  }

  return {
    toggleModal,
    isModalVisible,
  }
}

export default useModal
