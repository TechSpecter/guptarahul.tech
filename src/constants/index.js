export const PROXY_EMAIL = 'rahul4sap@gmail.com';

export const COMMAND_HELP = 'help';
export const COMMAND_GO_GITHUB = 'go github';
export const COMMAND_GO_LINKEDIN = 'go linkedin';
export const COMMAND_GO_TWITTER = 'go twitter';
export const COMMAND_CONTACT = 'contact';
export const COMMAND_CLEAR = 'clear';
export const COMMAND_PRETTY_MODE = 'gui';

export const SOCIAL_LINKS = [
  {
    icon: 'lab la-github',
    name: 'github',
    url: 'https://github.com/TechSpecter',
  },
  {
    icon: 'lab la-linkedin-in',
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/gupta-r/',
  },
  {
    icon: 'lab la-twitter',
    name: 'twitter',
    url: 'https://twitter.com/guptar_',
  }
];

export const SOCIAL_LINKS_NAMES = SOCIAL_LINKS.map((link) => link.name);
export const SOCIAL_LINKS_URLS = SOCIAL_LINKS.map((link) => link.url);
