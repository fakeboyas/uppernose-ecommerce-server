const { Product } = require("../../models");

module.exports = {
  //get produk
  getProduct: async (req, res) => {
    try {
      const result = await Product.find();
      res.send({ message: "get all data", data: result });
    } catch (error) {
      res.send(error);
    }
  },

  //add produk
  addProduct: async (req, res) => {
    try {
      const result = await Product.create({
        ...req.body,
      });
      res.send({ message: "produk berhasil ditambah", data: result });
    } catch (error) {
      res.send(error);
    }
  },

  //update produk
  updateProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Product.findByIdAndUpdate(id, {
        ...req.body,
        photo: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },
      });
    } catch (error) {
      res.send(error);
    }
  },

  //delete produk
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Product.findByIdAndRemove(id);
      res.send({ message: "data berhasil dihapus", data: result });
    } catch (error) {
      res.send(error);
    }
  },
};
