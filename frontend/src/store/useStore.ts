import { create } from 'zustand';
import axios from 'axios';

interface AppState {
	count: number;
	data: any[];
	loading: boolean;
	increment: () => void;
	decrement: () => void;
	fetchData: () => Promise<void>;
}

export const useStore = create<AppState>((set, get) => ({
	count: 0,
	data: [],
	loading: false,

	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),

	fetchData: async () => {
		set({ loading: true });
		try {
			// Example API call - replace with your backend URL
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts?_limit=5'
			);
			set({ data: response.data, loading: false });
		} catch (error) {
			console.error('Error fetching data:', error);
			set({ loading: false });
		}
	},
}));
