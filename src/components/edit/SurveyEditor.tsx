import { SurveyType } from '../../types/app';
import Dropdown from '../common/Dropdown';
import Input from '../common/Input';
import Panel, { PanelBody, PanelHeader } from '../common/Panel';
import ShortTextIcon from '../../assets/icons/check_indeterminate_small.svg?react';
import LongTextIcon from '../../assets/icons/subject.svg?react';
import MultipleChoiceIcon from '../../assets/icons/checklist.svg?react';
import CheckboxIcon from '../../assets/icons/check_circle.svg?react';
import DropdownIcon from '../../assets/icons/arrow_circle_down.svg?react';
import DateIcon from '../../assets/icons/calendar_today.svg?react';
import TimeIcon from '../../assets/icons/schedule.svg?react';
import { useState } from 'react';
import SurveyBodyEditor from './SurveyBodyEditor';

/**
 * - 설문조사 편집기
 * - surveyType을 상태관리해 SurveyBodyEditor을 렌더링
 * @returns
 */
export default function SurveyEditor() {
  const [surveyType, setSurveyType] = useState<SurveyType>('shortText');

  return (
    <Panel>
      <PanelHeader className='flex'>
        <Input className='flex-1 mr-30' />
        <Dropdown<SurveyType>
          onChange={(value) => setSurveyType(value)}
          options={[
            {
              label: (
                <div>
                  <ShortTextIcon className='inline-block mr-10' />
                  <span>단답형</span>
                </div>
              ),
              value: 'shortText',
            },
            {
              label: (
                <div>
                  <LongTextIcon className='inline-block mr-10' />
                  <span>장문형</span>
                </div>
              ),
              value: 'longText',
            },
            {
              label: (
                <div>
                  <MultipleChoiceIcon className='inline-block mr-10' />
                  <span>객관식 질문</span>
                </div>
              ),
              value: 'multipleChoice',
            },
            {
              label: (
                <div>
                  <CheckboxIcon className='inline-block mr-10' />
                  <span>체크박스</span>
                </div>
              ),
              value: 'checkbox',
            },
            {
              label: (
                <div>
                  <DropdownIcon className='inline-block mr-10' />
                  <span>드롭다운</span>
                </div>
              ),
              value: 'dropdown',
            },
            {
              label: (
                <div>
                  <DateIcon className='inline-block mr-10' />
                  <span>날짜</span>
                </div>
              ),
              value: 'date',
            },
            {
              label: (
                <div>
                  <TimeIcon className='inline-block mr-10' />
                  <span>시간</span>
                </div>
              ),
              value: 'time',
            },
          ]}
        />
      </PanelHeader>
      <PanelBody>
        <SurveyBodyEditor type={surveyType} />
      </PanelBody>
    </Panel>
  );
}
