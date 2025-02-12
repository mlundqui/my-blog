import { GetStaticProps, GetStaticPaths } from 'next';
import { getPostBySlug, getPostSlugs } from 'my-blog/app/lib.ts';
import Head from 'next/head';

type PostProps = {
  post: {
    slug: string;
    contentHtml: string;
  };
};

export default function Post({ post }: PostProps) {
  return (
    <div>
      <Head>
        <title>{post.slug} - My Blog</title>
      </Head>
      <h1>{post.slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}

// Generate static paths for blog posts
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug: slug.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Fetch data for each static page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);
  return {
    props: { post },
  };
};