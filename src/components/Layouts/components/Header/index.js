import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '@/assets/images';
// Import Tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// Import components
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';
import Image from '@/components/Image';
import Search from '../Search';
// Import Icons components
import {
  IconCoins,
  IconGear,
  IconKeyboard,
  IconLanguage,
  IconLogout,
  IconMessage,
  IconMoon,
  IconMoreMenu,
  IconPaperPlain,
  IconPlus,
  IconQuestion,
  IconUser,
} from '@/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <IconLanguage width={20} height={20} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Ngôn ngữ',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <IconQuestion width={20} height={20} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <IconKeyboard width={20} height={20} />,
    title: 'Phím tắt bàn phím',
  },
  {
    icon: <IconMoon width={20} height={20} />,
    title: 'Chế độ tối',
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'languege':
        // handle
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <IconUser width={20} height={20} />,
      title: 'Xem hồ sơ',
      to: '/user',
    },
    {
      icon: <IconCoins width={20} height={20} />,
      title: 'Nhận xu',
      to: '/coins',
    },
    {
      icon: <IconGear width={20} height={20} />,
      title: 'Cài đặt',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <IconLogout width={20} height={20} />,
      title: 'Đăng xuất',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <Search />

        <div className={cx('actions')}>
          <Button text leftIcon={<IconPlus width={20} height={20} />}>
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <Tippy delay={[200]} content="Tin nhắn" placement="bottom">
                <button className={cx('action-button')}>
                  <IconPaperPlain width={26} height={26} />
                </button>
              </Tippy>

              <Tippy delay={[200]} content="Hộp thư" placement="bottom">
                <button className={cx('action-button')}>
                  <IconMessage width={32} height={32} />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <Button primary>Đăng nhập</Button>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-1/271524672_695562351821129_4890605205469645363_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=0ARLAO5tlAwAX8j4G7E&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBiIEHtvRf4FcgHP0MZPE2gFPPIbNT6zsUZAb8-UXbcHw&oe=639AB631"
                className={cx('user-avatar')}
                alt="avatar"
                // fallback="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/51764eb35cdc03f8457b41b1575dea42.jpeg?x-expires=1671076800&x-signature=YIfrVs7qQ5bLTTpCTsfqTxL0jl4%3D"
              />
            ) : (
              <button className={cx('more-button')}>
                <IconMoreMenu width={20} height={20} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
