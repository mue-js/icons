import React, { FC } from 'react'
import { IconProps } from '../../types'

const People: FC<IconProps> = ({ className, color = 'black', size = 16 }) => (
    <svg
        className={`text-${color} ${className ?? ''}`}
        width={size}
        height={size}
        viewBox="0 0 29 21"
        version="1.1"
    >
        <title>People</title>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
                transform="translate(-960.000000, -850.000000)"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
            >
                <g transform="translate(930.000000, 469.000000)">
                    <g transform="translate(31.000000, 378.000000)">
                        <path d="M13.5,13.45 C16.1114227,13.45 18.225,11.3364227 18.225,8.725 C18.225,6.11357727 16.1114227,4 13.5,4 C10.8885773,4 8.775,6.11357727 8.775,8.725 C8.775,11.3364227 10.8885773,13.45 13.5,13.45 Z M22.95,12.1 C24.8146957,12.1 26.325,10.5896957 26.325,8.725 C26.325,6.86030426 24.8146957,5.35 22.95,5.35 C21.0853043,5.35 19.575,6.86030426 19.575,8.725 C19.575,10.5896957 21.0853043,12.1 22.95,12.1 Z M13.5,12.1 C11.6395477,12.1 10.125,10.5854523 10.125,8.725 C10.125,6.86454773 11.6395477,5.35 13.5,5.35 C15.3604523,5.35 16.875,6.86454773 16.875,8.725 C16.875,10.5854523 15.3604523,12.1 13.5,12.1 Z M4.05,12.1 C5.91469574,12.1 7.425,10.5896957 7.425,8.725 C7.425,6.86030426 5.91469574,5.35 4.05,5.35 C2.18530426,5.35 0.675,6.86030426 0.675,8.725 C0.675,10.5896957 2.18530426,12.1 4.05,12.1 Z M22.95,10.75 C21.8320313,10.75 20.925,9.84296875 20.925,8.725 C20.925,7.60703125 21.8320313,6.7 22.95,6.7 C24.0679688,6.7 24.975,7.60703125 24.975,8.725 C24.975,9.84296875 24.0679688,10.75 22.95,10.75 Z M4.05,10.75 C2.93203125,10.75 2.025,9.84296875 2.025,8.725 C2.025,7.60703125 2.93203125,6.7 4.05,6.7 C5.16796875,6.7 6.075,7.60703125 6.075,8.725 C6.075,9.84296875 5.16796875,10.75 4.05,10.75 Z M26.325,17.5 C26.6962418,17.5 27,17.1962418 27,16.825 C27,14.9645477 25.5614227,13.45 23.79375,13.45 L22.10625,13.45 C21.4649918,13.45 20.8701645,13.6524918 20.3723602,13.9942352 C20.768898,14.2642105 21.1274918,14.5806168 21.443898,14.9392105 C21.6506332,14.8506332 21.8742188,14.8 22.10625,14.8 L23.79375,14.8 C24.8146957,14.8 25.65,15.7070312 25.65,16.825 C25.65,17.1962418 25.9537582,17.5 26.325,17.5 Z M0.675,17.5 C1.04624176,17.5 1.35,17.1962418 1.35,16.825 C1.35,15.7070312 2.18530426,14.8 3.20625,14.8 L4.89375,14.8 C5.12578125,14.8 5.34936676,14.8506332 5.55610199,14.9392105 C5.87250824,14.5806168 6.23530426,14.2642105 6.62763977,13.9942352 C6.12563324,13.6524918 5.53076477,13.45 4.89375,13.45 L3.20625,13.45 C1.43857727,13.45 0,14.9645477 0,16.825 C0,17.1962418 0.30375824,17.5 0.675,17.5 Z M19.575,22.9 C20.6929688,22.9 21.6,21.9929688 21.6,20.875 L21.6,18.9850082 C21.6,17.980954 21.2962418,17.0485855 20.7731415,16.2723602 C19.899852,14.9771957 18.4106415,14.29375 16.8792023,14.29375 C15.4701645,14.29375 15.1200165,14.8 13.5,14.8 C11.8799835,14.8 11.5298355,14.29375 10.1207977,14.29375 C8.58935852,14.29375 7.10014801,14.9771957 6.22685852,16.2723602 C5.70375824,17.0485855 5.4,17.980954 5.4,18.9850082 L5.4,20.875 C5.4,21.9929688 6.30703125,22.9 7.425,22.9 L19.575,22.9 Z M19.575,21.55 L7.425,21.55 C7.05375824,21.55 6.75,21.2462418 6.75,20.875 L6.75,18.9850082 C6.75,18.284671 6.95673523,17.6054688 7.34482727,17.0274918 C7.92704773,16.162648 8.96484375,15.64375 10.1165543,15.64375 C11.2725082,15.64375 11.6859375,16.15 13.5,16.15 C15.3140625,16.15 15.7274918,15.64375 16.8792023,15.64375 C18.030954,15.64375 19.06875,16.162648 19.6509293,17.0274918 C20.0390625,17.6054688 20.2457977,18.284671 20.2457977,18.9850082 L20.2457977,20.875 L20.25,20.875 C20.25,21.2462418 19.9462418,21.55 19.575,21.55 Z" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
)
export default People
