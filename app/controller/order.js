const db = require('../models');
const Order = db.Order;

exports.findAll = async (req, res) => {

  const getOrder = await Order.findAll({ 
    includes: [
        { model: db.User },
    ]
  });

  console.log('>> Berhasil mendapatkan data order');
  res.send({
    request_status: true,
    message: 'Menampilkan seluruh order yang sedang diproses.',
    data: getOrder,
  });
};

exports.createOrder = async (req, res) => {
    if (!req.body.item) {
        res.status(400).send({
            request_status: false,
            message: 'Isi jenis terlebih dahulu',
        });
        return;
    }
    if (!req.body.orderdate) {
        res.status(400).send({
            request_status: false,
            message: 'Isi tanggal order terlebih dahulu',
        });
        return;
    }
    if (!req.body.paymentmethod) {
        res.status(400).send({
            request_status: false,
            message: 'Isi metode pembayaran terlebih dahulu',
        });
        return;
    }
    if (!req.body.invoice) {
        res.status(400).send({
            request_status: false,
            message: 'Isi total harga terlebih dahulu',
        });
        return;
    }
    if (!req.body.status) {
        res.status(400).send({
            request_status: false,
            message: 'Isi keterangan order terlebih dahulu',
        });
        return;
    }

    const inputOrder = {
        userid: req.loginId,
        item: req.body.item,
        orderdate: req.body.orderdate,
        paymentmethod: req.body.paymentmethod,
        invoice: req.body.invoice,
        status: req.body.status,
    };

    const createOrder = await Order.create(inputOrder);

    console.log('>> Berhasil membuat order');
    res.send({
        request_status: true,
        message: 'order berhasil dibuat, silahkan menunggu pesanan selesai dikerjakan.',
        data: createOrder,
    });
};

exports.updateOrder = async (req, res) => {
    if (!req.body.item) {
        res.status(400).send({
            request_status: false,
            message: 'Isi jenis terlebih dahulu',
        });
        return;
    }
    if (!req.body.orderdate) {
        res.status(400).send({
            request_status: false,
            message: 'Isi tanggal order terlebih dahulu',
        });
        return;
    }
    if (!req.body.paymentmethod) {
        res.status(400).send({
            request_status: false,
            message: 'Isi metode pembayaran terlebih dahulu',
        });
        return;
    }
    if (!req.body.invoice) {
        res.status(400).send({
            request_status: false,
            message: 'Isi total harga terlebih dahulu',
        });
        return;
    }
    if (!req.body.status) {
        res.status(400).send({
            request_status: false,
            message: 'Isi keterangan order terlebih dahulu',
        });
        return;
    }
    const getOrder = await Order.findOne({
        where: {
            id: req.params.id,
        }
    });
    
    getOrder.item = req.body.item;
    getOrder.orderdate = req.body.orderdate;
    getOrder.paymentmethod = req.body.paymentmethod;
    getOrder.invoice = req.body.invoice;
    getOrder.status = req.body.status;
    
    getOrder.save();
  
    console.log('>> Berhasil mengedit data order');
    res.send({
      request_status: true,
      message: 'Menampilkan data order terbaru.',
      data: getOrder,
    });
};

exports.deleteOrder = async (req, res) => {
        await Order.destroy({
            where: {
                id: req.params.id,
            }
        });

        res.send({
            message: 'Sucessfully deleted Order with id = ' + req.params.id,
        });
};