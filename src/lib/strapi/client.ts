export default class StrapiClient {
    private baseUrl: string;
    private token: string;

    constructor(baseUrl: string, token: string) {
        this.baseUrl = baseUrl;
        this.token = token;
    }

    private async request(endpoint: string, options: RequestInit = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const response = await fetch(url, {
            headers: {
                "Authorization": "Bearer " + this.token,
                'Content-Type': 'application/json',
                ...(options.headers || {}),
            },
            ...options,
        });
        if (!response.ok) {
            const jsonResponse = await response.json();
            throw new Error(JSON.stringify(jsonResponse.error) || 'An error occurred while fetching data.');
        }

        return response.json();
    }

    public findOne<T>(resource: string, id: number | string): Promise<T> {
        return this.request(`/${resource}/${id}`);
    }

    public find<T>(resource: string, queryParams: Record<string, any> = {}): Promise<T> {
        const query = new URLSearchParams(queryParams).toString();
        return this.request(`/${resource}?${query}`);
    }

    public create(resource: string, data: Record<string, any>) {
        return this.request(`/${resource}`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    public update(resource: string, id: number | string, data: Record<string, any>) {
        return this.request(`/${resource}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    public delete(resource: string, id: number | string) {
        return this.request(`/${resource}/${id}`, {
            method: 'DELETE',
        });
    }
}