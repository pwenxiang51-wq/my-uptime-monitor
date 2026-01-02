import { Container, Group, Image } from '@mantine/core'
import classes from '@/styles/Header.module.css'
import { pageConfig } from '@/uptime.config'
import { PageConfigLink } from '@/types/config'
import { useTranslation } from 'react-i18next'

export default function Header({ style }: { style?: React.CSSProperties }) {
  const { t } = useTranslation('common')
  const linkToElement = (link: PageConfigLink, i: number) => {
    return (
      <a
        key={i}
        href={link.link}
        target={link.link.startsWith('/') ? undefined : '_blank'}
        className={classes.link}
        data-active={link.highlight}
      >
        {link.label}
      </a>
    )
  }

  const links = [{ label: t('Incidents'), link: '/incidents' }, ...(pageConfig.links || [])]

  return (
    <header className={classes.header} style={style}>
      <Container size="md" className={classes.inner}>
        <div>
          <a
            href={location.pathname == '/' ? 'https://github.com/lyc8503/UptimeFlare' : '/'}
            target={location.pathname == '/' ? '_blank' : undefined}
          >
            {/* === 1. 强力暗黑模式 CSS (专治各种白色背景) === */}
                  <style>{`
                    /* 全局背景 */
                    body, html, #root { background-color: #111827 !important; color: #f3f4f6 !important; }
                    
                    /* [关键] 顶部菜单栏变黑 */
                    header { background-color: #111827 !important; border-bottom: 1px solid #374151 !important; }
                    
                    /* [关键] 监控卡片变深灰 (覆盖 Mantine 组件样式) */
                    .mantine-Paper-root, .bg-white, .bg-gray-50 { 
                      background-color: #1f2937 !important; 
                      border: 1px solid #374151 !important;
                      color: #f3f4f6 !important;
                    }
                    
                    /* 修复卡片里的文字颜色 */
                    .mantine-Text-root, .text-gray-900, .text-slate-900 { color: #f3f4f6 !important; }
                    .text-gray-500, .text-slate-500 { color: #9ca3af !important; }
                    
                    /* 链接和 Logo 颜色 */
                    a { color: #9333ea !important; }
                    
                    /* 状态条背景微调 */
                    .bg-gray-200 { background-color: #374151 !important; }
                  `}</style>

                  {/* === 2. 你的 Velo.x Logo === */}
                  <h1 style={{ 
                    color: '#9333ea', 
                    fontSize: '28px', 
                    fontWeight: '900', 
                    margin: 0, 
                    lineHeight: '1',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>
                    Velo.x
                  </h1>
          </a>
        </div>

        <Group gap={5} visibleFrom="sm">
          {links?.map(linkToElement)}
        </Group>

        <Group gap={5} hiddenFrom="sm">
          {links?.filter((link) => link.highlight || link.link.startsWith('/')).map(linkToElement)}
        </Group>
      </Container>
    </header>
  )
}
