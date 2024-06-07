// import 'next/dist/server/lib/cpu-profile'
// import {startServer} from 'next/dist/server/lib/start-server'
// import {printAndExit} from 'next/dist/server/lib/utils'
// import {getProjectDir} from 'next/dist/lib/get-project-dir'
// import {getReservedPortExplanation, isPortIsReserved,} from 'next/dist/lib/helpers/get-reserved-port'
//
// const dir = getProjectDir(directory)
// const host = "locahost"
// const port = 3000
// let keepAliveTimeout = true
//
// if (isPortIsReserved(port)) {
//     printAndExit(getReservedPortExplanation(port), 1)
// }
//
// await startServer({
//     dir,
//     isDev: false,
//     hostname: host,
//     port,
//     keepAliveTimeout,
// })
//

// TODO: Pass this to the Next server above and start server with patched `fs` module
// import { getAsset } from 'node:sea';
// const blob = getAsset('bundle.asar');
