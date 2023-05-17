import PropTypes from 'prop-types';
import css from './Button.module.css'

export const Button = ({ onLoadMoreImg }) => (
  <button type="button" className={css.loadBtn} onClick={onLoadMoreImg()}>
    Show more
  </button>
);

Button.propTypes = {
  onLoadMoreImg: PropTypes.func.isRequired,
};
