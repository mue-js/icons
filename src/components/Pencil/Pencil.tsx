import React, { FC } from 'react'
import { IconProps } from '../../types'

const Pencil: FC<IconProps> = ({ className, color = 'black', size = 16 }) => (
    <svg
        className={`text-${color} ${className ?? ''}`}
        width={size}
        height={size}
        viewBox="0 0 20 20"
        version="1.1"
    >
        <title>Pencil</title>
        <g xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
            <g fill="currentColor">
                <path
                    d="M11.374 3.635l4.99 4.991L5.528 19.464l-4.45.491c-.596.066-1.099-.438-1.033-1.033l.496-4.453L11.374 3.635zm8.078-.743L17.108.549c-.73-.731-1.916-.731-2.647 0l-2.205 2.204 4.991 4.991 2.205-2.204c.73-.732.73-1.917 0-2.648z"
                    transform="translate(-451 -631) translate(150 563) translate(301 68)"
                />
            </g>
        </g>
    </svg>
)
export default Pencil
