import { createContext, PropsWithChildren, useContext, useState } from 'react';
import cn from 'classnames';

export default function Tabs({ children }: PropsWithChildren) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className='flex flex-col'>{children}</div>
    </TabContext.Provider>
  );
}

// Tabs 컴포넌트 하위 컴포넌트에서 activeTab, setActiveTab 접근 가능하도록 설정하는 Context
const TabContext = createContext({
  activeTab: 0,
  setActiveTab: (_: number) => {},
});

export function TabList({ children }: PropsWithChildren) {
  return <div className='flex gap-x-20 justify-center'>{children}</div>;
}

/**
 * - TabContext에서 activeTab을 불러와 현재 선택된 탭은 다르게 스타일링
 * - TabContext에서 setActiveTab을 불러와 Tab 버튼을 클릭시 activeTab 변경 가능하도록 설정
 * @param param0
 * @returns
 */
export function Tab({ children, index }: PropsWithChildren<{ index: number }>) {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <button
      className={cn('border-b-3 p-14', {
        'text-main border-main': activeTab === index,
        'border-transparent text-gray-500': activeTab !== index,
      })}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </button>
  );
}

export function TabPanels({ children }: PropsWithChildren) {
  return <div className='flex-1'>{children}</div>;
}

/**
 * - TabContext의 activeTab에 따라 Tab 컨텐츠를 보여줬다 안보여줬다 해주는 컴포넌트
 * @param param0
 * @returns
 */
export function TabPanel({
  children,
  index,
}: PropsWithChildren<{ index: number }>) {
  const { activeTab } = useContext(TabContext);

  return <div hidden={index !== activeTab}>{children}</div>;
}
