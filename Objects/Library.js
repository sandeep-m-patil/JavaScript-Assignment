// Book class with title, author, ISBN, and isBorrowed properties
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.isBorrowed = false;
    }
  
    // Method to borrow the book
    borrow() {
      if (!this.isBorrowed) {
        this.isBorrowed = true;
        return true;
      }
      return false; // Book is already borrowed
    }
  
    // Method to return the book
    returnBook() {
      if (this.isBorrowed) {
        this.isBorrowed = false;
        return true;
      }
      return false; // Book is not borrowed
    }
  }
  
  // Library class with books array and necessary methods
  class Library {
    constructor() {
      this.books = [];
    }
  
    // Method to add a book to the library
    addBook(book) {
      if (book instanceof Book) {
        this.books.push(book);
        return true;
      }
      return false;
    }
  
    // Method to find a book by ISBN
    findBookByISBN(isbn) {
      return this.books.find(book => book.isbn === isbn) || null;
    }
  
    // Method to list all available books (not borrowed)
    listAvailableBooks() {
      return this.books.filter(book => !book.isBorrowed);
    }
  
    // Method to list all borrowed books
    listBorrowedBooks() {
      return this.books.filter(book => book.isBorrowed);
    }
  }
  
  // Example usage
  const library = new Library();
  
  // Create some books
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084");
  const book3 = new Book("1984", "George Orwell", "9780451524935");
  
  // Add books to the library
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  // Borrow some books
  book1.borrow();
  book3.borrow();
  
  // Find a book by ISBN
  const foundBook = library.findBookByISBN("9780061120084");
  console.log("Found book:", foundBook);
  
  // List available books
  const availableBooks = library.listAvailableBooks();
  console.log("Available books:", availableBooks);
  
  // List borrowed books
  const borrowedBooks = library.listBorrowedBooks();
  console.log("Borrowed books:", borrowedBooks);
  
  // Return a book
  book1.returnBook();
  
  // List available books after return
  const availableBooksAfterReturn = library.listAvailableBooks();
  console.log("Available books after return:", availableBooksAfterReturn);