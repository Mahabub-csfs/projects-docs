import { defineConfig } from "vitepress";

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
          { text: "Holaa", link: "/holaa/" },
          { text: "EduLab", link: "/edulab/overview" },
          { text: "Dashkit-laravel", link: "/dashkit-laravel/overview" },
        ],
      },
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: {
      "/holaa/": [
        {
          text: "Overview",
          link: "/holaa/overview",
        },

        {
          text: "Release",
          collapsed: false,
          items: [{ text: "Release Notes", link: "/holaa/releases" }],
        },

        {
          text: "Getting Started",
          collapsed: false,
          items: [{ text: "Installation", link: "/holaa/Installation" }],
        },

        {
          text: "Usage",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
      ],

      "/edulab/": [
        {
          text: "Overview",
          link: "/edulab/overview",
        },

        {
          text: "Release",
          collapsed: false,
          items: [{ text: "Release Notes", link: "/edulab/releases" }],
        },

        {
          text: "Getting Started",
          collapsed: false,
          items: [{ text: "Installation", link: "/edulab/Installation" }],
        },

        {
          text: "Usage",
          collapsed: false,
          items: [
            {
              text: "Admin Dashboard",
              collapsed: true,
              items: [
                { text: "Language", link: "/edulab/admin/language" },
                { text: "Localization", link: "/edulab/admin/localization" },
                {
                  text: "Icon & Provider ",
                  link: "/edulab/admin/icon-provider",
                },
                { text: "Category", link: "/edulab/admin/category" },
                {
                  text: "Meeting Provider",
                  link: "/edulab/admin/meeting-provider",
                },
                {
                  text: "Course Manage",
                  collapsed: true,
                  items: [
                    { text: "Subject", link: "/edulab/admin/subject" },
                    { text: "Level", link: "/edulab/admin/level" },
                    {
                      text: "Create Course",
                      link: "/edulab/admin/create-course",
                    },
                    {
                      text: "Create Curriculum",
                      link: "/edulab/admin/curriculum-course",
                    },
                    { text: "Topic Type", link: "/edulab/admin/topic-type" },
                    { text: "Create Quiz", link: "/edulab/admin/quiz-create" },
                    {
                      text: "Create Course Bundle",
                      link: "/edulab/admin/create-course-bundle",
                    },
                  ],
                },

                {
                  text: "Student Manage",
                  link: "/edulab/admin/student-manage",
                },
                {
                  text: "Organization Manage",
                  link: "/edulab/admin/organization-manage",
                },
                {
                  text: "Instructor Manage",
                  link: "/edulab/admin/instructor-manage",
                },
                {
                  text: "Business Marketing",
                  collapsed: false,
                  items: [
                    {
                      text: "Coupon Manage",
                      link: "/edulab/admin/coupon-manage",
                    },
                  ],
                },
                {
                  text: "Testimonial Manage",
                  link: "/edulab/admin/testimonial-manage",
                },
                {
                  text: "Blog Manage",
                  collapsed: false,
                  items: [
                    {
                      text: "Blog Category",
                      link: "/edulab/admin/blog-category",
                    },
                    { text: "Blog", link: "/edulab/admin/blog-manage" },
                  ],
                },

                { text: "Notices board", link: "/edulab/admin/notice-board" },
                {
                  text: "Backend Settings",
                  link: "/edulab/admin/backend-settings",
                },
                {
                  text: "Theme Settings",
                  link: "/edulab/admin/theme-settings",
                },
                {
                  text: "Forum Manage",
                  collapsed: false,
                  items: [
                    { text: "Forum", link: "/edulab/admin/forum" },
                    { text: "Sub Forum", link: "/edulab/admin/sub-forum" },
                  ],
                },
                {
                  text: "Staff Manage",
                  collapsed: false,
                  items: [
                    {
                      text: "Permissions",
                      link: "/edulab/admin/staff-permissions",
                    },
                    { text: "Roles", link: "/edulab/admin/staff-role" },
                    { text: "Users", link: "/edulab/admin/staff-users" },
                  ],
                },
                {
                  text: "Payment Method",
                  link: "/edulab/admin/payment-method",
                },
                {
                  text: "Certificate Manage",
                  link: "/edulab/admin/certificate-manage",
                },
                { text: "Faq Manage", link: "/edulab/admin/faq-manage" },
              ],
            },

            {
              text: "Instructor Dashboard",
              collapsed: true,
              items: [
                {
                  text: "Course Manage",
                  collapsed: true,
                  items: [
                    { text: "Course", link: "/edulab/instructor/course" },
                    {
                      text: "Create Curriculum",
                      link: "/edulab/instructor/create-curriculum",
                    },
                    {
                      text: "Topic Type",
                      link: "/edulab/instructor/topic-type",
                    },
                    {
                      text: "Create Quiz",
                      link: "/edulab/instructor/create-quiz",
                    },
                    {
                      text: "Create Course Bundle",
                      link: "/edulab/instructor/bundle-course",
                    },
                  ],
                },
                {
                  text: "Student Manage",
                  link: "/edulab/instructor/student-manage",
                },
                {
                  text: "Quizes",
                  link: "/edulab/instructor/quizes",
                },
                {
                  text: "Assignments",
                  link: "/edulab/instructor/assignment",
                },
                {
                  text: "Noties Board",
                  link: "/edulab/instructor/notiesboard",
                },
                {
                  text: "Notifications",
                  link: "/edulab/instructor/notifications",
                },
                {
                  text: "Support Ticket",
                  link: "/edulab/instructor/support-ticket",
                },
              ],
            },

            {
              text: "Organization Dashboard",
              collapsed: true,
              items: [
                {
                  text: "Course Manage",
                  collapsed: true,
                  items: [
                    { text: "Course", link: "/edulab/instructor/course" },
                    {
                      text: "Create Curriculum",
                      link: "/edulab/instructor/create-curriculum",
                    },
                    {
                      text: "Topic Type",
                      link: "/edulab/instructor/topic-type",
                    },
                    {
                      text: "Create Quiz",
                      link: "/edulab/instructor/create-quiz",
                    },
                    {
                      text: "Create Course Bundle",
                      link: "/edulab/instructor/bundle-course",
                    },
                  ],
                },
                {
                  text: "Student Manage",
                  link: "/edulab/instructor/student-manage",
                },
                
                {
                  text: "Noties Board",
                  link: "/edulab/instructor/notiesboard",
                },
                {
                  text: "Notifications",
                  link: "/edulab/instructor/notifications",
                },
                {
                  text: "Support Ticket",
                  link: "/edulab/instructor/support-ticket",
                },
              ],
            },
          ],
        },
      ],

      "/dashkit-laravel": [
        {
          text: "Overview",
          collapsed: false,
          items: [
            {
              text: "Overview",
              link: "/dashkit-laravel/overview",
            },
          ],
        },

        {
          text: "Realese",
          collapsed: false,
          items: [
            {
              text: "Realese Note",
              link: "/dashkit-laravel/releases",
            },
          ],
        },

        {
          text: "Getting Started",
          collapsed: false,
          items: [
            {
              text: "Installation",
              link: "/dashkit-laravel/installation",
            },
          ],
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
                  text: "LMS-Admin Dashboard",
                  link: "/dashkit-laravel/dashboard/lms-admin-dashboard",
                },
                {
                  text: "Analytic Dashboard",
                  link: "/dashkit-laravel/dashboard/analytic-dashboard",
                },
                {
                  text: "Online Course Dashboard",
                  link: "/dashkit-laravel/dashboard/online-course-dashboard",
                },
                {
                  text: "Ecommerce Dashboard",
                  link: "/dashkit-laravel/dashboard/ecommerce-dashboard",
                },
                {
                  text: "Project Manager Dashboard",
                  link: "/dashkit-laravel/dashboard/project-manager-dashboard",
                },
              ],
            },
            {
              text: "Blog",
              collapsed: false,
              items: [
                {
                  text: "Blog",
                  link: "/dashkit-laravel/blog/blog",
                },
                {
                  text: "Blog Detail",
                  link: "/dashkit-laravel/blog/blog-detail",
                },
              ],
            },

            {
              text: "Payment",
              collapsed: false,
              items: [
                {
                  text: "Payment Info",
                  link: "/dashkit-laravel/payment/payment-info",
                },
                {
                  text: "Payment History",
                  link: "/dashkit-laravel/payment/payment-history",
                },
                {
                  text: "Payout History",
                  link: "/dashkit-laravel/payment/payout-history",
                },
              ],
            },
            {
              text: "LMS",
              collapsed: false,
              items: [
                {
                  text: "All Course",
                  link: "/dashkit-laravel/lms/all-course",
                },
                {
                  text: "Create Course",
                  link: "/dashkit-laravel/lms/create-course",
                },
                {
                  text: "Edit Course",
                  link: "/dashkit-laravel/lms/edit-course",
                },
                {
                  text: "Course Detail",
                  link: "/dashkit-laravel/lms/course-details",
                },
              ],
            },
            {
              text: "Email",
              link: "/dashkit-laravel/email/email",
            },
            {
              text: "Chat",
              link: "/dashkit-laravel/chat/inbox",
            },
            {
              text: "Widget",
              link: "/dashkit-laravel/widget/widget",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
