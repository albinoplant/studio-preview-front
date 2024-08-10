import Strapi from 'strapi-sdk-js'
import type { PageRepositoryInterface } from './pageRepositoryInterface';
export default class PageRestRepository implements PageRepositoryInterface {
    constructor (
        private readonly client: Strapi
    ) {
    }
    async findById(id: number): Promise<PagePropertiesInterface> {
        const response = await this.client.findOne<BaseModel<PageModel>>("pages", id, {populate: "*"})

        return {
            ...response.data.attributes,
            id: response.data.id,
            title: response.data.attributes.name
        } as unknown as PagePropertiesInterface
    }
}