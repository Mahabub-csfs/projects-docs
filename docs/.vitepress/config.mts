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
          { text: "Holaa", link: "/holaa/",  },
          { text: "LMSHUB", link: "/lms-hub/overview",  },
         
        ],
      },
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      
    ],

    sidebar: 
      {
        
        '/holaa/':  [
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
      
        '/lms-hub/':  [
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
                  items:[
                    { text: "Language", link: "/lms-hub/admin/language" },
                    { text: "Localization", link: "/lms-hub/admin/localization" },
                    { text: "Icon & Provider ", link: "/lms-hub/admin/icon-provider" },
                    { text: "Category", link: "/lms-hub/admin/category" },
                    { text: "Meeting Provider", link: "/lms-hub/admin/meeting-provider" },
                    {
                      text: "Course Manage",
                      collapsed: true,
                      items:[
                         {text:"Subject" , link : '/lms-hub/admin/subject'},
                         {text:"Level" , link : '/lms-hub/admin/level'},
                         {text:"Create Course" , link : '/lms-hub/admin/create-course'},
                         {text:"Create Curriculum" , link : '/lms-hub/admin/curriculum-course'},
                         {text:"Topic Type" , link : '/lms-hub/admin/topic-type'},
                         {text:"Create Quiz" , link : '/lms-hub/admin/quiz-create'},
                         {text:"Create Course Bundle" , link : '/lms-hub/admin/create-course-bundle'}
                      ]
                    },

                    { text: "Student Manage", link: "/lms-hub/admin/student-manage" },
                    { text: "Organization Manage", link: "/lms-hub/admin/organization-manage" },
                    { text: "Instructor Manage", link: "/lms-hub/admin/instructor-manage" },
                    {
                      text: "Business Marketing",
                      collapsed: false,
                      items:[
                         {text:'Coupon Manage' , link:'/lms-hub/admin/coupon-manage'}
                      ]

                    },
                    { text: "Testimonial Manage", link: "/lms-hub/admin/testimonial-manage" },
                    {
                       text: "Blog Manage", 
                       collapsed:false,
                       items:[
                          {text:'Blog Category' , link: "/lms-hub/admin/blog-category" },
                          {text:'Blog' , link: "/lms-hub/admin/blog-manage" }
                       ]
                    },

                    { text: "Notices board ", link: "/lms-hub/admin/notice-board" },
                    
                  ],

                }
    
            ],
          },
        ],
      
      },
      
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
