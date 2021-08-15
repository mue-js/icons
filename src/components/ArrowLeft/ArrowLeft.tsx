import React, { FC } from 'react'
import { IconProps } from '../../types'

const ArrowLeft: FC<IconProps> = ({ className = '', color = 'currentColor', size = 16 }) => {
    return (
        <svg
            className={`text-${color} ${className ?? ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 10 10"
        >
            <g fillRule="evenodd">
                <g fill="currentColor" fillRule="nonzero">
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M6.51 10.299l-.561.56c-.238.239-.622.239-.857 0L.178 5.95c-.237-.238-.237-.622 0-.857L5.092.178c.237-.237.622-.237.857 0l.56.561c.241.24.236.632-.01.867L3.455 4.508h7.264c.337 0 .607.27.607.607v.808c0 .337-.27.607-.607.607H3.454L6.5 9.432c.247.235.253.627.01.867z"
                        transform="translate(-684.000000, -167.000000) translate(667.000000, 160.000000) translate(0.000000, 2.000000) translate(16.348085, 4.358454)"
                    />
                </g>
            </g>
        </svg>
    )
}

export default ArrowLeft
