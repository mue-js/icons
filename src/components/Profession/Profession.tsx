import React, { FC } from 'react'
import { IconProps } from '../../types'

const Profession: FC<IconProps> = ({ className = '', color = 'currentColor', size = 16 }) => {
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
                        d="M8.75 8.313c0 .241-.196.437-.437.437H5.688c-.242 0-.438-.196-.438-.437V7H0v3.938c0 .7.613 1.312 1.313 1.312h11.375c.7 0 1.312-.612 1.312-1.312V7H8.75v1.313zm3.938-5.688H10.5V1.313C10.5.613 9.888 0 9.188 0H4.813C4.113 0 3.5.613 3.5 1.313v1.312H1.313C.613 2.625 0 3.238 0 3.938v2.187h14V3.938c0-.7-.612-1.313-1.312-1.313zm-3.938 0h-3.5V1.75h3.5v.875z"
                        transform="translate(-494.000000, -524.000000) translate(467.000000, 244.000000) translate(7.000000, 270.000000) translate(20.000000, 10.000000) translate(0.499999, 1.187500)"
                    />
                </g>
            </g>
        </svg>
    )
}

export default Profession
