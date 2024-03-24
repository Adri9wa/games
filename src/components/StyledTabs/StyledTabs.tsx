import React, { SyntheticEvent, useState } from "react";
import { Tab, TabOwnProps } from "@mui/material";
import { TabsWithStyles } from "./styles";

type Props = {
  tabs: TabOwnProps[];
  value?: string | number;
  onChange?: (newTab: any) => void;
};

const StyledTabs = ({ tabs, value: incomingValue, onChange }: Props) => {
  const [value, setValue] = useState(incomingValue ?? tabs[0].value);
  console.log(value, incomingValue);
  const handleChange = (e: SyntheticEvent, newTab: any) => {
    setValue(newTab);
    onChange?.(newTab);
  };

  return (
    <TabsWithStyles {...{ value }} onChange={handleChange}>
      {tabs.map((tabProps, index) => (
        <Tab key={tabProps.value} {...tabProps} />
      ))}
    </TabsWithStyles>
  );
};

StyledTabs.propTypes = {};

export default StyledTabs;
