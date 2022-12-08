export type Props = {
  image: string
  title: string
  description: string
  url?: string
}

const Post: React.FC<Props> = ({ image, title, description, url }) => {
  return (
    <article>
      <img
        src={image}
        alt={title}
        className="object-cover w-full lg:h-64 bg-gray-400 dark:bg-slate-700 shadow-lg mb-6 rounded aspect-[16/9] lg:aspect-auto"
      />
      <h3 className="mb-2 text-xl font-bold leading-snug sm:text-2xl font-heading">
        <a
          href={url || 'javascript:;'}
          className="hover:text-primary-600 underline underline-offset-4 decoration-1 decoration-dotted transition ease-in duration-200"
        >
          {title}
        </a>
      </h3>
      <p className="text-gray-700 dark:text-gray-400 line-clamp-3">
        {description}
      </p>
    </article>
  )
}

export default Post
