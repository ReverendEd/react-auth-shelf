export const SHELF_ACTIONS = {
    FETCH_ITEMS: 'FETCH_ITEMS',
    SET_ITEMS: 'SET_ITEMS',
    DISPLAY_ITEMS: 'DISPLAY_ITEMS',
    USER_ITEMS_COUNT: 'USER_ITEMS_COUNT',
    SET_ITEMS_COUNT: 'SET_ITEMS_COUNT'
}

export function fetchItems() {
    return { type: SHELF_ACTIONS.FETCH_ITEMS }
};

export function fetchCountAction() {
    return { type: SHELF_ACTIONS.USER_ITEMS_COUNT }
}