import classNames from "classnames";
import './button.css';

export const Button = ({
    onClick,
    type,
    children
}) => {
    const btnClass = classNames({
        'btn': true,
        'btn--enable': type === 'enable',
        'btn--disable': type === 'disable'
    })
    return (
        <button className= {btnClass} onClick = {onClick}>
            {children}
        </button>
    )
}