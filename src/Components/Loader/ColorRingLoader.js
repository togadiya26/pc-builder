import React from 'react'
import { ColorRing } from 'react-loader-spinner'

function ColorRingLoader() {
    return (
        <div style={{textAlign: "end"}}>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['aliceblue', 'darkblue', 'aliceblue', 'darkblue', 'aliceblue']}
            />
        </div>
    )
}

export default ColorRingLoader;