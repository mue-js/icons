import React, { FC } from 'react'
import { IconProps } from '../../types'

const Reply: FC<IconProps> = ({ className, color = 'black', size = 16 }) => (
    <svg
        className={`text-${color} ${className ?? ''}`}
        width={size}
        height={size}
        viewBox="0 0 15 13"
        version="1.1"
    >
        <title>Reply</title>
        <g xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
            <g transform="translate(-201.000000, -5961.000000) translate(150.000000, 5248.000000) translate(0.000000, 213.000000) translate(30.000000, 311.000000) translate(0.000000, 83.000000)">
                <g>
                    <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="M.243 4.58L5.4.17C5.85-.216 6.562.097 6.562.697V3.02C11.268 3.073 15 4.007 15 8.425c0 1.783-1.16 3.549-2.441 4.472-.4.288-.97-.073-.823-.54 1.328-4.208-.63-5.325-5.174-5.39v2.55c0 .602-.711.914-1.162.528L.243 5.635c-.324-.278-.324-.777 0-1.055z"
                        transform="translate(21.000000, 106.000000)"
                    />
                </g>
            </g>
        </g>
    </svg>
)
export default Reply
