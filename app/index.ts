import express from "express";
import cors from "cors";
import "../config/utils/database";

const handle = require("../config/middleware/handle");
const router = require("../config/routes/routes");

const app = express();
const PORT: number = 3000;

app.use(cors());
app.use(handle);
app.use(express.json());
app.use(express.urlencoded());
app.use("/v1/artikel", router);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});