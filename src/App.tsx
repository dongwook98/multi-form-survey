import './App.css';
import MainLayout from './components/common/MainLayout';
import Panel, {
  PanelBody,
  PanelCap,
  PanelFooter,
  PanelHeader,
} from './components/common/Panel';
import Tabs, {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from './components/common/Tabs';

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
              tab1 contents
              <PanelCap>Panel Cap</PanelCap>
              <Panel>
                <PanelHeader>Panel Header</PanelHeader>
                <PanelBody>Panel Body</PanelBody>
                <PanelFooter>Panel Footer</PanelFooter>
              </Panel>
            </TabPanel>
            <TabPanel index={1}>tab2 contents</TabPanel>
          </TabPanels>
        </Tabs>
      </MainLayout>
    </>
  );
}

export default App;
