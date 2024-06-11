import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

// Your markdown folder for posts.
const markdownDirectory = path.join(process.cwd(), "./src/app/blog/contents");

// const files = fs.readdirSync(markdownDirectory);

export async function getPostData(filename: string) {
  const filePath = path.join(markdownDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    title: matterResult.data.title,
    publish_date: matterResult.data.publish_date,
    content: matterResult.content,
    teaser_description: matterResult.data?.teaser_description || "",
    teaser_image: matterResult.data?.teaser_image || "",
    ...matterResult.data,
  };
}
