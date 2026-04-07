const getReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem('storeBook');
    if(allReadList) return JSON.parse(allReadList)
    
    return []
}

const addReadListToLocalDB = (book) => {
    const allBooks = getReadListFromLocalDB();
    const isExist = allBooks.find(bk => bk.bookId == book.bookId)

    if(!isExist){
        allBooks.push(book);
        localStorage.setItem('storeBook',JSON.stringify(allBooks))
    }
}

const getWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList");
    if(allWishList) return JSON.parse(allWishList);

    return [];
}

const addWishList = (book) => {
    const allBooks = getWishListFromLocalDB();
    const isExist = allBooks.find(bk => bk.bookId === book.bookId);

    if(!isExist){
        allBooks.push(book);
        localStorage.setItem('wishList',JSON.stringify(allBooks))
    }
}

export {getReadListFromLocalDB,addReadListToLocalDB,getWishListFromLocalDB,addWishList}