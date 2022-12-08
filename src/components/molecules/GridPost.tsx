import Post, { Props as PostProps } from '~/components/atoms/Post'

type Props = {
  posts: PostProps[]
}

const GridPost: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4">
      {posts.map(el => (
        <Post key={el.title} {...el} />
      ))}
    </div>
  )
}

export default GridPost
