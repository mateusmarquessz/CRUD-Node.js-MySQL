import express from "express";
import {getUsers, addUser, updateUser, deleteUser} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/", addUser);

router.get("/:id", updateUser);

router.get("/:id", deleteUser);
export default router