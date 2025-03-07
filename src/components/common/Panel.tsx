import { PropsWithChildren } from 'react';
import cn from 'classnames';

/**
 * - 일반적으로 영역을 차지하는 컴포넌트 이름은 Section을 사용
 * - 멀티 스텝 폼에서는 질문을 여러개 가지는 영역을 한 섹션이라고 표현하기 때문에 Panel로 사용
 * @param param0
 * @returns
 */
export default function Panel({ children }: PropsWithChildren) {
  return (
    <div className={cn('flex flex-col p-20 pt-26 bg-white rounded-10')}>
      {children}
    </div>
  );
}

export function PanelHeader({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export function PanelBody({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export function PanelFooter({ children }: PropsWithChildren) {
  return (
    <>
      <hr className='border-gray100' />
      <div>{children}</div>
    </>
  );
}

/**
 * - Panel 영역위에 모자처럼 씌우는 컴포넌트
 * @param param0
 * @returns
 */
export function PanelCap({ children }: PropsWithChildren) {
  return (
    <div className='-mb-10 relative'>
      {children && (
        <div className='inline-block px-14 pt-10 pb-6 bg-main rounded-t-10 text-15 text-white'>
          {children}
        </div>
      )}
      <div className='bg-main h-9' />
    </div>
  );
}
