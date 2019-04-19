import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line import/no-extraneous-dependencies
import { withInfo } from '@storybook/addon-info' // eslint-disable-line import/no-extraneous-dependencies

import convert from './components/convertor'

const componentStory = storiesOf('组件', module)
componentStory.addDecorator(withKnobs)
componentStory.addDecorator(withInfo)
componentStory.add('Convertor', convert, {
    info: {
        text: `
            # react-convertor

            Convertor 组件只接受两个 child，根据配置展示其中的一个
            
            ## 使用
            
            ~~~sh
            npm i @aximario/react-convertor -S
            ~~~
            
            ## 属性
            1. convert {boolean} default: false 是否展示第二个孩子
            2. mode {'display'|'exist'} default: 'exist' 展示方式：display 通过样式控制，exist 通过切换dom控制
            
            ~~~jsx
            // 展示 pause
            <Convertor>
                <p>pause</p>
                <p>resume</p>
            </Convertor>
            
            // 展示 resume
            <Convertor convert>
                <p>pause</p>
                <p>resume</p>
            </Convertor>
            
            // 展示 pause 方式为通过样式控制
            <Convertor display="display">
                <p>pause</p>
                <p>resume</p>
            </Convertor>
            ~~~
        `,
    },
})
