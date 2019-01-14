import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';

storiesOf("Button", module)
    .add("with text", () => {
        return <Button onClick={action("clicked")}>Hello Button</Button>
    });