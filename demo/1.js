/**
 * Create Database
 *
 */
const prop = (key, object) => (object && object[key] ? object[key] : null)
const __ = null
export default async (PouchDB, print) => {
  /* TODO: Create DB */
  const db = __
  print('Created Database', prop('name', db))
  return db
}
