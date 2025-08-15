import React, { use } from 'react';

const categoryPromise = fetch('/categories.json')
    .then(res => res.json())
    // .then(data => data.data);

const Categories = () => {
    console.log(categoryPromise)
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Categories ({categories.length})</h2>
        </div>
    );
};

export default Categories;