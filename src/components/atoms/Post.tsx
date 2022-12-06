type Props = {
  image: string
  title: string
  description: string
  url: string
}

const Post: React.FC<Props> = ({ image, title, description, url }) => {
  return (
    <article>
      <img
        src={image}
        alt={title}
        class="object-cover w-full lg:h-64 bg-gray-400 dark:bg-slate-700 shadow-lg mb-6 rounded aspect-[16/9] lg:aspect-auto"
      />
      <h3 class="mb-2 text-xl font-bold leading-snug sm:text-2xl font-heading">
        <a
          href={url}
          class="hover:text-primary-600 underline underline-offset-4 decoration-1 decoration-dotted transition ease-in duration-200"
        >
          {title}
        </a>
      </h3>
      <p class="text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </article>
  )
}

export default Post
