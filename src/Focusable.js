import { useContext } from 'react';
import {FocusContext} from './FocusableContext';

const Focusable = ({children}) => {
  const { setFocusableIndex, focusableLength } = useContext(FocusContext);

  const keyDownHandler = (e) => {
    if(e.keyCode === 13) {
      console.log(e.target)
    }
    // key down 
    if(e.keyCode === 40) {
      setFocusableIndex((prev) => prev < focusableLength - 1 ? prev + 1 : prev);
    }
    // key up
    if(e.keyCode === 38) {
      setFocusableIndex((prev) => prev > 0 ? prev - 1 : prev);
    }
  }

  return (
    <div className="focusable" tabIndex={0} onKeyDown={(e) => keyDownHandler(e)}>{children}</div>
  )
}

export default Focusable;