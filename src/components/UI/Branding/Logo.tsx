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
  <Svg
    {...props}
    color={color}
    width="96"
    height="25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fillRule="evenodd">
      <path d="M0 13.514h3.792c.052 1.134.955 2.14 2.657 2.14 1.522 0 2.58-.722 2.606-1.882.025-.8-.336-1.495-2.142-2.01l-2.14-.593C.85 9.957.18 7.663.18 6.065c0-3.17 2.708-5.31 6.113-5.31 3.431 0 6.01 2.037 6.01 5.439H8.54c0-1.186-.8-2.01-2.296-2.01-1.316 0-2.296.721-2.296 1.778 0 .464.18 1.315 1.909 1.804l2.115.67c4.308 1.238 4.927 3.66 4.876 5.362-.052 3.53-3.25 5.206-6.398 5.206C2.58 19.004 0 16.71 0 13.514zM18.55 6.684V18.72h-3.56V6.684zM14.525 2.225c0-1.186 1.032-2.088 2.244-2.088 1.213 0 2.193.902 2.193 2.088 0 1.185-.98 2.113-2.193 2.113-1.212 0-2.244-.928-2.244-2.113zM23.775 19.571c.413 1.109 1.832 1.933 3.044 1.933 2.734 0 3.483-1.881 3.328-4.278-.568 1.108-2.116 1.752-3.612 1.752-3.095 0-6.01-2.448-6.01-6.237 0-3.866 2.915-6.315 6.01-6.315 1.496 0 3.018.644 3.612 1.753V6.684h3.482v10.361c0 5.181-2.528 7.681-6.81 7.681-2.657 0-4.927-1.495-5.933-3.737.903-.438 1.986-.98 2.889-1.418zm6.294-6.907c0-1.805-1.418-2.836-2.915-2.836-1.522 0-2.889 1.134-2.889 2.836 0 1.804 1.367 2.938 2.89 2.938 1.47 0 2.914-1.186 2.914-2.938zM39.51 12.354v6.367h-3.587V6.684h3.586v1.752c.645-1.211 2.064-2.01 3.483-2.01 2.708 0 4.41 1.675 4.41 5.103v7.192h-3.585v-6.418c0-1.598-.877-2.397-2.09-2.397-1.263 0-2.218.618-2.218 2.448zM53.275 6.684V18.72h-3.56V6.684zM49.25 2.225c0-1.186 1.033-2.088 2.245-2.088 1.212 0 2.193.902 2.193 2.088 0 1.185-.98 2.113-2.193 2.113-1.212 0-2.244-.928-2.244-2.113zM63.288.137v3.428h-.593c-1.238 0-1.831.876-1.831 2.294v.825h2.424v2.835h-2.424v9.202h-3.612V9.519h-2.27V6.684h2.27v-.825c0-3.686 1.986-5.722 5.443-5.722h.593zM68.658 6.684V18.72h-3.56V6.684zM64.634 2.225c0-1.186 1.031-2.088 2.244-2.088 1.212 0 2.193.902 2.193 2.088 0 1.185-.98 2.113-2.193 2.113s-2.244-.928-2.244-2.113zM70.443 12.664c0-3.79 3.095-6.238 6.552-6.238 2.141 0 4.076.928 5.237 2.552l-2.915 2.087c-.49-.773-1.393-1.211-2.322-1.211-1.522 0-2.992 1.083-2.992 2.81 0 1.726 1.47 2.886 2.992 2.886.929 0 1.832-.438 2.322-1.211l2.915 2.062c-1.135 1.624-3.07 2.577-5.237 2.577-3.457 0-6.552-2.526-6.552-6.314zM92.327 18.72v-1.365c-.774 1.16-2.58 1.598-3.508 1.598-3.07 0-6.14-2.397-6.14-6.264 0-3.866 3.07-6.263 6.14-6.263.773 0 2.58.258 3.508 1.598v-1.34h3.56V18.72h-3.56zm-5.933-6.03c0 1.726 1.522 2.86 3.018 2.86 1.47 0 2.915-1.056 2.915-2.86 0-1.805-1.445-2.862-2.915-2.862-1.496 0-3.018 1.134-3.018 2.861z" />
    </g>
  </Svg>
)

export default Logo
