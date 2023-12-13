import { Card, Text } from "@mantine/core";
import React from "react";
import { Task } from "./Task";

function ToDoCard(): React.ReactNode {
  // Look at "useListState" in checkbox documentation for mantine - nested tasks

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section m="sm">
        <Text>My To-Do List For Today</Text>
      </Card.Section>
      <Card.Section m="sm">
        <Task text={"Do something productive"} />
        <Task text={"Do something fun"} />
        <Task text={"Do something silly"} />
      </Card.Section>
    </Card>
  );
}

export default ToDoCard;
