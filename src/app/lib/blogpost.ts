import fs from "fs";
import matter from "gray-matter";
import path from "path";

const markdownDirectory = path.join(process.cwd(), "./src/content/blog");

export function listPostSlugs(): string[] {
  if (!fs.existsSync(markdownDirectory)) return [];
  return fs
    .readdirSync(markdownDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export interface PostMeta {
  slug: string;
  title: string;
  publish_date: string;
  teaser_description?: string;
  teaser_image?: string;
}

export function getAllPostsMeta(): PostMeta[] {
  return listPostSlugs()
    .map((slug) => {
      const filePath = path.join(markdownDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const matterResult = matter(fileContents);
      return {
        slug,
        title: matterResult.data.title as string,
        publish_date: (matterResult.data.publish_date as string) || "",
        teaser_description:
          (matterResult.data.teaser_description as string) || "",
        teaser_image: matterResult.data.teaser_image as string | undefined,
      };
    })
    .sort((a, b) => {
      try {
        return (
          new Date(b.publish_date).getTime() -
          new Date(a.publish_date).getTime()
        );
      } catch {
        return 0;
      }
    });
}

export async function getPostData(filename: string) {
  const filePath = path.join(markdownDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);

  return {
    title: matterResult.data.title,
    publish_date: matterResult.data.publish_date,
    content: matterResult.content,
    teaser_description: matterResult.data?.teaser_description || "",
    teaser_image: matterResult.data?.teaser_image || "",
    ...matterResult.data,
  };
}
