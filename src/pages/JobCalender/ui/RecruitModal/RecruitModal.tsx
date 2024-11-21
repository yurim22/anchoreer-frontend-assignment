import Modal from '@/shared/component/Modal/Modal';

import styles from './RecruitModal.module.scss';
import classNames from 'classnames/bind';
import useModalStore from '@/shared/store/useModalStore';
import { useRecruitStore } from '@/shared/store/useRecruitStore';

const cx = classNames.bind(styles);
const RecruitModal = () => {
	const { isOpen } = useModalStore();
	const {
		selectedRecruit: { content },
		setMoveRecruit,
	} = useRecruitStore();

	if (!isOpen || !content) return null;

	return (
		<Modal>
			<div className={cx('recruit-modal__container')}>
				<div className={cx('recruit-modal__company-info')}>
					<div className={cx('recruit-modal__company-name')}>
						{content.company_name}
					</div>
					<div className={cx('recruit-modal__jobs-info')}>
						<div className={cx('recruit-modal__jobs-title')}>
							{content.title}
						</div>
						<div className={cx('recruit-modal__jobs-due')}>
							{content.start_time} ~ {content.end_time}
						</div>
					</div>
				</div>

				<div className={cx('recruit-modal__company-image')}>
					<img src={content.image_url} alt="회사 이미지" />
				</div>
			</div>
			<div className={cx('recruit-modal__move-button-container')}>
				<div className={cx('recruit-modal__move-button', 'prev')}>
					<button
						type="button"
						onClick={() => setMoveRecruit('prev')}
					>
						◀️
					</button>
				</div>
				<div className={cx('recruit-modal__move-button', 'next')}>
					<button
						type="button"
						onClick={() => setMoveRecruit('next')}
					>
						▶️
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default RecruitModal;
