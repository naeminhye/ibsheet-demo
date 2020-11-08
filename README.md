<h1 align="center">
  <br>
  <a href=""><img src="http://www.metanet.co.kr/img/common/logo02_201810.png" alt="AMS" width="100"></a>
</h1>
<h3 align="center"></h3>

[![React](https://img.shields.io/badge/react-16.8.6-lightgrey.svg)](https://github.com/facebook/react)

## 📦 Table of Contents

1.  [Rules](#📜-rules)
2.  [Requirements](#💼-requirements)
3.  [Installation](#💾-installation)
4.  [Running the Project](#▶️-running-the-project)
5.  [Project Structure](#✏️-project-structure)
6.  [Documentation](#📖-documentation)
7.  [Routing](#🔍-routing)
8.  [Development Tools](#🔨-development-tools)
9.  [Building for Production](#🚚-building-for-production)
10. [Deployment](#✅-deployment)
11. [Troubleshooting & FAQ](#💬-troubleshooting-&-faq)
12. [License](#📘-license)

## 📜 Rules

1. Use functional only
2. Use *styled-components* when you want to styles for any component
3. Take advantage of available components
4. Write nice and clean code, line breaks after each declaration and each component
5. Make good use of notes (comments)
6. Declare routers and variables in the right place according to the structure
7. Handle eslint errors & delete unused code before committing
8. Avoid in-line styles and in-line JavaScript whenever possible

## 💼 Requirements

- node `^12.13.0`
- yarn `^1.19.0`

## 💾 Installation

After confirming that your environment meets the above [requirements](#💼-requirements), you can start this project by following the steps mentioned below:

```bash
$ git clone <your-repo-link>
$ cd <your-repo>
```

When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn install # Install project dependencies (or `npm install`)

```

## ▶️ Running the Project

Install the dependencies and devDependencies and start the server.

```bash
yarn

```

```bash
# For development environment

$ yarn start # Build the client bundles and start the webpack dev server (or `npm run start`)

```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

| `yarn <script>` | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| `yarn start`    | Starts the app at `localhost:3000` by default                        |
| `yarn build`    | Builds the app in production mode and serves files from build folder |
| `yarn test`     | Runs all your jest and enzyme test's                                 |

## ✏️ Project Structure

```
├── public                            # Public folder
│   ├── favicon.ico # The icon that is used as logo
│   ├── index.html # the source HTML file
│   ├── manifest.json # Used to specify basic metadata about your extension
│   └── ...
├── src                                   # Application source code
│   ├── api                              # All api endpoints and api related logic goes here
│   ├── components                        # Global Reusable Components
│   │   ├── <ComponentName>               # Component Name Folder and every component will have a index.js and css file
│   │   │   ├── index.tsx                  # Main component code
│   │   │   ├── styles.ts           # styled-component
│   │   │   └── ...
│   │   └── ...
│   ├── constants                         # Folder for constants/config files
│   ├── features                        # Smart Components (aka Containers)
│   │   ├── <ContainerName>
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── ...
│   │   └── ...
│   ├── hooks
│   ├── pages
│   ├── static
│   │   ├── images
│   │   └── ...
│   ├── store                             # A folder containing all Redux stores
│   ├── styles                            # A folder for styling files
│   │   ├── mixins.scss                   # A Scss file defining styles that can be re-used throughout
│   │   └── ...
│   ├── tests                             # A folder for testing purposes
│   ├── translations                      # A folder for JSON translation files
│   │   ├── <lang>.json
│   │   └── ...
│   ├── utils                             # A folder for Utility methods and Helpers
│   └── ...
├── .gitignore                            # The name says it all
├── .eslintrc.js                          # This file maintains all end points of the back end routes
├── .prettierrc                           # Prettier config
├── package.json                          # All npm dependencies can be found here
├── README.md                             # Readme file for the whole app
├── yarn.lock                             # Yarn lock file for locking the dependency versions
└── ...
```

## 📖 Documentation

### ▶️ Running the [Storybook](https://storybook.js.org/)

After installing the project dependencies in [installation](#💾-installation) step, you can start Storybook at `localhost:9009` by default with:

```bash

$ yarn storybook # or `npm run storybook`

```

## 🔍 Routing

We use `react-router` [route definitions](https://github.com/ReactTraining/react-router)
See the [project structure](#✏️-project-structure) section for more information.

## 🔨 Development Tools

### [Prettier](https://prettier.io/)

- We use `prettier` for code formatting. Check out the [**Prettier Documentation**](https://www.npmjs.com/package/prettier) for further uses.

- Make sure you are using vscode and your vscode user_settings has the following code:

```bash
{
  "editor.fontSize": 12,
  "editor.tabSize": 2,
  "files.eol": "\n",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.singleQuote": true,
}
```

### [ESLint](https://eslint.org/)

- We use `ESlint` for identifying and reporting on patterns found in ECMAScript/JavaScript code. Check out the [**ESLint Documentation**](https://www.npmjs.com/package/eslint) for further uses.

- See some rules already configured in `.eslintrc`.

## 🚚 Building for Production

Clean up the `/build` folder with:

```bash

yarn prebuild # (or `npm run prebuild`)

```

To build the project, run:

```bash

yarn build # (or `npm run build`)

```

## ✅ Deployment

- Deployment will always happen from the `production` branch on production.
- Any production related environment variables need to be configured on env/properties.env.Take a copy of sample and edit values for prod environment
- yarn build will built the production build

## 💬 Troubleshooting & FAQ


## 📘 License

<!-- Update License here if available -->
