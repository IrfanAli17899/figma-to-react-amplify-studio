import React, { ReactNode } from 'react'
import config from './aws-exports';
import { Amplify } from 'aws-amplify';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import { studioTheme } from './ui-components'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config)

function Provider({ children }: { children: ReactNode }) {
    return (
        <AmplifyProvider theme={studioTheme}>
            {children}
        </AmplifyProvider>
    )
}

export default Provider