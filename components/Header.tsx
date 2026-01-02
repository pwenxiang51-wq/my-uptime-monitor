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
            {/* === 1. 这里是强制变黑的指令 (不用动 config 文件了) === */}
                  <style>{`
                    /* 强制背景变深黑 */
                    body, html, #root { background-color: #111827 !important; color: white !important; }
                    /* 强制卡片变深灰 */
                    div[class*="bg-white"] { background-color: #1f2937 !important; border-color: #374151 !important; }
                    /* 强制文字颜色 */
                    .text-slate-900, .text-gray-900 { color: white !important; }
                    .text-slate-500, .text-gray-500 { color: #9ca3af !important; }
                    /* 链接颜色 */
                    a { color: #9333ea !important; }
                  `}</style>

                  {/* === 2. 这里是你的紫色 Logo === */}
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
