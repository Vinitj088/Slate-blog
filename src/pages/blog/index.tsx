import Head from 'next/head'
import styles from '@/styles/Main.module.css'
import BlogPosts from "@/components/BlogPosts";
import {BlogPost, getPosts} from "@/utils/helpers";

export const getStaticProps = () => {
    const posts = getPosts()
        .sort((a, b) =>
            Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt))
        );

    return {
        props: {
            posts,
        },
    };
};

const Blog = ({ posts }: { posts: BlogPost[] }) => {
    return (
        <>
            <Head>
                <title>Vinit J - Blog posts</title>
                <meta name="description" content="Vinit J - Blog posts" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <main className={styles.container}>
                <h1 className={styles.mainTitle}>Blog</h1>
                <BlogPosts posts={posts} />
            </main>
        </>
    )
}

export default Blog;