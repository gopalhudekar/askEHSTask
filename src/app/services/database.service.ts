2
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs'


export interface Cat {
  id: number,
  name: string,
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
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'database.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }

  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text'})
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
 
  

loadmainCategory() {
    return this.database.executeSql('SELECT * FROM mainCategory', []).then(data => {
      let categories: Cat[] = [];
 
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          let skills = [];
          if (data.rows.item(i).skills != '') {
            skills = JSON.parse(data.rows.item(i).skills);
          }
 
          categories.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
           });
        }
      }
      this.mainCategory.next(categories);
    });
  }
 
  addRecord( tablename, name, skills, img) {
    let data = [name, JSON.stringify(skills), img];
    return this.database.executeSql('INSERT INTO' + tablename + '(name) VALUES (?)', data).then(data => {
    
    });
  }
 
}
