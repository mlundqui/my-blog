import { GetStaticProps, GetStaticPaths } from 'next';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

type PostProps = {
  title: string;
  date: string;
  content: string;
};

const BlogPost: React.FC<PostProps> = ({ title, date, content }) => {
  return (
    <article>
      <h1>{title}</h1>
      <time>{date}</time>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), 'app/posts');
  const postDirs = fs.readdirSync(postsDir);

  const paths = postDirs.map((dir) => ({
    params: { slug: dir }, // The folder name as the slug
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const postDir = path.join(process.cwd(), 'app/posts', slug as string);

  // Read metadata
  const metadataPath = path.join(postDir, 'metadata.json');
  const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

  // Read the content (Markdown to HTML)
  const contentPath = path.join(postDir, 'index.md');
  const content = fs.readFileSync(contentPath, 'utf8');
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: metadata.title,
      date: metadata.date,
      content: contentHtml,
    },
  };
};

export default BlogPost;
