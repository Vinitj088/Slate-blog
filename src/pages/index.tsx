import Head from 'next/head'
import styles from '@/styles/Main.module.css'
import WelcomeHeader from "@/components/WelcomeHeader";
import LatestPosts from "@/components/LatestPosts";
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

const Home = ({ posts }: { posts: BlogPost[] }) => {
    return (
        <>
            <Head>
                <title>Slate</title>
                <meta name="description" content="Slate  - Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.container}>
                <WelcomeHeader />
                <LatestPosts posts={posts} />
            </main>
        </>
    )
}

export default Home;