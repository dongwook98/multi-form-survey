import { SurveyType } from '../../types/app';
import Input from '../common/Input';
import OptionEditor from './OptionEditor';

interface SurveyBodyEditorProps {
  type: SurveyType;
}

/**
 * - 설문조사 본문 편집기
 * - SurveyEditor에서 설문조사 타입을 선택시 생기는 UI
 * @param param0
 * @returns
 */
export default function SurveyBodyEditor({ type }: SurveyBodyEditorProps) {
  switch (type) {
    case 'shortText':
    case 'longText':
    case 'date':
    case 'time':
      return <Input disabled />;
    case 'multipleChoice':
    case 'checkbox':
    case 'dropdown':
      return <OptionEditor type={type} />;
    default:
      return null;
  }
}
