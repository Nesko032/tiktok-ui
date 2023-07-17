import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0b1d58fee5011827b610b33d694e6c51~c5_300x300.webp?x-expires=1689739200&x-signature=lC5zvY6vdkHUOMoXsF8C%2BUYNEvo%3D"
                alt="Hoaaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Pham Huu Phuc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>phamhuuphuc</span>
            </div>
        </div>
    );
}

export default AccountItem;
