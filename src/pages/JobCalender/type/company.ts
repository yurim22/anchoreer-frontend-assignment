export interface ICompanyInfo {
	type: 'start' | 'end';
	company: string;
	id: number;
}

export interface IHierarchy {
	id: number;
	name: string;
	children: IHierarchy[];
}
