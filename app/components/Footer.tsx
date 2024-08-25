import Link from "next/link";

export default function Footer() {
	return (
		<footer className='w-full relative flex flex-col items-center justify-center max-w-2xl mx-auto px-4 py-5 border-t mt-10'>
			<p className='text-sm'>
				© {new Date().getFullYear()} Mustafa Hussaini. All rights reserved.
			</p>
			<div className='flex space-x-4 mt-3'>
				<Link
					href='https://github.com/mustafa-munib'
					className='text-sm hover:underline'
				>
					Github
				</Link>
				<Link
					href='https://www.linkedin.com/in/mustafa-hussaini%0A%F0%9F%91%8B-b39a141a7/'
					className='text-sm hover:underline'
				>
					LinkedIn
				</Link>
			</div>
		</footer>
	);
}
