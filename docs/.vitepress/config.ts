const config = {
    title: "前端",
    description: "前端进阶网站",
    lastUpdated: true,
    base: '/my_web_capital/',
    // lang: 'zh-CN',
    head: [["link", {rel: "icon", type: "image/png", href: "pure-logo.svg"}]],
    themeConfig: {
        logo: "/pure-logo.svg",
        nav: [
            {text: "首页", link: "/"},
            {
                text: "文章",
                link: "/blog/em_px_rem_vh_vw",
            },
            // {
            //     text: "关于我",
            //     items: [
            //         {
            //             text: "csdn",
            //             link: "https://juejin.cn/user/1011206427522078",
            //         },
            //         {
            //             text: "掘金首页",
            //             link: "https://juejin.cn/user/1011206427522078",
            //         },
            //     ],
            // },
        ],
        sidebar: {
            "/blog": [
                {
                    isGroup: true,
                    text: "博客",
                    items: [
                        {
                            text: "em/px/rem/vh/vw",
                            link: "/blog/em_px_rem_vh_vw",
                        },
                        {
                            text: "rem适配",
                            link: "/blog/rem_adaptation",
                        },
                        {
                            text: "viewport适配",
                            link: "/blog/viewport_adaptation",
                        },
                        {
                            text: "transform: scale(X) 布局适配",
                            link: "/blog/transform_scale",
                        },
                    ],
                },
            ],
        },
        socialLinks: [{icon: "github", link: "https://github.com"}],
    },
    slide: {
        "/blog/": [
            {
                isGroup: true,
                text: "blog",
                children: [
                    "/blog/em_px_rem_vh_vw.md",
                    "/blog/rem_adaptation",
                    "/blog/viewport_adaptation",
                    "/blog/transform_scale"
                ],
            },
        ],
    },
};

export default config;
