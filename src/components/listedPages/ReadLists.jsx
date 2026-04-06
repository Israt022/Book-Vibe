import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import { MdLocationOn } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

const ReadLists = () => {
    const {storeBook} = useContext(BookContext);
    console.log(storeBook);
    return (
        <div className='flex flex-col gap-5 my-15'>
            {
                storeBook.map(book => {
                    return(
                        <div className="border border-gray-300 rounded-xl p-6 flex flex-col lg:flex-row gap-6 items-center bg-base-100 shadow-sm">

                            {/* Image */}
                            <div className="bg-base-200 p-6 rounded-lg">
                                <img src={book.image} alt={book.bookName} className="w-28 h-40 object-cover" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-3">

                                <h2 className="text-xl font-bold">{book.bookName}</h2>
                                <p className="text-gray-500">By : {book.author}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap items-center gap-3">
                                <span className="font-semibold">Tag</span>
                                {book.tags.map((tag, index) => (
                                    <span
                                    key={index}
                                    className="badge bg-green-100 text-green-600 border-none"
                                    >
                                    #{tag}
                                    </span>
                                ))}

                                <span className="flex items-center gap-1 text-gray-500 ml-3">
                                    <MdLocationOn />
                                    Year of Publishing: {book.yearOfPublishing}
                                </span>
                                </div>

                                {/* Publisher and Pages */}
                                <div className="flex flex-wrap gap-5 text-gray-500 text-sm">

                                <span className="flex items-center gap-1">
                                    <FaUserFriends />
                                    Publisher: {book.publisher}
                                </span>

                                <span className="flex items-center gap-1">
                                    <HiOutlineDocumentText />
                                    Page {book.totalPages}
                                </span>
                                </div>

                                <hr className='text-gray-300'/>

                                {/* Bottom badges */}
                                <div className="flex flex-wrap gap-3 items-center">

                                <span className="badge bg-blue-100 text-blue-600 border-none">
                                    Category: {book.category}
                                </span>

                                <span className="badge bg-yellow-100 text-yellow-600 border-none">
                                    Rating: {book.rating}
                                </span>

                                <button className="btn bg-green-500 text-white btn-sm rounded-full">
                                    View Details
                                </button>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ReadLists;