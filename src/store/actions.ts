export const LOAD_STATUS = '[STATUS] LOAD BY DATE';

export const loadStatus = (date: string) => ({
    type: LOAD_STATUS,
    payload: { date }
});