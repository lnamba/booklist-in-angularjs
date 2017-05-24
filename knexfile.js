module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'booklist',
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'booklist',
    }
  }

};
