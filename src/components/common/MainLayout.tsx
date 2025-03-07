import { PropsWithChildren } from 'react';

// 전체적인 페이지 레이아웃 컴포넌트
export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className='w-full min-h-full flex justify-center bg-bg overflow-scroll py-60'>
      <main className='max-w-[655px] w-full relative'>{children}</main>
    </div>
  );
}
