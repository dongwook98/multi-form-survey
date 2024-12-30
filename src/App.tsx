import './App.css';
import MainLayout from './components/common/MainLayout';
import Tabs, {
  Tab,
  TabContent,
  TabContents,
  TabList,
} from './components/common/Tabs';
import QuestionEditor from './components/edit/QuestionEditor';

function App() {
  return (
    <MainLayout>
      <Tabs>
        <TabList>
          <Tab index={0}>tab 1</Tab>
          <Tab index={1}>tab 2</Tab>
        </TabList>
        <TabContents>
          <TabContent index={0}>
            <QuestionEditor />
          </TabContent>
          <TabContent index={1}>TabContent 2</TabContent>
        </TabContents>
      </Tabs>
    </MainLayout>
  );
}

export default App;
