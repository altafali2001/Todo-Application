import { createServerApplication } from "./app";

const app = createServerApplication();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});