import { createContext, PropsWithChildren, useContext, useState } from 'react';
import cn from 'classnames';

const TabContext = createContext({
  activeTab: 0,
  setActiveTab: (_: number) => {},
});

export default function Tabs({ children }: PropsWithChildren) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className='flex flex-col'>{children}</div>
    </TabContext.Provider>
  );
}

export function TabList({ children }: PropsWithChildren) {
  return <div className='flex gap-x-20 justify-center'>{children}</div>;
}

export function Tab({ children, index }: PropsWithChildren<{ index: number }>) {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <button
      className={cn(
        'border-b-3 p-14',
        {
          'text-main border-main': activeTab === index,
        },
        {
          'border-transparent text-gray-500': activeTab !== index,
        }
      )}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </button>
  );
}

export function TabContents({ children }: PropsWithChildren) {
  return <div className='flex-1'>{children}</div>;
}

export function TabContent({
  children,
  index,
}: PropsWithChildren<{ index: number }>) {
  const { activeTab } = useContext(TabContext);

  // null보다는 hidden 속성을 사용하는 것이 성능상 더 좋습니다.
  return <div hidden={index !== activeTab}>{children}</div>;
}
