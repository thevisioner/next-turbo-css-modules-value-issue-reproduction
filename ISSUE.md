# ISSUE

## CSS Modules @value properties missing in development with --turbo flag

### Description

CSS Modules `@value` properties issue reproduction for Next.js application in development using the --turbo flag.

### Link to the reproduction

[Issue Reproduction](https://github.com/thevisioner/next-turbo-css-modules-value-issue-reproduction)

### To Reproduce

1. Start the application in development using the --turbo flag (next dev --turbo).
2. Open the browser and inspect the Network tab in the DevTools (CSS files).
3. Look for the `page.css` file with the `LayoutExample` class.
4. Pay attention to the `@media` declaration.

### Current vs. Expected behavior

In development using the --turbo flag (next dev --turbo) the CSS output contains the declaration, but the value (named 'compact') is not replaced with the actual value: `@media compact {}`.

However, in case without the --turbo flag (next dev) and in case of production build (next build) the value is replaced with the actual value: `@media (max-width: 37.4375em) {}`.

### environment information

Operating System:
Platform: win32
Arch: x64
Version: Windows 10 Home
Available memory (MB): 32718
Available CPU cores: 12
Binaries:
Node: 20.10.0
npm: N/A
Yarn: N/A
pnpm: N/A
Relevant Packages:
next: 15.0.0-canary.197 // Latest available version is detected (15.0.0-canary.197).
eslint-config-next: 15.0.0-canary.197
react: 19.0.0-rc-77b637d6-20241016
react-dom: 19.0.0-rc-77b637d6-20241016
typescript: 5.6.3
Next.js Config:
output: N/A
