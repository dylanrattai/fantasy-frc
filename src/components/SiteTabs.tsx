import { Tabs, rem } from "@mantine/core";
import { HiCog, HiCollection, HiHome, HiIdentification } from "react-icons/hi";

export default function SiteTabs() {
  const iconStyle = { width: rem(30), height: rem(20) };

  return (
    <Tabs
      color="rgba(0, 145, 255, 1)"
      radius="md"
      defaultValue="home"
      w={"100vw"}
    >
      <Tabs.List grow>
        <Tabs.Tab value="home" leftSection={<HiHome style={iconStyle} />}>
          Home
        </Tabs.Tab>
        <Tabs.Tab
          value="alliance"
          leftSection={<HiIdentification style={iconStyle} />}
        >
          My Alliance
        </Tabs.Tab>
        <Tabs.Tab
          value="leagues"
          leftSection={<HiCollection style={iconStyle} />}
        >
          My Leagues
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<HiCog style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="home">Tab content</Tabs.Panel>

      <Tabs.Panel value="alliance">Tab content</Tabs.Panel>

      <Tabs.Panel value="leagues">Tab content</Tabs.Panel>

      <Tabs.Panel value="settings">Tab content</Tabs.Panel>
    </Tabs>
  );
}
