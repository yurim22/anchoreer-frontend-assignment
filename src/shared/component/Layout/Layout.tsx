import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Layout = (props: { children: React.ReactNode }) => {
	return (
		<div className={cx('layout')}>
			<main className={cx('main')}>{props.children}</main>
		</div>
	);
};

export default Layout;
