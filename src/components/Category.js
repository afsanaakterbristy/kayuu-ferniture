import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Categoty = () => {

    const category = useLoaderData()
    console.log(category);
    return (
        <div className='flex'>
         {
                category.map(product =>
                <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
                                <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{product.sellername}</Link>
			<span className="text-xs dark:text-gray-400">4 hours ago</span>
		</div>
	</div>
	<div>
		<img src={product.picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{product.name}</h2>
		<p className="text-sm dark:text-gray-400">{product.location}</p>
		<p className="text-sm dark:text-gray-400">{product.originalprice}</p>
		<p className="text-sm dark:text-gray-400">{product.location}</p>
		<p className="text-sm dark:text-gray-400">{product.codition}</p>
	</div>
	
</div>
                    )
         }   
        </div>
    );
};

export default Categoty;