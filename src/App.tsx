import { useRef } from "react";
import "./App.css";
import { Accodion, Dropdown, Popover } from "./components";
function App() {
  const popoverAnchorRef = useRef<HTMLDivElement>(null);

  const handleClickDropdownItem = (value: string) => {
    console.log("Selected DropdownItem :: ", value);
  };
  return (
    <>
      <h2>Accodion</h2>
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
      <br />
      <br />
      <br />
      <br />
      <h2>Popover</h2>
      <div ref={popoverAnchorRef}>Popover Trigger</div>
      <Popover.Root anchor={popoverAnchorRef} position="bottom-left">
        <Popover.Portal>
          <div>PopoverContent</div>
        </Popover.Portal>
      </Popover.Root>
      <br />
      <br />
      <br />
      <h2>Dropdown</h2>
      <Dropdown.Root onValueChange={handleClickDropdownItem}>
        <Dropdown.Trigger>DD-Trigger</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item value={"item-1"}>item-1</Dropdown.Item>
          <Dropdown.Item value={"item-2"}>item-2</Dropdown.Item>
          <Dropdown.Item value={"item-3"}>item-3</Dropdown.Item>
          <Dropdown.Item value={"item-4"}>item-4</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Root>
    </>
  );
}

export default App;
