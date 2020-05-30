import { Router } from "https://deno.land/x/opine@master/mod.ts";
import { getUsers, createUser } from "../services/user/get-user.ts";
import { IUser } from "../models/user.ts";

const router = Router();

router.get("/", function (req, res) {
  res.send("Hello world from deno");
});

router.get("/users", async (req, res) => {
  const users = await getUsers();

  res.send(users);
});

router.post("/users/create", async (req, res) => {
  const user: any = req.body;
  await createUser(user);
});

export default router;
