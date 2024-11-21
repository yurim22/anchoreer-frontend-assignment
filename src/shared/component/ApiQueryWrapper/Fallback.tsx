import { FallbackProps } from 'react-error-boundary';

import classNames from 'classnames/bind';
import styles from './Fallback.module.scss';
import { getErrorMessage } from '@/shared/utils/getErrorMessage';

const cx = classNames.bind(styles);

const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	const { status } = error.response;
	const { title, content } = getErrorMessage(status);

	return (
		<div className={cx('fallback_container')}>
			<p>{title}</p>
			<p>{content}</p>

			<div className={cx('fallback_container__button')}>
				<button onClick={resetErrorBoundary}>다시 시도</button>
			</div>
		</div>
	);
};

export default Fallback;
