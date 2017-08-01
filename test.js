const test = require('tape')

const data = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACWCAIAAAAUvlB'
const same = 'iVBORw0KGgoAAAANSUhEUgAAAMgAAACWCAIAAAAUvlB'

test('split vs slice', t => {
  t.plan(2)
  t.same(data.split(',')[1], same, 'split')
  t.same(data.slice(data.indexOf(',') + 1), same, 'slice')
})
