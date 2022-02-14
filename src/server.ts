import { app } from "./app";

import { initDefaultDatabase } from "./services/init_default_database";

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, async () => {
  await initDefaultDatabase();

  console.log(`Server is running in ${SERVER_PORT}`);
});
