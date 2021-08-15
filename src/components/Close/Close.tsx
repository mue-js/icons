import React, { FC } from 'react'
import { IconProps } from '../../types'

const Close: FC<IconProps> = ({ className, color = 'black', size = 16 }) => (
    <svg
        className={`text-${color} ${className ?? ''}`}
        width={size}
        height={size}
        viewBox="0 0 15 15"
        version="1.1"
    >
        <title>Close</title>
        <g xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
            <g transform="translate(-201.000000, -6906.000000) translate(150.000000, 5248.000000) translate(0.000000, 213.000000) translate(30.000000, 311.000000) translate(0.000000, 638.000000)">
                <g fill="currentColor">
                    <path
                        d="M1.897.22l5.619 5.619 5.62-5.62c.267-.266.684-.29.977-.072l.084.073.617.616c.293.293.293.768 0 1.061l-5.62 5.619 5.62 5.62c.293.294.293.768 0 1.061l-.617.617c-.293.293-.767.293-1.06 0l-5.621-5.62-5.619 5.62c-.266.266-.683.29-.977.073l-.084-.073-.616-.617c-.293-.293-.293-.767 0-1.06l5.619-5.621-5.62-5.619c-.292-.293-.292-.768 0-1.06L.837.22c.293-.293.768-.293 1.061 0z"
                        transform="translate(20.983142, 495.983142)"
                    />
                </g>
            </g>
        </g>
    </svg>
)
export default Close
