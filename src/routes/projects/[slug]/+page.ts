import type { PageLoad } from './$types';

interface Metadata {
  title: string;
  url: string | null;
}

interface Markdown {
  metadata: Metadata;
  default: string;
}

export const load = (async ({ params }) => {
  const slug = `projects/${params.slug}`;
  const project: Markdown = await import(`../${params.slug}.md`);
  const meta = {
    title: project.metadata.title,
    url: project.metadata.url ? new URL(project.metadata.url) : null,
  };
  const content = project.default;

  return {
    slug,
    meta,
    content,
  };
}) satisfies PageLoad;
