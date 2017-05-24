var express = require('express');
var router = express.Router();
var knex = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM books`).then(function(books) {
    res.json(books)
  })
});

router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT * FROM books WHERE id = ${req.params.id}`).then(function(books) {
    console.log("These are the books", books);
    res.json(books)
  })
});

router.post('/', function(req, res, next) {
  var title = `${req.body.title}`.replace(/'/g, "''")
  console.log(title);
  knex.raw(`INSERT INTO books VALUES (DEFAULT,'${title}', '${req.body.author}', '${req.body.image_url}', ${req.body.released})`)
  .then(function(books) {
    knex.raw(`SELECT * FROM books WHERE title = '${title}'`).then(function(books) {
      res.json(books)
    })
  })
})

router.patch('/:id', function(req, res, next) {
  var title = `${req.body.title}`.replace(/'/g, "''")
  knex.raw(`UPDATE books SET title = '${title}', author = '${req.body.author}', image_url = '${req.body.image_url}', released = ${req.body.released}, likes = ${req.body.likes}, dislikes = ${req.body.dislikes} WHERE id = ${req.params.id}`).then(function(books) {
    knex('books').select().where('id',req.params.id).then(function(book) {
      console.log(book);
      res.json(book)
    })
    // res.send(req.params.id);
  })
})

router.delete('/:id', function(req, res, next) {
  knex.raw(`DELETE FROM books WHERE id=${req.params.id}`).then(function() {
    res.send(req.params.id);
  })
})

module.exports = router;
