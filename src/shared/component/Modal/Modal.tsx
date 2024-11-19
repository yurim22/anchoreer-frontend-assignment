// import useModalStore from '@/store/useModalStore';
import useModalStore from '@/shared/store/useModalStore';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface IModalProps {
	title?: string;
	content?: string;
	children?: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
	const { closeModal } = useModalStore();

	return (
		<div className={cx('modal-container')}>
			<div className={cx('modal-content')}>
				<div className={cx('modal-title')}>
					<button
						className={cx('modal-title__close-btn')}
						onClick={closeModal}
					>
						<img
							src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/x_btn-067cbbb80c6e60dd22a2f6302252529d5b10dd90d943cf943a80d124fb6f169c.png"
							alt="닫기"
						/>
					</button>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Modal;
