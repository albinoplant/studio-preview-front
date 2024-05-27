import { error, type LoadEvent } from "@sveltejs/kit";
import type { PageRepositoryInterface } from "./pageRepositoryInterface";
import { serviceContainer } from "./serviceContainer";


export const loadTemplate = async ( event: LoadEvent ) => {
    const repo: PageRepositoryInterface = serviceContainer.get('pageRepository')
    let id = 1
    if (!!event.params.page) {
        id = parseInt(event.params.page)
    }
    try {
        return await repo.findById(id)
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