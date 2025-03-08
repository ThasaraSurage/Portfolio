import { useEffect, useRef, useState } from "react"

const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is visible in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once it's visible, we don't need to observe it anymore
          observer.unobserve(entry.target)
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold, // percentage of the element that needs to be visible
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}

export default useScrollAnimation;

