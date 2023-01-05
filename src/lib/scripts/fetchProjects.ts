export default async () => {
	const projectFiles = Object.entries(
		import.meta.glob<Record<string, object>>('/src/routes/projects/*.md')
	);

	return await Promise.all(
		projectFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.slice(12, -3);
			return {
				meta: metadata,
				slug: slug,
			};
		})
	);
};
