export const createProcessSlice = (set,get) => ({
    locationType: undefined,
    placeType: undefined,
    setLocationType: (locationType) => set({ locationType }),
    setPlaceType: (placeType) => set({ placeType }),
});