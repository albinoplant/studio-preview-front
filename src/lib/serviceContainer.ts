import PageRestRepository from "$lib/pageRestRepository";
import Strapi from "strapi-sdk-js";
import { SECRET_STRAPI_TOKEN } from "$env/static/private";

export class ServiceContainer {
    private services: Map<string,any>;
    constructor() {
      this.services = new Map();
    }
  
    register<T>(name: string, service: T) {
      this.services.set(name, service);
    }
  
    get<T>(name: string): T {
      return this.services.get(name);
    }
  }
  
const serviceContainer = new ServiceContainer();

const strapi = new Strapi({axiosOptions:{headers: {"Authorization": "Bearer "+ SECRET_STRAPI_TOKEN}}});
serviceContainer.register('pageRepository', new PageRestRepository(strapi))

export {serviceContainer};