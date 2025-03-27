import express,{Application} from "express";
import dotenv from "dotenv";
import cors from "cors";
import indexRoutes from "./routes/app";
import orderRoutes from "./routes/order"; // Replace with actual order routes
import webhookRoutes from "./routes/webhook"; // Replace with actual webhook routes

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // Change this to your frontend URL
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization",
}));

app.use("/", indexRoutes);
app.use("/orders", orderRoutes);
app.use("/webhooks", webhookRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
