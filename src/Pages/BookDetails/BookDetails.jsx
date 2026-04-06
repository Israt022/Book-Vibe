import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookProvider';

const BookDetails = () => {
    const {id} = useParams();
    // console.log('id',id);

    const books = useLoaderData();
    // console.log('books',books);

    const expectedBook = books.find(book => book.bookId == id);
    // console.log(expectedBook,'find id');
    const {
        image,
        bookName,
        author,
        category,
        review,
        tags,
        totalPages,
        publisher,
        rating,
        yearOfPublishing
    } = expectedBook;

    const {handleMarkAsRead,isAdded,storeBook,handleWishList} = useContext(BookContext);
    console.log(storeBook);

    
    return (
        <div className="card grid grid-cols-1 lg:grid-cols-2 lg:card-side bg-base-100 shadow-sm container mx-auto mt-5 w-[80%] grid grid-cols-2 my-5">
            <figure className='p-10 bg-base-300'>
                <img
                src={image}
                alt={bookName} 
                className='h-[500px] rounded-2xl'/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By : {author}</p>
                <div className='p-3 border-y border-gray-300'>
                    <p className='text-xl'>{category}</p>
                </div>
                <p>
                    <span className='font-bold'>Review :</span> <span className='text-sm text-gray-500'>{review}</span>
                </p>
                <div className='flex gap-2 items-center'>
                   <span className='font-bold'>Tag </span> {tags.map((tag,ind) => <div key={ind} className="badge bg-[#23BE0A]/10 text-[#23BE0A] font-semibold">{tag}</div>)}
                </div>
                <div className='border-t border-gray-400 space-y-2 my-2 pt-5'>
                    <div className='flex justify-between items-center gap-2'>
                        <span className='text-gray-500 text-sm font-semibold'>Number of Pages:</span>
                        <span className='text-sm font-bold'>{totalPages}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span className='text-gray-500 text-sm font-semibold'>Publisher:</span>
                        <span className='text-sm font-bold'>{publisher}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span className='text-gray-500 text-sm font-semibold'>Year of Publishing:</span>
                        <span className='text-sm font-bold'>{yearOfPublishing}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span className='text-gray-500 text-sm font-semibold'>Rating:</span>
                        <span className='text-sm font-bold'>{rating}</span>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <button 
                        onClick={() => handleMarkAsRead(expectedBook)}
                        className={`btn ${isAdded ? 'bg-green-500 text-white' : 'border-gray-400'}`}>
                            Mark as Read
                    </button>
                    <button onClick={() =>handleWishList(expectedBook)} className="btn bg-[#50B1C9] text-white">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;