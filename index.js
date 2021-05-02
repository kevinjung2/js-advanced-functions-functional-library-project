const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const ind in collection) {
        callback(collection[ind], ind, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = []
      for (const ind in collection) {
        newCollection.push(callback(collection[ind], ind, collection))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      for (const ind in collection) {
        if (!acc) {
          acc = collection[ind]
        } else {
          acc = callback(acc, collection[ind], collection)
        }
      }
      return acc
    },

    find: function(collection, predicate) {
      for (const ind in collection) {
        if (predicate(collection[ind])) {
          return collection[ind]
        }
      }
    },

    filter: function(collection, predicate) {
      const ret = []
      for (const ind in collection) {
        if (predicate(collection[ind])) {
          ret.push(collection[ind])
        }
      }
      return ret
    },

    size: function(collection) {
      let counter = 0
      for (const ind in collection) {
        counter ++
      }
      return counter
    },

    first: function(collection, n) {
      if (n) {
        return collection.slice(0, n)
      } else {
        return collection[0]
      }
    },

    last: function(collection, n) {
      if (n) {
        return collection.slice(n * -1)
      } else {
        return collection.slice(-1)[0]
      }
    },

    compact: function(array) {
      const ret = []
      for (const ind in array) {
        if (array[ind]) {
          ret.push(array[ind])
        }
      }
      return ret
    },

    sortBy: function(array, callback) {
      const newArr = [...array]
      return newArr.sort(function(a,b) {return callback(a) - callback(b)})
    },

    flatten: function(array, single = false, newArr = []) {
      function flat(newArray, array) {
        for (const val of array) {
          newArr.push(val)
        }
      }
      if (!Array.isArray(array)) return newArr.push(array)
      if (single) {
        for (const ind in array) {
          if (Array.isArray(array[ind])) {
            flat(newArr, array[ind])
          } else {
            newArr.push(array[ind])
          }
        }
      } else {
        for(const val of array) {
            this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      const arr = []
      for (const ind in object) {
        arr.push(ind)
      }
      return arr
    },

    values: function(object) {
      const arr = []
      for (const ind in object) {
        arr.push(object[ind])
      }
      return arr
    },

    functions: function(object) {
      const functionNames = []
      for (let key in object) {
        if (typeof object[key] === "function"){
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    }

  }
})()

fi.libraryMethod()
