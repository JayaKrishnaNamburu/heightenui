import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button, PrimaryButton } from '../packages/button'

storiesOf('Button', module)
  .add('Regular Button', () => (
    <Button text="Button" />
  ))
  .add('Primary Button', () => (
    <PrimaryButton text="Primary"/>
  ))
