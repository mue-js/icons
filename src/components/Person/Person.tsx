import React, { FC } from 'react'
import { IconProps } from '../../types'

const Person: FC<IconProps> = ({ className, color = 'black', size = 16 }) => (
    <svg
        className={`text-${color} ${className ?? ''}`}
        width={size}
        height={size}
        viewBox="0 0 21 21"
        version="1.1"
    >
        <title>Person</title>
        <g xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
            <g fill="currentColor">
                <path
                    d="M9.1 10.4c2.872 0 5.2-2.328 5.2-5.2 0-2.872-2.328-5.2-5.2-5.2-2.872 0-5.2 2.328-5.2 5.2 0 2.872 2.328 5.2 5.2 5.2zm3.64 1.3h-.678c-.902.414-1.906.65-2.962.65-1.056 0-2.056-.236-2.962-.65H5.46C2.446 11.7 0 14.146 0 17.16v1.69c0 1.077.873 1.95 1.95 1.95h14.3c1.077 0 1.95-.873 1.95-1.95v-1.69c0-3.014-2.446-5.46-5.46-5.46z"
                    transform="translate(-181 -631) translate(150 563) translate(30 30) translate(1 38) translate(1.141 .101)"
                />
            </g>
        </g>
    </svg>
)
export default Person
