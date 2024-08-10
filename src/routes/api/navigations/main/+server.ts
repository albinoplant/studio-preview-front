import type { NavigationRepositoryInterface } from '$lib/navigationRepositoryInterface';
import { serviceContainer } from '$lib/serviceContainer';
import { SECRET_NAVIGATION_ID } from "$env/static/private";
import { json, type RequestHandler } from '@sveltejs/kit';
const GET: RequestHandler = async () => {
    const repo: NavigationRepositoryInterface = serviceContainer.get('navigationRepository')
    const navigation = await repo.findItemsOfNavigationId(Number.parseInt(SECRET_NAVIGATION_ID))
	return json(navigation);
}
export { GET }