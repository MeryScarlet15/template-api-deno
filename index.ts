import { createDBConnection } from "./config/db.ts";
import { createServer } from "./config/server.ts";

try {
  await createDBConnection();
} catch (error) {
  console.log("Error connecting with database");
}

try {
  await createServer(8080);
} catch (error) {
  console.log("Error creating server");
}
