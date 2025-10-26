export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
    expressjs: {
      name: 'Express.JS',
        iconName: "expressjs",
    },
    java: {
      name: 'Java',
        iconName: "java",
    },
    jest: {
      name: 'Jest',
        iconName: "jest",
    },
    nx: {
      name: 'Nx',
        iconName: "nx",
    },
    playwright: {
      name: 'Playwright',
        iconName: "playwright",
    },
    postgresql: {
      name: 'PostgreSQL',
        iconName: "postgresql",
    },
    react: {
      name: 'React.js',
        iconName: "react",
    },
    reactnative: {
      name: 'React Native',
        iconName: "react",
    },
    rxjs: {
      name: "RxJS",
        iconName: "rxjs",
    },
    storybook: {
      name: 'Storybook',
        iconName: "storybook",
    },
    vite: {
      name: 'Vite',
        iconName: "vitejs",
    },
    vue: {
      name: 'Vue',
        iconName: "vue",
    },
    yarn: {
      name: "Yarn",
        iconName: "yarn",
    },
    webcomponents: {
      name: 'WebComponents',
        iconName: "webcomponents",
    },
    devto: {
      name: 'DEV.TO',
      iconName: "devto",
    }
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || {
      name: lang,
      iconName: null,
  };
}; 