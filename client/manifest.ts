import { createForgeModuleClient } from '@lifeforge/federation'

import contract from './contract'

const { forgeAPI, ...manifest } = createForgeModuleClient({
  routes: {},
  hidden: true,
  contract,
  widgets: [
    () => import('@/widgets/LocalIp'),
    () => import('@/widgets/Date'),
    () => import('@/widgets/Clock'),
    () => import('@/widgets/Quotes')
  ]
})

export default manifest
export { forgeAPI }
