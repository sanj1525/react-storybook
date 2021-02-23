import Center from '../src/Components/Center/Center';
import { addDecorator } from '@storybook/react';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

addDecorator(story => <Center>{story()}</Center>)