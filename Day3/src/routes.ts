import { Router, Request, Response } from "express";
import { User } from "./types";

const router = Router();

let users: User[] = [];
let idCounter = 1;

// CREATE
router.post("/users", (req: Request, res: Response) => {
  const user: User = {
    id: idCounter++,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(user);
  res.status(201).json(user);
});

// READ
router.get("/users", (_req, res) => {
  res.json(users);
});

// READ
router.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: "Not found" });
  res.json(user);
});

// UPDATE
router.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: "Not found" });

  user.name = req.body.name ?? user.name;
  user.email = req.body.email ?? user.email;

  res.json(user);
});

// DELETE
router.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== Number(req.params.id));
  res.status(204).send();
});

export default router;
