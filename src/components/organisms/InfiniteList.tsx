import GridPost from "~/components/molecules/GridPost"
import type { Props as PostProps } from '~/components/atoms/Post'
import { useEffect, useRef, useState } from "react"

type Props = {
  data: PostProps[]
}

const pageSize = 8

const InfiniteList: React.FC<Props> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [posts, setPosts] = useState<PostProps[]>([])
  const [page, setPage] = useState(0)
  const [complete, setComplete] = useState(false)

  const loadMore =() => {
    const start = page * pageSize
    const end = start + pageSize
    const _posts = data.slice(start, end)
    if (_posts.length === 0) {
      setComplete(true)
      return
    }
    setPosts([...posts, ..._posts])
  }

  const handleScroll = () => {
    if (!ref.current) return
    if (complete) return
    const { bottom } = ref.current.getBoundingClientRect()

    if (bottom <= window.innerHeight) {
      setPage(el => el + 1)
    }
  }

  useEffect(() => {
    loadMore()
  }, [page])

  useEffect(() => {
    loadMore()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={ref}>
      <GridPost posts={posts} />
    </div>
  )
}

export default InfiniteList
