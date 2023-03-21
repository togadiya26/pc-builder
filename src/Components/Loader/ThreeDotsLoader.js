import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

function ThreeDotsLoader() {
    return (
        <div>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default ThreeDotsLoader;