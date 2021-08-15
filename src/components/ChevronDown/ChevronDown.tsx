import React, { FC } from 'react'
import { IconProps } from '../../types'

const ChevronDown: FC<IconProps> = ({ className = '', color = 'currentColor', size = 16 }) => {
    return (
        <svg
            className={`text-${color} ${className ?? ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
        >
            <g fillRule="evenodd">
                <g fill="currentColor" fillRule="nonzero">
                    <path
                        d="M12.833.365c-.455-.452-1.19-.452-1.645 0L7 4.495 2.87.365c-.455-.452-1.19-.452-1.645 0-.22.22-.345.517-.345.828 0 .311.124.61.345.829l4.947 4.946c.219.221.517.345.828.345.311 0 .61-.124.828-.345l5.005-4.946c.221-.22.345-.518.345-.829 0-.31-.124-.609-.345-.828z"
                        transform="translate(-749 -1327) translate(495 849) translate(0 456) translate(254 22) translate(1 5)"
                    />
                </g>
            </g>
        </svg>
    )
}

export default ChevronDown
