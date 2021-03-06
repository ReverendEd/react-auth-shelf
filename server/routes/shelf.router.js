const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const userStrategy = require('../strategies/user.strategy');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    console.log(req.user)
    if (req.isAuthenticated()) {
        console.log('/shelf GET route')
        pool.query(`SELECT * FROM "item";`).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});

router.get('/stats', (req, res) => {
    console.log(req.user)
    if (req.isAuthenticated()) {
        console.log('Got to Stats route')
       pool.query(`SELECT "person"."username", count("person"."id")  FROM "item"
        JOIN "person" ON "person"."id" = "item"."person_id"
        GROUP BY "person"."username";`).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error: ', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
})

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log('in post for add itme');
    if(req.isAuthenticated()){
        pool.query(`INSERT INTO "item" ("description", "image_url", "person_id") VALUES ($1, $2, $3)`, [req.body.description, req.body.img_url, req.user.id])
            .then(()=> res.sendStatus(201))
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            })
    }else {

    }
    
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;