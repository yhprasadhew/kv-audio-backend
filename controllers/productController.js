import Product from "../models/product.js";

export function addProduct(req, res) {
    const data = req.body; // ✅ Get data from request body (JSON)

    const newProduct = new Product(data);
    newProduct.save()
        .then(() => {
            res.json({ message: "Product added successfully" });
        })
        .catch((error) => {
            res.status(500).json({ error: "Product addition failed", details: error.message });
        });
}
