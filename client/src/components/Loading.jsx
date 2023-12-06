import React from 'react'
import { TailSpin } from 'react-loader-spinner'

export default function Loading() {
    return (
        <div id='loader'>
            <h1>Loading...</h1>
            <TailSpin
                height="80"
                width="80"
                color="#7f5af0"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}
