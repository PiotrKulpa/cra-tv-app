import { useRef, useEffect } from 'react';

const FocusableWrapper = ({children, setFocusableIndex, elIndex, focusableIndex}) => {
  const focusRef = useRef(null);
  const keyDownHandler = (e) => {
    if(e.keyCode === 13) {
      console.log(e.target)
    }
    // key down
    if(e.keyCode === 40) {
      setFocusableIndex((prev) => prev + 1);
    }
    // key up
    if(e.keyCode === 38) {
      elIndex > 0 && setFocusableIndex((prev) => prev - 1);
    }
  }

  useEffect(() => {
    if(focusableIndex === elIndex) {
      focusRef.current.focus();
    }
  })

  return (
    <div ref={focusRef} className="focusable" tabIndex={0} onKeyDown={(e) => keyDownHandler(e)}>{children}</div>
  )
}

export default FocusableWrapper