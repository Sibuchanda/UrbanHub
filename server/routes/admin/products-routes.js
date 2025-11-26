import express from 'express'
import handleImageUpload, { addProduct, deleteProduct, editProduct, fetchAllProducts } from '../../controlers/admin/products-controller.js';
import { upload } from '../../helpers/cloudinary.js';

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addProduct);
router.get("/get", fetchAllProducts);
router.put("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);


export default router;
