import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '交换机Web配置指南',
  description: 'Release 7.4.x 交换机Web管理配置文档',
  lang: 'zh-CN',

  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '交换机Web配置指南',

    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '概述', link: '/guide/overview/' },
      { text: '监控', link: '/guide/monitor/' },
      { text: '配置', link: '/guide/config/' },
      { text: '高级', link: '/guide/advanced/' },
      { text: '维护', link: '/guide/maintenance/' },
      { text: '诊断', link: '/guide/diagnosis/' }
    ],

    // 侧边栏
    sidebar: {
      '/guide/overview/': [
        {
          text: '概述',
          items: [
            { text: '简介', link: '/guide/overview/#简介' },
            { text: '登录WEB网管', link: '/guide/overview/#登录web网管' },
            { text: 'WEB网管的退出', link: '/guide/overview/#web网管的退出' },
            { text: '日志配置', link: '/guide/overview/#日志配置' },
            { text: '保存配置', link: '/guide/overview/#保存配置' },
            { text: '重启设备', link: '/guide/overview/#重启设备' },
            { text: 'WEB管理页面布局', link: '/guide/overview/#web管理页面布局介绍' },
            { text: 'WEB管理功能', link: '/guide/overview/#web管理功能介绍' }
          ]
        }
      ],
      '/guide/monitor/': [
        {
          text: '监控',
          items: [
            { text: '概况', link: '/guide/monitor/#概况' },
            { text: '端口统计', link: '/guide/monitor/#端口统计' },
            { text: '环路保护', link: '/guide/monitor/#环路保护' },
            { text: '安全', link: '/guide/monitor/#安全' },
            { text: 'PoE状态', link: '/guide/monitor/#poe状态' },
            { text: '串口服务器状态', link: '/guide/monitor/#串口服务器状态' },
            { text: 'LLDP状态', link: '/guide/monitor/#lldp状态' },
            { text: 'IGMP Snooping状态', link: '/guide/monitor/#igmp-snooping状态' },
            { text: 'DHCP Snooping状态', link: '/guide/monitor/#dhcp-snooping状态' },
            { text: 'QinQ信息', link: '/guide/monitor/#qinq信息' },
            { text: '环路检测状态', link: '/guide/monitor/#环路检测状态' },
            { text: 'MAC地址表', link: '/guide/monitor/#mac地址表' },
            { text: 'ARP/邻居信息', link: '/guide/monitor/#arp-邻居信息' },
            { text: 'NTP状态', link: '/guide/monitor/#ntp状态' },
          ]
        }
      ],
      '/guide/config/': [
        {
          text: '配置',
          collapsed: false,
          items: [
            { text: 'VLAN', link: '/guide/config/#vlan' },
            { text: '端口配置', link: '/guide/config/#端口' },
            { text: '生成树', link: '/guide/config/#生成树' },
            { text: 'ERPS', link: '/guide/config/#erps' },
            { text: 'PoE', link: '/guide/config/#poe' },
            { text: '安全', link: '/guide/config/#安全' },
            { text: '控制', link: '/guide/config/#控制' },
            { text: '环路检测', link: '/guide/config/#环路检测' },
            { text: 'DNS', link: '/guide/config/#dns' }, 
          ]
        }
      ],
      '/guide/advanced/': [
        {
          text: '高级',
          collapsed: false,
          items: [
            { text: 'LLDP', link: '/guide/advanced/#lldp' },
            { text: 'IGMP Snooping', link: '/guide/advanced/#igmp-snooping' },
            { text: 'MAC管理', link: '/guide/advanced/#mac管理' },
            { text: 'DHCP Snooping', link: '/guide/advanced/#dhcp-snooping' },
            { text: 'QinQ', link: '/guide/advanced/#qinq' },
            { text: 'QoS', link: '/guide/advanced/#qos' },
            { text: 'DoS', link: '/guide/advanced/#dos' },
            { text: '路由', link: '/guide/advanced/#路由' }
          ]
        }
      ],
      '/guide/maintenance/': [
        {
          text: '维护',
          items: [
            { text: '系统配置', link: '/guide/maintenance/#系统配置' },
            { text: '文件管理', link: '/guide/maintenance/#文件管理' },
            { text: '用户管理', link: '/guide/maintenance/#用户管理' },
            { text: '时间管理', link: '/guide/maintenance/#时间管理' },
            { text: 'SNMP', link: '/guide/maintenance/#snmp' },
            { text: 'Syslog服务器', link: '/guide/maintenance/#syslog服务器' }
          ]
        }
      ],
      '/guide/diagnosis/': [
        {
          text: '诊断',
          items: [
            { text: '网络工具', link: '/guide/diagnosis/#网络工具' },
            { text: '光模块信息', link: '/guide/diagnosis/#光模块信息' },
            { text: '一键收集', link: '/guide/diagnosis/#一键收集' },
            { text: '掉电告警', link: '/guide/diagnosis/#掉电告警' },
            { text: '线缆检测', link: '/guide/diagnosis/#线缆检测' },
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    // 页脚
    footer: {
      message: 'Release 7.4.x',
      copyright: 'Copyright © 2024'
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true
  },

  // 最后更新时间
  lastUpdated: true
})
