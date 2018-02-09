const uploads = require('./uplaod')

Promise.all(uploads).then(res => {
  console.log('upload all success :', res)
}).catch(err => {
  console.log('upload files Error:', err)
  process.exit(0)
})
