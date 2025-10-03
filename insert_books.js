// Insert multiple book documents into the "books" collection

db.books.insertMany([
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 15.99,
    in_stock: true
  },
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1954,
    price: 20.50,
    in_stock: true
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 12.99,
    in_stock: true
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Satire",
    published_year: 1945,
    price: 10.50,
    in_stock: false
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Thriller",
    published_year: 2003,
    price: 18.00,
    in_stock: true
  },
  {
    title: "Angels and Demons",
    author: "Dan Brown",
    genre: "Thriller",
    published_year: 2000,
    price: 17.00,
    in_stock: true
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    published_year: 1960,
    price: 14.99,
    in_stock: false
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 13.99,
    in_stock: true
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 22.00,
    in_stock: true
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1998,
    price: 23.50,
    in_stock: true
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
    published_year: 1951,
    price: 11.99,
    in_stock: true
  }
]);
