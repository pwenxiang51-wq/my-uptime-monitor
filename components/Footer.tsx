import { Divider } from '@mantine/core'
import { pageConfig } from '@/uptime.config'

export default function Footer() {
  const defaultFooter = `
    <p style="text-align: center; font-size: 12px; color: #888; margin-top: 10px;">
      &copy; 2026 <a href="https://222382.xyz" style="color: inherit; text-decoration: none; font-weight: bold;">Velo.x</a> 全球运维指挥中心
    </p>
  `;
  return (
    <>
      <Divider mt="lg" />
      <div dangerouslySetInnerHTML={{ __html: pageConfig.customFooter ?? defaultFooter }} />
    </>
  )
}
