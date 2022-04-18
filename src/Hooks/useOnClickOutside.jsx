import { useEffect, useRef } from 'react';

const useOnClickOutside = (handler) => {
  const ref = useRef(null);
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (
        (ref.current && !ref.current.contains(event.target)) ||
        event.target === ref.current
      ) {
        handler(event);
      }
    };
    document.addEventListener('mousedown', clickOutsideHandler);
    document.addEventListener('touchstart', clickOutsideHandler);
    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
      document.removeEventListener('touchstart', clickOutsideHandler);
    };
  }, [handler]);
  return { ref };
};

export default useOnClickOutside;
