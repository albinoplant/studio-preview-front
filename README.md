# Frontend for Strapi CMS backend
Working title of the project is **studio-preview**. Open source site creator based on headless CMS Strapi backend. JavaScript framework used is [Svelte](https://svelte.dev/) due to its performance.

[studio-preview repo](https://github.com/albinoplant/studio-preview)

## Example
As an example we have a preconfigured basic leaflet page:
![image](https://albinoplant.github.io/images/studio-preview/about-me-create-todo.png)
We want to add another page with personal info, a classic about-me page.

You go to backend admin panel and create new Page. This makes it available on your frontend.
![image](https://albinoplant.github.io/images/studio-preview/about-me-create.png)
Then you can add it to navigation so it appears on the top app bar.
![image](https://albinoplant.github.io/images/studio-preview/about-me-create-sample.png)

## Future
I want MVP to have all components necessary to build a basic leaflet page. For now we only have one simple Hero component from the example. Coming soon will be a section for placing text and photos as well as a classic carousel.

#### Next:
-  customizing the layout and theme that will leverage the Tailwind/DaisyUI configuration
- running live playground page

## Run
To run the project you need to have [studio-preview](https://github.com/albinoplant/studio-preview) up and running

Then:

- `cp .env.example .env`

- `npm run develop`
