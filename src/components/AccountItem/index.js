import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '@/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.fullname}
                fallback="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-1/271524672_695562351821129_4890605205469645363_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=0ARLAO5tlAwAX8j4G7E&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBiIEHtvRf4FcgHP0MZPE2gFPPIbNT6zsUZAb8-UXbcHw&oe=639AB631"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
