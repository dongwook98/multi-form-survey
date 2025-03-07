import { ReactNode, useState } from 'react';

import Input from '../common/Input';
import RadioIcon from '../../assets/icons/radio_button_unchecked.svg?react';
import CheckboxIcon from '../../assets/icons/check_box_outline_blank.svg?react';
import { SurveyType } from '../../types/app';

interface OptionEditorProps {
  type: SurveyType;
}

/**
 * - 객관식, 체크박스, 드롭다운 설문조사 타입의 편집기를 선택했을때 옵션을 추가할 수 있게하는 편집기 UI
 * @param param0
 * @returns
 */
export default function OptionEditor({ type }: OptionEditorProps) {
  const [options, setOptions] = useState(['']);

  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className='flex items-center'>
          {/* SurveyType에 따라 아이콘 다르게 렌더링 */}
          {icons[type]}
          <Input
            value={option}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
          />
        </div>
      ))}
      <div className='flex items-center mt-28'>
        {icons[type]}
        <button
          className='text-gray500 text-16'
          onClick={() => {
            setOptions((prev) => [...prev, `옵션 ${options.length + 1}`]);
          }}
        >
          옵션추가
        </button>
      </div>
    </div>
  );
}

// Partial을 사용하여 SurveyType의 키값을 옵셔널하게 받을 수 있게함
const icons: Partial<Record<SurveyType, ReactNode>> = {
  multipleChoice: <RadioIcon className='mr-14' />,
  checkbox: <CheckboxIcon className='mr-14' />,
  dropdown: <RadioIcon className='mr-14' />,
};
