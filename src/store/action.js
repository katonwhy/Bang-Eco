const saveLocation = (location) => {
    return {
        type: 'SAVE_LOCATION',
        payload: location
    }
}

export default saveLocation