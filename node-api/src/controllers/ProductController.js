const mongoose = require('mongoose');

const productModel = mongoose.model('Product');

async function index(req, res) {
    const products = await productModel.find();
    res.json(products);
}

async function show(req, res) {
    const product = await productModel.findById(req.params.id);
    return await res.json(product);
}

async function store(req, res) {
    const product = await productModel.create(req.body)
    return res.json(product);
}

async function update(req, res) {
    const product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(product);
}

async function destroy(req, res) {
    const product = await productModel.findByIdAndRemove(req.params.id)
    return res.send("Sucesso");
}


module.exports = {
    index,
    show,
    store,
    destroy,
    update
}