import classNames from 'classnames/bind';
import styles from '../FilterGroup/FilterGroup.module.scss';
import { IHierarchy } from '@/pages/JobCalender/type/company';
import { useCallback, useState } from 'react';
import { useRecruitStore } from '@/shared/store/useRecruitStore';

const cx = classNames.bind(styles);

interface DutyItemProps {
	duty: IHierarchy;
	setFilterDuty: (duty: IHierarchy) => void;
	selectedDuty?: IHierarchy;
}

const DutyItem: React.FC<DutyItemProps> = ({
	duty,
	setFilterDuty,
}: DutyItemProps) => {
	const { selectedDuty, setSelectedDuty } = useRecruitStore();
	const [checked, setChecked] = useState(true);

	const handleChecked = useCallback(() => {
		setChecked(!checked);
		if (checked) {
			setSelectedDuty(
				selectedDuty.filter((selected) => selected.id !== duty.id),
			);
		} else {
			setSelectedDuty([...selectedDuty, duty]);
		}
	}, [checked]);

	return (
		<li
			className={cx('duty__item')}
			key={duty.id}
			onClick={() => setFilterDuty(duty)}
		>
			<input type="checkbox" onChange={handleChecked} checked={checked} />
			<div className={cx('duty__name')}>{duty.name}</div>
			{duty.children && duty.children.length > 0 && (
				<div className={cx('right-indicator')}>
					<img src="https://d2bovrvbszerbl.cloudfront.net/assets/icon/ic_arrow_right_linear-00460b861bd24d0a530f9f5b1ae1d3bb506d5395717113b6ff7c59da0b40ade7.svg" />
				</div>
			)}
		</li>
	);
};

export default DutyItem;
