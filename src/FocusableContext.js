import React, { useState, useEffect } from 'react';

const FocusContext = React.createContext();

const FocusableContext = ({children}) => {
  const [focusableIndex, setFocusableIndex] = useState(0);
  const [focusableLength, setFocusableLength] = useState(0);

  useEffect(() => {
    const focusableElements = document.getElementsByClassName('focusable');
    focusableElements?.[focusableIndex]?.focus();
    setFocusableLength(focusableElements.length)
    }, [focusableIndex]);
  return (
    <FocusContext.Provider value={{setFocusableIndex, focusableLength }}>
      {children}
    </FocusContext.Provider>

  )
}

export {FocusContext};
export default FocusableContext;