import { FC, PropsWithChildren, useId } from "react";
import { useAccodionContext } from "./Root";

export interface AccodionContentProps extends PropsWithChildren {
  value?: string;
}
const Content: FC<AccodionContentProps> = (props) => {
  const { children, value } = props;
  const elementId = useId();
  const contentValue = value ?? elementId;
  const { expandedValues } = useAccodionContext();
  return expandedValues?.includes(contentValue) ? <>{children}</> : null;
};
export default Content;
