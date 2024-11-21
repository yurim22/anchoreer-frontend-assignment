import { create } from 'zustand';
import { IRecruits } from '../api/recruits/type';
import { IHierarchy } from '@/pages/JobCalender/type/company';

interface IRecruitStore {
	// 이번달 공고
	recruitInfo: IRecruits[];
	setRecruitInfo: (recruitInfo: IRecruits[]) => void;

	// 선택한 공고
	selectedRecruit: { currIdx: number; content: IRecruits };
	setSelectedRecruit: (id: number) => void;
	setMoveRecruit: (type: string) => void;

	// 선택한 직무
	selectedDuty: IHierarchy[];
	setSelectedDuty: (duty: IHierarchy[]) => void;
}

export const useRecruitStore = create<IRecruitStore>((set, get) => ({
	selectedRecruit: {
		currIdx: 0,
		content: {
			id: 0,
			company_name: '',
			title: '',
			start_time: '',
			end_time: '',
			image_url: '',
			duty_ids: [],
		},
	},
	setSelectedRecruit: (id: number) =>
		set((state) => {
			const currIdx = state.recruitInfo.findIndex(
				(info) => info.id === id,
			);
			const content =
				currIdx !== -1
					? state.recruitInfo[currIdx]
					: {
							id: 0,
							company_name: '',
							title: '',
							start_time: '',
							end_time: '',
							image_url: '',
							duty_ids: [],
						};

			return {
				selectedRecruit: {
					currIdx,
					content,
				},
			};
		}),

	setMoveRecruit: (type: string) => {
		set((state) => {
			let moveIdx;
			if (type === 'prev') {
				moveIdx = state.selectedRecruit.currIdx - 1;
			} else {
				moveIdx = state.selectedRecruit.currIdx + 1;
			}

			return {
				selectedRecruit: {
					currIdx: moveIdx,
					content:
						state.recruitInfo[moveIdx] ||
						state.recruitInfo[state.selectedRecruit.currIdx],
				},
			};
		});
	},

	recruitInfo: [],
	setRecruitInfo: (info) => {
		const currentInfo = get().recruitInfo;
		// 현재 상태와 새로운 정보가 다를 경우에만 업데이트
		if (JSON.stringify(currentInfo) !== JSON.stringify(info)) {
			set({ recruitInfo: info });
		}
	},

	selectedDuty: [],
	setSelectedDuty: (hierarchy) => {
		const currentDuty = get().selectedDuty;
		if (JSON.stringify(currentDuty) !== JSON.stringify(hierarchy)) {
			set({ selectedDuty: hierarchy });
		}
	},
}));
