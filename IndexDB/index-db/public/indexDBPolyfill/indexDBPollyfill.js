const indexDBReplica = {};
let currentIndex,
    currentKeyPath;

const createIndex = function (parentObj, index1, index2, obj) {
    const currentObj = parentObj[index1] = null;
    return currentObj;
};

const createObjectStore = function (parentObj, store, keyPathObj) {
    const currentObj = parentObj[store] = {};
    const returnObj = {
        createIndex: (index1, index2, obj) => createIndex(currentObj, index1, index2, obj)
    };
    currentKeyPath = keyPathObj.keyPath;
    return returnObj;
};

const get = function (dbName, store, i, key) {
    const returnObj = {
        result: indexDBReplica[dbName][store][i][key],
    };
    setTimeout (() => {
        returnObj.onsuccess();
    });
    return returnObj;
};

const index = function (dbName, store, i) {
    const returnObj = {
        get: (key) => get(dbName, store, i, key)
    };
    currentIndex = i;
    return returnObj;
};

const put = function (dbName, store, obj) {
    indexDBReplica[dbName][store][currentIndex] = {
        ...indexDBReplica[dbName][store][currentIndex],
        [obj[currentKeyPath]]: obj
    }
    return;
};

const objectStore = function (dbName, store) {
    const returnObj = {
        index: (i) => index(dbName, store, i),
        put: (obj) => put(dbName, store, obj)
    }
    return returnObj;
};

const transaction = function (dbName, store, operation) {
    const returnObj = {
        objectStore: (store) => objectStore(dbName, store)
    };
    return returnObj;
};

const open = function (dbName, dbVersion, cb) {
    const currentObj = indexDBReplica[dbName] = {};
    const returnObj = {
        result: {
            createObjectStore: (store, keyPathObj) => createObjectStore(currentObj, store, keyPathObj),
            transaction: (store, operation) => transaction(dbName, store, operation)
        },
        oldVersion: 0
    };
    if (!cb) {
        setTimeout (() => {
            returnObj.onupgradeneeded();
            setTimeout(() => {
                returnObj.onsuccess();
            });
        });
        return returnObj;
    } else {
        cb (returnObj);
    }
};

const iDB = function () {};
iDB.prototype.cmp = function() {};
iDB.prototype.databases = function() {};
iDB.prototype.deleteDatabase = function() {};
iDB.prototype.open = open;

window.iDB = iDB;
window.indexDBReplica = indexDBReplica;

// export default iDB;