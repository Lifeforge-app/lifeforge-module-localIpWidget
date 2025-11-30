import { forgeController, forgeRouter } from '@functions/routes'
import os from 'os'

const getLocalIp = forgeController
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
