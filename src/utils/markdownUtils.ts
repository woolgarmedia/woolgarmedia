import matter from 'gray-matter';
import { marked } from 'marked';

export async function readMarkdownFile(filePath: string): Promise<any> {
  const response = await fetch(filePath);
  const fileContents = await response.text();
  const { data, content } = matter(fileContents);
  const htmlContent = marked(content);
  return { ...data, content: htmlContent };
}