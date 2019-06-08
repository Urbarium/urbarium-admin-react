import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../components/Urbarium/Label'
import fonts from '../fonts';
import colors from '../colors';

const customFont = `
    ${fonts.subLabel}
    color: ${colors.passive};
`

storiesOf('Others/Label', module)
    .add('default', () => (
        <Label>Beneficiario</Label>
    ))

    .add('custom font', () => ([
        <Label font={customFont}>CÉDULA</Label>,
    ]))