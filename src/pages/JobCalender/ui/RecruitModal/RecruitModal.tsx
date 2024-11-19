import Modal from '@/shared/component/Modal/Modal';

import styles from './RecruitModal.module.scss';
import classNames from 'classnames/bind';
import useModalStore from '@/shared/store/useModalStore';
import { useRecruitStore } from '@/shared/store/useRecruitStore';

const cx = classNames.bind(styles);
const RecruitModal = () => {
	const { isOpen } = useModalStore();
	const { selectedRecruit } = useRecruitStore();
	console.log(selectedRecruit);

	if (!isOpen || !selectedRecruit) return null;

	return (
		<Modal>
			<div className={cx('recruit-modal__container')}>
				<div className={cx('recruit-modal__company-info')}>
					<div className={cx('recruit-modal__company-name')}>
						{selectedRecruit.company_name}
					</div>
					<div className={cx('recruit-modal__jobs-info')}>
						<div className={cx('recruit-modal__jobs-title')}>
							{selectedRecruit.title}
						</div>
						<div className={cx('recruit-modal__jobs-due')}>
							{selectedRecruit.start_time} ~{' '}
							{selectedRecruit.end_time}
						</div>
						<div className={cx('recruit-modal__duty-tags')}>
							직무 정보들~
						</div>
					</div>
				</div>

				<div className={cx('recruit-modal__company-image')}>
					<img src={selectedRecruit.image_url} alt="회사 이미지" />
				</div>
			</div>
		</Modal>
	);
};

export default RecruitModal;
