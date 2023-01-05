import type { PageLoad } from './$types';

interface Metadata {
	title: string;
	repo: string;
}

interface Markdown {
	metadata: Metadata;
	default: string;
}

export const load = (async ({ params }) => {
	const slug = `projects/${params.slug}`;
	const project: Markdown = await import(`../${params.slug}.md`);
	const meta = project.metadata;
	const content = project.default;

	return {
		slug,
		meta,
		content,
	};
}) satisfies PageLoad;
