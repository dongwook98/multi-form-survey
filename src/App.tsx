import './App.css';

import MainLayout from './components/common/MainLayout';
import Tabs, {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from './components/common/Tabs';
import SurveyEditor from './components/edit/SurveyEditor';

function App() {
  return (
    <>
      <MainLayout>
        <Tabs>
          <TabList>
            <Tab index={0}>tab1</Tab>
            <Tab index={1}>tab2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel index={0}>
              <SurveyEditor />
            </TabPanel>
            <TabPanel index={1}>tab2 contents</TabPanel>
          </TabPanels>
        </Tabs>
      </MainLayout>
    </>
  );
}

export default App;
