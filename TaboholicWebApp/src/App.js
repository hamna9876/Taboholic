import "./App.css";
import ClickButton from "./Button/clickButton";
import "@mantine/core/styles.css";
import { MantineProvider, Space } from "@mantine/core";
import ExtendedPage from "./ExtendedPage/extendedPage";
import TabDemo from "./tabDemo";

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <header className="App-header">
          <p> </p>
          <p></p>
        </header>

        <ExtendedPage />
        {/* <ClickButton /> */}
      </div>

      <p> </p>
      {/* <TabDemo /> */}
    </MantineProvider>
  );
}

export default App;
