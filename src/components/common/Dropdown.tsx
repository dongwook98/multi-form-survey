import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useState,
} from 'react';

import ArrowIcon from '../../assets/icons/arrow_drop_down.svg?react';
import useOutsideClick from '../../hooks/common/useOutsideClick';

interface DropdownProps<T> {
  defaultValue?: T;
  placeholder?: string;
  options: DropdownOption<T>[];
  // Dropdown 컴포넌트를 사용할때 드롭다운 메뉴에서 선택한 값을 받도록 하는 함수
  onChange?: (value: T) => void;
}

export default function Dropdown<T>({
  defaultValue,
  placeholder,
  options,
  onChange,
}: DropdownProps<T>) {
  // 드롭다운 메뉴를 토글링하는 값
  const [opened, setOpened] = useState(false);
  // 드롭다운 메뉴에서 선택된 값
  const [selectedIndex, setSelectedIndex] = useState(
    defaultValue !== undefined
      ? options.findIndex((option) => option.value === defaultValue)
      : -1
  );

  // open, close는 Dropdown이 렌더링될 때 마다 새로 생성되지 않게 useCallback 감싸줌
  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  const handleChange = useCallback(
    (index: number) => {
      setSelectedIndex(index);
      onChange?.(options[index].value);
      close();
    },
    [close, onChange, options]
  );

  return (
    // Dropdown 컴포넌트 하위에서 사용하는 컴포넌트들에게 DropdownContext 값을 제공
    <DropdownContext.Provider
      value={{
        opened,
        open,
        close,
        options,
        selectedIndex,
        onChange: handleChange,
      }}
    >
      <div className='inline-block relative'>
        <DropdownButton placeholder={placeholder} />
        <DropdownMenu />
      </div>
    </DropdownContext.Provider>
  );
}

/**
 * - 외부에서 드롭다운 컴포넌트를 사용할 때 value에 대한 타입을 주입받을 수 있게 제네릭 사용
 */
type DropdownOption<T> = {
  label: ReactNode;
  value: T;
};

interface DropdownContextType<T = unknown> {
  opened: boolean;
  open: () => void;
  close: () => void;
  options: DropdownOption<T>[];
  selectedIndex: number;
  onChange: (index: number) => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

/**
 * - 드롭다운 메뉴를 열 수 있도록 트리거하는 컴포넌트
 * @param param0
 * @returns
 */
function DropdownButton({ placeholder = 'select' }: { placeholder?: string }) {
  const { open, options, selectedIndex } = useContext(DropdownContext)!;

  return (
    <button
      className='border border-gray300 rounded-10 min-w-197 p-14 pr-36 relative text-left'
      onClick={open}
    >
      {selectedIndex >= 0 ? options[selectedIndex].label : placeholder ?? ''}
      <span className='absolute right-12 top-1/2 -translate-y-1/2'>
        <ArrowIcon />
      </span>
    </button>
  );
}

/**
 * - 드롭다운 옵션들을 보여주는 컴포넌트
 * - DropdownContext의 opened 값에 따라 토글링 됨
 * - options 값을 받아서 map을 돌며 DropdownMenuItem으로 렌더링
 * @returns
 */
function DropdownMenu() {
  const { close, opened, options, onChange } = useContext(DropdownContext)!;
  const containerRef = useOutsideClick(close);

  return opened ? (
    <div
      ref={containerRef as RefObject<HTMLDivElement>}
      className='absolute left-0 top-62 border border-gray300 rounded-10 flex flex-col min-w-197 bg-white z-10'
    >
      {options.map((option, index) => (
        <DropdownMenuItem
          key={`${option.value}`}
          label={option.label}
          onSelect={() => onChange(index)}
        />
      ))}
    </div>
  ) : null;
}

/**
 * - 드롭다운 옵션 한개를 선택했을때 onSelect prop으로 값을 외부 사용자에게 전달
 * @param param0
 * @returns
 */
function DropdownMenuItem({
  label,
  onSelect,
}: {
  label: ReactNode;
  onSelect: () => void;
}) {
  return (
    <button
      className='text-left p-14 border-b-1 border-gray300 last:border-b-0'
      onClick={onSelect}
    >
      {label}
    </button>
  );
}
