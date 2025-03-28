import { Router } from "express";
import AppService from "../services/app";

const router = Router();

router.get("/", (req, res) => {
  const appService = new AppService();
  res.send(appService.getHello());
});

export default router;
