import { Text, Checkbox } from "@mantine/core";
import React, { useState } from "react";

interface TaskProps {
  text: string;
}
export function Task(
  props: React.PropsWithChildren<TaskProps>
): React.ReactNode {
  const text = props.text;
  const [checked, setChecked] = useState(false);
  function clickHandler(e: React.MouseEvent) {
    e.preventDefault;
    checked === false ? setChecked(true) : setChecked(false);
  }
  return (
    <Checkbox
      onClick={clickHandler}
      label={<Text td={checked ? "line-through" : ""}>{text}</Text>}
    />
  );
}
