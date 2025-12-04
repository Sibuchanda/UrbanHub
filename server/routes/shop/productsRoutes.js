import express, { Router } from "express";
import { getFilteredProducts, getProductDetails } from "../../controlers/shop/productsControler";

const router = express.Router();

router.get("/get", getFilteredProducts);
router.get("/get/:id", getProductDetails);

export default router;
