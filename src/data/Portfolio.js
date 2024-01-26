import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import MonochromePhotosOutlinedIcon from '@mui/icons-material/MonochromePhotosOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import CastleOutlinedIcon from '@mui/icons-material/CastleOutlined';

export const portfolio_data = [
  {
    data: [
      {
        title: 'Portfolio',
        subtitle:
          'I have worked on several projects that involved designing and developing responsive user interfaces. I am passionate about creating visually appealing designs that provide an intuitive user experience.',
      },
    ],
    list: [
      {
        project_id: 'king-tower',
        icon: <CastleOutlinedIcon style={{ fontSize: '72px' }} />,
        title: 'King Tower',
        description:
          'King Tower is one of my pair projects. King Tower is a game that have strategy to destroy the towers. You have to plan first!',
        tag: ['Game Designer', 'Frontend', 'Java', 'Paint3D'],
        type: 'link',
        action_name: 'github.com',
        path: 'https://github.com/karnkittik/KingTower',
      },
      {
        project_id: 'green-house',
        icon: <SpaOutlinedIcon style={{ fontSize: '72px' }} />,
        title: 'Green House',
        description:
          'Green House is one of my IoT team projects. GreenHouse system can be used to control the humidity of the closed area.',
        tag: ['UX/UI', 'Frontend', 'Bootstrap', 'IOT'],
        type: 'link',
        action_name: 'github.com',
        path: 'https://github.com/NatthanonM/EmbeddedLabProject',
      },
      {
        project_id: 'chatgunkub',
        icon: <MarkUnreadChatAltOutlinedIcon style={{ fontSize: '72px' }} />,
        title: 'ChatGunKub',
        description:
          'ChatGunKub is one of my team projects in COVID19 situation. We made it from the ground up with a new minimalist design.',
        tag: ['Frontend', 'React'],
        type: 'link',
        action_name: 'github.com',
        path: 'https://github.com/2110521-2563-1-Software-Architecture/TTT-PY-Frontend',
      },
      {
        project_id: 'fast-photo',
        icon: <MonochromePhotosOutlinedIcon style={{ fontSize: '72px' }} />,
        title: 'Fast Photo',
        description:
          'Fast Photo is one of my team projects. It contains a lot of system analysis informations including the gorgeous UI we have designed.',
        tag: ['UX/UI', 'System Analyst', 'Gantt Chart'],
        type: 'download',
        action_name: 'Download Document',
        path: 'portfolio/doc-fastphoto.pdf',
      },
      {
        project_id: 'tutor-here',
        icon: <AutoStoriesOutlinedIcon style={{ fontSize: '72px' }} />,
        title: 'Tutor Here',
        description:
          'Tutor Here is one of my team projects. It contains a lot of software engineering informations including the UX/UI design.',
        tag: ['UX/UI', 'Frontend', 'React'],
        type: 'link',
        action_name: 'github.com',
        path: 'https://github.com/2110423-2019-2/sec3_catandfriends',
      },
      {
        project_id: 'piece-of-park',
        icon: <DirectionsCarOutlinedIcon style={{ fontSize: '72px' }} />,
        title: 'Piece of Park',
        description:
          "Piece of Park is my team's senior project. The system can be used to reserve your access, to calculate your fee and to make some digital payment.",
        tag: ['UX/UI', 'Frontend', 'React Native', 'Firebase'],
        type: 'link',
        action_name: 'github.com',
        path: 'https://github.com/pluemine/SeniorFrontEnd2021-1',
      },
      {
        project_id: 'portfolio-tracker',
        icon: <SummarizeOutlinedIcon style={{ fontSize: '72px' }} />,
        title: 'Portfolio Tracker',
        description:
          'Portfolio Tracker is my freetime project. The sheet can summarize overall transactional data into historical monthly on the powerful dashbaord.',
        tag: ['Google Sheet', 'Monthly Report', 'FIFO Algorithm'],
        type: 'link',
        action_name: 'sheet.google.com',
        path: 'https://docs.google.com/spreadsheets/d/1fCKTm-GmdA8yU-IGJx4wAqVhzPUVDFTB6rOt7doUdxg/edit?usp=sharing',
      },
    ],
  },
];
