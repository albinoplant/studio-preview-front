import type { NavigationRepositoryInterface } from "./navigationRepositoryInterface";
import type StrapiClient from "./strapi/client";

export default class NavigationRestRepository implements NavigationRepositoryInterface {
    constructor (
        private readonly client: StrapiClient
    ) {
    }
    async findItemOfNavigationIdAndName(id: number, name: string): Promise<NavigationItemModel> {
        const response = await this.client.find<NavigationItemModel[]>(`navigation/render/${id}`, {path: name})
        return response[0] as unknown as Promise<NavigationItemModel>
    }
    async findItemsOfNavigationId(id: number): Promise<NavigationItemModel[]> {
        const response = await this.client.findOne<NavigationItemModel[]>("navigation/render", id)
        return response as unknown as Promise<NavigationItemModel[]>
    }
    async findAll(): Promise<BaseModel<NavigationModel>[]> {
        const response = await this.client.find<BaseModel<NavigationModel>[]>("navigation")
        return response as unknown as Promise<BaseModel<NavigationModel>[]>
    }
    
}