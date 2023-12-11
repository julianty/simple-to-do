import { Card, Text, Checkbox } from "@mantine/core";
import React from "react";

function ToDoCard(): React.ReactNode {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section m="sm">
        <Text>My To-Do List For Today</Text>
      </Card.Section>
      <Card.Section m="sm">
        <Checkbox label="Do something productive" />
        <Checkbox label="Do something fun" />
        <Checkbox label="Do something silly" />
      </Card.Section>
    </Card>
  );
}

export default ToDoCard;
