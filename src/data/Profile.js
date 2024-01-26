import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';

import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

export const profile_data = [
  {
    data: [
      {
        title: 'Profile',
        subtitle:
          'I am Suchut Sapsathien, a creative web designer who designs and develops user-friendly websites and applications. I am passionate about web design and always learns new technologies and frameworks.',
      },
    ],
    list: [
      {
        item_id: 'profile_contact',
        icon: <ContactPageOutlinedIcon />,
        title: 'Contact',
        subtitle:
          'You can contact me anytime, and I will be glad to provide you with more information. You are a distinguished leader in your industry, and I would be delighted to work with you.',
        detail:
          'If you have any questions or comments, feel free to reach out to me.',
        type: 'scroll',
        action_name: 'Scroll to Contact',
        list: [
          {
            item_id: 'contact_email',
            icon: <MarkEmailReadOutlinedIcon />,
            title: 'Email',
            subtitle:
              'You can send me an email anytime, and I will respond at the earliest opportunity. I appreciate receiving your messages.',
            type: 'link',
            action_name: 'suchut@outlook.com',
            path: 'mailto:suchut@outlook.com',
          },
          {
            item_id: 'contact_resume',
            icon: <ArticleOutlinedIcon />,
            title: 'Resume',
            subtitle:
              'I would like to share my resume with you. You can read my resume anytime, and I will appreciate your feedback.',
            type: 'link',
            action_name: 'drive.google.com',
            path: 'https://drive.google.com/drive/folders/1ZGScBznNfxF8lIQE4h3MLOLLcOHPfo-B?usp=sharing',
          },
          {
            item_id: 'contact_portfolio',
            icon: <AutoStoriesOutlinedIcon />,
            title: 'Case Study Portfolio',
            subtitle:
              'I would like to show you my showcase of work. You can read my showcase of work anytime, and I will welcome your comments.',
            type: 'link',
            action_name: 'drive.google.com',
            path: 'https://drive.google.com/drive/folders/1ZGScBznNfxF8lIQE4h3MLOLLcOHPfo-B?usp=sharing',
          },
        ],
      },
      {
        item_id: 'profile_certificate',
        icon: <WorkspacePremiumOutlinedIcon />,
        title: 'Certificate',
        subtitle:
          'Welcome to my certificate showcase. These certificates reflect my skills, achievements, and qualifications that I have acquired through learning and practice.',
        detail: 'Discover the courses and how they enriched my development.',
        type: 'scroll',
        action_name: 'Scroll to Certificate',
        list: [
          {
            certificate_id: '230312_ux_foundations',
            image_path: '/profile/certificate/230312_ux_foundations.png',
            title: 'Skooldio : UX Foundations',
            description:
              'I have completed a UX foundations certificate that taught me the essential skills and concepts of user experience design. I learned how to conduct user research, create wireframes and prototypes, conduct user testing and apply the design process to solve real-world problems. I also had the opportunity to learn onsite with a lot of talented friends who inspired me and gave me valuable feedback.',
            issued: '12 March 2023',
            tag: ['UX', 'Research', 'Wireframe', 'Prototype', 'Testing'],
            type: 'none',
            action_name: '',
            path: '',
          },
          {
            certificate_id: '240120_udemy_finance',
            image_path: '/profile/certificate/240120_udemy_finance.jpg',
            title: 'Udemy :  The Complete Financial',
            description:
              'I have completed the course certificate in financial analysis. This course taught me the knowledge for a career in investment banking, valuation, and other corporate-finance focused fields. I learned how to identify relevant information in the financial statements reported by firms. I also learned how to apply the financial statements and forecasts within the context of company valuation.',
            issued: '20 January 2024',
            tag: ['Financial', 'Investment', 'Valuation', 'Economic'],
            type: 'link',
            action_name: 'udemy.com/certificate',
            path: 'https://www.udemy.com/certificate/UC-75df12ea-a188-4e14-b625-c62f27523744/',
          },
        ],
      },
      {
        item_id: 'profile_education',
        icon: <SchoolOutlinedIcon />,
        title: 'Education',
        subtitle:
          'I have a comprehensive and diverse academic background that has enabled me to develop a range of skills and competencies in my chosen fields. I have also attained academic excellence and recognition throughout my studies.',
        detail:
          'Check out my degrees and how they helped me develop my knowledge.',
        type: 'scroll',
        action_name: 'Scroll to Education',
        list: [
          {
            education_id: 'edu-sg96',
            icon: <SchoolOutlinedIcon />,
            title: "Mathematical Sciences, Saint Gabriel's College",
            type: 'High School',
            time: 'May 2005 - May 2016',
          },
          {
            education_id: 'edu-cu101',
            icon: <SchoolOutlinedIcon />,
            title:
              'Second-class Honors, B-Eng in Computer-Engineering, Chulalongkorn University',
            type: 'University',
            time: 'Aug 2017 - Aug 2021',
          },
        ],
      },
      {
        item_id: 'profile_experience',
        icon: <WorkOutlineOutlinedIcon />,
        title: 'Experience',
        subtitle:
          'I am a versatile and experienced professional with a wide range of abilities in different fields. I have also demonstrated leadership, teamwork, and problem-solving skills in various roles and contexts.',
        detail: 'Explore the diversity and depth of my work experience.',
        type: 'scroll',
        action_name: 'Scroll to Experience',
        list: [
          {
            experience_id: 'exp-1',
            icon: <AccountTreeOutlinedIcon />,
            title: 'RPA Developer, Ayudhya Capital Services',
            type: 'Internship',
            time: 'Jun 2020 - Aug 2020',
            detail_list: [
              {
                type: 'text',
                detail:
                  'Designed and analyzed the user flow through the robotic program that automates cron job transfer and data screening between departments',
              },
            ],
          },
          {
            experience_id: 'exp-2',
            icon: <DesignServicesOutlinedIcon />,
            title: 'UX/UI Designer and CSS Writer, The Showhopper',
            type: 'Parttime',
            time: 'Jan 2021 - Jun 2021',
            detail_list: [
              {
                type: 'text',
                detail:
                  'Conducted research and analysis on user journey and pain points',
              },
              {
                type: 'text',
                detail:
                  'Designed a website for user registration, show previewing and booking',
              },
              {
                type: 'text',
                detail:
                  'Created and implemented the wire-framing and flow from LINE Rich menu to registration process',
              },
            ],
          },
          {
            experience_id: 'exp-3',
            icon: <DesignServicesOutlinedIcon />,
            title: 'UX/UI Designer, Playtorium Solutions',
            type: 'Fulltime',
            time: 'June 2021 - Present',
            detail_list: [
              {
                type: 'text',
                detail:
                  'Conducted requirement analysis and designed various software platforms for diverse domains, such as:',
                image_path: '',
              },
              {
                type: 'text',
                detail:
                  'Human Resource Management System for employee management',
                image_path: '',
              },
              {
                type: 'text',
                detail:
                  'Financial platforms for insurance applications and services, bond registration and booking systems, and more',
                image_path: '',
              },
              {
                type: 'text',
                detail: 'Learning Management System for online education',
                image_path: '',
              },
              {
                type: 'text',
                detail:
                  'Walked the customers and stakeholders through the flow and prototype.',
                image_path: '',
              },
            ],
          },
          {
            experience_id: 'exp-4',
            icon: <AssistantOutlinedIcon />,
            title:
              'UX/UI Designer, Artificial Intelligence Association of Thailand (AIAT)',
            type: 'Parttime',
            time: 'October 2023 - Present',
            detail_list: [
              {
                type: 'image',
                detail: '',
                image_path: '/profile/work_experience/work_aiat_aiatmooc.png',
              },
              {
                type: 'text',
                detail:
                  'Coordinated with the AIAT developers, project manager and product owner to ensure the platform meets their needs and expectations',
                image_path: '',
              },
              {
                type: 'text',
                detail:
                  'Managed the tasks and deadlines of the developer team using GitHub issues and other project management tools',
                image_path: '',
              },
              {
                type: 'text',
                detail:
                  'Conducted a comprehensive analysis of the requirements and information to develop a new product prototype and flow.',
                image_path: '',
              },
            ],
          },
        ],
      },
    ],
  },
];
