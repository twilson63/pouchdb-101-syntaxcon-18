const __ = null
export default async (db, print) => {
  // get document
  const doc = __
  // print('Doc', doc)

  let updateDoc = {
    type: 'movie',
    title: 'Groundhog Day',
    year: '1993',
    _id: doc._id,
    _rev: doc._rev
  }
  const updated = __
  // print('updated doc', updated)
}
