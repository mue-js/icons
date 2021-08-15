import React, { FC } from 'react'
import { IconProps } from '../../types'

const Menu: FC<IconProps> = ({ className, color = 'black', size = 16 }) => (
    <svg
        className={`text-${color} ${className ?? ''}`}
        width={size}
        height={size}
        viewBox="0 0 26 21"
        version="1.1"
    >
        <title>Menu</title>
        <g xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
            <g fill="currentColor">
                <g transform="translate(-329.000000, -30.000000) translate(342.000000, 40.500000) scale(-1, 1) translate(-342.000000, -40.500000) translate(329.000000, 30.000000)">
                    <rect width="21" height="3" rx="1.5" />
                    <rect width="26" height="3" y="9" rx="1.5" />
                    <rect width="16" height="3" y="18" rx="1.5" />
                </g>
            </g>
        </g>
    </svg>
)
export default Menu
