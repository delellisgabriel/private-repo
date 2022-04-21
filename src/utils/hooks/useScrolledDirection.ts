import { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

const useScrolledDirection = () => {
  const [scrolledDown, setScrolledDown] = useState(false)
  const [scrolledUp, setScrolledUp] = useState(false)
  let lastScroll = 0

  const handleDownScroll = () => {
    setScrolledDown(true)
    setScrolledUp(false)
  }
  
  const handleUpScroll = () => {
    setScrolledDown(false)
    setScrolledUp(true)
  }

  const updateLastScroll = (currentScroll: number) => (lastScroll = currentScroll <= 0 ? 0 : currentScroll)

  // https://stackoverflow.com/questions/31223341/detecting-scroll-direction
  const updateScrollValues = debounce(() => {
    const lastScrollCopy = lastScroll
    const currentScroll = window.pageYOffset

    if (lastScrollCopy > currentScroll) {
      handleUpScroll()
      updateLastScroll(currentScroll)
    } else if (lastScrollCopy < currentScroll) {
      handleDownScroll()
      updateLastScroll(currentScroll)
    }
  }, 50)

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('scroll', updateScrollValues)

    return () => {
      window.removeEventListener('scroll', updateScrollValues)
    }
  }, [])

  return {
    scrolledUp,
    scrolledDown,
  }
}

export default useScrolledDirection
