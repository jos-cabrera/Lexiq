import { useStore } from './store/useStore';

function App() {
	const { count, data, loading, increment, decrement, fetchData } =
		useStore();

	return (
		<div className='min-h-screen bg-gray-100 py-8'>
			<div className='max-w-4xl mx-auto px-4'>
				{/* Header */}
				<div className='text-center mb-8'>
					<div className='flex justify-center items-center gap-4 mb-4'></div>
					<h1 className='text-4xl font-bold text-gray-800 mb-2'>
						Vite + React + TypeScript
					</h1>
					<p className='text-gray-600'>
						With Zustand, Axios, and Tailwind CSS
					</p>
				</div>

				{/* Counter Section */}
				<div className='bg-white rounded-lg shadow-md p-6 mb-8'>
					<h2 className='text-2xl font-semibold mb-4 text-center'>
						Zustand Counter
					</h2>
					<div className='flex items-center justify-center gap-4'>
						<button
							onClick={decrement}
							className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors'>
							-
						</button>
						<span className='text-3xl font-bold text-gray-800 min-w-[3rem] text-center'>
							{count}
						</span>
						<button
							onClick={increment}
							className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors'>
							+
						</button>
					</div>
				</div>

				{/* API Data Section */}
				<div className='bg-white rounded-lg shadow-md p-6'>
					<div className='flex justify-between items-center mb-4'>
						<h2 className='text-2xl font-semibold'>
							API Data (Axios)
						</h2>
						<button
							onClick={fetchData}
							disabled={loading}
							className='bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors'>
							{loading ? 'Loading...' : 'Fetch Data'}
						</button>
					</div>

					{data.length > 0 && (
						<div className='space-y-3'>
							{data.map((item: any) => (
								<div
									key={item.id}
									className='border border-gray-200 rounded-lg p-4'>
									<h3 className='font-semibold text-lg text-gray-800 mb-2'>
										{item.title}
									</h3>
									<p className='text-gray-600 text-sm'>
										{item.body}
									</p>
								</div>
							))}
						</div>
					)}

					{data.length === 0 && !loading && (
						<p className='text-gray-500 text-center py-8'>
							Click "Fetch Data" to load some example data
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
