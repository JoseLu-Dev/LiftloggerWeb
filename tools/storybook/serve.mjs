import { build } from 'storybook/internal/core-server';

const [configDir, port, angularBrowserTarget] = process.argv.slice(2);

await build({
  configDir: configDir ?? 'libs/frontend/.storybook',
  port: Number(port ?? 4400),
  mode: 'dev',
  angularBrowserTarget: angularBrowserTarget ?? 'web:build',
  disableTelemetry: true,
});
