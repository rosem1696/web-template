# Web App Template

This is a project template to fork off into a new web application. It defines a project skeleton for a simple monorepo containing a backend, a frontend, and a shared library, and the a base configuration for tooling (IDE, build, formatting, etc.). This version does not provide configuration for any frontend framework or library. See branches in this repository for more specific configurations.

## Tooling

- Yarn - Version Manager
  - Using plug and play, zero installs, and workspaces features
- Webpack - Build tool / Bundler
  - Config file written in ts, which requires ts-node and ts-paths
- VS Code - IDE
- Prettier - Code Formatting

### Note

Yarn provides special SDK for VS Code to use the correct typescript, prettier, and eslint versions. This may need to be re-run on clone.

```cmd
yarn dlx @yarnpkg/sdks vscode
```

## Tooling Blocked Enhancements

The following are known improvements that may be possible on future tool updates.

### Package Exports and Typescript

Typescript doesn't have support yet for the exports field in package.json. When support for this is added, the shared library can be configured to break up relevant pieces and create more descriptive and deliberate imports.

See [https://github.com/microsoft/TypeScript/issues/35290]

### ts-node and ESM

ts-node does not support ESM import syntax. It is needed for writing webpack config in typescript
