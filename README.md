# Viktor Kugay Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/01c06e55-e877-4054-8677-9a76221070bc/deploy-status)](https://app.netlify.com/sites/nervous-hamilton-710e37/deploys)
[![Build Status](https://app.travis-ci.com/ViktorKugay/frontend-blog.svg?branch=main)](https://app.travis-ci.com/ViktorKugay/frontend-blog)
[![Maintainability](https://api.codeclimate.com/v1/badges/96ddd21bbab2f0d7b852/maintainability)](https://codeclimate.com/github/ViktorKugay/frontend-blog/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/96ddd21bbab2f0d7b852/test_coverage)](https://codeclimate.com/github/ViktorKugay/frontend-blog/test_coverage)

## Description

Articles about Frontend development. The most insteresting cases, troubles and solutions by Viktor Kugay - Tinkoff Bank Software Development Engineer.

## Blog use

- **Next.js** + **React**

- **Google Firebase** store

- **TypeScript** with _strict_ mode

- **Netlify** deploy

## Entry Points

- **./posts** - Markdown posts

- **./scripts/build-posts-content.ts** - _posts.json_ builder

- **./src/pages** - Blog pages: MainPage, PostsPage

- **./src/services/firestore.api.ts** - FireStore API

- **./src/components** - UI React components

## Credits

- Nextjs

- React

- PostCSS

- TypeScript

- @material-ui/core

- Firebase

## Content build algorithm

1. Read **./posts**

2. Parse posts using **frontmatter**

3. Build HTML post content using **Showdown**

4. Save all posts to **./posts.json**

## Local development

```bash
yarn install

yarn build:posts

yarn dev
```
