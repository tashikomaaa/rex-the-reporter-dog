console.group(
  "%cREX",
  "background-color: #ffffff ; color: #ffffff ; font-weight: bold ; padding: 4px ;" +
    "display: inline-block ; background-image: url( 'https://i.pinimg.com/originals/aa/21/8e/aa218e0d81d51178ab68f65ef759eb11.png' ) ; " +
    "background-size: cover ; padding: 10px 175px 158px 10px ; " +
    "border: 2px solid black ; font-size: 11px ; line-height: 11px ; "
);
console.log("🦴 Bones :", bones);
export { createUseRemoteComponent } from "./hooks/useRemoteComponent";
export { createRequires } from "./createRequires";
export { getDependencies } from "./getDependencies";
export { createRemoteComponent } from "./createRemoteComponent";
export { RemoteComponent } from "./components/RemoteComponent";
export { fetchRemoteComponent } from "./fetchRemoteComponent";
export { getServerSideProps } from "./getServerSideProps";