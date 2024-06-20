import { useRef } from "react";
import { Accodion, Dropdown, Popover } from "./components";
import Pagination from "./components/pagination";
import Carousel from "./components/carousel";
function App() {
  const popoverAnchorRef = useRef<HTMLDivElement>(null);
  const popover2AnchorRef = useRef<HTMLButtonElement>(null);
  const handleClickDropdownItem = (value: string) => {
    console.log("Selected DropdownItem :: ", value);
  };

  const onChangePage = (page: number) => {
    console.log({ page });
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

      <br />
      <br />
      <br />
      <h2>Popover2</h2>
      <button style={{ marginLeft: "25px" }} ref={popover2AnchorRef}>
        Popover Anchor
      </button>
      {/* <Popover2.Root anchor={popover2AnchorRef}>
        <Popover2.Portal>
          <h3>Portal-Content</h3>
        </Popover2.Portal>
      </Popover2.Root> */}
      <br />
      <br />
      <br />
      <h2>Pagination</h2>
      <Pagination.Root itemLength={121} onChangePage={onChangePage}>
        <Pagination.Pages />
        <Pagination.Navigator />
      </Pagination.Root>
      <br />
      <br />
      <br />
      <h2>Carousel</h2>
      <Carousel.Root>
        <Carousel.Container>
          <Carousel.Item>
            <h2>Item-1</h2>
          </Carousel.Item>
          <Carousel.Item>
            <h2>Item-2</h2>
          </Carousel.Item>
          <Carousel.Item>
            <h2>Item-3</h2>
          </Carousel.Item>
          <Carousel.Item>
            <h2>Item-4</h2>
          </Carousel.Item>
          <Carousel.Item>
            <h2>Item-5</h2>
          </Carousel.Item>
        </Carousel.Container>
        <Carousel.Navigator>
          {(handleClickPrev, handleClickNext) => (
            <>
              <button onClick={handleClickPrev}>custom-prev</button>
              <button onClick={handleClickNext}>custom-next</button>
            </>
          )}
        </Carousel.Navigator>
        <Carousel.Indicator />
      </Carousel.Root>
    </>
  );
}

export default App;
