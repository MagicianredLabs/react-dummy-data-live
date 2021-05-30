import { USE_DUMMY_DATA } from './../config';
import { dummydatalist } from './../dummydata/categories';

/**
 * A Singleton data store
 */
 let _lastId = USE_DUMMY_DATA ? dummydatalist.reduce((prev, current) => (prev.id > current.id) ? prev : current) : 0;
 let _data = USE_DUMMY_DATA ? dummydatalist : [];

 const getAndSetNewIdentifier = () => {
     return ++_lastId;
 }
 const handleAddItem = (item) => {
    _data.push(item);
 }
 const handleRemoveItem = (id) => {
    _data = _data.filter(item => item.id !== id);
 }
 
 const CategoriesStore = {
     getItems: () => _data,
     addItem: (item) => {
         item.id = getAndSetNewIdentifier();
         handleAddItem(item);
     },
     removeItemById: (id) => {
         handleRemoveItem(id);
     }
 };
 
 Object.freeze(CategoriesStore);
 export default CategoriesStore;