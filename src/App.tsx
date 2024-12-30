import './App.css';
import MainLayout from './components/common/MainLayout';
import Tabs, {
  Tab,
  TabContent,
  TabContents,
  TabList,
} from './components/common/Tabs';
import SectionEditorList from './components/edit/SectionEditorList';
import { SurveyStoreProvider } from './store';

function App() {
  return (
    <MainLayout>
      <SurveyStoreProvider>
        <Tabs>
          <TabList>
            <Tab index={0}>tab 1</Tab>
            <Tab index={1}>tab 2</Tab>
          </TabList>
          <TabContents>
            <TabContent index={0}>
              <SectionEditorList />
            </TabContent>
            <TabContent index={1}>TabContent 2</TabContent>
          </TabContents>
        </Tabs>
      </SurveyStoreProvider>
    </MainLayout>
  );
}

export default App;
