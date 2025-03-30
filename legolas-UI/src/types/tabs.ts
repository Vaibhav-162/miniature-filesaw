import { TABS } from "@/constants/tabs";
type TabsKey = keyof typeof TABS;

type TabValue = typeof TABS[TabsKey];

export type { TabValue, TabsKey };