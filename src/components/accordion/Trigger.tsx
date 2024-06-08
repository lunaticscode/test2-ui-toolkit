import { PropsWithChildren, forwardRef, useId } from "react";
import { useAccodionContext } from "./Root";

export interface AccodionTriggerProps extends PropsWithChildren {
  value?: string;
}
const Trigger = forwardRef<HTMLButtonElement, AccodionTriggerProps>(
  (props, ref) => {
    const { children, value } = props;
    const { expandedValues, setExpandedValues } = useAccodionContext();
    const elementId = useId(); // ":r1"
    const triggerValue = value ?? elementId;

    const handleClickTrigger = () => {
      if (expandedValues?.includes(triggerValue)) {
        setExpandedValues?.((prevValues) =>
          prevValues.filter((value) => value != triggerValue)
        );
      } else {
        setExpandedValues?.((prev) => [...prev, triggerValue]);
      }
    };
    return (
      <div>
        <button ref={ref} onClick={handleClickTrigger}>
          {children}
        </button>
      </div>
    );
  }
);
export default Trigger;
