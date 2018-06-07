import PouchDB from 'pouchdb-browser'
import PouchDBFind from 'pouchdb-find'
import PouchDBUpsert from 'pouchdb-upsert'

PouchDB.plugin(PouchDBFind)
PouchDB.plugin(PouchDBUpsert)

export default PouchDB
