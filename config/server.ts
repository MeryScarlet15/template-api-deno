import opine from "https://deno.land/x/opine@master/mod.ts";
import router from "../routes/routes.ts";
const app = opine();

const routesConfig = () => {
  app.use("/", router);
};

export const createServer = (port: number) => {
  routesConfig();

  app.listen(port, () => {
    console.log("The server is running in " + port + " port");
  });
};
