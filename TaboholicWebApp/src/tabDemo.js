import { Space, Tabs } from "@mantine/core";

export default function TabDemo() {
  return (
    <Tabs color="rgba(194, 0, 0, 0.89)" variant="pills" defaultValue="Problem">
      <Tabs.List>
        <Space />
        <Tabs.Tab value="problem">Problem</Tabs.Tab>
        <Tabs.Tab value="background">Background</Tabs.Tab>
        <Tabs.Tab value="solution">Solution</Tabs.Tab>
        <Tabs.Tab value="technology">Technology</Tabs.Tab>
        <Tabs.Tab value="architecture">Architecture</Tabs.Tab>
        <Tabs.Tab value="demo">Demo</Tabs.Tab>
        <Tabs.Tab value="features">Features</Tabs.Tab>
        <Tabs.Tab value="evaluation">Evaluation</Tabs.Tab>
        <Tabs.Tab value="progress">Progress</Tabs.Tab>
        <Tabs.Tab value="timeline">Timeline</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
