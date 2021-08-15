import React, { FC } from 'react'
import { IconProps } from '../../types'

const Info: FC<IconProps> = ({ className = '', color = 'currentColor', size = 16 }) => {
    return (
        <svg
            className={`text-${color} ${className ?? ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 15 15"
        >
            <g fillRule="evenodd">
                <g fill="currentColor" fillRule="nonzero">
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M7 0C3.134 0 0 3.135 0 7c0 3.867 3.134 7 7 7s7-3.133 7-7c0-3.865-3.134-7-7-7zm0 3.105c.655 0 1.185.53 1.185 1.185S7.655 5.476 7 5.476 5.815 4.945 5.815 4.29c0-.654.53-1.185 1.185-1.185zm1.58 7.17c0 .186-.151.338-.338.338H5.758c-.187 0-.339-.152-.339-.339v-.677c0-.187.152-.339.34-.339h.338V7.452h-.339c-.187 0-.339-.152-.339-.34v-.677c0-.187.152-.338.34-.338h1.806c.187 0 .338.151.338.338v2.823h.339c.187 0 .339.152.339.339v.677z"
                        transform="translate(-494.000000, -678.000000) translate(467.000000, 244.000000) translate(7.000000, 424.000000) translate(20.000000, 10.000000) translate(0.499999, 0.499999)"
                    />
                </g>
            </g>
        </svg>
    )
}

export default Info
