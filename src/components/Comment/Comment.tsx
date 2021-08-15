import React, { FC } from 'react'
import { IconProps } from '../../types'

const Comment: FC<IconProps> = ({ className, color = 'black', size = 16 }) => (
    <svg
        className={`text-${color} ${className ?? ''}`}
        width={size}
        height={size}
        viewBox="0 0 21 21"
        version="1.1"
    >
        <title>Comment</title>
        <g xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
            <g fill="currentColor">
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M15.022 5.778C15.022 2.586 11.66 0 7.512 0 3.361 0 0 2.586 0 5.778 0 7.016.51 8.158 1.372 9.1.888 10.19.09 11.057.08 11.068c-.079.083-.1.206-.054.314.047.109.148.174.264.174 1.322 0 2.416-.445 3.203-.903 1.163.567 2.539.903 4.02.903 4.148 0 7.51-2.586 7.51-5.778zm4.406 7.944c.863-.939 1.372-2.083 1.372-3.322 0-2.416-1.932-4.485-4.67-5.348.033.238.048.48.048.726 0 3.824-3.89 6.933-8.667 6.933-.39 0-.77-.029-1.145-.069 1.138 2.077 3.81 3.536 6.923 3.536 1.48 0 2.856-.332 4.02-.903.786.459 1.88.903 3.202.903.116 0 .22-.069.264-.174.047-.104.025-.227-.054-.314-.011-.01-.81-.874-1.293-1.968z"
                    transform="translate(-705 -909) translate(150 505) translate(555 403) translate(0 1) translate(.101 2.182)"
                />
            </g>
        </g>
    </svg>
)
export default Comment
