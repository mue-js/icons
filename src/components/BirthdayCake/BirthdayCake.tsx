import React, { FC } from 'react'
import { IconProps } from '../../types'

const BirthdayCake: FC<IconProps> = ({ className = '', color = 'currentColor', size = 16 }) => {
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
                        d="M13.125 11.25c-.82 0-.916-.938-2.183-.938-1.272 0-1.371.938-2.19.938-.81 0-.921-.938-2.19-.938-1.255 0-1.383.938-2.182.938-.825 0-.914-.938-2.19-.938-1.276 0-1.367.938-2.19.938V8.906C0 8.13.63 7.5 1.406 7.5h.469V3.281H3.75V7.5h1.875V3.281H7.5V7.5h1.875V3.281h1.875V7.5h.469c.776 0 1.406.63 1.406 1.406v2.344zm0 3.75H0v-2.813c1.27 0 1.37-.937 2.19-.937.819 0 .916.938 2.19.938 1.255 0 1.383-.938 2.183-.938.824 0 .914.938 2.19.938 1.27 0 1.37-.938 2.19-.938.805 0 .915.938 2.182.938V15zM2.812 2.812c-.52 0-.937-.417-.937-.937 0-.908.938-.674.938-1.875.351 0 .937.864.937 1.64 0 .777-.417 1.173-.938 1.173zm3.75 0c-.52 0-.937-.417-.937-.937 0-.908.938-.674.938-1.875.351 0 .937.864.937 1.64 0 .777-.417 1.173-.938 1.173zm3.75 0c-.52 0-.937-.417-.937-.937 0-.908.938-.674.938-1.875.351 0 .937.864.937 1.64 0 .777-.417 1.173-.938 1.173z"
                        transform="translate(-749.000000, -524.000000) translate(467.000000, 244.000000) translate(262.000000, 270.000000) translate(20.000000, 10.000000) translate(1.125000, 0.000000)"
                    />
                </g>
            </g>
        </svg>
    )
}

export default BirthdayCake
