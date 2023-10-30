export function getDateString(): number {
    return new Date().getTime();
}

export function getXDaysAgoOrAfterTime(x: number | null): number {
    if (!x) return 0;
    return new Date(new Date().getTime() + x * 24 * 60 * 60 * 1000).getTime();
}
