import { setLocale } from 'helpers/locale.helper';


export function formatTime(date: string, locale: string | undefined): string {
	return date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4)
		+ ' ' + setLocale(locale).at + ' ' + date.slice(11, 16);
}