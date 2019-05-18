import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button, PrimaryButton, SecondaryButton } from '../packages/button';

storiesOf('Button', module)
  .add('Regular Button', () => (
    <Button text="Click !!" />
  ))
  .add('Primary Button', () => (
    <PrimaryButton text="Click" />
  ))
  .add('Secondary Button', () => (
    <SecondaryButton text="Click !!" />
  ))
