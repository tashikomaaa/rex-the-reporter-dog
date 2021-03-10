/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { createUseRemoteComponent } from "./hooks/useRemoteComponent";

export interface RenderFunctionProperties {
  err: Error;
  Component: (...unknown: any[]) => JSX.Element;
}

export interface RenderFunction {
  (render: RenderFunctionProperties): JSX.Element;
}

export interface RemoteComponentOptions {
  url: string;
  fallback?: JSX.Element;
  render?: RenderFunction;
  [props: string]: unknown;
  dev?: boolean;
}

export interface RemoteComponent {
  (options: RemoteComponentOptions): JSX.Element;
  dev?: any;
}

export const createRemoteComponent = (
  props?: Record<string, unknown>
): RemoteComponent => {
  const useRemoteComponent = createUseRemoteComponent(props);

  const remoteComponent: RemoteComponent = ({
    url,
    fallback = null,
    render,
    dev,
    ...props
  }) => {
    const [loading, err, Component] = useRemoteComponent(url);
    if (dev) {
      console.group(
        "%cREX",
        "background-color: #ffffff ; color: #ffffff ; font-weight: bold ; padding: 4px ;" +
          "display: inline-block ; background-image: url( 'https://i.pinimg.com/originals/aa/21/8e/aa218e0d81d51178ab68f65ef759eb11.png' ) ; " +
          "background-size: cover ; padding: 10px 175px 158px 10px ; " +
          "border: 2px solid black ; font-size: 11px ; line-height: 11px ; "
      );
      console.log("-- bones :");
      console.log(url);
    }
    
    if (loading) {
      return fallback;
    }

    if (render) {
      return render({ err, Component });
    }

    if (err || !Component) {
      return <div>Unknown Error: {(err || "UNKNOWN").toString()}</div>;
    }

    return <Component {...props} />;
  };

  return remoteComponent;
};
