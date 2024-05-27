import Strapi from 'strapi-sdk-js'
import type { PageRepositoryInterface } from './pageRepositoryInterface';
export default class PageRestRepository implements PageRepositoryInterface {
    constructor (
        private readonly client: Strapi
    ) {
    }
    async findById(id: number): Promise<PagePropertiesInterface> {
        const response = await this.client.findOne<BaseModel<PageModel>>("pages", id)
        return {
            title: response.data.attributes.name
        }
    }
}