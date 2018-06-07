const merge = (...objs) => objs.reduce((a, o) => Object.assign(a, o), {})
export default async (db, print) => {
  // upsert document (change doc 1 to year:1963)
  const upsertResult = __
  // print('Upsert', upsertResult)
  // const doc = await db.get('1')
  // print('result', doc)
}
