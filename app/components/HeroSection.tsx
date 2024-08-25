'use client'
import { useState } from "react";

export default function Hero() {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = () => {
		if (searchQuery.trim()) {
			// Implement search logic here
			console.log(`Searching for: ${searchQuery}`);
		}
	};

	return (
		<section className='w-full max-w-4xl mx-auto px-4 py-16 text-center mb-5'>
			<h1 className='text-4xl font-bold mb-4'>
				Welcome to Mustafa Hussaini Blog
			</h1>
			<p className='text-lg text-gray-400 mb-8'>
				Sharing insights, experiences, and stories from my journey as a
				developer. Dive into the latest posts and stay inspired.
			</p>
			<div className='flex justify-center items-center'>
				<input
					type='text'
					placeholder='Search posts...'
					className='w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button
					onClick={handleSearch}
					className='px-4 py-2 bg-primary text-white font-semibold rounded-r-md hover:bg-primary-dark'
				>
					Search
				</button>
			</div>
		</section>
	);
}
