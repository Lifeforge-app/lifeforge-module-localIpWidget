import forgeAPI from '@/utils/forgeAPI'
import { Icon } from '@iconify/react'
import { useQuery } from '@tanstack/react-query'
import { Widget, WithQuery } from 'lifeforge-ui'
import type { WidgetConfig } from 'shared'

function LocalIpWidget() {
  const localIpQuery = useQuery(
    forgeAPI.localIpWidget.getLocalIp.queryOptions()
  )

  return (
    <Widget icon="tabler:device-desktop-pin" namespace="apps.localIpWidget">
      <WithQuery query={localIpQuery}>
        {data => (
          <div className="flex size-full flex-col gap-2">
            <header className="text-bg-500 flex items-center gap-2">
              <Icon className="size-5" icon="tabler:network" />
              <p>Local IP Address</p>
            </header>
            <code className="flex-center size-full flex-1 text-center text-lg">
              {data.addresses.length > 0
                ? `${data.addresses[0]}`
                : 'Unable to fetch local IP address.'}
            </code>
          </div>
        )}
      </WithQuery>
    </Widget>
  )
}

export default LocalIpWidget

export const config: WidgetConfig = {
  namespace: 'apps.localIpWidget',
  id: 'localIpWidget',
  icon: 'tabler:device-desktop-pin',
  minH: 1,
  minW: 2
}
