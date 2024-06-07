import {
  wrapFsWithAsar
} from "./electron/lib/node/asar-fs-wrapper"

wrapFsWithAsar(require('fs'));
