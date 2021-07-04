import React from 'react';
import './Button.scss';
import classNames from 'classnames';

// size: large, medium, small
function Button({ children, size, color, outline, fullWidth, ...rest }) {
    return <button className={classNames('Button', size, color, {outline, fullWidth})} {...rest}>{children}</button>
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;