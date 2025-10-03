// Task 1: Create Database & Collection
use plp_bookstore
db.createCollection("books")

// Task 2: Basic CRUD Operations
// Find all books in a specific genre
db.books.find({ genre: "Fantasy" })

// Find books published after a certain year (2000 as example)
db.books.find({ published_year: { $gt: 2000 } })

// Find books by a specific author
db.books.find({ author: "J.R.R. Tolkien" })

// Update the price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 18.99 } }
)

// Delete a book by its title
db.books.deleteOne({ title: "The Da Vinci Code" })

// Task 3: Advanced Queries


// Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Projection: return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sorting by price ascending
db.books.find({}, { title: 1, price: 1, _id: 0 }).sort({ price: 1 })

// Sorting by price descending
db.books.find({}, { title: 1, price: 1, _id: 0 }).sort({ price: -1 })

// Pagination: 5 books per page
db.books.find().limit(5)        // Page 1
db.books.find().skip(5).limit(5) // Page 2
db.books.find().skip(10).limit(5) // Page 3


// Task 4: Aggregation Pipeline
// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

// Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        $subtract: [
          { $divide: ["$published_year", 10] },
          { $mod: [{ $divide: ["$published_year", 10] }, 1] }
        ]
      },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $multiply: ["$_id", 10] },
      count: 1,
      _id: 0
    }
  },
  { $sort: { decade: 1 } }
])


// Task 5: Indexing

// Create an index on the title field
db.books.createIndex({ title: 1 })

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// Demonstrate performance improvement using explain()
db.books.find({ title: "1984" }).explain("executionStats")
db.books.find({ author: "J.R.R. Tolkien", published_year: { $gt: 1950 } }).explain("executionStats")
