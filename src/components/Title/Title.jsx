import PropTypes from 'prop-types';
import styles from '../Title/Title.module.css';

const Title = ({ text }) => {
    return (
        <h2 className={styles.title}>{text}</h2>
    )
}
Title.propTypes = {
    text:PropTypes.string.isRequired,
}

export default Title