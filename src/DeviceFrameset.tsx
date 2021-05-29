import React from 'react'

import type { DeviceFramesetProps } from './DeviceOptions'
import { DeviceOptions } from './DeviceOptions'

export { DeviceOptions, DeviceFramesetProps }

export const DeviceFrameset: React.FC<DeviceFramesetProps> = ({
    children, device, color, landscape
}) => (
    <div className={`marvel-device ${DeviceOptions[device].device} ${color ? color : ''} ${landscape ? 'landscape' : ''}`}>
        <div className="inner" />
        {device === 'Galaxy Note 8' ? <div className="overflow">
            <div className="shadow" />
        </div> : null}
        {device === 'iPhone X' ? <div className="notch">
            <div className="camera" />
            <div className="speaker" />
        </div> : null}
        <div className="top-bar" />
        <div className="sleep" />
        <div className="bottom-bar" />
        <div className="volume" />
        <div className="camera" />
        <div className="sensor" />
        <div className="speaker" />
        <div className="sensors" />
        <div className="more-sensors" />
        {device === 'iPhone X' ? <div className="overflow">
            <div className="shadow shadow--tr"></div>
            <div className="shadow shadow--tl"></div>
            <div className="shadow shadow--br"></div>
            <div className="shadow shadow--bl"></div>
        </div> : null}
        <div className="inner-shadow"></div>
        <div className="screen">
            {children}
        </div>
        <div className="home"></div>
        <div className="bottom-bar"></div>
    </div>
);
