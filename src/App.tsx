import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import SiteTabs from "./components/SiteTabs";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <div style={{ position: "absolute", top: 5, left: 0 }}>
        <SiteTabs />
      </div>
    </MantineProvider>
  );
}
