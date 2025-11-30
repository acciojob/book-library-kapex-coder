//your JS code here. If required.

const books = [
  {
    title: "Spy in the Amber",
    img: "https://www.bookgeeks.in/wp-content/uploads/2018/01/Spy-in-the-Amber-by-Manohar-Malgonkar.jpg",
    alt: "Spy in the Amber Book Cover",
    author: "Manohar Malgonkar",
    price: {
      currency: "INR",
      prefix: "Rs.",
      amount: 299,
    },
  },
  {
    title: "Sacred Games",
    img: "https://www.bookgeeks.in/wp-content/uploads/2018/01/Sacred-Games-by-Vikram-Chandra.jpg",
    alt: "Sacred Games Book Cover",
    author: "Vikram Chandra",
    price: {
      currency: "INR",
      prefix: "Rs.",
      amount: 199,
    },
  },
  {
    title: "BYOMKESH BAKSHI",
    img: "https://www.bookgeeks.in/wp-content/uploads/2018/01/Byomkesh-Bakshi-by-Sharadindu-Bandyopadhyay.jpg",
    alt: "BYOMKESH BAKSHI Book Cover",
    author: "Sharadindu Bandyopadhyay",
    price: {
      currency: "INR",
      prefix: "Rs.",
      amount: 249,
    },
  },
];

const bookLibraryDiv = document.getElementById("book-library");

books.forEach((book) => {
  const bookDiv = document.createElement("div");
  bookDiv.className = "book";
  bookDiv.innerHTML = `
    <img src="${book.img}" alt="${book.alt}" class="book-cover"/>
    <h2 class="book-title">${book.title}</h2>
    <p class="book-author">by ${book.author}</p>
    <div class="book-price">${book.price.prefix} ${book.price.amount}</p>
  `;
  bookLibraryDiv.appendChild(bookDiv);
});
