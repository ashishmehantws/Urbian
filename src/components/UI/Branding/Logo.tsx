import React from 'react'
import styled from 'styled-components'
import { getAnyColor } from '../../../utils/getAnyColor'

interface ILogo {
  color?: string
}

const Svg = styled.svg`
  g {
    fill: ${getAnyColor};
  }
`

const Logo: React.FC<ILogo> = ({ color, ...props }) => (
  // <Svg
  //   {...props}
  //   color={color}
  //   width="96"
  //   height="25"
  //   xmlns="http://www.w3.org/2000/svg"
  // >
  //   <g fillRule="evenodd">
  //     <path d="M0 13.514h3.792c.052 1.134.955 2.14 2.657 2.14 1.522 0 2.58-.722 2.606-1.882.025-.8-.336-1.495-2.142-2.01l-2.14-.593C.85 9.957.18 7.663.18 6.065c0-3.17 2.708-5.31 6.113-5.31 3.431 0 6.01 2.037 6.01 5.439H8.54c0-1.186-.8-2.01-2.296-2.01-1.316 0-2.296.721-2.296 1.778 0 .464.18 1.315 1.909 1.804l2.115.67c4.308 1.238 4.927 3.66 4.876 5.362-.052 3.53-3.25 5.206-6.398 5.206C2.58 19.004 0 16.71 0 13.514zM18.55 6.684V18.72h-3.56V6.684zM14.525 2.225c0-1.186 1.032-2.088 2.244-2.088 1.213 0 2.193.902 2.193 2.088 0 1.185-.98 2.113-2.193 2.113-1.212 0-2.244-.928-2.244-2.113zM23.775 19.571c.413 1.109 1.832 1.933 3.044 1.933 2.734 0 3.483-1.881 3.328-4.278-.568 1.108-2.116 1.752-3.612 1.752-3.095 0-6.01-2.448-6.01-6.237 0-3.866 2.915-6.315 6.01-6.315 1.496 0 3.018.644 3.612 1.753V6.684h3.482v10.361c0 5.181-2.528 7.681-6.81 7.681-2.657 0-4.927-1.495-5.933-3.737.903-.438 1.986-.98 2.889-1.418zm6.294-6.907c0-1.805-1.418-2.836-2.915-2.836-1.522 0-2.889 1.134-2.889 2.836 0 1.804 1.367 2.938 2.89 2.938 1.47 0 2.914-1.186 2.914-2.938zM39.51 12.354v6.367h-3.587V6.684h3.586v1.752c.645-1.211 2.064-2.01 3.483-2.01 2.708 0 4.41 1.675 4.41 5.103v7.192h-3.585v-6.418c0-1.598-.877-2.397-2.09-2.397-1.263 0-2.218.618-2.218 2.448zM53.275 6.684V18.72h-3.56V6.684zM49.25 2.225c0-1.186 1.033-2.088 2.245-2.088 1.212 0 2.193.902 2.193 2.088 0 1.185-.98 2.113-2.193 2.113-1.212 0-2.244-.928-2.244-2.113zM63.288.137v3.428h-.593c-1.238 0-1.831.876-1.831 2.294v.825h2.424v2.835h-2.424v9.202h-3.612V9.519h-2.27V6.684h2.27v-.825c0-3.686 1.986-5.722 5.443-5.722h.593zM68.658 6.684V18.72h-3.56V6.684zM64.634 2.225c0-1.186 1.031-2.088 2.244-2.088 1.212 0 2.193.902 2.193 2.088 0 1.185-.98 2.113-2.193 2.113s-2.244-.928-2.244-2.113zM70.443 12.664c0-3.79 3.095-6.238 6.552-6.238 2.141 0 4.076.928 5.237 2.552l-2.915 2.087c-.49-.773-1.393-1.211-2.322-1.211-1.522 0-2.992 1.083-2.992 2.81 0 1.726 1.47 2.886 2.992 2.886.929 0 1.832-.438 2.322-1.211l2.915 2.062c-1.135 1.624-3.07 2.577-5.237 2.577-3.457 0-6.552-2.526-6.552-6.314zM92.327 18.72v-1.365c-.774 1.16-2.58 1.598-3.508 1.598-3.07 0-6.14-2.397-6.14-6.264 0-3.866 3.07-6.263 6.14-6.263.773 0 2.58.258 3.508 1.598v-1.34h3.56V18.72h-3.56zm-5.933-6.03c0 1.726 1.522 2.86 3.018 2.86 1.47 0 2.915-1.056 2.915-2.86 0-1.805-1.445-2.862-2.915-2.862-1.496 0-3.018 1.134-3.018 2.861z" />
  //   </g>
  // </Svg>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    color={color}
    width="96"
    height="25"
    viewBox="0 0 523.000000 135.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
    </metadata>
    <g
      transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M1960 726 c0 -343 -3 -644 -6 -670 l-7 -47 99 3 98 3 9 43 8 43 35
 -30 c58 -52 93 -64 187 -69 107 -5 160 8 238 60 181 121 245 444 133 668 -40
 79 -94 131 -173 169 -50 23 -68 26 -166 26 -103 0 -115 -2 -170 -30 l-60 -30
 3 243 4 242 -116 0 -116 0 0 -624z m505 1 c64 -35 98 -115 103 -238 8 -198
 -66 -309 -205 -309 -55 0 -118 26 -151 62 -22 24 -22 28 -20 238 l3 214 54 28
 c70 37 156 39 216 5z"
      />
      <path d="M2980 1225 l0 -125 120 0 120 0 0 125 0 125 -120 0 -120 0 0 -125z" />
      <path
        d="M0 831 c0 -236 4 -442 10 -472 5 -30 26 -86 45 -126 57 -115 146
 -183 288 -219 90 -24 319 -15 404 15 130 47 222 140 265 271 21 62 22 85 26
 508 l3 442 -120 0 -121 0 0 -400 c0 -249 -4 -418 -11 -450 -15 -71 -65 -139
 -125 -170 -37 -19 -67 -26 -132 -29 -171 -7 -264 70 -292 240 -5 36 -10 229
 -10 437 l0 372 -115 0 -115 0 0 -419z"
      />
      <path
        d="M1648 920 c-42 -13 -93 -47 -127 -85 l-30 -34 -6 54 -7 55 -99 0 -99
 0 0 -450 0 -450 115 0 115 0 0 299 0 299 25 31 c41 48 125 83 211 89 l74 5 0
 98 0 99 -72 -1 c-40 0 -85 -4 -100 -9z"
      />
      <path
        d="M3645 924 c-11 -3 -50 -14 -87 -25 l-68 -20 0 -88 0 -89 63 20 c91
 29 253 36 312 14 54 -21 86 -62 93 -121 l4 -43 -38 9 c-63 14 -235 11 -291 -6
 -119 -35 -195 -120 -215 -236 -22 -129 29 -244 132 -302 46 -27 66 -32 142
 -35 108 -5 160 8 233 59 l55 38 0 -28 c0 -59 3 -61 112 -61 l99 0 -3 343 c-3
 336 -3 343 -27 395 -29 65 -94 124 -170 154 -46 18 -79 22 -191 24 -74 2 -144
 0 -155 -2z m278 -520 l37 -7 0 -68 c0 -65 -1 -69 -33 -93 -108 -82 -250 -73
 -276 19 -17 61 8 117 64 141 32 14 144 18 208 8z"
      />
      <path
        d="M4781 911 c-58 -22 -69 -29 -123 -79 l-36 -34 -7 56 -7 56 -99 0 -99
 0 0 -450 0 -450 115 0 115 0 0 308 0 308 38 36 c77 76 207 103 267 56 52 -41
 55 -61 55 -398 l0 -310 116 0 115 0 -3 352 c-3 344 -4 354 -26 403 -28 60 -73
 109 -127 138 -59 31 -219 35 -294 8z"
      />
      <path d="M2990 460 l0 -450 115 0 115 0 0 450 0 450 -115 0 -115 0 0 -450z" />
    </g>
  </svg>
)

export default Logo
