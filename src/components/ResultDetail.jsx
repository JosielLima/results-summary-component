/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'
import { ReactComponent as MemoryIcon } from '../assets/images/icon-memory.svg'
import { ReactComponent as ReactIcon } from '../assets/images/icon-reaction.svg'
import { ReactComponent as VerbalIcon } from '../assets/images/icon-verbal.svg'
import { ReactComponent as VisualIcon } from '../assets/images/icon-visual.svg'

const getBackgroundColor = (type, opacity) => {
  switch (type) {
    case 'Memory':
      return `rgba(255, 178, 30, ${opacity})`;
    case 'Reaction':
      return `rgba(255, 85, 85, ${opacity})`;
    case 'Verbal':
      return `rgba(0, 187, 143, ${opacity})`;
    case 'Visual':
      return `rgba(17, 37, 214, ${opacity})`;
    default:
      return 'transparent';
  }
}

const boxType =  (theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  font-size: ${theme.TypographySize.body};
`

const resultDetailStyle = (type, opacity) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
  background-color: ${getBackgroundColor(type, opacity)};
`

const typeStyle = (type, opacity) => css`
  color: ${getBackgroundColor(type, opacity)};
  `

const totalStyle = (theme) => css`
  color: ${theme.colors.primary};
  opacity: 0.6;
`;

function ResultDetail({type, value}) {
  return (
    <div css={resultDetailStyle(type, 0.1)}>
      <div css={boxType}>
        {type === 'Memory' && <MemoryIcon />}
        {type === 'Reaction' && <ReactIcon />}
        {type === 'Verbal' && <VerbalIcon />}
        {type === 'Visual' && <VisualIcon />}
      <div css={typeStyle(type, 1)}>{type}</div>
      </div>
      <div>{value}<span css={totalStyle}> / 100</span></div>
    </div>
  )
}

ResultDetail.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
}

export default ResultDetail

