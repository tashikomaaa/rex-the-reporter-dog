# rex-the-reporter-dog

![alt text](https://github.com/tashikomaaa/rex-the-reporter-dog/blob/main/src/media/logo.png)

# Config

first off all you need to create a file `remote-component.config.js`inside your `src/`folder

```js
/*eslint-disable*/
module.exports = {
  resolve: {
    react: require("react"),
  },
};
```

next create a file `RemoteComponent.js` inside your `src/`folder

```js
/*eslint-disable*/
import { createRemoteComponent, createRequires } from "rex-the-reporter-dog";
import { resolve } from "./remote-component.config";
const requires = createRequires(resolve);

export const RemoteComponent = createRemoteComponent({ requires });
```

## Use Rex for get your components

Now you can use Rex for going to search your components and give it to you !

The proccess is simple:

- import the RemoteComponent created before

```js
import { RemoteComponent } from "../../RemoteComponent";
```

- then add it to you jsx return:

```js
<RemoteComponent url={uri_of_your_bundle.js} />
```

And "Voilà" !
