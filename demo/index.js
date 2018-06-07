import print from './print'
import PouchDB from './setup'

const __ = null // placeholder

import ex1 from './1'
import ex2 from './2'
import ex3 from './3'
import ex4 from './4'
import ex5 from './5'
import ex6 from './6'
import ex7 from './7'
import ex8 from './8'
import ex9 from './9'
import ex10 from './10'
import ex11 from './11'
import ex12 from './12'
import ex13 from './13'
import ex14 from './14'

const _ = async () => {
  print('PouchDB Demo', { hello: 'Charleston' })

  // create pouchdb
  const db = ex1(PouchDB, print)
  // enable debugging
  ex2(PouchDB, print)
  ex3(db, print)
  ex4(db, print)
  ex5(db, print)
  ex6(db, print)
  ex7(db, print)
  ex8(db, print)
  ex9(db, print)
  ex10(db, print)
  ex11(db, print)
  ex12(db, print)
  ex13(db, print)
  ex14(db, print)
}
_()
