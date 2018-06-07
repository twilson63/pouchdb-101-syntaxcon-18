const __ = null
export default (PouchDB, print) => {
  // Enable PouchDB Debuging
  PouchDB.debug.enable('*')
  const enabled = __
  print('Debuging', enabled)
}
