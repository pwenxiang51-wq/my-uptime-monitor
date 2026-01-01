import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Wenxiang 全球运维指挥大屏",
  links: [
    // 你的 RackNerd 救火通道
    { link: 'https://nerdvm.racknerd.com/control.php', label: 'RackNerd 控制台', highlight: true },
   
    { link: 'https://github.com/lyc8503/UptimeFlare', label: 'GitHub' },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'my_blog',
      name: '我的博客 (CF Workers)',
      method: 'GET',
      target: 'https://blog.222382.xyz',
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
    },{
      id: 'sink_monitor',
      name: '我的导航站 (Sink)',
      method: 'GET',
      target: 'https://link.222382.xyz',
      statusPageLink: 'https://link.222382.xyz',
      timeout: 10000,
    },
    {
      id: 'sub_monitor',
      name: '订阅管理系统',
      method: 'GET',
      target: 'https://sub.22238.xyz',
      statusPageLink: 'https://sub.222382.xyz',
      timeout: 10000,
    },
    {
      id: 'google_drive',
      name: '我的谷歌云端硬盘',
      method: 'GET',
      target: 'https://play.222382.xyz',
      tooltip: 'Google Drive 代理服务',
      timeout: 15000,
    },
    {
      id: 'secret_note',
      name: '我的秘密笔记',
      method: 'GET',
      target: 'https://pb.22238.xyz',
      tooltip: '加密阅后即焚笔记',
      timeout: 15000,
    },
    {
      id: 'alexo_ai',
      name: 'Alexo 人工智能',
      method: 'GET',
      target: 'https://ai.222382.xyz',
      tooltip: 'AI 助手服务',
      timeout: 15000,
    },
    {
      id: 'velox_img',
      name: 'Velox (图床)',
      method: 'GET',
      target: 'https://img.22238.xyz',
      tooltip: '个人私有图床',
      timeout: 15000,
    },
    {
      id: 'cf_node',
      name: '节点 (Cloudflare)',
      method: 'GET',
      target: 'https://test2.wenxiang04.dpdns.rg',
      tooltip: 'Fragrant Morning 专用节点',
      timeout: 15000,
    },
  ],
  notification: {
    
    webhook: {
      // 已经验证成功的 TG 管道
      url: 'https://api.telegram.org/bot8428256048:AAE87lB95RHubjtz907RxeVOW_sjdQmUTzY/sendMessage',
      method: 'POST',
      payloadType: 'json',
      payload: {
        chat_id: 8583390179, // 你的频道 ID
        text: '$MSG',
      },
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 0, // 只要状态一变，立刻报警
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
