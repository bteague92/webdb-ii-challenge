const express = require('express');
const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true
});

const router = express.Router();

router.get('/', (req, res) => {
    db('sales')
        .then(sales => {
            res.json(sales);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve sales data' });
        });
});

router.post('/', (req, res) => {
    const saleData = req.body;
    db('sales').insert(saleData)
        .then(ids => {
            db('sales').where({ id: ids[0] })
                .then(newSale => {
                    res.status(201).json(newSale);
                });
        })
        .catch(err => {
            console.log('POST error', err);
            res.status(500).json({ message: "Failed to store data" });
        });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    // validate the data
    db("sales")
        .where({ id }) // ALWAYS FILTER ON UPDATE (AND DELETE)
        .update(changes)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: `${count} record(s) updated` });
            } else {
                res.status(404).json({ message: "Sale not found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                errorMessage: "Error updating the sale"
            });
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db('sales')
        .where({ id: id })
        .del()
        .then(count => {
            res.status(200).json({ message: `${count} record(s) removed` });
        })
        .catch(err => {
            console.log('DELETE error', err);
            res.status(500).json({ message: "Failed to delete data" });
        });
});

module.exports = router;