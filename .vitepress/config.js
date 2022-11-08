// docs/.vitepress/config.js
module.exports = {
    // 站点名称
    title: '鸿蒙教育平台使用说明',
    // 部署的基础路径
    //base: '/ETC/',
    // 生成html的head配置：站点favicon...
    description: '中软国际教育集团ETC项目',
    head: [
       // 改变title的图标
       [
        'link',
        {
            rel: 'icon',
            href: 'favicon.ico'
        }
       ]
    ],
    smoothScroll: true,
    // 启用时间线
    editLinks: true,
    //在git上编辑提示文字
    editLinkText: '在 GitHub 上编辑此页',
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: '上次更新',
    themeConfig: {
      // 导航图标
      logo: '/public/icon/harmonyOS_logo.png',
      // 头部导航
      nav: [
        {
          text: '首页',
          link: '/'
        },
        {
          text: '深开鸿',
          link: 'http://baidu.com' // 外部链接有特定标识
        },
      ],
    socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        { icon: 'twitter', link: '...' },
        { icon: 'discord', link: '...' }
      ],
    sidebar: [
      {
        text: '平台概述',
        collapsible: true,
        collapsed: true,
            children: [{
              text: "鸿蒙系统（LiteOS）",
              link: "/intro/"
            },
            {
              text: "系统架构图",
              link: "/intro/framework"
            },
          ],
      },
      {
        text: '基础硬件',
        collapsible: true,
                    children: [{
                      text: "Hi3861模组",
                      link: "/Broad/H3861"
                    },
                    {
                      text: "W800模组",
                      link: "/Broad/w800"
                    },
                    {
                      text: "FR8016芯片",
                      link: "/Broad/FR8016"
                    },
                    {
                      text: "W800开发板",
                      link: "/Broad/w800B"
                    },
                  ],
      },
      {
        text: 'SDK入门',
        collapsible: true,
                    children: [{
                      text: "环境搭建",
                      link: "/Broad/H3861"
                    },
                    {
                      text: "目录结构",
                      link: "/os/list"
                    },
                    {
                      text: "新建工程",
                      link: "/Broad/FR8016"
                    },
                    {
                      text: "编译烧录",
                      link: "/Broad/w800B"
                    },
                  ],
      },
      {
        text: '系统管理',
        collapsible: true,
                    children: [{
                      text: "平台基础功能",
                      link: "/system/base"
                    },
                    {
                      text: "产品构建过程",
                      link: "/system/create"
                    },
                    {
                      text: "用户设备绑定",
                      link: "/system/user"
                    },
                    {
                      text: "通讯协议管理",
                      link: "/system/communication"
                    },
                    {
                      text: "场景联动管理",
                      link: "/system/scene"
                    },
                  ],
      },
      {
        text: '手机端',
        collapsible: true,
                    children: [{
                      text: "操作流程图",
                      link: "/App/broad"
                    },
                    {
                      text: "设备列表",
                      link: "/App/devlist"
                    },
                    {
                      text: "设备操作",
                      link: "/App/devdo"
                    },
                  ],
      },
      {
        text: '3D展示',
        collapsible: true,
                    children: [{
                      text: "智能家居",
                      link: "/3D/home"
                    },
                    {
                      text: "智慧教育",
                      link: "/3D/office"
                    },
                    {
                      text: "健康生活",
                      link: "/3D/life"
                    },
                    {
                      text: "运动监测",
                      link: "/3D/sport"
                    },
                  ],
      },
      {
        text: '智能设备',
        collapsible: true,
                    children: [{
                      text: "蓝牙网关",
                      link: "/Devs/BuleGate"
                    },
                    {
                      text: "综合环境监测",
                      link: "/Devs/AirDetection"
                    },
                    {
                      text: "环境及人体感应仪",
                      link: "/Devs/AirPerson"
                    },
                    {
                      text: "四路电路控制器",
                      link: "/Devs/AcRelay"
                    },
                    {
                      text: "智能调色灯带",
                      link: "/Devs/RGB"
                    },
                    {
                      text: "三路随意贴开关",
                      link: "/Devs/RGB"
                    },
                    {
                      text: "智能桌面风扇",
                      link: "/Devs/RGB"
                    },
                    {
                      text: "智能窗帘伴侣",
                      link: "/Devs/RGB"
                    },
                    {
                      text: "四路电路控制器",
                      link: "/Devs/RGB"
                    },
                    {
                      text: "红外热成像仪",
                      link: "/Devs/RGB"
                    },
                    {
                      text: "非接触人体测温仪",
                      link: "/Devs/RGB"
                    },
                    {
                      text: "小方运动计数器",
                      link: "/Devs/RGB"
                    },
                    {
                      text: "心率血氧气手环",
                      link: "/Devs/RGB"
                    },
                    {
                      text: "智能跑步机",
                      link: "/Devs/RGB"
                    },
                  ],
      },
      {
        text: '全场景',
        collapsible: true,
            children: [{
              text: "智慧家居",
              link: "/scene/home"
            },
            {
              text: "智能办公",
              link: "/scene/office"
            },
            {
              text: "运动监测",
              link: "/scene/sport"
            },
            {
              text: "健康生活",
              link: "/scene/heath"
            },
          ],
      }
    ]
  }
  }

  