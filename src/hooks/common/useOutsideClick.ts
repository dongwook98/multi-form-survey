import { useEffect, useRef } from 'react';

/**
 * - 사용법: useOutsideClick이 반환하는 ref를 DOM에 지정, 지정한 DOM 바깥 영역이 클릭됬을때 useOutsideClick에 전달하는 callback 실행
 * @param callback
 * @returns
 */
export default function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // 웹은 MouseEvent 모바일은 TouchEvent
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [callback]);

  return ref;
}
