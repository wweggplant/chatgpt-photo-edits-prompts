
# LightLandingPage Astro 模板

这是一个使用 Astro 构建的独立站模板，专为快速搭建高性能的营销页面、博客或个人网站而设计。它集成了 Tailwind CSS 用于样式设计，支持 MDX，并已配置好通过 Cloudflare Pages 进行部署。

## ✨ 功能特性

- **🚀 Astro**: 使用 Astro 框架，享受极致的性能和优秀的开发体验。
- **🎨 Tailwind CSS**: 集成 Tailwind CSS，轻松构建现代化、响应式的用户界面。
- **✍️ MDX 支持**: 可以在 Markdown 文件中直接使用 JSX 组件，内容创作更灵活。
- **⚛️ React 集成**: 无缝集成 React，可以在 Astro 页面中使用 React 组件。
- **SEO 友好**: 自动生成 `sitemap.xml` 和 `robots.txt`。
- **☁️ Cloudflare Pages**: 预配置了 `wrangler.toml`，方便一键部署到 Cloudflare Pages。

## 🛠️ 技术栈

- [Astro](https://astro.build/) - 网站构建框架
- [React](https://reactjs.org/) - 前端 UI 库
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [MDX](https://mdxjs.com/) - 在 Markdown 中使用 JSX
- [Cloudflare Pages](https://pages.cloudflare.com/) - 部署平台

## 📁 项目结构

```
├── public/                  # 静态资源，如图片、字体和 favicon
│   ├── fonts/
│   └── imgs/
├── src/
│   ├── assets/              # 需要处理的资源（例如，图片优化）
│   ├── components/          # Astro 和 React 组件
│   │   └── react/           # React 特定组件
│   ├── content/             # 内容集合，如博客文章
│   │   └── blog/
│   ├── hooks/               # React hooks
│   ├── layouts/             # 页面布局组件
│   ├── pages/               # 页面路由
│   │   ├── api/             # API 路由
│   │   └── blog/
│   ├── services/            # 对接外部服务的代码
│   └── styles/              # 全局样式
├── astro.config.mjs         # Astro 配置文件
├── tailwind.config.mjs      # Tailwind CSS 配置文件
├── tsconfig.json            # TypeScript 配置文件
├── wrangler.toml            # Cloudflare Pages 部署配置文件
└── package.json             # 项目依赖和脚本
```

## ⚙️ 配置文件说明

### `astro.config.mjs`

Astro 的核心配置文件，用于配置站点信息和集成。

- **site**: 网站的 URL，从 `.env` 文件或环境变量中读取。
- **integrations**:
  - `@astrojs/tailwind`: 集成 Tailwind CSS。
  - `@astrojs/mdx`: 提供 MDX 支持。
  - `@astrojs/sitemap`: 自动生成站点地图。
  - `@astrojs/react`: 集成 React。
- **output**: 设置为 `server` 以支持服务端渲染 (SSR)。
- **adapter**: 使用 `@astrojs/cloudflare` 适配器，以便部署到 Cloudflare Pages。

### `tailwind.config.mjs`

Tailwind CSS 的配置文件。

- **content**: 指定了需要扫描以生成 CSS 的文件路径，涵盖了 `src` 目录下的所有相关文件类型。

### `wrangler.toml`

Cloudflare Pages 的配置文件。

- **name**: Cloudflare Pages 项目的名称。
- **compatibility_date**: 兼容性日期。
- **[vars]**: 定义环境变量，如 `SITE_TITLE`, `SITE_DESCRIPTION`, `SITE_URL` 等，这些变量可以在应用中访问。
- **[env.production]** & **[env.preview]**: 为不同环境（生产和预览）设置特定的配置。

## 🚀 标准操作流程 (SOP)

### 1. 环境准备

- 安装 [Node.js](https://nodejs.org/) (版本 18 或更高)。
- 安装 [pnpm](https://pnpm.io/)。
- 克隆本项目。

### 2. 安装依赖

在项目根目录下运行：

```bash
pnpm install
```

### 3. 本地开发

要启动本地开发服务器，请运行：

```bash
pnpm run dev
```

这将在 `http://localhost:4321` 启动一个热重载的开发服务器。

### 4. 创建新页面

在 `src/pages/` 目录下创建一个新的 `.astro` 或 `.md` 文件。Astro 会根据文件路径自动创建路由。

### 5. 创建新博文

在 `src/content/blog/` 目录下创建一个新的 `.md` 或 `.mdx` 文件。

### 6. 构建项目

要为生产环境构建项目，请运行：

```bash
pnpm run build
```

构建产物将输出到 `dist/` 目录。

### 7. 预览构建

要在本地预览构建后的站点，请运行：

```bash
pnpm run preview
```

如果你想模拟 Cloudflare Pages 环境进行预览，可以运行：

```bash
pnpm run preview:cf
```

### 8. 部署到 Cloudflare Pages

该模板已配置为使用 [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/get-started/) 或通过 Git 集成进行部署。

- **通过 Git**: 将你的仓库连接到 Cloudflare Pages，并配置构建命令为 `pnpm run build`，输出目录为 `dist`。
- **通过 Wrangler CLI**:
  1. 登录到 Cloudflare: `npx wrangler login`
  2. 部署项目: `npx wrangler pages deploy dist`

---
*该 README 由 AI 生成。* 🤖 