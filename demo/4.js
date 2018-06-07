const __ = null
const doc = {
  _id: 'ground-hog-day',
  type: 'movie',
  title: 'Groundhog Day',
  year: '1983'
}

export default (db, print) => {
  // add document
  const result = __

  print(
    `
  Added Document:

  ${JSON.stringify(doc, null, 2)}

  received:`,
    result
  )
}
