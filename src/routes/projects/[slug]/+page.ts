import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const project = await import(`../${params.slug}.md`);
	const { title } = project.metadata;
	const content = project.default;

	return {
		title,
		content
	};
}) satisfies PageLoad;
