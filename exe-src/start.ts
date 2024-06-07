import 'next/dist/server/lib/cpu-profile'
import {startServer} from 'next/dist/server/lib/start-server'
import {printAndExit} from 'next/dist/server/lib/utils'
import {getReservedPortExplanation, isPortIsReserved,} from 'next/dist/lib/helpers/get-reserved-port'

const host = "localhost"
const port = 3000
let keepAliveTimeout = 300

if (isPortIsReserved(port)) {
    printAndExit(getReservedPortExplanation(port), 1)
}

import { getAsset } from 'node:sea';
const dir = getAsset('bundle.asar') as never;

startServer({
    dir,
    isDev: false,
    hostname: host,
    port,
    keepAliveTimeout,
})
  .catch(console.error)
