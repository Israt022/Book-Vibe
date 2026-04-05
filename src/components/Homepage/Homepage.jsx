import React from 'react';
import hero from '../../assets/hero-bnr.png';

const Homepage = () => {
    return (
        <div className="hero bg-base-200 min-h-[554px] container mx-auto rounded-xl m-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={hero}
                className="max-w-sm rounded-lg"
                />
                <div>
                <h1 className="text-5xl font-bold">
                    Books to freshen up <br /> your bookshelf
                </h1>
                <button className="btn bg-green-500 mt-10 text-white font-semibold">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;