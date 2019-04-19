import React from 'react'; // eslint-disable-line
import Convertor from '@aximario/react-convertor'
import { boolean, radios } from '@storybook/addon-knobs' // eslint-disable-line import/no-extraneous-dependencies

export default function () {
    return (
        <Convertor
            convert={boolean('convert', true)}
            mode={
                radios('mode', {
                    display: 'display',
                    exist: 'exist',
                }, 'exist')
            }
        >
            <p>pause</p>
            <p>resume</p>
        </Convertor>
    )
}
