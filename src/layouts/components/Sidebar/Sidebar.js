import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    IconHome,
    IconHomeActive,
    IconUsers,
    IconUsersActive,
    IconLive,
    IconLiveActive,
} from '@/components/Icons';
import config from '@/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<IconHome />}
                    activeIcon={<IconHomeActive />}
                ></MenuItem>
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<IconUsers />}
                    activeIcon={<IconUsersActive />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<IconLive />}
                    activeIcon={<IconLiveActive />}
                ></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;
