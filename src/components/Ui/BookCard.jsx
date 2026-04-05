import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({book}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='bg-base-200 rounded-2xl m-5 '>
                <img
                src={book.image}
                alt={book.bookName} 
                className='h-[250px] rounded-2xl p-6 '/>
            </figure>
            <div className="card-body">
                <div className='flex gap-2 items-center'>
                    {book.tags.map((tag,ind) => <div className="badge bg-[#23BE0A]/10 text-[#23BE0A] font-semibold">{tag}</div>)}
                </div>
                <h2 className="card-title font-bold text-2xl">
                    {book.bookName} 
                </h2>
                <p className='font-semibold pb-5 text-gray-500'>
                    By : {book.author}
                </p>
                <div className="card-actions justify-between border-t border-dashed border-gray-300 py-5">
                    <div className="">{book.category}</div>
                    <div className="flex items-center gap-2">{book.rating} <FaRegStar /></div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;