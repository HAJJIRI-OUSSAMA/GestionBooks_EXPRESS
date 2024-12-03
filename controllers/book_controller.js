import { getAllBooks, getBookById, ajouterBook, updateBook, deleteBook } from '../services/book_Service.js'

export async function AllBooks(req, res) {
    try {
        const books = await getAllBooks();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ err })
    }
}

export async function BookById(req, res) {
    try {
        const book = await getBookById(req.params.id)
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ err })
    }
}

export async function addBook(req, res) {
    // ajouter nouveau livre
    try {
        const book = await ajouterBook(req.body)
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ err })
    }

}

export async function updateBookByid(req, res) {
    try {
        const book = await updateBook(req.params.id, req.body);
        res.status(200).json(book);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err })
    }
}

export async function deleteBookById(req, res) {
    try {
        const book = await deleteBook(req.params.id);
        res.send(book)
    }
    catch (err) {
        res.status(500).json({ err })
    }
}


