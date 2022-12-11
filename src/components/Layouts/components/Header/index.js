import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '@/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <div className={cx('search')}>
          <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
