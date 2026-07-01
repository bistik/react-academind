import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "./Section";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState();

  function handleSelectedTab(tab) {
    setSelectedTab(tab)
  }

  let tabContent = <p>Select a tab</p>
  if (selectedTab) {
    tabContent = <div id="selected-tab">
      <h3>{EXAMPLES[selectedTab].title}</h3>
      <p>{EXAMPLES[selectedTab].description}</p>
      <pre>{EXAMPLES[selectedTab].code}</pre>
      </div>
  }
    return (
      <Section id="examples" title="Examples">
        <Tabs buttons={
          <>
            <TabButton
              isSelected={selectedTab === 'components'}
              onClick={() => handleSelectedTab('components')}>
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === 'jsx'}
              onClick={() => handleSelectedTab('jsx')}>
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === 'props'}
              onClick={() => handleSelectedTab('props')}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === 'state'}
              onClick={() => handleSelectedTab('state')}>
              State
            </TabButton>
          </>
        }>
          {tabContent}
        </Tabs>
    </Section>
    )
}