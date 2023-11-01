import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

// export function* fetchCategoriesAsync() {
//   try {
//     const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
//     console.log(22);
//     yield put(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     console.log(33);
//     yield put(fetchCategoriesFailed(error));
//   }
// }

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories"); //yield put - is like a dispatch
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  ); //takes the latest actions (maybe from a bunch of actions)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]); // yield all means do no execute code below until all is finished executing
}
