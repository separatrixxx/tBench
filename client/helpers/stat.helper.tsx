export function setStat(stat: number): string {
    if (stat > 999 && stat <= 999999) {
        return (Math.floor((stat / 1000) * 10) / 10 )  + 'K';
    } else if (stat > 999999) {
        return (Math.floor((stat / 1000000) * 10) / 10 )  + 'M';
    } else {
        return String(stat);
    }
}