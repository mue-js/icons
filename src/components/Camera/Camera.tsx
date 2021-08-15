import React, { FC } from 'react'
import { IconProps } from '../../types'

const Camera: FC<IconProps> = ({ className, color = 'black', size = 16 }) => (
    <svg
        className={`text-${color} ${className ?? ''}`}
        width={size}
        height={size}
        viewBox="0 0 26 17"
        version="1.1"
    >
        <title>Camera</title>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
                transform="translate(-961.000000, -805.000000)"
                fill="currentColor"
                fillRule="nonzero"
            >
                <g transform="translate(930.000000, 469.000000)">
                    <g transform="translate(31.000000, 336.017982)">
                        <path d="M25.367958,1.980558 C25.096284,1.812564 24.756948,1.797228 24.471234,1.940004 L18.431982,4.960062 L18.431982,2.7648 C18.431982,1.237842 17.19414,0 15.667182,0 L2.7648,0 C1.237842,0 0,1.237842 0,2.7648 L0,13.824 C0,15.350958 1.237842,16.5888 2.7648,16.5888 L15.667182,16.5888 C17.19414,16.5888 18.431982,15.350958 18.431982,13.824 L18.431982,11.628738 L24.471234,14.65344 C24.926562,14.880942 25.480062,14.696316 25.707618,14.240988 C25.77231,14.11155 25.805628,13.968666 25.8048324,13.824 L25.8048324,2.7648 C25.8048324,2.445336 25.639686,2.148606 25.367958,1.980558 Z M16.5888,13.824 C16.5888,14.333004 16.176186,14.745618 15.667182,14.745618 L2.7648,14.745618 C2.255796,14.745618 1.843182,14.333004 1.843182,13.824 L1.843182,2.7648 C1.843182,2.255796 2.255796,1.843182 2.7648,1.843182 L15.667182,1.843182 C16.176186,1.843182 16.5888,2.255796 16.5888,2.7648 L16.5888,13.824 Z M23.961582,12.332898 L18.431982,9.568098 L18.431982,7.02081 L23.961582,4.25601 L23.961582,12.332898 L23.961582,12.332898 Z" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
)
export default Camera