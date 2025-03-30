import { TABS } from "../constants/app";
type TabsKey = keyof typeof TABS;

type TabValue = typeof TABS[TabsKey];

export type { TabValue, TabsKey };