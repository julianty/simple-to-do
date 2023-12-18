import { Group, Checkbox, TextInput } from "@mantine/core";
import React, { MouseEventHandler, useState } from "react";
import { useHover } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";

interface CloseButtonProps {
  clickHandler: MouseEventHandler;
}
function CloseButton({ clickHandler }: CloseButtonProps): React.ReactNode {
  return <IconX onClick={clickHandler} />;
}

interface TaskProps {
  text: string;
}
export function Task(
  props: React.PropsWithChildren<TaskProps>
): React.ReactNode {
  const { hovered, ref } = useHover();
  const text = props.text;
  const [checked, setChecked] = useState(false);
  function clickHandler(e: React.MouseEvent) {
    e.preventDefault;
    checked === false ? setChecked(true) : setChecked(false);
  }
  function deleteItem(e: React.MouseEvent) {
    e.preventDefault;
    console.log("delete this task");
  }
  return (
    <Group ref={ref}>
      <Checkbox onClick={clickHandler} />
      <TextInput
        disabled={checked ? true : false}
        variant="unstyled"
        defaultValue={text}
        rightSection={
          hovered ? <CloseButton clickHandler={deleteItem} /> : null
        }
      ></TextInput>
    </Group>
  );
}
