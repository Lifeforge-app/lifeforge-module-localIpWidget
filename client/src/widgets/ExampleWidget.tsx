import { DashboardItem } from 'lifeforge-ui'
import type { WidgetConfig } from 'shared'

function ExampleWidget() {
  return (
    <DashboardItem
      icon="tabler:device-desktop-pin"
      namespace="apps.localIpWidget"
      title="Local IP Widget"
    >
      Hello World!
    </DashboardItem>
  )
}

export default ExampleWidget

export const config: WidgetConfig = {
  namespace: 'apps.localIpWidget',
  id: 'local-ip-widget',
  icon: 'tabler:device-desktop-pin',
  minH: 1,
  minW: 1
}
