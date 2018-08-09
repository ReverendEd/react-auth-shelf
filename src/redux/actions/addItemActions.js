export const ITEM_ACTION = {
    ADD_ITEM : 'ADD_ITEM'
}

export const triggerAddItem = (payload) => ({
    type : ITEM_ACTION.ADD_ITEM,
    payload : payload
})
