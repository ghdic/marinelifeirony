import * as React from 'react';
import styled, {css} from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({theme, color}) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }

      &:active {
        background: ${darken(0.1, selected)};
      }
      
      ${props => props.outline && 
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
    `}
    `
  }}
`

const fullWidthStyle = css`
  ${props => props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
      margin-left: 0;
      margin-top: 1rem;
      }
    `}
`

const sizes = {
    large: {
        height: '3rem',
        lineHeight: '3rem',
        fontSize: '1.25rem'
    },
    medium: {
        height: "2.25rem",
        lineHeight: '2.25rem',
        fontSize: '1rem'
    },
    small: {
        height: "1.75rem",
        lineHeight: '1.75rem',
        fontSize: "0.875rem"
    }
}

const sizeStyles = css`
  ${({size}) => css`
    height: ${sizes[size].height};
    line-height: ${sizes[size].lineHeight};
    font-size: ${sizes[size].fontSize};
   `}
`

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: wheat;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  
  
  
  & + & {
    margin-left: 1rem;
  }

  ${colorStyles}
  ${sizeStyles}
  ${fullWidthStyle}
`

export default function Button({children, color, size, outline, ...rest}){
    return (
        <div>
            <StyledButton color={color} size={size} outline={outline} {...rest}>{children}</StyledButton>
        </div>
    );

};

Button.defaultProps = {
    color: 'blue',
    size: 'medium'
};