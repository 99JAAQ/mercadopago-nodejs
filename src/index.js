import express from "express";
import morgan from "morgan";
import path from "path";

import paymentRoutes from "./routes/payment.routes.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(paymentRoutes);

app.use(express.static(path.resolve("src/public")));

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto: ${port}`);
});
