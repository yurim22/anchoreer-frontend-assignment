import { useState } from 'react';
import { format, subMonths, addMonths } from 'date-fns';

export const useMoveMonth = () => {
	const [current, setCurrent] = useState(new Date());

	const formatDate = (date: Date, form: string) => format(date, form);

	const prevMonth = () => {
		setCurrent(subMonths(current, 1));
	};

	const nextMonth = () => {
		setCurrent(addMonths(current, 1));
	};

	return {
		current,
		prevMonth,
		nextMonth,
		formatDate,
	};
};
