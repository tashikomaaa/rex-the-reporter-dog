# @paciolan/eslint-config-react

Paciolan ESLint default settings with Prettier for React applications.

## Install

```bash
# Install @paciolan/eslint-config-react
npm install -D @paciolan/eslint-config-react

# Install Peer Dependencies
npm install -D babel-eslint eslint@5 prettier \
  eslint-plugin-prettier eslint-plugin-babel \
  eslint-config-prettier eslint-plugin-react
```

Create an `.eslintrc.yml` file:

```yaml
extends: ["@paciolan/react"]
```

Add a `lint` script in `package.json`:

```javascript
  {
    "scripts": {
      "lint": "eslint ."
    }
  }
```

## Rules

- ["prettier/prettier": "error"](https://github.com/prettier/eslint-config-prettier)
- ["no-unused-vars": "error"](https://eslint.org/docs/rules/no-unused-vars)
- ["no-undef": "error"](https://eslint.org/docs/rules/no-undef)
- ["max-lines-per-function": ["warn", 20]](https://eslint.org/docs/rules/max-lines-per-function)
- ["react/prop-types": "warn"](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md)

## Contributors

Joel Thoms ([@joelnet](https://twitter.com/joelnet))
