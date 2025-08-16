import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news);
    return (
        <div className='space-y-8 shadow-sm p-6 rounded-lg bg-base-100'>
            <img className='w-full object-cover h-[350px]' src={news.image_url} alt="" />
            <h2 className='text-2xl font-semibold mt-4'>{news.title}</h2>
            <p className='mt-2'>{news.details}</p>

            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;