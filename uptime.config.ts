import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Wenxiang 全球监控大屏",
  links: [
    { link: 'https://github.com/lyc8503/UptimeFlare', label: 'GitHub' },
    { link: 'https://blog.wenxiang0100.workers.dev', label: '我的博客', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'my_blog',
      name: '我的博客 (CF Workers)',
      method: 'GET',
      target: 'https://blog.wenxiang0100.workers.dev',
      timeout: 15000,
    },
    {
      id: 'rn_http',
      name: 'RackNerd - 网站服务',
      method: 'GET',
      target: 'http://23.94.78.145:80',
      timeout: 15000,
    },
    {
      id: 'rn_ssh',
      name: 'RackNerd - SSH 端口',
      method: 'TCP_PING',
      target: '23.94.78.145:56789',
      timeout: 10000,
    },
    {
      id: 'gcp_http',
      name: 'GCP - 网站服务',
      method: 'GET',
      target: 'http://35.212.175.192:80',
      timeout: 15000,
    },
    {
      id: 'gcp_ssh',
      name: 'GCP - SSH 端口',
      method: 'TCP_PING',
      target: '35.212.175.192:22',
      timeout: 10000,
    },
  ],
  notification: {
    webhook: {
      // 7812901048:AAHK0SN28VNfBEUncm-xh58pZRIh3XvUTgc
      url: 'https://api.telegram.org/bot7812901048:AAHK0SN28VNfBEUncm-xh58pZRIh3XvUTgc/sendMessage',
      method: 'POST',
      payloadType: 'json',
      payload: {
        chat_id: -1003539974591
        text: '$MSG',
      },
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 0,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
