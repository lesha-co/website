import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
}

export interface BlogPostPreview {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

export async function getAllPosts(): Promise<BlogPostPreview[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          title: matterResult.data.title,
          date: matterResult.data.date,
          category: matterResult.data.category,
          description: matterResult.data.description,
        };
      })
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      description: matterResult.data.description,
      content: contentHtml,
    };
  } catch (error) {
    return null;
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPostPreview[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const categories = [...new Set(allPosts.map((post) => post.category))];
  return categories.sort();
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}