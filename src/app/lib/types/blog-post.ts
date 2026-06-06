export type BlogPostPageProps = {
  params: Promise<{ post: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};
