export interface AuthButtonProps {
	loading: boolean,
	type: 'login' | 'registration',
	onClick: (e: any) => void,
}