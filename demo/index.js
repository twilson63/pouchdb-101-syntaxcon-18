import 'tachyons'
import movies from './movies'
import print from './print'
import PouchDB from 'pouchdb-browser'
import PouchDBFind from 'pouchdb-find'
import PouchDBUpsert from 'pouchdb-upsert'

PouchDB.plugin(PouchDBFind)
PouchDB.plugin(PouchDBUpsert)

const doc = {
  _id: 'ground-hog-day',
  type: 'movie',
  title: 'Groundhog Day',
  year: '1983'
}

const _ = async () => {
  print('PouchDB Demo', { hello: 'Charleston' })

  // create pouchdb
  const db = PouchDB('syntax-test')

  // enable debugging - PouchDB.debug.enable('*')

  // get info
  // const info = await db.info()
  // print('Database Info', info)

  // add document
  // const result = await db.post(doc)
  // print(
  //   `
  // Added Document:
  //
  // ${JSON.stringify(doc, null, 2)}
  //
  // received:`,
  //   result
  // )

  // get document
  // const doc = await db.get('ground-hog-day')
  // print('Doc', doc)

  // update document
  // const doc = await db.get('ground-hog-day')
  // let updateDoc = {
  //   type: 'movie',
  //   title: 'Groundhog Day',
  //   year: '1993',
  //   _id: doc._id,
  //   _rev: doc._rev
  // }
  // const updated = await db.put(updateDoc)
  // print('updated doc', updated)

  // list documents
  // const docs = await db.allDocs()
  // print('all docs', docs)

  // const docs2 = await db.allDocs({ include_docs: true })
  // print('all docs', docs2)

  // remove documents
  // const result = await db.remove(
  //   '0ddbeb8b-d56a-49d6-99c2-2ad93abfcf50',
  //   '1-4aa74709b0364974adc0b25553d36b0c'
  // )
  // print('removed doc', result)

  // bulk updates
  // const results = await db.bulkDocs(movies)
  // print('bulk add/update', results)

  // find document
  // const results = await db.find({
  //   selector: {
  //     year: '1993'
  //   }
  // })
  // print('Movies by Year', results)

  // createIndex
  // const result = await db.createIndex({
  //   index: {
  //     fields: ['year']
  //   }
  // })
  // print('Movie Index', result)

  // upsert document
  // const result = await db.upsert('1', doc => {
  //   return {
  //     type: 'movie',
  //     name: 'Ghostbusters',
  //     year: '1963'
  //   }
  // })
  // print('Upsert', result)
  // const doc = await db.get('1')
  // print('result', doc)

  // compact db
  // const result = await db.compact()
  // print('compact', result)

  // replicate db
  // const result = await db.sync('https://twilson63.jrscode.cloud/demo')
  // print('result', result)

  // remove db
  // const result = await db.destroy()
  // print('Destroy Db', result)
}
_()
