export interface PageRepositoryInterface {
    findById(id: number): Promise<PagePropertiesInterface>
}