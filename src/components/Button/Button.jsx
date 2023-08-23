import PropTypes from 'prop-types';
import style from '../Button/Button.module.css'

const Button = ({ text, onClick }) => {
    return (
        <button className={style.button} type='button' onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
}

export default Button