import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {
    const [storeBook,setStoreBook] = useState([]);
    const [wishList,setWishList] = useState([]);
    const [isAdded,setIsAdded] = useState(false);

    const handleMarkAsRead = (currentBook) => {
        // console.log(currentBook);
        const findBook = storeBook.find(book => book.bookId == currentBook.bookId);
        if(findBook){
            toast.error('This book already added to Mark as Read');
            return;
        }
        setStoreBook([...storeBook,currentBook]);
        setIsAdded(true)
        toast.success(`${currentBook.bookName} is added to Read list successfully`)
    }

    const handleWishList = (currentBook) => {
        // console.log(currentBook);
        const findBookReadList = storeBook.find(book => book.bookId == currentBook.bookId);

        if(findBookReadList){
            toast.error('This book already added to Mark as Read');
            return;
        }

        const findBook = wishList.find(book => book.bookId == currentBook.bookId);
        if(findBook){
            toast.error('This book already added to Wish list');
            return;
        }
        setWishList([...wishList,currentBook]);
        toast.success(`${currentBook.bookName} is added to Wish List successfully`)
    }
    const data = {
        handleMarkAsRead,
        isAdded,
        storeBook,
        setStoreBook,
        handleWishList,
        wishList,
        setWishList
    }
    return <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
};

export default BookProvider;