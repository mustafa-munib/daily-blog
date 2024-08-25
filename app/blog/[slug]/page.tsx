import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// Revalidate every 10 seconds
export const revalidate = 10;

async function getData(slug: string) {
	const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage,
      _createdAt
    }[0]`;

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




export default async function BlogArticle({
	params,
}: {
	params: { slug: string };
}) {
	const data: fullBlog = await getData(params.slug);

	return (
		<div className='mt-8 flex flex-col items-center justify-center'>
			<h1>
				<span className='block text-base text-center text-primary font-semibold tracking-wide uppercase'>
					Mustafa Hussaini - Blog
				</span>
				<span className='mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl'>
					{data.title}
				</span>
				<p className='text-center text-sm text-gray-500 dark:text-gray-400 mt-2'>
					Published on {formatDate(data._createdAt)}
				</p>
			</h1>

			<Image
				src={urlFor(data.titleImage).url()}
				width={800}
				height={800}
				alt='Title Image'
				priority
				className='rounded-lg mt-8 border-2  shadow-lg'
			/>

			<div className='mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary'>
				<PortableText value={data.content} />
			</div>
		</div>
	);
}
