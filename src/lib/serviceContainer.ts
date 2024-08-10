import PageRestRepository from "$lib/pageRestRepository";
import Strapi from "strapi-sdk-js";
import { SECRET_STRAPI_TOKEN, SECRET_STRAPI_URL } from "$env/static/private";
import NavigationRestRepository from "./navigationRestRepository";
import StrapiClient from "./strapi/client";

export class ServiceContainer {
    private services: Map<string,any>;
    constructor() {
      this.services = new Map();
    }
  
    register<T>(name: string, service: T): ServiceContainer {
      this.services.set(name, service);
      return this
    }
  
    get<T>(name: string): T {
      return this.services.get(name);
    }
  }
  
const serviceContainer = new ServiceContainer();
const strapiClientFetchBased = new StrapiClient(SECRET_STRAPI_URL+"/api", SECRET_STRAPI_TOKEN);
const strapi = new Strapi({
  axiosOptions: {
    headers: {"Authorization": "Bearer " + SECRET_STRAPI_TOKEN}
  },
});
serviceContainer
  .register('pageRepository', new PageRestRepository(strapi))
  .register('navigationRepository', new NavigationRestRepository(strapiClientFetchBased))

export {serviceContainer};