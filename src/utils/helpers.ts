import path from 'path';
import matter from 'gray-matter';
import * as fs from "fs";

export interface BlogPost {
    data: { title: string; publishedAt: string; imageUrl: string; authorUrl: string; category: string; Excerpt: string;};
    content: string;
    readingTime: number;
    slug: string;
}

export const getPosts = (): BlogPost[] => {
    const dirFiles = fs.readdirSync(path.join(process.cwd(), 'src', 'pages', 'blog'), {
        withFileTypes: true,
    });

    const posts = dirFiles
        .map((file) => {
            if (!file.name.endsWith('.mdx')) return;

            const fileContent = fs.readFileSync(
                path.join(process.cwd(), 'src', 'pages', 'blog', file.name),
                'utf-8'
            );
            const { data, content } = matter(fileContent);

            const slug = file.name.replace(/.mdx$/, '');
            return {
                data,
                content,
                slug,
                readingTime: getReadTimeApproxMinutes(content),
            };
        })
        .filter((post) => post) as BlogPost[];

    return posts;
};

const isWord = (str: string) => {
    let alphaNumericFound = false
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)
        if ((code > 47 && code < 58) || // numeric (0-9)
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)) { // lower alpha (a-z)
            alphaNumericFound = true
            return alphaNumericFound
        }
    }
    return alphaNumericFound
}

const wordCounter = (input: string): number => {
    const text = input.split(/\s+/)
    let wordCount = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && isWord(text[i])) {
            wordCount++
        }
    }
    return wordCount
}

export const getReadTimeApproxMinutes = (input: string): number => {
    const wordsPerMinute = 225;
    return Math.ceil(wordCounter(input) / wordsPerMinute);
}