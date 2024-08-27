import styled from '@emotion/styled'

const Title = styled.h6`
  color: ${props => (props.primary ? props.theme.colors.primary : props.theme.colors.white)};
  font-size: 24px;
`

export default Title