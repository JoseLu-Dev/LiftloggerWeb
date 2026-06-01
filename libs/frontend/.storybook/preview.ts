import { applicationConfig, type Preview } from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const preview: Preview = {
  decorators: [applicationConfig({ providers: [provideAnimationsAsync()] })],
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: {
      default: 'canvas',
      values: [
        { name: 'canvas', value: '#05070B' },
        { name: 'surface', value: '#171D29' },
        { name: 'accent', value: '#3D86FF' },
      ],
    },
  },
};

export default preview;
