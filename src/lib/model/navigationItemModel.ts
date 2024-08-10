interface NavigationItemModel {
    order: number;
    id: number;
    title: string;
    path: string;
    externalPath: string | null;
    uiRouterKey: string;
    menuAttached: boolean;
    collapsed: boolean;
    additionalFields: Record<string, any>;
    sitemap_exclude: boolean;
    parent: NavigationItemModel | null;
    related: BaseModel<{}>
}