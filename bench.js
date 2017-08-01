const bench = require('nanobench')

const data = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACWCAIAAAAUvlB'

bench('', b => {
  b.start()
  b.end()
})

bench('', b => {
  b.start()
  b.end()
})

bench('', b => {
  b.start()
  b.end()
})

bench('split', b => {
  b.start()
  data.split(',')[1]
  b.end()
})

bench('slice', b => {
  b.start()
  data.slice(data.indexOf(',') + 1)
  b.end()
})
