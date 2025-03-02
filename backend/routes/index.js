import express from "express";
import { getUsers,Register,Login,Logout } from "../controllers/UserController.js";
import { createNote, deleteNote, getNotes, getNotesById, updateNote } from "../controllers/NotesController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.get("/notes", getNotes);
router.get("/notes/:id", getNotesById);
router.post("/notes", createNote);
router.patch("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);


export default router;