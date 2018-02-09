### 后台管理
1. #### [版本管理](#版本管理)
1.1 [获取最新版本信息](#1.1 获取最新版本信息)
1.2 [保存版本信息](#1.2 保存版本信息)
1.3 [发布版本](#1.3 发布版本)
1.4 [删除版本](#1.4 删除版本)
1.5 [获取指定平台的发布信息列表](#1.5 获取指定平台的发布信息列表)
1.6 [获取指定版本信息](#1.6 获取指定版本信息)
1.7 [检查版本更新](#1.7 检查版本更新)

#### 版本管理
##### 1.1 获取最新版本信息
> url `/versions/{platform}/info`

> 请求方法 `GET`

> 返回结果
```json
{
    "infoId": 1,
    "platform": "Android",
    "downloadUrl": "http://xxxxxxxxx",
    "versionName": "cc",
    "versionCode": 1,
    "forceEnable": true,
    "releaseDate": "2018-01-04 16:29:56",
    "changeLogZh": "ccccc",
    "changeLogEn": "测试"
}
```

> 示例
`/versions/Android/info`

##### 1.2 保存版本信息
> url `versions/info`

> 请求方法 `POST`

> ```json
{
	"infoId":1,//编辑更新操作需要此字段
	"platform":"Android",
	"versionName":"cc",
	"versionCode":"2",
	"changeLogEn":"测试",
	"changeLogZh":"ccccc",
	"forceEnable":true,
	"downloadUrl":"http://xxxxxxxxx"
}
```
> 返回结果
`null`

##### 1.3 发布版本
> **url** ==/versions/{infoId}==
> 请求方法 ** `PUT` **


> ** 示例: **

> ** ` /versions/1` **

##### 1.4 删除版本信息

> url `versions/{infoId}`

> 请求方法 **`DELETE` **

> 示例:

> ** `/version/1` **

##### 1.5 获取指定平台的发布信息列表

> url `/versions/{platform}/info-list?page=1`

> 请求方法 ** `GET` **

> 返回结果
```json
{
    "pageNum": 1,
    "pageSize": 10,
    "size": 2,
    "startRow": 1,
    "endRow": 2,
    "total": 2,
    "pages": 1,
    "list": [
        {
            "infoId": 2,
            "platform": "Android",
            "downloadUrl": "http://xxxxxxxxx",
            "versionName": "cc",
            "versionCode": 2,
            "forceEnable": true,
            "releaseDate": null,
            "changeLogZh": "ccccc",
            "changeLogEn": "测试"
        },
        {
            "infoId": 1,
            "platform": "Android",
            "downloadUrl": "http://xxxxxxxxx",
            "versionName": "cc",
            "versionCode": 1,
            "forceEnable": true,
            "releaseDate": "2018-01-04 16:29:56",
            "changeLogZh": "ccccc",
            "changeLogEn": "测试"
        }
    ],
    "prePage": 0,
    "nextPage": 0,
    "isFirstPage": true,
    "isLastPage": true,
    "hasPreviousPage": false,
    "hasNextPage": false,
    "navigatePages": 8,
    "navigatepageNums": [
        1
    ],
    "navigateFirstPage": 1,
    "navigateLastPage": 1,
    "firstPage": 1,
    "lastPage": 1
}
```




##### 1.6 获取指定版本信息

>
>**url ** `/versions/{infoId}`
>
>请求方法 ** `GET` **
>
> 返回结果
```json
{
    "infoId": 1,
    "platform": "Android",
    "downloadUrl": "http://xxxxxxxxx",
    "versionName": "cc",
    "versionCode": 1,
    "forceEnable": true,
    "releaseDate": null,
    "changeLogZh": "ccccc",
    "changeLogEn": "测试"
}
```

> 示例
> **/versions/1**

##### 1.7 检查版本更新

> ** url ** `/versions/check-update`

> 请求头

> ** X-Application-Version **
> ** User-Agent **

> 返回结果
```json
{
    "infoId": 1,
    "platform": "Android",
    "downloadUrl": "http://xxxxxxxxx",
    "versionName": "cc",
    "versionCode": 1,
    "forceEnable": true,
    "releaseDate": "2018-01-04 16:29:56",
    "changeLogZh": "ccccc",
    "changeLogEn": "测试"
}
```
