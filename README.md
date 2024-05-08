[![Netlify Status](https://api.netlify.com/api/v1/badges/712ebefe-9dfa-4762-b141-a36dbe9a0cbb/deploy-status)](https://app.netlify.com/sites/loquacious-haupia-84590d/deploys)

# Running the project

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

# Building the project

1. Run `npm run build`

> The project is automatically deployed to Netlify on every push to the `main` branch.

# Live demo

[https://loquacious-haupia-84590d.netlify.app/](https://loquacious-haupia-84590d.netlify.app/)

# What is this?

This is a simple React application that fetches data from the [Rick And Morty API](https://rickandmortyapi.com/) API using GraphQL.

On the initial page you will find a search bar and a list of top 10 episodes with the highest count of unique characters' origin dimensions.

When you search for a character, the application will display a list of results found based on the searchTerm. This list will display the character's name, image, and a link to the characters' detail page.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
