import express from 'express';

const router = express.Router();
import { AllBooks, addBook, updateBookByid, deleteBookById, BookById } from '../controllers/book_controller.js';


router.route("/").get(AllBooks)
    .post(addBook);

router.route("/:id").get(BookById)
    .delete(deleteBookById)
    .patch(updateBookByid)



export default router;