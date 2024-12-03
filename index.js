import express from "express";
import Bookrouter from "./routes/book.routes.js";
import orderRouter from "./routes/order.routes.js";
import custumerRouter from "./routes/custumer.routes.js";
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";
dotenv.config();
const app = express();

// mongodb://localhost:27017
app.use(cors());


// demarer le framework express
//toute les requettes

app.use(express.json());
app.use("/api/books", Bookrouter);
app.use("/api/orders", orderRouter);
app.use("/api/custumers", custumerRouter);


app.get("/", (req, res) => {
    res.send("<h1> Home PAGE </h1>")
})

// etablir la connexion avec la base de donnee
mongoose.connect(process.env.DB_URL)
    .then((res) => {
        app.listen(process.env.PORT, () => {
            console.log("Running");
        });
    }).catch(err => {
        console.log(err);
    });
