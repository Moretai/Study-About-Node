const qiniu = require('qiniu')
const fs = require('fs')
const path = require('path')

const cdnConfig = require('./config').cdn

const {
  ak, sk, bucket
} = cdnConfig

const mac = new qiniu.auth.digest.Mac(ak, sk)

const config = new qiniu.conf.Config()
config.zone = qiniu.zone.Zone_z0

const doUpload = (key, file) => {
  const options = {
    scope: bucket + ':' + key
  }

  const formUploader = new qiniu.form_up.FormUploader(config)
  const putExtra = new qiniu.form_up.PutExtra()
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploaderToken = putPolicy.uploadToken(mac)

  return new Promise((resolve, reject) => {
    formUploader.putFile(uploaderToken, key, file, putExtra, (err, body, info) => {
      if (err) return reject(err)
      if (info.statusCode === 200) {
        resolve(body)
      } else {
        reject(info)
      }
    })
  })
}

const files = fs.readdirSync(path.join(__dirname, './src'))
const uploads = files.map(file => {
  return doUpload(file, path.join(__dirname, './src', file))
})
module.exports = uploads
