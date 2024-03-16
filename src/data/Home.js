import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';

export const hero = {
  image_path: '/profile.jpg',
  title: 'Designer, developer and personal investor.',
  intro:
    'Hello, my name is Suchut Sapsathien. I am a designer and developer based in Bangkok, Thailand. I am excited to contribute to the development of innovative solutions that make a positive impact on society.',
  button: [
    {
      variant: 'contained',
      action_name: 'Download Resume',
      path: 'https://drive.google.com/drive/folders/1ZGScBznNfxF8lIQE4h3MLOLLcOHPfo-B?usp=sharing',
    },
    {
      variant: 'outlined',
      action_name: 'Contact Me',
      path: '/profile#profile_contact',
    },
  ],
};

export const shortcut_list = [
  {
    icon: <BadgeOutlinedIcon />,
    title: 'My Profile',
    detail:
      'Explore my contact, education and work experience and see how I can help you.',
    type: 'link',
    linkname: 'View Profile',
    path: '/profile',
  },
  {
    icon: <InterestsOutlinedIcon />,
    title: 'My Portfolio',
    detail:
      'Visit my portfolio page and get inspired by the variety and quality of my work.',
    type: 'link',
    linkname: 'View Portfolio',
    path: '/portfolio',
  },
  {
    icon: <SmsOutlinedIcon />,
    title: 'My Blog',
    detail:
      'Visit my blog page and discover the secrets to achieving your goals.',
    type: 'link',
    linkname: 'View Blog',
    path: '/blog',
  },
  {
    icon: <SettingsOutlinedIcon />,
    title: 'Website Settings',
    detail: 'Mange your accent color, theme and preferences within one place.',
    type: 'link',
    linkname: 'View Settings',
    path: '/settings',
  },
];

export const skill_data = [
  {
    data: [
      {
        title: 'Skills',
        subtitle:
          'I have a passion for creating innovative and user-friendly solutions. I use various tools and technologies. I also enjoy learning about personal investing and exploring different strategies and platforms. I am always eager to expand my knowledge and skills and take on new challenges.',
      },
    ],
    list: [
      {
        item_id: 'designing-skill',
        icon: <DesignServicesOutlinedIcon />,
        title: 'Design Skill',
        detail:
          'I am a designer with experience in creating user-friendly and aesthetically pleasing interfaces. I can design wireframes, prototypes, and mockups using various tools and techniques. I also have a keen eye for minimalist design, which helps me to achieve clarity and simplicity in my work.',
        list: [
          {
            title: 'Video Editing',
          },
          {
            title: 'Presentation',
          },
          {
            title: 'Figma Application',
          },
          {
            title: 'Auto Layout & Flex',
          },
        ],
      },
      {
        item_id: 'developing-skill',
        icon: <CodeOutlinedIcon />,
        title: 'Developer Skill',
        detail:
          'I am a developer with a strong knowledge of frameworks and libraries. I also have a keen eye for design and usability, and I enjoy collaborating with other developers and designers to deliver engaging and functional web solutions.',
        list: [
          {
            title: 'C & C++',
          },
          {
            title: 'Python & Libraries',
          },
          {
            title: 'React & React Native',
          },
          {
            title: 'Google Colab & Kaggle',
          },
          {
            title: 'Material UI & Ant Design',
          },
        ],
      },
      {
        item_id: 'financial-skill',
        icon: <WalletOutlinedIcon />,
        title: 'Financial Skill',
        detail:
          'I am a personal finance enthusiast with a passion for investing, asset management and portfolio management. I have a solid understanding of financial markets and diversification strategies. I also have experience in using various tools and platforms to research, analyze and execute trades.',
        list: [
          {
            title: 'Investing',
          },
          {
            title: 'Tax Planning',
          },
          {
            title: 'Asset Management',
          },
          {
            title: 'Google Sheet & MS Excel',
          },
        ],
      },
    ],
  },
];
