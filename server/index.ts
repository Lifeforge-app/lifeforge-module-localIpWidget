import os from 'os'

import { forgeRouter } from '@lifeforge/server-utils'

import forge from './forge'

const getLocalIp = forge
  .query()
  .description('Get local IP address')
  .input({})
  .callback(async () => {
    const interfaces = os.networkInterfaces()

    const addresses: string[] = []

    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]!) {
        if (iface.family === 'IPv4' && !iface.internal) {
          addresses.push(iface.address)
        }
      }
    }

    return { addresses }
  })

export default forgeRouter({ getLocalIp })
