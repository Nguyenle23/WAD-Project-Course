import {
    createListFailure,
    createListStart,
    createListSuccess,
    deleteListFailure,
    deleteListStart,
    deleteListSuccess,
    getListsFailure,
    getListsStart,
    getListsSuccess,
} from './ListAction';
import { fetchList, uploadList, removeList } from '../../actions/index';

export const getLists = async(dispatch) => {
    dispatch(getListsStart());
    try {
        fetchList().then((res) => {
            var render
            const listData = res.data
            for (var i of listData) {
                if (i.isDestroy === true) {
                    render = listData.filter(list => list.isDestroy === false)
                }
                render = listData.filter(list => list.isDestroy === false)
            }
            dispatch(getListsSuccess(render));
        })
    } catch (err) {
        dispatch(getListsFailure());
    }
};

//create
export const createList = async(list, dispatch) => {
    dispatch(createListStart());
    try {
        uploadList(list).then((res) => {
            dispatch(createListSuccess(res.data));
        });
    } catch (err) {
        dispatch(createListFailure());
    }
};

//delete
export const deleteList = async(id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await removeList(id);
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure());
    }
};