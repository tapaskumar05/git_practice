(async () => {
    let totalStorageInMB = 0;
    await navigator.storage.estimate().then((storage) => {
        console.log(storage.quota);
        totalStorageInMB = storage.quota / 1024 / 1024;
        console.log(totalStorageInMB);
    });

    if (totalStorageInMB > 1000000000) {
        window.idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        if (window.idb) {
            console.log('Index DB supported');
        }
    } else {
        console.log('Index DB Replica in Work!');
        window.idb = new iDB();
    }

    let request = window.idb.open("QuizQuestDatabase", 1),
        db,
        tx,
        store,
        indexx;

    request.onupgradeneeded = function (e) {
        let db = request.result,
            store = db.createObjectStore("QuestionsStore", {
                keyPath: "questionText"
            }),
            indexx = store.createIndex("questionText", "questionText", { unique: false });
    }

    request.onerror = function (e) {
        console.log("There was an error: ", e);
    }

    request.onsuccess = function (e) {
        db = request.result;
        tx = db.transaction("QuestionsStore", "readwrite");
        store = tx.objectStore("QuestionsStore");
        indexx = store.index("questionText");

        db.onerror = function (e) {
            console.log("Error ", e);
        }

        store.put({
            qID: 1,
            questionText: "The sky is blue.",
            correctAnswer: true,
            studentAnswer: true,
            result: true
        });
        store.put({
            qID: 2,
            questionText: "The grass is green.",
            correctAnswer: true,
            studentAnswer: true,
            result: true
        });

        // let q1 = store.get(1);
        let qs = indexx.get("The grass is green.");

        // q1.onsuccess = function () {
        //     console.log(q1.result);
        //     console.log(q1.result.questionText);
        // }

        qs.onsuccess = function () {
            console.log(qs.result);
            console.log(qs.result.questionText);
        }

        tx.oncomplete = function () {
            db.close();
        }
    }
})();