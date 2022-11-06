import GoogleCloudIcon from '../assets/googleCloudIcon.svg';
import TwilloIcon from '../assets/twilio.svg';
import WS02Icon from '../assets/wso2.svg';

const pageLimits = Object.freeze([15, 30, 50]);

const categoryButton = Object.freeze(['Newest', 'Unanswered', 'More']);

const UsersCategoryButton = Object.freeze([
  'Reputation',
  'New users',
  'Voters',
  'Editors',
  'Moderators',
]);
const UserAnswersButton = Object.freeze(['Score', 'Activity', 'Newest']);

const UserQuestionButton = Object.freeze([
  'Score',
  'Activity',
  'Newest',
  'Views',
]);

const TagsCategoryButton = Object.freeze(['Popular', 'Name', 'New']);

const UsersTabButton = Object.freeze([
  'week',
  'month',
  'quarter',
  'year',
  'all',
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

const MOCK_MD_CONTENT = [
  '![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)',
  '',
  '# Awesome Editor!',
  '',
  'It has been _released as opensource in 2018_ and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.',
  '',
  '## Create Instance',
  '',
  'You can create an instance with the following code and use `getHtml()` and `getMarkdown()` of the [Editor](https://github.com/nhn/tui.editor).',
  '',
  '```js',
  'const editor = new Editor(options);',
  '```',
  '',
  '> See the table below for default options',
  '> > More API information can be found in the document',
  '',
  '| name | type | description |',
  '| --- | --- | --- |',
  '| el | `HTMLElement` | container element |',
  '',
  '## Features',
  '',
  '* CommonMark + GFM Specifications',
  '   * Live Preview',
  '   * Scroll Sync',
  '   * Auto Indent',
  '   * Syntax Highlight',
  '        1. Markdown',
  '        2. Preview',
  '',
  '## Support Wrappers',
  '',
  '> * Wrappers',
  '>    1. [x] React',
  '>    2. [x] Vue',
  '>    3. [ ] Ember',
].join('\n');

export {
  pageLimits,
  categoryButton,
  COLLECTIVE_DETAILS,
  SIDEBAR_LIST,
  FOOTER_CONTENTS,
  UsersCategoryButton,
  UsersTabButton,
  TagsCategoryButton,
  MOCK_MD_CONTENT,
  UserAnswersButton,
  UserQuestionButton,
};
