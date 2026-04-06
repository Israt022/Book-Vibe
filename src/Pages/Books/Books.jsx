import React from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadLists from '../../components/listedPages/ReadLists';
import WishList from '../../components/listedPages/WishList';

const Books = () => {
    
    return (
        <div className='container mx-auto'>
            <div className='h-24 w-full bg-base-300 rounded-2xl flex items-center justify-center'>
                <h2 className='text-2xl font-bold'>Books</h2>
            </div>
            <details className='flex flex-col items-center my-5'>
                <summary className='bg-green-500 py-2 px-2.5 rounded-xl text-white'>Sort By</summary>
                <ul class="p-2 bg-base-200 w-40 z-1">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </details>
                
            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ReadLists/>
                </TabPanel>
                <TabPanel>
                    <WishList/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;