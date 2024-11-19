import Modal from '@/shared/component/Modal/Modal';

import styles from './RecruitModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const RecruitModal = () => {
	return (
		<Modal>
			<div className={cx('recruit-modal__container')}>
				<div className={cx('recruit-modal__company-info')}>
					<div className={cx('recruit-modal__company-name')}>
						회사이름
					</div>
					<div className={cx('recruit-modal__jobs-info')}>
						<div className={cx('recruit-modal__jobs-title')}>
							프엔개발자
						</div>
						<div className={cx('recruit-modal__jobs-due')}>
							기간
						</div>
						<div className={cx('recruit-modal__duty-tags')}>
							직무 정보들~
						</div>
					</div>
				</div>

				<div className={cx('recruit-modal__company-image')}>
					<img src="https://daoift3qrrnil.cloudfront.net/content_images/images/000/258/398/webp/240531_%EA%B8%B0%EA%B3%84%EC%82%AC%EC%97%85%EB%B3%B8%EB%B6%80_%EC%84%9C%EB%B9%84%EC%8A%A4%EB%B6%80.webp?1717145255" />
				</div>
			</div>
		</Modal>
	);
};

export default RecruitModal;
