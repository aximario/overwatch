import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'
import Loading from '@aximario/react-loading'

import { Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Loading', module)
  .add('default', () => <Loading type='default' />)
  .add('dotFade', () => <Loading type='dotFade' />)
  .add('dotWave', () => <Loading type='dotWave' />)
  .add('spin', () => <Loading type='spin' />)
