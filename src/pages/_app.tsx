import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {MDXProvider} from "@mdx-js/react";
import {AnchorHTMLAttributes, ClassAttributes, HTMLAttributes, OlHTMLAttributes} from "react";
import mdxComponentsStyles from "@/styles/MdxComponents.module.css";
import {Heading2} from "@/components/MDX/Header2";
import {Heading3} from "@/components/MDX/Header3";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

const components = {
    h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} className={mdxComponentsStyles.h1}/>,
    h2: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <Heading2 {...props} className={mdxComponentsStyles.h2}/>,
    h3: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <Heading3 {...props} className={mdxComponentsStyles.h3}/>,
    p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => <p {...props} className={mdxComponentsStyles.text}/>,
    a: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} target="_blank" rel="noreferrer noopener" className={mdxComponentsStyles.a}/>,
    ol: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLOListElement> & OlHTMLAttributes<HTMLOListElement>) => <ol {...props} className={mdxComponentsStyles.ol} />,
    ul: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLUListElement>) => <ul {...props} className={mdxComponentsStyles.ul} />,
    img: (props: any) => <Image {...props} loading="lazy" alt="Description of the image" fill />,
    
};

export default function App({Component, pageProps}: AppProps) {
    return (
        <MDXProvider components={components}>
            <ThemeProvider>
                <SiteHeader />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </MDXProvider>
    );
};