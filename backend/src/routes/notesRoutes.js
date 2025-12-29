import express from "express";
import { 
  getAllnotes, 
  createNote, 
  updateNote, 
  deleteNote,
  getNoteById,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllnotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);


export default router;


// app.get("/api/notes" , (req,res)=>{
//     res.send("You got 8 notes");
// });
// app.post("/api/notes" , (req,res)=>{
//     res.json(201).send({message : "Node created successfully!"})
// });
// app.put("/api/notes/:" , (req,res)=>{
//     res.json(200).send({message : " Note updated successfully!"})
// });
// app.delete("/api/notes/:" , (req,res)=>{
//     res.json(200).send({message : " Note deleted successfully!"})
// });
