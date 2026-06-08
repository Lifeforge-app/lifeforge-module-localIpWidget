import type { ModuleConfig } from '@lifeforge/shared'

export default {
  routes: {},
  hidden: true,
  widgets: [
    () => import('@/widgets/LocalIp'),
    () => import('@/widgets/Date'),
    () => import('@/widgets/Clock'),
    () => import('@/widgets/Quotes')
  ]
} satisfies ModuleConfig
