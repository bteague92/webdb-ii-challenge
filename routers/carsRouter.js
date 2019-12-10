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

});

router.post('/', (req, res) => {

});

module.exports = router;