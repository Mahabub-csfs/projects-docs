import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Documentation",
        items: [
          { text: "Holaa", link: "/holaa/", },
          { text: "LMSHUB", link: "/lms-hub/overview", },
          { text: "dashkit-laravel", link: "/dashkit-laravel/overview", },

        ],
      },
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },

    ],

    sidebar:
    {

      '/holaa/': [
        {
          text: "Overview",
          link: "/holaa/overview"

        },

        {
          text: "Release",
          collapsed: false,
          items: [
            { text: "Release Notes", link: "/holaa/releases" },
          ],
        },

        {
          text: "Getting Started",
          collapsed: false,
          items: [
            { text: "Installation", link: "/holaa/Installation" },
          ],
        },



        {
          text: "Usage",
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Getting Started', link: '/getting-started' },

          ],
        },
      ],

      '/lms-hub/': [
        {
          text: "Overview",
          link: "/lms-hub/overview"

        },

        {
          text: "Release",
          collapsed: false,
          items: [
            { text: "Release Notes", link: "/lms-hub/releases" },
          ],
        },

        {
          text: "Getting Started",
          collapsed: false,
          items: [
            { text: "Installation", link: "/lms-hub/Installation" },
          ],
        },

        {
          text: "Usage",
          collapsed: false,
          items: [
            {
              text: "Admin Dashboard",
              collapsed: true,
              items: [
                { text: "Language", link: "/lms-hub/admin/language" },
                { text: "Localization", link: "/lms-hub/admin/localization" },
                { text: "Icon & Provider ", link: "/lms-hub/admin/icon-provider" },
                { text: "Category", link: "/lms-hub/admin/category" },
                { text: "Meeting Provider", link: "/lms-hub/admin/meeting-provider" },
                {
                  text: "Course Manage",
                  collapsed: true,
                  items: [
                    { text: "Subject", link: '/lms-hub/admin/subject' },
                    { text: "Level", link: '/lms-hub/admin/level' },
                    { text: "Create Course", link: '/lms-hub/admin/create-course' },
                    { text: "Create Curriculum", link: '/lms-hub/admin/curriculum-course' },
                    { text: "Topic Type", link: '/lms-hub/admin/topic-type' },
                    { text: "Create Quiz", link: '/lms-hub/admin/quiz-create' },
                    { text: "Create Course Bundle", link: '/lms-hub/admin/create-course-bundle' }
                  ]
                },

                { text: "Student Manage", link: "/lms-hub/admin/student-manage" },
                { text: "Organization Manage", link: "/lms-hub/admin/organization-manage" },
                { text: "Instructor Manage", link: "/lms-hub/admin/instructor-manage" },
                {
                  text: "Business Marketing",
                  collapsed: false,
                  items: [
                    { text: 'Coupon Manage', link: '/lms-hub/admin/coupon-manage' }
                  ]

                },
                { text: "Testimonial Manage", link: "/lms-hub/admin/testimonial-manage" },
                {
                  text: "Blog Manage",
                  collapsed: false,
                  items: [
                    { text: 'Blog Category', link: "/lms-hub/admin/blog-category" },
                    { text: 'Blog', link: "/lms-hub/admin/blog-manage" }
                  ]
                },

                { text: "Notices board ", link: "/lms-hub/admin/notice-board" },

              ],

            }

          ],
        },
      ],


      '/dashkit-laravel': [
        {
          text: "Overviwe",
          collapsed: false,
          items: [
            {
              text: "Overviwe", link: "/dashkit-laravel/overview",
            }
          ]
        },

        {
          text: "Realese",
          collapsed: false,
          items: [
            {
              text: "Realese Note", link: "/dashkit-laravel/releases",
            }
          ]
        },

        {

          text: "Getting Started",
          collapsed: false,
          items: [

            {
              text: 'Installation', link: "/dashkit-laravel/installation"
              ,
            }

          ]
        },


        {
          text: "Usage",
          collapsed: false,
          items: [
            {
              text: "Dashboard",
              collapsed: false,
              items: [
                {
                  text: "LMS-Admin Dashboard", link: "/dashkit-laravel/dashboard/lms-admin-dashboard",
                },
                {
                  text: "Analytic Dashboard", link: "/dashkit-laravel/dashboard/analytic-dashboard",
                },
                {
                  text: "Online Course Dashboard", link: "/dashkit-laravel/dashboard/online-course-dashboard",
                },
                {
                  text: "Ecommerce Dashboard", link: "/dashkit-laravel/dashboard/ecommerce-dashboard",
                },
                {
                  text: "Project Manager Dashboard", link: "/dashkit-laravel/dashboard/project-manager-dashboard",
                },
              ]
            },
            {
              text: "blog",
              collapsed: false,
              items: [
                {
                  text: "Blog", link: "/dashkit-laravel/blog/blog",
                },
                {
                  text: "Blog Detail", link: "/dashkit-laravel/blog/blog-detail",
                },

              ]
            },

            {
              text: "Payment",
              collapsed: false,
              items: [
                {
                  text: "Payment Info", link: "/dashkit-laravel/payment/payment-info",
                },
                {
                  text: "Payment History", link: "/dashkit-laravel/payment/payment-history",
                },
                {
                  text: "Payout History", link: "/dashkit-laravel/payment/payout-history",
                },

              ]
            },
            {
              text: "LMS",
              collapsed: false,
              items: [
                {
                  text: "All Course", link: "/dashkit-laravel/lms/all-course",
                },
                {
                  text: "Create Course", link: "/dashkit-laravel/lms/create-course",
                },
                {
                  text: "Edit Course", link: "/dashkit-laravel/lms/edit-course",
                },
                {
                  text: "Course Detail", link: "/dashkit-laravel/lms/course-details",
                },

              ]
            },
            {
              text: "Email", link: "/dashkit-laravel/email/email",
            },
            {
              text: "Chat", link: "/dashkit-laravel/chat/inbox",
            },
            {
              text: "Widget", link: "/dashkit-laravel/widget/widget",
            },

          ]
        },

      ]

    },




    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
