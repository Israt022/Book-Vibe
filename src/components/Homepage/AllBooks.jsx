import React, { use } from 'react';
import BookCard from '../Ui/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    console.log(books);
    return (
        <div className='container mx-auto mt-25'>
            <h1 className='text-center text-3xl font-bold'>Books</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map(book => <BookCard key={book.bookId} book={book}/>)
                }
            </div>
        </div>
    );
};

export default AllBooks;