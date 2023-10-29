import styles from './LatestPosts.module.css';
import Link from "next/link";
import BlogPosts from "@/components/BlogPosts";
import {BlogPost} from "@/utils/helpers";

const LatestPosts = ({ posts }: { posts: BlogPost[] }) => {
    return (
        <section className={styles.latestPosts}>
            
            <BlogPosts posts={posts.slice(0, 6)} />
        </section>
    );
};

export default LatestPosts;