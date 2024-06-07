import * as asar from "@electron/asar"

// @ts-ignore
const originalLinked = process._linkedBinding;

// @ts-ignore
process._linkedBinding = (...props) => {
  const [name] = props;
  if (name === "electron_common_asar") {
    return asar;
  }
  return originalLinked(...props)
};

// @ts-ignore
globalThis.__non_webpack_require__ = require
