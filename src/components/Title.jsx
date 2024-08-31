import styled from '@emotion/styled'

const Title = styled.h6`
  color: ${props => (props.primary ? props.theme.colors.primary : props.theme.colors.white)};
  opacity: ${props => (props.primary ? 1 : 0.8)};
  font-weight: 400;
  font-size: 24px;
  line-height: 0;
  height: 0;
  margin: 0;
  @media (max-width: 650px) {
   font-size: 1.3em;
  }
`

export default Title