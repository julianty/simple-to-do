import { initializeApp } from "firebase/app";

import "@mantine/core/styles.css";
import { MantineProvider, Stack, Group, ActionIcon } from "@mantine/core";
import { AppShell, Center, Title } from "@mantine/core";
import ToDoCard from "./components/ToDoCard";
import { IconPlus } from "@tabler/icons-react";

// TODO: Put into .env file
const firebaseConfig = {
  apiKey: "AIzaSyBSbhodvsr3A1ftaY7ZzPoY8ynV2iGDg64",
  authDomain: "simple-to-do-1765a.firebaseapp.com",
  projectId: "simple-to-do-1765a",
  storageBucket: "simple-to-do-1765a.appspot.com",
  messagingSenderId: "1080345089585",
  appId: "1:1080345089585:web:0a199d0e17740b7446e710",
};

const app = initializeApp(firebaseConfig);

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
            {/* Might be best to have this Group be a separate component */}
            <Group>
              <ActionIcon>
                <IconPlus></IconPlus>
              </ActionIcon>
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
