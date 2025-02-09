import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  summary: string
  author: Author
  slug: string
  content: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  summary,
  author,
  slug,
}: Props) => {
  return (
    <section className="hidden">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{summary}</p>
          <a
          href="{author.link}"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          <Avatar name={author.name}  
          
          />
        </a>
          
           
        </div>
      </div>
    </section>
  )
}

export default HeroPost
