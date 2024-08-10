import type StrapiClient from "./strapi/client";

export default class InfoRestRepository implements InfoRepositoryInterface {
    constructor (
        private readonly client: StrapiClient
    ) {
    }
    async findOne(): Promise<InfoModel> {
        const response = await this.client.find<StrapiResponse<BaseModel<InfoModel>>>("info")
        return response.data.attributes
    }
}