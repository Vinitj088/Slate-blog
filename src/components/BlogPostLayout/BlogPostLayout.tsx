import styles from '@/styles/Main.module.css';
import { renderToString } from "react-dom/server";
import {ReactElement} from "react";
import Head from "next/head";
import Image from "next/image";
import {useHeadsObserver} from "@/hooks/useHeadsObserver";
import {useRouter} from "next/router";
import * as process from "process";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import {TwitterLogo} from "phosphor-react";

interface Props {
    title: string;
    description?: string;
    publishedAt: string;
    keywords?: string;
    imageUrl?: StaticImageData;
    hideTableOfContents?: boolean;
    hideShareButton?: boolean;
    children: ReactElement;
}

const BlogPostLayout = ({
                            title = "Slate - Blog",
                            description = "Slate - Blog",
                            publishedAt,
                            keywords = "blog, Slate, reactjs, nextjs, typescript, tutorial",
                            imageUrl,
                            hideTableOfContents = false,
                            hideShareButton = false,
                            children
}: Props) => {
    const contentString = renderToString(children);
    const { activeId } = useHeadsObserver();
    const { pathname } = useRouter();

    const getHeadings = (source: string) => {
        const regex = /<h[2-3]>(.*?)<\/h[2-3]>/g;
        if (source.match(regex)) {
            return source.match(regex)?.map((heading) => {
                const isH2 = heading.includes("<h2>");
                const text = heading.replace(isH2 ? "<h2>" : "<h3>", "").replace(isH2 ? "</h2>" : "</h3>", "");
                const id = text.replace(/ /g, "_").toLowerCase();

                return {
                    text: text,
                    id,
                    link: `#${id}`,
                };
            });
        }

        return [];
    };
    const headings = getHeadings(contentString);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="image" content={`${process.env.NEXT_PUBLIC_URL}${imageUrl?.src}`} />
                <meta name="creator" content="Slate" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_URL}${pathname}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}${imageUrl?.src}`} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_URL}${imageUrl?.src}`} />
                <meta name="twitter:url" content={`${process.env.NEXT_PUBLIC_URL}${pathname}`} />
                <meta name="twitter:creator" content="@Slate" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <main className={styles.container}>
                <div className={styles.postTitleContainer}>
                    <div className={styles.underTitle}>
                        <div className={`${styles.postcardheader1} flex items-center`}suppressHydrationWarning>
                            <a className={styles.latestpostcardtagg1}>{publishedAt}</a>
                            <span className={styles.flex1}></span>
                        </div>
                        {/* <p>{publishedAt}</p> */}
                        <h1 className={styles.postTitle}>{title}</h1>
                    </div>
                    
                    <p className={styles.postexcerpt}>{description}</p>
                    {/* <div className={styles.underTitle}> */}
                        {/* <p>{publishedAt}</p>
                        <p>{keywords}</p> */}
                    
                </div> 
                {!!imageUrl ?
                    <Image
                        src={imageUrl}
                        placeholder="blur"
                        blurDataURL={imageUrl.blurDataURL}
                        width={1024}
                        height={521}
                        alt={title}
                        className={styles.postImage}
                    /> : null}
                <div className={!!headings && headings.length > 0 && !hideTableOfContents ? styles.blogContentContainer : undefined}>
                    {!!headings && headings.length > 0 && !hideTableOfContents ? (
                        <aside className={styles.blogAside}>
                            <div className={styles.blogTableOfContents}>
                                <h2>Table of contents</h2>
                                <ol>
                                    {headings.map((heading) => (
                                        <li key={heading.text}>
                                            <a href={heading.link} className={activeId === heading.id ? styles.headingActive : undefined}>{heading.text}</a>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </aside>
                    ) : null}
                    <div className={styles.blogContent}>
                        {children}
                        {!hideShareButton ?
                            <div className={styles.shareContainer}>
                                <Link
                                    href={`https://twitter.com/intent/tweet/?text=${title}&via=dawid_abram&url=${process.env.NEXT_PUBLIC_URL}${pathname}`}
                                    className={styles.shareOnTwitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <TwitterLogo weight="fill" size={20} />
                                    <span>Share on Twitter</span>
                                </Link>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default BlogPostLayout;