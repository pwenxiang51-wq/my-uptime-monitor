import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 标题改得更霸气一点
  title: "Wenxiang 全球运维指挥大屏",
  links: [
    // ⚠️ 关键点：这里就是你的 RackNerd 面板链接，点击直接跳去救火
    { link: 'https://nerdvm.racknerd.com/control.php', label: 'RackNerd 控制台', highlight: true },
    { link: 'https://blog.wenxiang0100.workers.dev', label: '我的博客' },
    { link: 'https://github.com/lyc8503/UptimeFlare', label: 'GitHub' },
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
      id: 'baidu_test',
      name: '国内连通性 (Baidu)',
      method: 'GET',
      target: 'https://www.baidu.com',
    },
    {
      id: 'rn_ssh',
      name: 'RackNerd - SSH 端口',
      method: 'TCP_PING',
      target: '23.94.78.145:56789',
      timeout: 10000,
    },
    {
      id: 'google_test',
      name: '国外连通性 (Google)',
      method: 'GET',
      target: 'https://www.google.com',
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
      url: 'https://api.telegram.org/bot7812901048:AAHK0SN28VNfBEUncm-xh58pZRIh3XvUTgc/sendMessage',
      method: 'POST',
      payloadType: 'json',
      payload: {
        chat_id: -1003539974591,
        text: '$MSG',
      },
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 0,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
