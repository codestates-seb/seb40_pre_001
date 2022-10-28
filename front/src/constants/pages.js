import GoogleCloudIcon from '../assets/googleCloudIcon.svg';
import TwilloIcon from '../assets/twilio.svg';
import WS02Icon from '../assets/wso2.svg';
const pageLimits = Object.freeze([15, 30, 50]);

const categoryButton = Object.freeze([
  'Newest',
  'Active',
  `Bountied`,
  'Unanswered',
  'More',
]);

const COLLECTIVE_DETAILS = Object.freeze([
  {
    title: 'Google Cloud',
    members: '31k Members',
    desc: ' Google Cloud provides organizations with leading infrastructure, platform capabilities and industry solutions to help them solve their most critical business problems.',
    icon: GoogleCloudIcon,
  },
  {
    title: 'Twilio',
    members: '5k Members',
    desc: 'Twilio has democratized channels like voice, text, chat, video, and email by virtualizing the world’s communications infrastructure through APIs that are simple enough for any developer, yet robust enough to power the world’s most demanding applications.',
    icon: TwilloIcon,
  },
  {
    title: 'WSO2',
    members: '2k Members',
    desc: 'WSO2 solutions give enterprises the flexibility to deploy applications and services on-premises, on private or public clouds, or in hybrid environments. Our collective aims to enable developers to build value-added services and get to market faster.',
    icon: WS02Icon,
  },
]);

const SIDEBAR_LIST = Object.freeze([
  { name: 'Questions', path: '/questions' },
  { name: 'Tags', path: '/tags' },
  { name: 'Users', path: '/users' },
  { name: 'Companies', path: '/#' },
]);

const FOOTER_CONTENTS = Object.freeze([
  { title: 'Stack Overflow', list: ['Questions, Help'] },
  {
    title: 'Products',
    list: ['Teams', 'Advertising', 'Collectives', 'Talent'],
  },
  {
    title: 'Company',
    list: [
      'About',
      'Press',
      'Work Here',
      'Legal',
      'Privacy Policy',
      'Terms of Service',
      'Contact Us',
      'Cookie Settings',
      'Cookie Policy',
    ],
  },
  {
    title: 'STACK EXCHANGE NETWORK',
    list: [
      'Technology',
      'Culture & recreation',
      'Life & arts',
      'Science',
      'Professional',
      'Business',
      'API',
      'Data',
    ],
  },
]);

export {
  pageLimits,
  categoryButton,
  COLLECTIVE_DETAILS,
  SIDEBAR_LIST,
  FOOTER_CONTENTS,
};
