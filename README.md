# Cute Animals · 可爱动物园

一个使用内嵌 SVG、CSS 动画和 Web Audio 的可爱动物互动页面，包含 8 只陆地动物和 7 条小鱼。点击或轻触动物，可触发表情、气泡、爱心和合成音效。

## 快速开始

下载本项目并解压，在项目根目录执行：

```bash
python -m http.server 8000
```

打开 <http://localhost:8000>。运行需要 Python 3，或使用任意静态服务器；无需 npm 安装或构建。

## 使用

点击或轻触动物；角色会定时播放待机和特殊动作。声音由浏览器实时合成，无需下载音频文件。音频受浏览器自动播放策略影响，可能需要先与页面交互。

## 依赖与数据

没有第三方运行依赖、远程图片或模型，无需摄像头权限。代码未包含账号、数据上传或持久化存储逻辑。

## 目录

| 路径 | 用途 |
| --- | --- |
| index.html | 唯一网页入口与页面结构 |
| assets/css/styles.css | 页面样式和动画 |
| assets/js/app.js | 交互脚本 |
| scripts/check.mjs | 结构和语法检查 |
| .github/workflows/check.yml | 推送与 PR 自动检查 |
| docs/MAINTENANCE.md | 来源、维护方法及验证范围 |
| CHANGELOG.md | 变更记录 |

## 维护与部署

安装 Node.js 22 后执行 `node scripts/check.mjs`。修改方法见 [维护记录](docs/MAINTENANCE.md)。浏览器视觉和硬件相关行为需另行实机验收。

整个目录可部署为静态站点；启用 GitHub Pages 时选择 main 分支根目录。建议单独创建 GitHub 仓库 `cute-animals`，解压后上传项目目录内的文件，使 index.html 和 README.md 位于仓库根目录。

## 许可

原文件未附许可证，本次未擅自指定开源许可证。
