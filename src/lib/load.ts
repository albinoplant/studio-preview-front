import { error, type LoadEvent } from "@sveltejs/kit";
import type { PageRepositoryInterface } from "./pageRepositoryInterface";
import { serviceContainer } from "./serviceContainer";
import type { NavigationRepositoryInterface } from "./navigationRepositoryInterface";
import { SECRET_NAVIGATION_ID } from "$env/static/private";



export const loadTemplate = async ( event: LoadEvent ) => {
    const pageRepo: PageRepositoryInterface = serviceContainer.get('pageRepository')
    const infoRepo: InfoRepositoryInterface = serviceContainer.get('infoRepository')
    const navigationRepo: NavigationRepositoryInterface = serviceContainer.get('navigationRepository')

    try {
        const info = await infoRepo.findOne()
        const navigationItem = await navigationRepo.findItemOfNavigationIdAndName(Number.parseInt(SECRET_NAVIGATION_ID), event.url.pathname)
        const id = navigationItem.related.id
        const mainNavigationItems = await navigationRepo.findItemsOfNavigationId(Number.parseInt(SECRET_NAVIGATION_ID))
        const page = await pageRepo.findById(id)
        
        return {page: page, navigation: mainNavigationItems, info: info}
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