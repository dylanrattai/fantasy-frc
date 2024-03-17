import { Tabs, rem } from "@mantine/core";
import { HiCog, HiCollection, HiHome, HiIdentification } from "react-icons/hi";
import ParagraphBoxComponent from "./ParagraphBoxComponent";
import TableBoxComponent from "./TableBoxComponent";

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

      <Tabs.Panel value="home">
        <ParagraphBoxComponent
          title={"About Fantasy FRC"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl pretium. Scelerisque purus semper eget duis at. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Quam vulputate dignissim suspendisse in est ante in nibh. Tincidunt tortor aliquam nulla facilisi cras fermentum. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Ornare arcu dui vivamus arcu felis. Vitae tortor condimentum lacinia quis vel. Urna nec tincidunt praesent semper feugiat nibh. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Felis bibendum ut tristique et egestas quis ipsum. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Et netus et malesuada fames ac turpis egestas sed tempus. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Orci a scelerisque purus semper. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Iaculis at erat pellentesque adipiscing commodo elit at. Mi proin sed libero enim sed faucibus turpis in eu. Cursus euismod quis viverra nibh cras pulvinar. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. In egestas erat imperdiet sed euismod nisi porta lorem. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Ut aliquam purus sit amet. Proin libero nunc consequat interdum varius sit. Libero justo laoreet sit amet cursus sit."
          }
        />{" "}
        <TableBoxComponent title={"Fantasy FRC Scoring"} />
      </Tabs.Panel>

      <Tabs.Panel value="alliance">Tab content</Tabs.Panel>

      <Tabs.Panel value="leagues">Tab content</Tabs.Panel>

      <Tabs.Panel value="settings">Tab content</Tabs.Panel>
    </Tabs>
  );
}
