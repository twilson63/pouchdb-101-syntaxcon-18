const __ = null
export default async (db, print) => {
  // find document (select movies from 1993)
  const findResults = __
  print('Movies by Year', findResults)

  // createIndex (fields: year)
  const indexResult = __
  print('Movie Index', indexResult)
}
