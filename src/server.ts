import { app } from "./app";

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running in ${SERVER_PORT}`);
});
