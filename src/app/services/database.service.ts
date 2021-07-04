2
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, identity, Observable } from 'rxjs'


export interface Cat {
  id: number,
  name: string,
  child: any,
}

@Injectable({
  providedIn: 'root'
})


export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  mainCategory = new BehaviorSubject([]);
  constructor(private plt: Platform,
    private sqlitePorter: SQLitePorter,
    private sqlite: SQLite,
    private http: HttpClient) {
    this.createDB();
  }

  async createDB() {
    // this.plt.ready().then( async() => {
    //  await this.sqlite.create({
    //     name: 'database.db',
    //     location: 'default'
    //   }).then((db: SQLiteObject) => {
    //       this.database = db;
    //       this.seedDatabase();
    //   });
    // // });

    this.plt.ready().then(async () => {

      this.database = await this.sqlite
        .create({
          name: "ionic_sqlite_crud",
          location: "default",
        })
      // .then((db: SQLiteObject) => {
      //   this.database = db;
      //         this.seedDatabase();
      // })
      // .catch((e) => {
      //   alert("error on creating database " + JSON.stringify(e));
      // });
      this.seedDatabase();
    });
  }
  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text' })
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(_ => {
            this.loadmainCategory();
            this.dbReady.next(true);
          })
          .catch(e => console.error(e));
      });
  }
  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getmainCategory(): Observable<Cat[]> {
    return this.mainCategory.asObservable();
  }



  getAllRecord() {
    return this.database.executeSql('SELECT * FROM mainCategory', []).then(async data => {
      let categories: any[] = [];
      console.log("data : ", data)
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          categories.push({
            id: data.rows.item(i).id,
            name: data.rows.item(i).name,
            parentId: data.rows.item(i).parentId,
          });
        }
      }
      return categories
    });


  }

  loadmainCategory() {
    return this.database.executeSql("SELECT * FROM mainCategory WHERE parentId = ''", []).then(async data => {
      let categories: Cat[] = [];
      console.log("data : ", data)

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {

          let child = await this.database.executeSql('SELECT * FROM mainCategory WHERE parentId IS ' + data.rows.item(i).id, []).then(async data => {
            let tempCat = [];
            if (data.rows.length > 0) {
              for (var j = 0; j < data.rows.length; j++) {
                let child = await this.getSubRecord(data.rows.item(j).id,);
                tempCat.push({
                  id: data.rows.item(j).id,
                  name: data.rows.item(j).name,
                  child: child && child.length > 0 ? child : []
                });
              }
              return tempCat;
            }
          });

          categories.push({
            id: data.rows.item(i).id,
            name: data.rows.item(i).name,
            child: child && child.length > 0 ? child : []
          });
        }
      }
      this.mainCategory.next(categories);
    });

    //  return this.database.executeSql('SELECT * FROM mainCategory', [])
  }

  async getSubRecord(parentId) {
    return this.database.executeSql('SELECT * FROM mainCategory WHERE parentId IS ' + parentId, []).then(async data => {
      let categories: Cat[] = [];
      let child: any
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          child = await this.getSubRecord(data.rows.item(i).id,);

          categories.push({
            id: data.rows.item(i).id,
            name: data.rows.item(i).name,
            child: child && child.length > 0 ? child : []
          });

        }
        return categories;
      }
    });

  }

  addRecord(name, parentId) {
    let data = [name, parentId];
    return this.database.executeSql('INSERT INTO mainCategory (name , parentId) VALUES (?,?)', data).then(data => {

    });
  }


  async deleteNode(id) {
    return await this.getSubRecord(id).then( async (data: any) => {
      console.log("delete data :", data)
      if (data && data.length > 0) {
      await  data.forEach(element => {
          if (element.child.length > 0) {
            this.deleteSubRecord(element.id)
          } 

          return this.database.executeSql(`DELETE FROM mainCategory WHERE id = ${element.id}`, [])
              .then(() => {
                return "node deleted";
              })
              .catch((e) => {
                return "error on deleting node " + JSON.stringify(e);
              });        

        });
        return this.database.executeSql(`DELETE FROM mainCategory WHERE id = ${id}`, [])
        .then(() => {
          return "node deleted";
        })
        .catch((e) => {
          return "error on deleting node " + JSON.stringify(e);
        });

      }
      else {
        return this.database.executeSql(`DELETE FROM mainCategory WHERE id = ${id}`, [])
          .then(() => {
            return "node deleted";
          })
          .catch((e) => {
            return "error on deleting node " + JSON.stringify(e);
          });
      }
    })

  }


  async deleteSubRecord(id) {

    return await this.getSubRecord(id).then( async (data: any) => {
      console.log("delete data :", data)
      if (data && data.length > 0) {
      await  data.forEach(element => {
          if (element.child.length > 0) {
            this.deleteSubRecord(element.id)
          } 

          return this.database.executeSql(`DELETE FROM mainCategory WHERE id = ${element.id}`, [])
              .then(() => {
                return "node deleted";
              })
              .catch((e) => {
                return "error on deleting node " + JSON.stringify(e);
              });        

        });
        return this.database.executeSql(`DELETE FROM mainCategory WHERE id = ${id}`, [])
        .then(() => {
          return "node deleted";
        })
        .catch((e) => {
          return "error on deleting node " + JSON.stringify(e);
        });

      }
      else {
        return this.database.executeSql(`DELETE FROM mainCategory WHERE id = ${id}`, [])
          .then(() => {
            return "node deleted";
          })
          .catch((e) => {
            return "error on deleting node " + JSON.stringify(e);
          });
      }
    })

  }

  // async delete(id){
  //   return this.database.executeSql('DELETE FROM mainCategory WHERE ID IN ( SELECT ID FROM mainCategory  START WITH ID =' + id +' CONNECT BY PRIOR.ID = parentId)', [])
  // }
}
