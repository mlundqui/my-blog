import Link from 'next/link';
import fs from 'fs';
import path from 'path';

type Post = {
  slug: string;
  title: string;
  date: string;
};

const BlogList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <time>{post.date}</time>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const postsDir = path.join(process.cwd(), 'app/posts');
  const postDirs = fs.readdirSync(postsDir);

  const posts = postDirs.map((dir) => {
    const metadataPath = path.join(postsDir, dir, 'metadata.json');
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

    return {
      slug: dir,
      title: metadata.title,
      date: metadata.date,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default BlogList;
