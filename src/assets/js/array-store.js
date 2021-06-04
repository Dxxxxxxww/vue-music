import storage from 'good-storage'

function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    return
  }
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

function deleteFromArray(arr, val, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

export function save(item, key, compare, maxLen) {
  const itemList = storage.get(key, [])
  insertArray(itemList, item, compare, maxLen)
  storage.set(key, itemList)
  return itemList
}

export function remove(item, key, compare) {
  const itemList = storage.get(key, [])
  deleteFromArray(itemList, item, compare)
  storage.set(key, itemList)
  return itemList
}

export function load(key) {
  return storage.get(key, [])
}
