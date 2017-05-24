
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'The Girl on the Train', author: 'Paula Hawkins', image_url: 'https://pacechronicle.com/wp-content/uploads/2016/10/51Gs9di1qWL._SY344_BO1204203200_.jpg', released: 2015},
        {id: 2, title: 'Wicked: The Life and Times of the Wicked Witch of the West', author: 'Gregory Maguire', image_url: 'http://performance.millikin.edu/literaturecasebooks/wicked/Images/wicked-book.jpg', released: 1996},
        {id: 3, title: 'The Help', author: 'Kathryn Stockett', image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Thehelpbookcover.jpg/220px-Thehelpbookcover.jpg', released: 2009},
      ]);
    });
};
