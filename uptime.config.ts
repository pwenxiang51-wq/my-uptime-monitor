// Don't edit this line
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
    },
    {
      id: 'rn_http',
      name: 'RackNerd - 网站服务',
      method: 'GET',
      target: 'http://23.94.78.145',
    },
    {
      id: 'rn_ssh',
      name: 'RackNerd - SSH 端口',
      method: 'TCP_PING',
      target: '23.94.78.145:56789',
      timeout: 5000,
    },
    {
      id: 'gcp_http',
      name: 'GCP - 网站服务',
      method: 'GET',
      target: 'http://35.212.175.192',
    },
    {
      id: 'gcp_ssh',
      name: 'GCP - SSH 端口',
      method: 'TCP_PING',
      target: '35.212.175.192:22',
      timeout: 5000,
    },
  ],
  notification: {
    webhook: {
      // 自动读取 GitHub Secrets 里的 TG_BOT_TOKEN 和 TG_CHAT_ID
      url: `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
      method: 'POST',
      payloadType: 'json',
      payload: {
        chat_id: process.env.TG_CHAT_ID,
        text: '$MSG',
      },
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 1, 
  },
}

// 维护配置留空，彻底杀掉蓝框
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
