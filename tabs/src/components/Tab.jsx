import { Button } from '@fluentui/react-northstar'
import React from 'react'
import { Welcome } from './sample/Welcome'

var showFunction = Boolean(process.env.REACT_APP_FUNC_NAME)

export default function Tab() {
    return (
        <div>
            <h1>HELLO MOTHERFUCKERS!!!!!!!!!!!!!!</h1>
            <Button primary content="Authorize" />
            <Welcome showFunction={showFunction} />
        </div>
    )
}
