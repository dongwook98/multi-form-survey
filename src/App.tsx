import './App.css';
import Dropdown from './components/common/Dropdown';
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
              <Dropdown
                options={[
                  { label: '옵션1', value: 1 },
                  { label: '옵션2', value: 2 },
                  { label: '옵션3', value: 2 },
                ]}
              />
            </TabPanel>
            <TabPanel index={1}>tab2 contents</TabPanel>
          </TabPanels>
        </Tabs>
      </MainLayout>
    </>
  );
}

export default App;
