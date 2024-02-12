import "./App.css";
import ClickButton from "./Button/clickButton";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import ExtendedPage from "./ExtendedPage/extendedPage";

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <header className="App-header">
          <p> test </p>
        </header>
        
        <ExtendedPage />
        <ClickButton />
      </div>
    </MantineProvider>
  );
}

export default App;
