import Providers from '@/apps/provider/QueryProvider';
import { Layout } from '@/shared/component';
import JobCalender from '@/pages/JobCalender';
import '@/apps/styles/index.scss';

function App() {
	return (
		<Providers>
			<Layout>
				<JobCalender />
			</Layout>
		</Providers>
	);
}

export default App;
