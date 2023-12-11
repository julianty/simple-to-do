import {
  MantineProvider,
  Stack,
  Group,
  ActionIconGroup,
  ActionIcon,
} from "@mantine/core";

import "@mantine/core/styles.css";
import { AppShell, Center, Title } from "@mantine/core";
import ToDoCard from "./components/ToDoCard";

function App() {
  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header withBorder={false}>
          <Center>
            <Title>My As Yet Unnamed To Do App</Title>
          </Center>
        </AppShell.Header>
        <AppShell.Main>
          <Stack align="center">
            <Group>
              <ActionIcon />
              <ActionIcon />
              <ActionIcon />
            </Group>
            <Group>
              <ToDoCard></ToDoCard>
              <ToDoCard></ToDoCard>
            </Group>
          </Stack>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
