# @paciolan/eslint-config

Paciolan ESLint default settings with Prettier.

## Install

```bash
# Install @paciolan/eslint-config
npm install -D @paciolan/eslint-config

# Install Peer Dependencies
npm install -D eslint@5 prettier eslint-plugin-prettier eslint-config-prettier
```

Create an `.eslintrc.yml` file:

```yaml
extends: ["@paciolan"]
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

## Contributors

Joel Thoms ([@joelnet](https://twitter.com/joelnet))
