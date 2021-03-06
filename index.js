import Download from "./tools/Download";
const Rex = (bones, options) => {
    if(options.debug) {
        console.group(
            "%cREX",
            "background-color: #ffffff ; color: #ffffff ; font-weight: bold ; padding: 4px ;" +
              "display: inline-block ; background-image: url( 'https://i.pinimg.com/originals/aa/21/8e/aa218e0d81d51178ab68f65ef759eb11.png' ) ; " +
              "background-size: cover ; padding: 10px 175px 158px 10px ; " +
              "border: 2px solid black ; font-size: 11px ; line-height: 11px ; "
          );
          console.log("🦴 Bones :", bones);
        
          let bone;
          bones.forEach((bone) => {
            bone = Download(bone.uri, bone.dest);
          });
          console.log(bone)
          console.groupEnd();
    }
};

export default Rex;
