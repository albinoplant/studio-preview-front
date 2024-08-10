import { error, type LoadEvent } from "@sveltejs/kit";
import type { PageRepositoryInterface } from "./pageRepositoryInterface";
import { serviceContainer } from "./serviceContainer";
import type { NavigationRepositoryInterface } from "./navigationRepositoryInterface";
import { SECRET_NAVIGATION_ID } from "$env/static/private";



export const loadTemplate = async ( event: LoadEvent ) => {
    const pageRepo: PageRepositoryInterface = serviceContainer.get('pageRepository')
    const navigationRepo: NavigationRepositoryInterface = serviceContainer.get('navigationRepository')
    let id = 1
    if (!!event.params.page) {
        const navigationItem = await navigationRepo.findItemOfNavigationIdAndName(Number.parseInt(SECRET_NAVIGATION_ID), event.url.pathname)
        id = navigationItem.related.id
    }
    try {
        return await pageRepo.findById(id)
    } catch (e) {
        console.error(e)
        error(500, 'Something went wrong')
    }
}

export const loadHome = async ( event: LoadEvent ) => {
    try {
        const repo: PageRepositoryInterface = serviceContainer.get('pageRepository')
        const homeId = 1
        return await repo.findById(homeId)
    } catch (e) {
        console.error(e)
        error(500, 'Something went wrong')
    }
}