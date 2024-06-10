// 1) 특정 엘리먼트(Anchor) 기준으로 위치를 잡을 수 있을 것
// ex) bottom-left, bottom-center, bottom-right

// 2) 브라우저의 화면이 늘고, 줄고에 대해서도 포지션을 유지할 것

// 3) 외부 영역을 클릭했을 때 렌더링 여부를 정할 수 있어야함.\

import Root from "./Root";
import Portal from "./Portal";
const Popover = {
  Root,
  Portal,
};
export default Popover;
