import "./App.css";
import { Accodion } from "./components";
function App() {
  return (
    <>
      <Accodion.Root>
        <Accodion.Trigger value={"at"}>AT</Accodion.Trigger>
        <Accodion.Content value={"at"}>
          <div>A-Content</div>
        </Accodion.Content>
        <Accodion.Trigger value={"bt"}>BT</Accodion.Trigger>
        <Accodion.Content value={"bt"}>
          <div>B-Content</div>
        </Accodion.Content>
        <Accodion.Trigger value={"ct"}>CT</Accodion.Trigger>
        <Accodion.Content value={"ct"}>
          <div>C-Content</div>
        </Accodion.Content>
      </Accodion.Root>
    </>
  );
}

export default App;
