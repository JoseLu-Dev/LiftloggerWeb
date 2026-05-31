import { build } from 'storybook/internal/core-server';

const [configDir, outputDir, angularBrowserTarget] = process.argv.slice(2);

await build({
  configDir: configDir ?? 'libs/frontend/.storybook',
  outputDir: outputDir ?? 'dist/storybook/frontend',
  mode: 'static',
  angularBrowserTarget: angularBrowserTarget ?? 'web:build',
  quiet: process.argv.includes('--quiet'),
  disableTelemetry: true,
});
