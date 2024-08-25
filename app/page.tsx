import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "./components/HeroSection";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
	const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      _createdAt
    }`;

	const data = await client.fetch(query);
	return data;
}

// Function to format the date
function formatDate(dateString: any) {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return new Date(dateString).toLocaleDateString(undefined, options);
}


export default async function Home() {
	const data: simpleBlogCard[] = await getData();

	return (
		<div>
			<Hero />

			<h1 className='text-2xl text-center font-semibold'>All Blogs</h1>
			<div className='grid grid-cols-1 md:grid-cols-3 mt-5 gap-5'>
				{data.map((post, idx) => (
					<Card key={idx} className='shadow-xl'>
						<Image
							src={urlFor(post.titleImage).url()}
							alt='image'
							width={500}
              height={400}
							className='w-full rounded-t-lg  object-cover'
						/>

						<CardContent className='mt-5'>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								Published on {formatDate(post._createdAt)}
							</p>
							<h3 className='text-lg line-clamp-2 font-bold'>{post.title}</h3>
							<p className='line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300'>
								{post.smallDescription}
							</p>
							<Button asChild className='w-full mt-7'>
								<Link href={`/blog/${post.currentSlug}`}>Read More</Link>
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
