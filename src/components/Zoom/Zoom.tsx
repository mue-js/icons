import { FC } from 'react'
import { IconProps } from '../../types'

const Zoom: FC<IconProps> = ({ className, color = 'black', size = 16 }) => (
    <svg
        className={`text-${color} ${className ?? ''}`}
        width={size}
        height={size}
        version="1.1"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            <title>Zoom</title>
            <ellipse
                strokeWidth="5"
                stroke="currentColor"
                ry="14.02506"
                rx="13.93207"
                id="svg_1"
                cy="16.57055"
                cx="16.93559"
                fill="none"
            />
            <path
                strokeWidth="5"
                transform="rotate(9.01937 34.9568 34.9232)"
                id="svg_3"
                d="m27.95494,25.68278c0.25576,-0.17051 23.27393,7.75798 15.85697,16.36848c-7.41697,8.6105 -19.18181,-11.8501 -19.18181,-11.8501c0,0 3.06909,-4.34788 3.32485,-4.51838z"
                stroke="currentColor"
                fill="none"
            />
        </g>
    </svg>
)
export default Zoom
