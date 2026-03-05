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
            { text: 'IGMP Snooping状态', link: '/guide/monitor/#igmp状态' },
            { text: 'DHCP Snooping状态', link: '/guide/monitor/#dhcp状态' },
            { text: 'QinQ信息', link: '/guide/monitor/#qinq信息' },
            { text: '环路检测状态', link: '/guide/monitor/#igmp状态' },
            { text: 'MAC地址表', link: '/guide/monitor/#igmp状态' },
            { text: 'ARP/邻居信息', link: '/guide/monitor/#igmp状态' },
            { text: 'NTP状态', link: '/guide/monitor/#igmp状态' },
          ]
        }
      ],
      '/guide/config/': [
        {
          text: '配置',
          collapsed: false,
          items: [
            { text: '端口配置', link: '/guide/config/#端口配置' },
            { text: 'LAG配置', link: '/guide/config/#lag配置' },
            { text: 'VLAN配置', link: '/guide/config/#vlan配置' },
            { text: 'VLAN接口配置', link: '/guide/config/#vlan接口配置' },
            { text: 'MAC地址表', link: '/guide/config/#mac地址表' },
            { text: 'ARP配置', link: '/guide/config/#arp配置' },
            { text: '静态路由', link: '/guide/config/#静态路由' },
            { text: 'DHCP配置', link: '/guide/config/#dhcp配置' },
            { text: 'DHCP Snooping', link: '/guide/config/#dhcp-snooping' }
          ]
        }
      ],
      '/guide/advanced/': [
        {
          text: '高级',
          collapsed: false,
          items: [
            { text: '生成树配置', link: '/guide/advanced/#生成树配置' },
            { text: 'ERPS配置', link: '/guide/advanced/#erps配置' },
            { text: '端口安全', link: '/guide/advanced/#端口安全' },
            { text: 'ACL配置', link: '/guide/advanced/#acl配置' },
            { text: 'QoS配置', link: '/guide/advanced/#qos配置' },
            { text: 'IGMP Snooping', link: '/guide/advanced/#igmp-snooping' },
            { text: '镜像配置', link: '/guide/advanced/#镜像配置' }
          ]
        }
      ],
      '/guide/maintenance/': [
        {
          text: '维护',
          items: [
            { text: '系统设置', link: '/guide/maintenance/#系统设置' },
            { text: '用户管理', link: '/guide/maintenance/#用户管理' },
            { text: '配置管理', link: '/guide/maintenance/#配置管理' },
            { text: '固件升级', link: '/guide/maintenance/#固件升级' },
            { text: '日志管理', link: '/guide/maintenance/#日志管理' }
          ]
        }
      ],
      '/guide/diagnosis/': [
        {
          text: '诊断',
          items: [
            { text: 'Ping测试', link: '/guide/diagnosis/#ping测试' },
            { text: 'Traceroute', link: '/guide/diagnosis/#traceroute' },
            { text: '线缆检测', link: '/guide/diagnosis/#线缆检测' }
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
