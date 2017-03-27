// JavaScript Document
export const addItem = ({ dispatch, store }, item) => {
	dispatch('ADD_TIEM', item);
}


export const deleteItem = ({ dispatch, store }) => {
	dispatch('DELETE_ITEM');
}