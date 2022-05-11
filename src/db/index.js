import SQLite from 'react-native-sqlite-storage';

//const db = SQLite.openDatabase('tienda.db');

const db = SQLite.openDatabase({ name: 'tienda2.db', createFromLocation : 1})

//SQLite.enablePromise(true);

export const initCategoria = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS categoria (id int,name varchar(255),description varchar(255),color varchar(255),image varchar(255))',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const getCategorias = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM categoria',
        [],
        (_, result) => {
          let data = [];
          var len = result.rows.length;
          for (let i = 0; i < len; i++) {
            let row = result.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};
/*
db.transaction((tx) => {
  tx.executeSql('SELECT * FROM categoria', [], (tx, results) => {
      console.log("Query select");

      // Get rows with Web SQL Database spec compliance.

      var len = results.rows.length;
      for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
        console.log(`name: ${row.name}`);
      }

    });
});
*/

export const initProducto = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS producto (id int, category int, name varchar(255), description varchar(255), color varchar(255), price decimal(10,2),image varchar(255))',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const getProductos = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM producto',
        [],
        (_, result) => {
          let data = [];
          var len = result.rows.length;
          for (let i = 0; i < len; i++) {
            let row = result.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};




/*export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS carrito (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL)',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const insertCarrito = (name, image, address, latitude, longitude) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO places (name, image, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)',
        [name, image, address, latitude, longitude],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          let data = [];
          var len = result.rows.length;
          for (let i = 0; i < len; i++) {
            let row = result.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};*/
