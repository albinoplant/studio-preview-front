export interface NavigationRepositoryInterface {
    findAll(): Promise<BaseModel<NavigationModel>[]>
    findItemsOfNavigationId(id: number): Promise<NavigationItemModel[]>
    findItemOfNavigationIdAndName(id: number, name: string): Promise<NavigationItemModel>
}