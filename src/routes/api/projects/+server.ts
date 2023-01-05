import fetchProjects from '$lib/scripts/fetchProjects';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const projects = await fetchProjects();
	return json(projects);
};
