// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import type { LoadEvent } from "@sveltejs/kit";

export const prerender = true;
export const load = ( event: LoadEvent ) => {
    return {
        slug: event.params.page
    }
}