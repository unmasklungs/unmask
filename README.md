# Unmasking the Reality of Lung Cancer

This website is built using **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)** and is based on the **AstroWind** template. It is designed to be a resource for patients, caregivers, and advocates, providing information and support for those affected by lung cancer.

<br>

## Production Website (Stable Version):

📌 [https://unmaskinglungcancer.org/](https://unmaskinglungcancer.org/)

<br>

## Ways of Contribute:

For Technical Issue & Suggestions please use PR or Issue in GitHub.

For Content Contribution:
- src/content/post/stories  For patient stories
- src/content/info/public  For public information
- src/content/info/professionals  For professionals information

New Articals please use .mdx file and follow the format below:

```mdx
---
title: "Input title Here"
publishDate: 2025-08-02
author: "Author Name here"
image: "Use i.imgur.com for image Or cotact us"
tags: ['Tag1','Tag2',...] # Add tags here or leave empty
draft: false
---

Input content here

```

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

## Website Structure

Here is a simplified overview of the project's structure, focusing on the most relevant files and directories for development:

```
/
├── astro.config.ts         # Astro configuration file.
├── package.json            # Project dependencies and scripts.
├── tailwind.config.js      # Tailwind CSS configuration.
├── old/                    # Put post-migrated and previous files here.
├── public/                 # Static assets (images, fonts, robots.txt).
└── src/
    ├── assets/             # Project assets (styles, images, favicons).
        └── images/         # Project images.(logo, etc.)
    ├── components/         # Reusable Astro components (.astro).
    ├── content/            # Content collections (blog posts, info pages).
    │   ├── post/
    │   │   └── stories/    # For patient stories
    │   └── info/
    │       ├── public/       # For public information
    │       └── professionals/ # For professionals information
    ├── layouts/              # Defines the structure of pages.
    ├── pages/                # Website pages and API endpoints. 
    │   ├── index.astro       # The homepage.
    │   ├── about.astro       # The about page.
    │   ├── ask-a-nurse.astro # The ask a nurse page. (Under development)
    │   ├── contact.astro     # The contact page.
    │   └── maps.astro        # The page for the interactive map.
    ├── utils/                # Utility functions for the project.
    └── navigation.ts         # IMPORTANT: Defines the primary navigation links for the site header and footer.
```

## Acknowledgements

Diane Colton is the Founder of Unmasking the Reality of Lung Cancer. 

This website was created using the [AstroWind](https://github.com/onwidget/astrowind) template, which was initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

## License

This project is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.