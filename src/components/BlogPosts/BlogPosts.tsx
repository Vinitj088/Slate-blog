import styles from "@/components/BlogPosts/BlogPosts.module.css";
import Link from "next/link";
import {BlogPost} from "@/utils/helpers";
import Image from "next/image";
import Slider from '../slider'; // Import the Slider component
import { useTheme } from 'next-themes'; // Import useTheme

const BlogPosts = ({ posts }: { posts: BlogPost[] }) => {
    const convertImage = (w: number, h: number) => `
        <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient id="g">
                    <stop stop-color="#333" offset="20%" />
                    <stop stop-color="#222" offset="50%" />
                    <stop stop-color="#333" offset="70%" />
                </linearGradient>
            </defs>
            <rect width="${w}" height="${h}" fill="#333" />
            <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
            <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
        </svg>
    `;

    const toBase64 = (str: string) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str);

    const getShortTitle = (title: string, maxAmount = 75) => {
        if (title.length > maxAmount) {
            return title.substring(0, maxAmount) + '...';
        }
        return title;
    };
    const getShortExcerpt = (Excerpt: string, maxAmount = 75) => {
        if (Excerpt.length > maxAmount) {
            return Excerpt.substring(0, maxAmount) + '...';
        }
        return Excerpt;
    };
    const [latestPost, ...restPosts] = posts;
    const { theme } = useTheme(); // Get the current theme
    const isDarkMode = theme === "dark";
    return (
        <div>
                {/* Upper div for showing the latest post  */}
                <div className={styles.block}>
                    <div className={`${styles.singlepostcard} ${isDarkMode ? styles.singlepostcard : styles.singlepostcardlight}`}>
                        <div className={styles.cardblogspecialleft}>
                            
                            <Link href={`/blog/${latestPost.slug}`} className={styles.blogPost}>
                                <div>
                                    {/* <p className={styles.latestpostdate}>{latestPost.data.publishedAt}</p> */}
                                    <p className={styles.latestpostdate}>{latestPost.data.authorUrl}</p>
                                    <div className={`${styles.postcardheader} flex items-center`}suppressHydrationWarning>
                                        <a className={`${styles.latestpostcardtagg} ${isDarkMode ? styles.latestpostcardtagg : styles.latestpostcardtagglight}`}>{latestPost.data.publishedAt}</a>
                                        <span className={styles.flex1}></span>
                                    </div>
                                    <div className={`${styles.postcardheader} flex items-center`}suppressHydrationWarning>
                                        <a className={`${styles.postcardtag} ${isDarkMode ? styles.postcardtag : styles.postcardtaglight}`}>{latestPost.data.category}</a>
                                        <span className={styles.flex1}></span>
                                    </div> 

                                    {/* <p className={styles.latestpostdate}>{latestPost.data.category}</p> */}
                                    <h3 className={`${styles.latestposttitle} ${styles.heading5}`}>{getShortTitle(latestPost.data.title)}</h3>
                                    <div className={styles.cardblogspecialexcerpt}>
                                        <p className={styles.para} >DeSo came to us with their mission to disrupt the landscape of social media. An ambition we were happy to bring to life in their new website as we strive to push...</p>

                                    </div>
                                    <div className={styles.textmedium}> <link href={`/blog/${latestPost.slug}`}/></div>
                                </div>
                            </Link> 
                        </div>
                        <div className={styles.cardblogspecialright}>
                            <Link href={`/blog/${latestPost.slug}`} className={styles.blogPost}>
                                        <Image
                                            src={latestPost.data.imageUrl}
                                            alt="Blog post title"
                                            placeholder="blur"
                                            blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(320, 190))}`}
                                            width={411}
                                            height={308}
                                            className={styles.cardblogspecialmedia}
                                        />
                            </Link>
                        </div>
                    </div>
                </div>

                <Slider />

                



                
                
                
                
                
                
                
                
                
                
                
                
                
                
                <div className={styles.blogPostsGrid}>
                    {restPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} className={styles.blogPost} key={post.slug}>
                        <div className={styles.a} suppressHydrationWarning>
                            <div className={styles.postcardfigure} suppressHydrationWarning>
                                <Image
                                    src={post.data.imageUrl}
                                    alt="Blog post title"
                                    placeholder="blur"
                                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                        convertImage(320, 190)
                                    )}`}
                                    width={320}
                                    height={190}
                                    className={styles.postcardfigureimg}
                                />
                            </div>
                        </div>

                        <div className={`${styles.postcardcontent} ${isDarkMode ? styles.postcardcontent : styles.postcardcontentlight}`} suppressHydrationWarning>
                            <div className={`${styles.postcardheader} flex items-center`}suppressHydrationWarning>
                                <a className={`${styles.postcardtag} ${isDarkMode ? styles.postcardtag : styles.postcardtaglight}`}>{post.data.category}</a>
                                <span className={styles.flex1}></span>
                            </div>
                            <h3 className={`${styles.postcardtitle} ${isDarkMode ? styles.postcardtitle : styles.postcardtitlelight}`}>{getShortTitle(post.data.title)}</h3>
                            <div className={`${styles.postcardexcerpt} ${styles.opacity}  `}>{getShortExcerpt(post.data.Excerpt)}</div>
                            <span className={styles.flex1}></span>
                            
                            <div className={`${styles.postinfo} ${styles.textacc} ${styles.postcardinfo}`}>
                                <p>{post.readingTime} min. read</p>
                            </div>

                        </div>
                        
                        {/* <div className={styles.blogPostInfo}>
                            <p>{post.data.publishedAt}</p>
                            <p>{post.data.authorUrl}</p>
                            <p>{post.data.category}</p>
                            <p>{post.readingTime} min. read</p>
                        </div> */}
                        {/* <h3>{getShortTitle(post.data.title)}</h3> */}
                    </Link>
                    ))}
                </div>
        </div>
  );
};

export default BlogPosts;
        