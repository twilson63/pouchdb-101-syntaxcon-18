const __ = null
const prop = (key, object) =>
  object && object[key] ? object[key] : 'Not Found'

export default async (db, print) => {
  // get document
  const doc = __
  print('Doc', doc)

  let updateDoc = {
    type: 'movie',
    title: 'Groundhog Day',
    year: '1993',
    _id: prop('_id', doc),
    _rev: prop('_rev', doc)
  }
  const updated = __
  print('updated doc', updated)
}
