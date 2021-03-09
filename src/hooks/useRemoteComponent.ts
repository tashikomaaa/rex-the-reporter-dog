import { useEffect, useState } from "react";
import createLoadRemoteModule from "@paciolan/remote-module-loader";

export interface UseRemoteComponentHook {
  (url: string): [boolean, Error, (...unknown) => JSX.Element];
}

export const createUseRemoteComponent = (
  args?: unknown
): UseRemoteComponentHook => {
  const loadRemoteModule = createLoadRemoteModule(args);

  const useRemoteComponent: UseRemoteComponentHook = url => {
    const [{ loading, err, component }, setState] = useState({
      loading: true,
      err: undefined,
      component: undefined
    });

    useEffect(() => {
      const update = setState;
      update({ loading: true, err: undefined, component: undefined });
      loadRemoteModule(url)
        .then(module =>
          update({ loading: false, err: undefined, component: module.default })
        )
        .catch(err => update({ loading: false, err, component: undefined }));

      return null;
    }, [url]);

    return [loading, err, component];
  };

  return useRemoteComponent;
};
