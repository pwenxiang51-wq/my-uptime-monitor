import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Wenxiang 全球运维指挥大屏",
  links: [
    // 你的 RackNerd 救火通道
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
      id: 'rn_ssh',
      name: 'RackNerd - SSH 端口',
      method: 'TCP_PING',
      target: '23.94.78.145:56789', // 你的 RN IP
      timeout: 10000,
    },
    {
      id: 'gcp_ssh',
      name: 'GCP - SSH 端口',
      method: 'TCP_PING',
      target: '35.212.175.192:22', // 你的 GCP IP
      timeout: 10000,
    },
  ],
  notification: {
    webhook: {
      // 已经验证成功的 TG 管道
      url: 'https://api.telegram.org/bot7812901048:AAHK0SN28VNfBEUncm-xh58pZRIh3XvUTgc/sendMessage',
      method: 'POST',
      payloadType: 'json',
      payload: {
        chat_id: -1003539974591, // 你的频道 ID
        text: '$MSG',
      },
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 0, // 只要状态一变，立刻报警
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
