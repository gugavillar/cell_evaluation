import { Icon, IconProps } from '@chakra-ui/react'
import { memo } from 'react'

const MessageIcon = (props: IconProps) => {
  return (
    <Icon
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_503_172)">
        <path
          d="M14.1087 16.8502H48.5429C50.0758 16.8502 51.3188 15.6072 51.3188 14.0736C51.3188 12.5399 50.0758 11.2969 48.5429 11.2969H14.1087C12.5751 11.2969 11.332 12.5399 11.332 14.0736C11.332 15.6072 12.5751 16.8502 14.1087 16.8502Z"
          fill="currentColor"
        />
        <path
          d="M14.1087 27.9567H48.5429C50.0758 27.9567 51.3188 26.7137 51.3188 25.18C51.3188 23.6463 50.0758 22.4033 48.5429 22.4033H14.1087C12.5751 22.4033 11.332 23.6463 11.332 25.18C11.332 26.7137 12.5751 27.9567 14.1087 27.9567Z"
          fill="currentColor"
        />
        <path
          d="M32.6199 33.5098H14.1087C12.5751 33.5098 11.332 34.7528 11.332 36.2864C11.332 37.8194 12.5751 39.0631 14.1087 39.0631H32.6199C34.1528 39.0631 35.3959 37.8194 35.3959 36.2864C35.3959 34.7528 34.1528 33.5098 32.6199 33.5098Z"
          fill="currentColor"
        />
        <path
          d="M92.2231 33.51H62.938V2.96222C62.938 1.42856 61.6942 0.185547 60.1613 0.185547H2.77667C1.24302 0.185547 0 1.42856 0 2.96222V47.6695C0 49.2032 1.24302 50.4462 2.77667 50.4462H9.25558V62.2646C9.25558 63.4221 9.97385 64.4578 11.0567 64.8644C11.3749 64.984 11.7047 65.0413 12.0315 65.0413C12.8179 65.0413 13.5862 64.7072 14.124 64.0911L26.0381 50.4462H40.9485V75.7392C40.9485 77.2729 42.1923 78.5159 43.7252 78.5159H68.8624L80.7729 93.8865C81.3092 94.5787 82.1261 94.9628 82.9683 94.9628C83.2683 94.9628 83.5713 94.9136 83.8663 94.8128C84.9897 94.4287 85.7442 93.3727 85.7442 92.1854V78.5159H92.2231C93.7568 78.5159 94.9998 77.2729 94.9998 75.7392V36.2867C94.9998 34.753 93.7568 33.51 92.2231 33.51ZM24.777 44.8928C23.9746 44.8928 23.2129 45.2393 22.6852 45.843L14.8089 54.8638V47.6695C14.8089 46.1358 13.5659 44.8928 12.0323 44.8928H5.55335V5.7389H57.3846V33.51H43.7252C42.1923 33.51 40.9485 34.753 40.9485 36.2867V44.8928H24.777ZM89.4465 72.9625H82.9676C81.4339 72.9625 80.1909 74.2056 80.1909 75.7392V84.0692L72.4182 74.0388C71.892 73.3597 71.0817 72.9625 70.2236 72.9625H46.5019V39.0633H89.4465V72.9625Z"
          fill="currentColor"
        />
        <path
          d="M61.7624 65.0897C62.261 65.7645 63.0387 66.1769 63.8766 66.2117C63.9157 66.2139 63.9549 66.2146 63.994 66.2146C64.7898 66.2146 65.5494 65.8732 66.0778 65.2731L79.7213 49.7785C80.7345 48.6275 80.6229 46.8735 79.4719 45.8596C78.321 44.8463 76.567 44.9579 75.553 46.1089L64.181 59.0239L60.9499 54.6592C60.0374 53.4264 58.2986 53.1669 57.0664 54.0794C55.8336 54.9919 55.5741 56.7307 56.4866 57.9628L61.7624 65.0897Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_503_172">
          <rect width="95" height="95" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  )
}

MessageIcon.defaultProps = {
  width: ['40px', '70px', '95px'],
  height: '95px',
  color: 'green',
}

export const Message = memo(MessageIcon)