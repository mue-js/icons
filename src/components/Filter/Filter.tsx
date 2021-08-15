import React, { FC } from 'react'
import { IconProps } from '../../types'

const Filter: FC<IconProps> = ({ className, color = 'black', size = 16 }) => (
    <svg
        className={`text-${color} ${className ?? ''}`}
        width={size}
        height={size}
        viewBox="0 0 15 15"
        version="1.1"
    >
        <title>Filter</title>

        <g xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
            <g fill="currentColor">
                <g>
                    <g>
                        <path
                            d="M27.697 25.088c.159.171.246.395.246.627v6.82c0 .411.5.62.796.33l1.92-2.18c.257-.305.399-.456.399-.759v-4.21c0-.231.088-.455.246-.626l5.51-5.925c.412-.444.095-1.165-.516-1.165H22.702c-.61 0-.93.72-.515 1.165l5.51 5.923z"
                            transform="translate(-172.000000, -1084.000000) translate(150.000000, 479.000000) translate(0.000000, 587.000000)"
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
)
export default Filter
