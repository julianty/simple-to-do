import { MantineProvider } from "@mantine/core";

import { Box } from "@mantine/core";
import "@mantine/core/styles.css";
function App() {
  return (
    <MantineProvider>
      <Box bg="red.5">A box</Box>
    </MantineProvider>
  );
}

export default App;
