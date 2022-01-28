/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */

//creates a function called addNewStore with parameters stores an array of store objects and the object store representing a single store
function addNewStore(stores, store) {
  
  //adding the object store to the array of stores
  stores.push(store);
  
  //return the array of stores with the new object store added to it
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */

//creates a function called removeStoreAtPosition with parameters stores an array of store objects and index which is th index of the store to be removed from the array 
function removeStoreAtPosition(stores, index) {
  
  //uses the splice method on the array stores to remove index specified, one element 
  stores.splice(index, 1);
  
  //return the array or objects calles store with the index element removed 
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */

//creates a function called duplicateStore with the parameter store which is an object representing a single store
function duplicateStore(store) {
  
  //uses let to declare a variable called secondStore to equals a copy (Object.assign()) of the object {}, store
  let secondStore = Object.assign({}, store);
  
  //inside the variable secondStore the object (.) boardGames to equal a copy (Object.assign()) of the array [], store with the object (.) boardGames
  secondStore.boardGames = Object.assign([], store.boardGames);
  
  //inside the variable secondStore the object (.) address will equal a copy (Object.assign()) of the object {}, store with the object (.) address
  secondStore.address = Object.assign ( {}, store.address);
  
   // return the variable secondStore with the copies of the array store with the objects store, boardGames and address inside
  return secondStore
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
