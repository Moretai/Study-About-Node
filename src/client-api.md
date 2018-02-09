## 客户端API文档
### 目录
 - [前言](#前言)
     - [API网关](#api网关)
     - [统一错误响应](#统一错误响应)
     - [名词解释](#名词翻译)
 - [一、用户账户和认证 API](#一用户账户和认证-api)
     - [1 获取 OAuth Token](#1-获取-oauth-token)
         - [1.1 第三方登陆](#11-第三方登陆)
         - [1.2 传统方式（Owner Password Authentication）](#12-传统方式owner-password-authentication)
     - [2 刷新过期的访问令牌](#2-刷新过期的访问令牌)
     - [3 检查访问令牌可用性](#3-检查访问令牌可用性)
 - [二、流程控制API](#二流程控制api)
     - [1 FlowId 相关API](#1-flowid-相关api)
        - [1.1 注册流程](#11-注册流程)
        - [1.2 找回密码流程](#12-找回密码流程)
     - [2 邮件/短信验证码发送API](#2-邮件短信验证码发送api)
        - [2.1 注册流程中发送邮箱验证码](#21-注册流程中发送邮箱验证码)
        - [2.2 找回密码流程中发送邮箱验证码](#22-找回密码流程中发送邮箱验证码)
        - [2.3 发送绑定邮箱手机验证码](#23-发送绑定邮箱手机验证码)
        - [2.4 发送绑定邮箱验证码](#24-发送绑定邮箱验证码)
        - [2.5 发送找回交易密码/资金密码验证码](#25-发送找回交易密码资金密码验证码)
        - [2.6 发送修改邮箱验证码](#26-发送修改邮箱验证码)
        - [2.7 发送更改登录密码验证码](#27-发送更改登录密码验证码)
        - [2.8 发送绑定谷歌认证器验证码](#28-发送绑定谷歌认证器验证码)
     - [3 图形验证码API](#3-图形验证码api)
        - [3.1 注册流程的图形验证码](#31-注册流程的图形验证码)
        - [3.2 忘记密码图形验证码](#32-忘记密码图形验证码)
 - [三、具体业务流程使用API](#三具体业务流程使用api)
     - [1 注册流程](#1-注册流程)
        - [1.1 注册流程第一步](#11-注册流程第一步)
        - [1.2 注册流程第二步](#12-注册流程第二步)
     - [2 找回密码流程](#2-找回密码流程)
        - [2.1 找回密码流程第一步](#21-找回密码流程第一步)
        - [2.2 找回密码流程第二步](#22-找回密码流程第二步)
     - [3 找回资金密码流程](#3-找回资金密码流程)
        - [3.1 找回资金密码流程第一步](#31-找回资金密码流程第一步)
        - [3.2 找回资金密码流程第二步](#32-找回资金密码流程第二步)
 - [四、多媒体相关API](#四多媒体相关api)
     - [1 图片资源](#1-图片资源)
 - [五、用户基本信息 API](#五用户基本操作-api)
     - [1 用户基本信息profile](#1-用户基本信息profile)
        - [1.1 获取profile信息](#11-获取profile信息)
          - [1.1.1 查询用户的账户信息](#111-查询用户的账户信息)
          - [1.1.2 查询某邮箱是否已经被注册](#112-查询某邮箱是否已经被注册)
          - [1.1.3 查询昵称是否已经被系统注册](#113-查询昵称是否已经被系统注册)
          - [1.1.4 获取用户充币地址](#114-获取用户充币地址)
          - [1.1.5 获取用户可提币金额](#115-获取用户可提币金额)
        - [1.2 设置profile信息](#12-设置profile信息)
            - [1.2.1 设置用户的Touch-Id](121-设置用户的touch-id)
            - [1.2.2 绑定用户邮箱](#122-绑定用户邮箱)
            - [1.2.3 设置用户的资金密码](#123-设置用户的资金密码)
        - [1.3 修改profile信息](#13-修改profile信息)
            - [1.3.1 修改昵称信息](#131-修改昵称信息)
            - [1.3.2 修改用户头像](#132-修改用户头像)
            - [1.3.3 修改用户密码](#133-修改用户密码)
            - [1.3.4 修改用户邮箱](#134-修改用户邮箱)
            - [1.3.5 修改用户资金密码](#135-修改用户资金密码)
        - [1.4 确认profile信息](#14-确认profile信息)
            - [1.4.1 确认用户资金密码](#141-确认用户资金密码)
     - [2 用户安全设置](#2-用户安全设置)
        - [2.1 获取用户安全设置信息](#21-获取用户安全设置信息)
            - [2.1.1 获取用户全部安全策略](#211-获取用户全部安全策略)
            - [2.1.2 检查用户登录邮箱验证码是否开启](#212-检查用户登录邮箱验证码是否开启)
            - [2.1.3 获取用户资金安全策略设置](#213-获取用户资金安全策略设置)
        - [2.2 设置用户安全设置信息](#22-设置用户安全设置信息)
        - [2.3 获取用户google密钥](#23-获取用户google密钥)
        - [2.4 获取google authentication qr code](#24-获取google authentication qr code)
     - [3 用户提币地址管理](#3-用户提币地址管理)
        - [3.1 提币地址查询列表](#31-提币地址查询列表)
        - [3.2 删除提币地址](#32-删除提币地址)
        - [3.3 新增提币地址](#33-新增提币地址)
        - [3.4 设置提币默认地址](#34-设置提币默认地址)
        - [3.5 更新提币地址标签](#35-更新提币地址标签)
 - [六、钱包功能API](#六钱包功能api)
     - [1 用户钱包管理API](#1-用户钱包管理api)
        - [1.1 查询用户还可以创建的钱包类型](#11-查询用户还可以创建的钱包类型)
        - [1.2 添加某种数字货币的钱包](#12-添加某种数字货币的钱包)
        - [1.3 删除某种数字货币的钱包](#13-删除某种数字货币的钱包)
     - [2 用户钱包记录查询API](#2-用户钱包记录查询api)
        - [2.1 充币记录查询API](#21-充币记录查询api)
           - [2.1.1 冲币记录分页查询](#211-冲币记录分页查询)
           - [2.1.2 冲币记录详情查询](#212-冲币记录详情查询)
        - [2.2 提币记录查询API](#22-提币记录查询api)
           - [2.2.1 提币记录分页查询](#221-提币记录分页查询)
           - [2.2.2 提币记录详情查询](#222-提币记录详情查询)
        - [2.3 交易记录查询API](#23-交易记录查询api)
     - [3 提币操作相关API](#3-提币操作相关api)
        - [3.1 提币操作](#31-提币操作)
        - [3.2 转账操作](#32-转账操作)
        - [3.3 验证用户提币地址操作](#33-转账操作)
        - [3.4 提币手续费查询](#34-提币手续费查询)
 	 - [4 Banner操作相关API](#4-Banner操作相关api)
        - [4.1 Banner列表](#41-Banner列表)
        - [4.2 获取图片](#41-获取图片)
 - [七、交易API](http://wiki.szjys.com/pages/viewpage.action?pageId=7668394)
 - [八、用户站内信API](#八用户站内信api)
      - [1 发信](#1-发信)
         - [1.1 群发站内信](#11-群发站内信)
      - [2 查询用户收信](#1-查询用户收信)
         - [2.1 分页查询收信](#21-分页查询收信)
         - [2.2 根据消息id查询收信](#22-根据消息id查询收信)
      - [3 查询用户发信](#3-查询用户发信)
         - [3.1 分页查询发信](#31-分页查询发信)
         - [3.2 根据消息id查询发信](#32-根据消息id查询发信)
      - [4 读取收信](#4-读取收信)
      - [5 删除收信](#5-删除收信)
      - [6 查询收信统计](#6-查询收信统计)
 - [九、用户管理API](#九用户管理api)
    - [1 用户基本信息管理](#1 用户基本信息管理)
        - [1.1 获取用户列表](#11-获取用户列表)
        - [1.2 获取单个用户的profile信息](#12-获取单个用户的profile信息)
 - [十、钱包后台管理API](#钱包后台管理api)
      - [1 提币操作管理API](#1-提币操作管理api)
        - [1.1 审核未通过列表](#11-审核未通过列表)
        - [1.2 审核完成列表](#12-审核完成列表)
        - [1.3 未审核提币列表](#13-未审核提币列表)
        - [1.4 审核未通过订单详情](#14-审核未通过订单详情)
        - [1.5 审核完成订单详情](#15-审核完成订单详情)
        - [1.6 未审核订单详情](#16-未审核订单详情)
        - [1.7 提币审核未通过](#17-提币审核未通过)
        - [1.8 提币审核通过](#18-提币审核通过)
      - [2 转账操作管理API](#2-转账操作管理api)
        - [2.1 审核未通过列表](#21-审核未通过列表)
        - [2.2 审核完成列表](#22-审核完成列表)
        - [2.3 未审核转账列表](#23-未审核转账列表)
        - [2.4 审核未通过订单详情](#24-审核未通过订单详情)
        - [2.5 审核完成订单详情](#25-审核完成订单详情)
        - [2.6 未审核订单详情](#26-未审核订单详情)
        - [2.7 转账审核未通过](#27-转账审核未通过)
        - [2.8 转账审核通过](#28-转账审核通过)
      - [3 充值操作管理API](#3-充值操作管理api)
        - [3.1 充值完成列表](#31-Txn充值完成列表)
        - [3.2 充值完成详情](#32-Txn充值完成详情)  
      - [4 Banner操作管理API](#4-Banner操作管理API)
        - [4.1 Banner列表](#41-Banner列表)     
        - [4.2 创建Banner](#43-创建Banner)      
        - [4.3 删除Banner](#44-删除Banner)      
        - [4.4 获取图片](#46-获取图片)      


### 前言

这篇文档汇总了整个后台系统对外的`API`接口。在开始具体`API`描述之前先设置一些约定。

#### API网关

* Staging 环境：[http://staging-api.intranet.szjys.com](http://staging-api.intranet.szjys.com)
* Testing 环境：[http://testing-api.intranet.szjys.com](http://testing-api.intranet.szjys.com)
* Dev 环境：[http://172.17.1.133:8080](http://172.17.1.133:8080)
* 本地环境：[http://127.0.0.1:8080](http://127.0.0.1:8080)

#### 统一错误响应

在进行`API`调用时，如果服务器端检测到客户端的请求中包含错误，或者服务器端内部处理请求时发生错误，将会以`HTTP Status Code`以及`json`共同表现的形式告知客户端。

其中返回的`json`为以下形式：

```json
{
    "error": "ERROR_TYPE",
    "message": "Some error messages",
    "ref": "reference number",
    "timestamp": 1497945623000
}
```

而返回的`HTTP Status Code`包含但不限于以下类型：

* 404 Not Found
* 401 Unauthorized
* 403 Forbidden
* 408 Request Timeout
* 429 Too Many Requests
* 451 Unavailable For Legal Reasons
* 413 Payload Too Large
* 414 URI Too Long

#### 名词翻译

* 访问令牌（Access Token）

访问令牌(Access Token)是客户端通过用户授权等方式进行服务器认证后所获得的可以执行一定操作的资格（Credentials）。

[返回目录](#目录)

----

### 一、用户账户和认证 API

User Account & Authentication（简称 UAA）

当前后端系统支持[OAuth 2.0](https://oauth.net/2/)标准的认证方式。

#### 1 获取 OAuth Token

```
POST /uaa/oauth/token
```

##### 1.1 第三方登陆

我们自造了一个`oauth2_login`的`grant_type`来解决这个问题

```bash
curl -X POST \
  http://api.staging.intranet.szjys.com/uaa/oauth/token \
  -H 'authorization: Basic YnJvd3Nlcjo=' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'grant_type=oauth2_login&code=4%2FGkRvw13D8Vlry3C2qTzBoPThiwvcXTLv68R-lkou8m0%23&from=google'
```

参数|含义|可选值
---|---|-----
grant_type|授权方式，此方式下为oauth2_login|必须
code|第三方认证后返回的code|必须
from|来自于哪个第三方|qq/qqMobile/wechat/wechatMobile/google
Authorization|HTTP 标准认证头|browser (YnJvd3Nlcjo=)/android (YW5kcm9pZDo=)/ios (aW9zOg==)

关于这个`YnJvd3Nlcjo=`值的由来是这样的：在 HTTP 协议中 Basic 认证方式是用 Base64 方式编码 `username:password` 字符串，所以这个值的原始值是
`browser:`，冒号后面没有字符是因为密码是空的。

##### 1.2 传统方式（Owner Password Authentication）
传统的用户名密码方式获取 Token（这也是 OAuth2 标准内 Owner Password 认证的一个流程）

```bash
curl -X POST \
  http://api.staging.intranet.szjys.com/uaa/oauth/token \
  -H 'authorization: Basic YnJvd3Nlcjo=' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'username=foo&password=abc123&scope=ui&grant_type=password&emailCode=123456'
```

参数|描述|可选
----|----|----
username|用户名（邮箱/手机号码/后台帐号）|必须
password|密码|必须
scope|授权范围，此方式下为ui|必须
grant_type|授权方式，此方式下为password|必须
emailCode|开启登录验证后用户获得的数字验证码|可选
Authorization|HTTP 标准认证头|browser (YnJvd3Nlcjo=)/android (YW5kcm9pZDo=)/ios (aW9zOg==)

其中`username`字段可以是用户的邮箱，手机号码或者用户名（只限于后台用户登陆）。
1.2版本以后只用手机注册的用户需要进行邮箱绑定操作，并且绑定邮箱后只允许使用邮箱登录。
如果用户开启了邮箱验证在获取token时加入emailCode参数。

正确授权时服务器端响应：

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTkwOTQzNzUsInVzZXJfbmFtZSI6ImZvbyIsImp0aSI6IjBlODM2MTY4LWVlNTQtNDRhYi1iZThkLTU1NjJkNmRiYWRjYiIsImNsaWVudF9pZCI6ImJyb3dzZXIiLCJzY29wZSI6WyJ1aSJdfQ.xY4hlewEq-gBltTMQGxv6pUdpCCwiMEA_OglVMYALY0",
    "token_type": "bearer",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDE2NDMxNzUsInVzZXJfbmFtZSI6ImZvbyIsImp0aSI6IjFiNDEwMjA5LTExMTYtNDA5My1hMGMyLTIyMjMxNjhmODNiNSIsImNsaWVudF9pZCI6ImJyb3dzZXIiLCJzY29wZSI6WyJ1aSJdLCJhdGkiOiIwZTgzNjE2OC1lZTU0LTQ0YWItYmU4ZC01NTYyZDZkYmFkY2IifQ.PA7p5oEf4zol7fQtxNz9iio-P3R61fbNO24Q_w0cdB0",
    "expires_in": 43199,
    "scope": "ui",
    "isHaveTradePassword":false,
    "isHaveEmail": false,
    "jti": "0e836168-ee54-44ab-be8d-5562d6dbadcb"
}
```

注意到`expires_in`字段表示令牌的过期时间（单位为秒），在获取Token的指定时间后，该Token将过期。`refresh_token`字段所返回的Refresh Token可在当前Token过期后可用来获取新的Token。

1.2版本该接口在返回token信息中返回了额外的用户信息：

 - `isHaveTradePassword`:用户是否设置交易密码
 - `isHaveEmail`:用户是否绑定了邮箱。

#### 2 刷新过期的访问令牌

```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/uaa/oauth/token \
  -H 'authorization: Basic YnJvd3Nlcjo=' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'refresh_token=<refresh_token>&grant_type=refresh_token'
```

#### 3 检查访问令牌可用性

```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/uaa/oauth/check_token?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTk3ODc5MDgsInVzZXJfbmFtZSI6IjEiLCJhdXRob3JpdGllcyI6WyJCQVIiLCJGT08iXSwianRpIjoiNzNkYTNmYmEtNDdkZi00NmRhLWE1YzctM2U3MGFmMjM4ZjU1IiwiY2xpZW50X2lkIjoiYnJvd3NlciIsInNjb3BlIjpbInVpIl19.EfUqyt70GoK_-hJdGgbJnzp12e39uiTPRTleTCT9Pxs' \
  -H 'authorization: Basic YnJvd3Nlcjo='
```

**返回值：**

```json
{
    "exp": 1499787908,
    "user_name": "1",
    "authorities": [
        "BAR",
        "FOO"
    ],
    "jti": "73da3fba-47df-46da-a5c7-3e70af238f55",
    "client_id": "browser",
    "scope": [
        "ui"
    ]
}
```

[返回目录](#目录)

----

### 二、流程控制API

#### 1 FlowId 相关API

在进行注册、用户密码找回等具有流程性控制的API调用时，需要传递一个名为`X-Flow-Id`的自定义`Header`信息来告诉服务器某些流程是属于哪一个`Flow-Id`对应的。每个`Flow-Id`的有效时间为十分钟。下面是用于不同目的的`Flow-Id`的申请：

##### 1.1 注册流程
```
GET /flow/register
```

获取用于注册的`Flow Id`。

示例请求：

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/flow/register
```

示例响应：

```json
{
    "flow_id": "50b181e0-52af-414b-a64a-cefdc285557a"
}
```

##### 1.2 找回密码流程
```
GET /flow/forgot-password
```

获取用于找回密码的`Flow Id`。

示例请求：

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/flow/forgot-password
```

示例响应：

```json
{
    "flow_id": "50b181e0-52af-414b-a64a-cefdc285557a"
}
```
##### 1.2 找回资金密码流程
```
GET /flow/forgot-trade-password
```

参数名称|类型|参数描述
---|---|---
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。

获取用于找回密码的`Flow Id`。

示例请求：

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/flow/forgot-trade-password \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzQxIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwOTU0NjA4LCJqdGkiOiI5NGE4YTdlZi0yN2Q5LTQxZTktYmQ1MS02N2QwZWM4ODgwODYiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoiMTg4MTA2NDQwNjFAMTYzLmNvbSJ9.bt0rOy4W-1jlyqEZQG8icuNXePerLqDEV-eNsG8vm0I' \
```

示例响应：

```json
{
    "flow_id": "6f63628c-0e62-4034-921a-35e056fc5295"
}
```

#### 2 邮件/短信验证码发送API

有些业务在实现过程中需要用户先进行验证码的发送操作。

##### 2.1 注册流程中发送邮箱验证码

```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/vcode/register \
  -H 'content-type: application/json' \
  -d '{"receiver":"straybirdsnest@163.com"}'
```

如果邮件发送成功，将会返回`200 OK`的HTTP Status Code。

##### 2.2 找回密码流程中发送邮箱验证码

参数|描述
---|---
receiver|用户邮箱或手机号

```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/vcode/forgot-password \
  -H 'content-type: application/json' \
  -d '{"receiver":"18810644061@163.com"}'
```
如果邮件发送成功或者用户不存在，将会返回`200 OK`的HTTP Status Code。

如果用户邮箱和手机号都存在时，传入参数receiver为手机号，将返回400 Bad Request的HTTP Status Code和错误消息：
```json
{
    "error": "PHONE_NOT_SUPPORTED_WHEN_EMAIL_EXISTS",
    "message": "邮箱存在时不能通过手机验证(2675)",
    "ref": "2675"
}
```

##### 2.3 发送绑定邮箱手机验证码

```
POST /vcode/bind-email-phone
```

参数|类型|描述|可选
----|----|----|----
receiver|请求体|手机号码|必须

发送成功将返回200 OK的Status Code

错误码|描述
----|----
INVALID_PHONE|手机号码格式不合法

##### 2.4 发送绑定邮箱验证码

```
POST /vcode/bind-email
```

参数|类型|描述|可选
----|----|----|----
receiver|请求体|邮箱地址|必须

发送成功将返回200 OK的Status Code

错误码|描述
----|----
INVALID_EMAIL|邮件地址格式不合法

##### 2.5 发送找回交易密码/资金密码验证码
```
POST /vcode/forgot-trade-password
```

参数|类型|描述
----|----|----
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。

发送成功将返回200 OK的Status Code

错误码|描述
----|----
EMAIL_NOT_BOUND|未绑定邮箱


##### 2.6 发送修改邮箱验证码

```
POST /vcode/reset-email
```

参数|类型|描述|可选
----|----|----|----
receiver|请求体|邮箱地址|必须

发送成功将返回200 OK的Status Code

错误码|描述
----|----
INVALID_EMAIL|邮箱地址无效

##### 2.7 发送更改登录密码验证码

```
POST /vcode/modify-password
```

参数|类型|描述
----|----|----
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。

```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/vcode/modify-password \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiMTAwMDUiLCJzY29wZSI6WyJ1aSJdLCJleHAiOjE1MTE5ODgwMzIsImp0aSI6IjJiZWQ2OWQ3LWRmOTQtNGRjMy1iNTE5LTI3NDllZWQ2ODJmZCIsImlzSGF2ZUVtYWlsIjp0cnVlLCJjbGllbnRfaWQiOiJicm93c2VyIiwidXNlcm5hbWUiOiIxODgxMDY0NDA2MUAxNjMuY29tIn0.knoeCjbz9Iu55NyODEaYYYGsoeSLQz_KmYN6toecYlo' \
```

发送成功将返回200 OK的Status Code

##### 2.8 发送绑定谷歌认证器验证码

```
POST /vcode/send-google-code
```

参数|类型|描述
----|----|----
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。

json参数|类型|描述|可选
----|----|----|----
receiver|String|邮箱地址|必须

发送成功将返回`200 OK`的`Http Status Code`。

##### 2.9 发送提币邮箱验证码

```
POST /vcode/send-withdraw-vcode
```

参数|类型|描述
----|----|----
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。

json参数|类型|描述|可选
----|----|----|----
receiver|String|邮箱地址|必须

发送成功将返回`200 OK`的`Http Status Code`。

##### 2.10 发送转账邮箱验证码

```
POST /vcode/send-transfer-vcode
```

参数|类型|描述
----|----|----
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。

json参数|类型|描述|可选
----|----|----|----
receiver|String|邮箱地址|必须

发送成功将返回`200 OK`的`Http Status Code`。

#### 3 图形验证码API

有些流程中，用户需要提交图形验证码，客户端需要先从服务器获取对应的图形验证码。

##### 3.1 注册流程的图形验证码

在1.2版本中该API暂不使用。
```
GET /captcha/register
```
示例请求：
```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/captcha/register
```

示例响应：
```json
{
    "mime": "image/jpeg",
    "image": "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", 
    "token": "4dd2dc95-eed0-49ce-b223-da76c1a3e433"
}
```

##### 3.2 忘记密码图形验证码
```
GET /captcha/forgot-password
```
示例请求：
```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/captcha/forgot-password \
  -H 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDMzMyIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDg1NzcyMywianRpIjoiYzM2Mjk2YjMtOTkzNC00Mzk5LWFlNTYtMGVlMDIwYmUzZDE3IiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIiLCJ1c2VybmFtZSI6InN0cmF5YmlyZHNuZXN0QDE2My5jb20ifQ.fJk-Pe_basRIXqNwOa3hrGnHiKdb-W9k1wa-duRs33A'
```
示例响应：
```json
{
    "mime": "image/jpeg",
    "image": "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",
    "token": "efa5a450-6d36-419f-bceb-bc70113215bd"
}
```

[返回目录](#目录)

----

#### 三、具体业务流程使用API

在上面的流程控制中获取到的Flow-Id以及验证码等将在下列流程中调用时使用。

##### 1 注册流程

在1.2版本的注册流程中，调用此API前，需要先申请[Flow-Id](#1-flowid-相关api)及对应的[注册用验证码](#2-邮件短信验证码发送api)。

###### 1.1 注册流程第一步
```
POST /register/step1
```

参数|类型|描述|可选
----|----|----|----
x-flow-id|Header|申请到的Flow Id|必须
content-type|Header|HTTP标准Header，值为application/json|必须

Json参数|类型|描述|可选
--------|----|----|----
nickname|string|注册时使用的昵称|必须
vcode|string|注册用的验证码|必须
email|string|注册时使用的email|必须

```
{
  “nickname": "straybirdsnest",
  "vcode": "123456",
  "email": "straybirdsnest@163.com"
}
```

```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/register/step1 \
  -H 'content-type: application/json' \
  -H 'x-flow-id: 50557b03-db29-42e2-bb7b-bdc06368e420' \
  -d '{"nickname":"straybirdsnest", "vcode":"123456","email":"straybirdsnest@163.com"}'
```

如果注册第一步请求成功，将会返回`200 OK`的HTTP Status Code。

###### 1.2 注册流程第二步
```
POST /register/step2
```

参数|类型|描述|可选
----|----|----|----
x-flow-id|Header|申请到的Flow Id|必须
content-type|Header|HTTP标准Header，值为application/json|必须

Json参数|类型|描述|可选
--------|----|----|----
password|string|注册时使用的密码|必须

```
{
    "password": "secret"
}
```

```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/register/step2 \
  -H 'content-type: application/json' \
  -H 'x-flow-id: 50557b03-db29-42e2-bb7b-bdc06368e420' \
  -d '{"password":"secret"}'
```

如果注册第二步请求的操作成功，服务器将会返回`201 Created`的HTTP Status Code。

##### 2 找回密码流程

在1.2版本的找回密码流程中，调用此API前，需要先申请[Flow-Id](#1-flowid-相关api)及对应的[找回密码使用的验证码](#2-邮件短信验证码发送api)。。

在调用此流程API时，如果flowId过期，将返回错误消息：
```json
{
    "error": "INVALID_FLOW",
    "message": "FLOW 无效(2680)",
    "ref": "2680"
}
```
对同一个flowId,每个步骤API，应该按顺序向后调用，调用成功后重复调用或顺序错误，将返回错误消息：
```json
{
    "error": "INVALID_FLOW_STEP",
    "message": "FLOW 步骤无效(2681)",
    "ref": "2681"
}
```

###### 2.1 找回密码流程第一步

```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/forgot-password/step1 \
  -H 'content-type: application/json' \
  -H 'x-flow-id: 0e842cb4-4134-4e42-ac6e-6b7673396485"' \
  -d '{"username":"xxx@example.com","vcode":"123456"}'
```

如果找回密码第一步请求成功，将会返回200 OK的HTTP Status Code。

如果验证码错误，将返回400 Bad Request的HTTP Status Code和错误消息：
```json
{
    "error": "INVALID_VCODE",
    "message": "验证码不匹配(2688)",
    "ref": "2688"
}
```

验证码超时或之前未发送验证码，将返回400 Bad Request的HTTP Status Code和错误消息：
```json
{
    "error": "VCODE_NOT_FOUND",
    "message": "请重新获取验证码(33375)",
    "ref": "33375"
}
```

###### 2.2 找回密码流程第二步

```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/forgot-password/step2 \
  -H 'content-type: application/json' \
  -H 'x-flow-id: 0e842cb4-4134-4e42-ac6e-6b7673396485"' \
  -d '{"new_password":"abc123"}'
```

如果找回密码第二步请求成功，将会返回200 OK的HTTP Status Code。

##### 3 找回资金密码流程

在1.2版本的找回密码流程中，调用此API前，需要先申请[Flow-Id](#1-flowid-相关api)及对应的[找回密码使用的验证码](#2-邮件短信验证码发送api)。。

在调用此流程API时，如果flowId过期，将返回错误消息：
```json
{
    "error": "INVALID_FLOW",
    "message": "FLOW 无效(2680)",
    "ref": "2680"
}
```
对同一个flowId,每个步骤API，应该按顺序向后调用，调用成功后重复调用或顺序错误，将返回错误消息：
```json
{
    "error": "INVALID_FLOW_STEP",
    "message": "FLOW 步骤无效(2681)",
    "ref": "2681"
}
```

###### 3.1 找回资金密码流程第一步

```
POST /forgot-trade-password/step1
```
参数名称|类型|参数描述
---|---|---
vcode|请求体|验证码
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。

请求示例：
```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/forgot-trade-password/step1 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzQxIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwOTU0NjA4LCJqdGkiOiI5NGE4YTdlZi0yN2Q5LTQxZTktYmQ1MS02N2QwZWM4ODgwODYiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoiMTg4MTA2NDQwNjFAMTYzLmNvbSJ9.bt0rOy4W-1jlyqEZQG8icuNXePerLqDEV-eNsG8vm0I' \
  -H 'content-type: application/json' \
  -H 'x-flow-id: a353553e-e914-4f76-b079-5a1e4f2d632a' \
  -d '{"vcode":"123456"}'
```
若请求成功，返回200 OK

错误码|描述
----|----
INVALID_VCODE|验证码不正确

###### 3.2 找回资金密码流程第二步

```
POST /forgot-trade-password/step2
```
参数名称|类型|参数描述
---|---|---
new_trade_password|请求体|新设置的资金密码
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。

请求示例：
```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/forgot-trade-password/step2 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzQxIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwOTU0NjA4LCJqdGkiOiI5NGE4YTdlZi0yN2Q5LTQxZTktYmQ1MS02N2QwZWM4ODgwODYiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoiMTg4MTA2NDQwNjFAMTYzLmNvbSJ9.bt0rOy4W-1jlyqEZQG8icuNXePerLqDEV-eNsG8vm0I' \
  -H 'content-type: application/json' \
  -H 'x-flow-id: a353553e-e914-4f76-b079-5a1e4f2d632a' \
  -d '{"new_trade_password":"123456"}'
```
若请求成功，返回200 OK

[返回目录](#目录)

----

#### 四、多媒体相关API

当客户端需要从服务器获取某些多媒体资源时，需要使用以下API。

##### 1 图片资源

当获取用户设置的头像等资源时，可以使用该API。

```
GET /image/:image_id
```

参数|类型|描述
----|----|----
image_id|string|图片资源的Id

下面请求的参数中，**6f9fbdf9-9893-4404-b61f-c2746f545ac5**是图片的资源ID。

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/image/6f9fbdf9-9893-4404-b61f-c2746f545ac5
```

如果请求成功，服务器将返回该资源对应的PNG格式的图片。

[返回目录](#目录)

----

### 五、用户基本操作 API

这部分API用于获取及修改用户的基本信息。

#### 1 用户基本信息profile

profile中包含了用户帐号相关的一些基本信息。

##### 1.1 获取profile信息
```
GET /profile
```

参数|类型|描述
----|----|----
Authorization|Header|bearer <access_token>形式，其中access_token是用户授权后认证服务器返回的。

示例请求：

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/profile \
  -H 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAyNDMxNTQsInVzZXJfbmFtZSI6IjQzMzIiLCJqdGkiOiIxMWI0MWFlMS1hNmQ5LTRmYzUtYmRhNS03ZWRmZWQ5OTU2NjUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.6OLGjNmXMgiHW6sGgs3aSn1dBRW-wvyTmPYPIZ7kaPY'
```

示例响应：

```json
{
    "user_id": "E82036A1-76F3-49E3-BFBE-D66FEC73C746",
    "nickname": "justin",
    "phone": null,
    "email": "5562587@163.com",
    "avatar": null,
    "registration_time": 1511502746000,
    "has_trade_password": true,
    "kyc_info": {
        "level": 2,
        "status": "APPROVED",
        "id_card": null,
        "kyc_name": null
    },
    "bank_accounts": [],
    "wallets": [
        {
            "currency": "BTC",
            "address": "mmQGAJCU5MKsZytRHMzpRBMqSHe56VcMsf"
        },
        {
            "currency": "ETH",
            "address": "0x0bc7774b6ac2d9734d57be9b2fa2987a0e6c040b"
        },
        {
            "currency": "LTC",
            "address": "n3RpznDyQSxj5LfwV2LjyRRubkZ6SsmpQE"
        },
        {
            "currency": "ETC",
            "address": "0x66eb267dadec6553e9c7c32212f83147a2953d55"
        },
        {
            "currency": "XUC",
            "address": "0x0bc7774b6ac2d9734d57be9b2fa2987a0e6c040b"
        }
    ],
    "balances": [
        {
            "currency": "BTC",
            "total": "0.0006",
            "frozen": "0",
            "available": "0.0006"
        },
        {
            "currency": "ETH",
            "total": "0",
            "frozen": "0",
            "available": "0"
        },
        {
            "currency": "LTC",
            "total": "0.02",
            "frozen": "0",
            "available": "0.02"
        },
        {
            "currency": "ETC",
            "total": "0",
            "frozen": "0",
            "available": "0"
        },
        {
            "currency": "XUC",
            "total": "0",
            "frozen": "0",
            "available": "0"
        }
    ]
}
```

服务器还提供了部分只查询某些细节信息的API。

###### 1.1.1 查询用户的账户信息
用户当前的账户信息指的是用户已经开启的数字货币钱包当中的数额，包含被冻结的、可以使用的等信息。

```
GET /profile/balance
```

参数|类型|描述
----|----|----
Authorization|Header|bearer <access_token>形式，其中access_token是用户授权后认证服务器返回的。

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/profile/balance \
  -H 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDMzMiIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDc1NDY3MCwianRpIjoiYjAyMGU3YTUtMjVlMC00MGUxLWEwM2QtZjFkNDBhNDJjMmFkIiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.lde_ukU6nkUt47VH9S-6scJpgW5PkO7ALPpAlCr7aio'
```
样例响应：
```json
[
    {
        "currency": "BTC",
        "total": "0",
        "frozen": "0",
        "available": "0"
    },
    {
        "currency": "ETC",
        "total": "0",
        "frozen": "0",
        "available": "0"
    }
]
```

###### 1.1.2 查询某邮箱是否已经被注册
该接口用于在用户登录后查询指定邮箱是否已经被系统注册。

```
GET /profile/email/existence
```

参数|类型|描述
----|----|----
Authorization|Header|bearer <access_token>形式，其中access_token是用户授权后认证服务器返回的。

示例请求：
```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/profile/email/existence?email=straybirdsnest%40163.com' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDMzMiIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDc1NDY3MCwianRpIjoiYjAyMGU3YTUtMjVlMC00MGUxLWEwM2QtZjFkNDBhNDJjMmFkIiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.lde_ukU6nkUt47VH9S-6scJpgW5PkO7ALPpAlCr7aio'
```
示例响应：
```
true
```

###### 1.1.3 查询昵称是否已经被系统注册
该API用户用户登录后查询昵称是否已经被系统注册。用户昵称目前具有全局唯一性。

```
GET /profile/nickname/existence
```

参数|类型|描述
----|----|----
nickname|请求体|新昵称

示例请求：
```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/profile/nickname/existence?nickname=straybirdsnest' \
```
示例响应：
```
true
```

###### 1.1.4 获取用户充币地址
```
GET /profile/address
```

参数|类型|描述|可选
----|----|----|----
Authorization|Header|bearer <access_token>形式，其中access_token是用户授权后认证服务器返回的。|必须
currency|string|数字货币币种，为大写字母|必须

示例请求：

```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/profile/address?currency=ETC' \
  -H 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzMyIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTExNTM0ODIwLCJqdGkiOiIwODUzN2E3ZC0xMjY4LTRlZDQtOTM4Zi05NjNkY2QxMjk2MzQiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoianVzdGluNTU2MjU4N0AxNjMuY29tIn0.lcIedYQWrHJxLGZYhyYJ3v0CqTwEiKThjZuoFDZ3U6k'
```

示例响应：
```json
{
    "address": "0x7206176ae2aebabe52d50f9546281488eb24064c"
}
```

###### 1.1.5 获取用户可提币金额
```
GET /profile/withdraw-balance
```
参数|类型|描述|可选
----|----|----|----
Authorization|Header|bearer <access_token>形式，其中access_token是用户授权后认证服务器返回的。|必须
currency|string|数字货币币种，为大写字母|必须

示例请求：

```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/profile/withdraw-balance?currency=ETC' \
  -H 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzMyIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTExNTM0ODIwLCJqdGkiOiIwODUzN2E3ZC0xMjY4LTRlZDQtOTM4Zi05NjNkY2QxMjk2MzQiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoianVzdGluNTU2MjU4N0AxNjMuY29tIn0.lcIedYQWrHJxLGZYhyYJ3v0CqTwEiKThjZuoFDZ3U6k'
```

示例响应：
```json
{
    "withdrawBalance": "0"
}
```



##### 1.2 设置profile信息

设置profile信息的API是指在用户**第一次**设置某些属性的时候需要调用的API。

###### 1.2.1 设置用户的Touch-Id

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/profile/touch-id \
  -H 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAyNDMxNTQsInVzZXJfbmFtZSI6IjQzMzIiLCJqdGkiOiIxMWI0MWFlMS1hNmQ5LTRmYzUtYmRhNS03ZWRmZWQ5OTU2NjUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.6OLGjNmXMgiHW6sGgs3aSn1dBRW-wvyTmPYPIZ7kaPY'
```

###### 1.2.2 绑定用户邮箱

1.2版本之前注册的手机用户在绑定之前邮箱操作之前需要先向先前注册的[手机](#23-发送绑定邮箱手机验证码)和[需要绑定的邮箱](#24-发送绑定邮箱验证码)发送验证码。

为了改善用户体验，还可以在调用该API之前[检查邮箱是否已经被注册](#112-查询某邮箱是否已经被注册)。

```
POST /profile/email/bind
```

参数|类型|描述|可选
----|----|----|----
Authorization|请求头|用户授权后认证服务器返回的access_token|必须
phone_vcode|请求体|手机验证码|必须
email|请求体|邮箱地址|必须
vcode|请求体|验证码|必须

绑定成功将返回200 OK的Status Code

错误码|描述
----|----
INVALID_EMAIL|邮箱地址无效
EXISTED_EMAIL|邮件地址已经被其他用户占用
INVALID_VCODE|验证码不合法
MISSING_VCODE|未输入验证码
VCODE_NOT_FOUND|未发现发送给用户的指定类型的验证码

###### 1.2.3 设置用户的资金密码
```
POST /profile/trade-password
```

参数名称|类型|参数描述
---|---|---
trade_password|请求体|资金密码
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。


请求示例：
```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/profile/trade-password \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzQxIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwOTQyNzI5LCJqdGkiOiIzNDZlOWE2ZC1lODJmLTQyODctYjAxNS1iYmVjYWU1Nzk0NTIiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoiMTg4MTA2NDQwNjFAMTYzLmNvbSJ9.QsWkyTnHp37zoWQ8duYOV-ScEOGhc5sxEpWuZQuiqXg' \
  -H 'content-type: application/json' \
  -d '{"trade_password":"123456"}'
```
若请求成功，返回200 OK

若不是第一次设置资金密码，返回400 Bad Request 和：

错误码|描述
----|----
TRADE_PASSWORD_EXISTED|已设置过资金密码


##### 1.3 修改profile信息

修改profile信息包含多个API。

###### 1.3.1 修改昵称信息
在修改该api之前，应先[查询昵称是否被占用](#113-查询昵称是否已经被系统注册)

```
PUT /profile/nickname
```
参数名称|类型|参数描述|示例
---|---|---|---
nickname|请求体|新的昵称|{"nickname":"qzzzzz"}
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。

请求示例：

```bash
curl -X PUT \
  http://staging-api.intranet.szjys.com/profile/nickname \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDM0MSIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDg3MTA4NywianRpIjoiODZiNzBhN2UtMzg4OS00OWI4LThmNTQtZTUxYjNmZjUyODZlIiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIiLCJ1c2VybmFtZSI6IjE4ODEwNjQ0MDYxQDE2My5jb20ifQ.i4YLJvez0Bu4s1VED5zuFdbfip7zfRIoC_RlRGLdgb4' \
  -H 'content-type: application/json' \
  -d '{"nickname":"qzzzz"}'
```

若请求成功，将返回200 OK的Status Code

若新昵称已存在，返回400 Bad Request 和：

错误码|描述
----|----
NICKNAME_NOT_QUALIFIED|昵称不符合要求
NICKNAME_EXISTED|昵称已存在

###### 1.3.2 修改用户头像
```
PUT /profile/avatar
```
参数名称|类型|参数描述
---|---|---
file|请求体|上传的图片
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。

请求示例：

```bash
curl -X PUT \
  http://staging-api.intranet.szjys.com/profile/avatar \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzQxIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwOTU0NjA4LCJqdGkiOiI5NGE4YTdlZi0yN2Q5LTQxZTktYmQ1MS02N2QwZWM4ODgwODYiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoiMTg4MTA2NDQwNjFAMTYzLmNvbSJ9.bt0rOy4W-1jlyqEZQG8icuNXePerLqDEV-eNsG8vm0I' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -F file=@images.jpg
```
若请求成功，将返回200 OK的Status Code

###### 1.3.3 修改用户密码
普通用户在调用该api之前，应先[发送验证码](#27-发送更改登录密码验证码)。
```
PUT /profile/password
```

参数名称|类型|参数描述|必须
---|---|---|----
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。|必须
old_password|请求体|现有登录密码|必须
new_password|请求体|新的登录密码|必须
vcode|请求体|验证码：后台用户不需要传该参数，普通用户必须传|可选

请求示例：
```bash
curl -X PUT \
  http://staging-api.intranet.szjys.com/profile/password \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzQxIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwOTU0NjA4LCJqdGkiOiI5NGE4YTdlZi0yN2Q5LTQxZTktYmQ1MS02N2QwZWM4ODgwODYiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoiMTg4MTA2NDQwNjFAMTYzLmNvbSJ9.bt0rOy4W-1jlyqEZQG8icuNXePerLqDEV-eNsG8vm0I' \
  -H 'content-type: application/json' \
  -d '{"old_password":"123456","new_password":"123456","vcode":"123456"}'
```
若请求成功，返回200 OK

错误码列表：

错误码|描述
----|----
INVALID_OLD_PASSWORD|现有登录密码不正确
INVALID_VCODE|验证码不正确
VCODE_NOT_FOUND|未发送验证码或验证码过期
VCODE_TRY_TIMES_EXCEED_LIMIT|验证码尝试次数超过上限


###### 1.3.4 修改用户邮箱
在修改该api之前，应先[查询更换的目标邮箱是否已经被注册](#112-查询某邮箱是否已经被注册)，再向更换的目标邮箱[发送验证码](#26-发送修改邮箱验证码)。
```
PUT /profile/email
```

参数名称|类型|参数描述
---|---|---
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。
email|请求体|更换的目标邮箱
vcode|请求体|邮箱验证码
trade_password|请求体|资金密码

请求示例：
```bash
curl -X PUT \
  http://staging-api.intranet.szjys.com/profile/email \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzQxIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwOTQyNzI5LCJqdGkiOiIzNDZlOWE2ZC1lODJmLTQyODctYjAxNS1iYmVjYWU1Nzk0NTIiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoiMTg4MTA2NDQwNjFAMTYzLmNvbSJ9.QsWkyTnHp37zoWQ8duYOV-ScEOGhc5sxEpWuZQuiqXg' \
  -H 'content-type: application/json' \
  -d '{"email":"18810644061@163.com","vcode":"123456","trade_password":"abc123"}'
```
若请求成功，返回200 OK

错误码列表：

错误码|描述
----|----
INVALID_EMAIL|邮箱地址无效
EMAIL_EXISTED|邮箱已被占用
INVALID_TRADE_PASSWORD|资金密码不正确
INVALID_VCODE|验证码不正确
MISSING_VCODE|请求缺少验证码
VCODE_NOT_FOUND|未发送验证码或验证码过期
VCODE_TRY_TIMES_EXCEED_LIMIT|验证码尝试次数超过上限

###### 1.3.5 修改用户资金密码
```
PUT /profile/trade-password
```

参数名称|类型|参数描述
---|---|---
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。
old_trade_password|请求体|现有资金密码
new_trade_password|请求体|新的资金密码

请求示例：
```bash
curl -X PUT \
  http://staging-api.intranet.szjys.com/profile/trade-password \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzQxIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwOTQyNzI5LCJqdGkiOiIzNDZlOWE2ZC1lODJmLTQyODctYjAxNS1iYmVjYWU1Nzk0NTIiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoiMTg4MTA2NDQwNjFAMTYzLmNvbSJ9.QsWkyTnHp37zoWQ8duYOV-ScEOGhc5sxEpWuZQuiqXg' \
  -H 'content-type: application/json' \
  -d '{"old_trade_password":"123456","new_trade_password":"123456"}'
```
若请求成功，返回200 OK

错误码列表：

错误码|描述
----|----
NO_TRADE_PASSWORD|用户未设置过资金密码
INVALID_OLD_TRADE_PASSWORD|现有资金密码不正确

##### 1.4 确认profile信息
###### 1.4.1 确认用户资金密码
```
POST /profile/trade-password/confirmation
```

参数名称|类型|参数描述
---|---|---
Authorization|请求头|bearer <access_token>形式，  其中access_token是用户授权后认证服务器返回的。
trade_password|请求体|用户资金密码

请求示例：
```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/profile/trade-password/confirmation \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiI0MzQxIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwOTQyNzI5LCJqdGkiOiIzNDZlOWE2ZC1lODJmLTQyODctYjAxNS1iYmVjYWU1Nzk0NTIiLCJpc0hhdmVFbWFpbCI6dHJ1ZSwiY2xpZW50X2lkIjoiYnJvd3NlciIsInVzZXJuYW1lIjoiMTg4MTA2NDQwNjFAMTYzLmNvbSJ9.QsWkyTnHp37zoWQ8duYOV-ScEOGhc5sxEpWuZQuiqXg' \
  -H 'content-type: application/json' \
  -d '{"trade_password":"123456"}'
```
若请求成功，返回200 OK

错误码列表：

错误码|描述
----|----
NO_TRADE_PASSWORD|用户未设置过资金密码
INVALID_TRADE_PASSWORD|资金密码不匹配

#### 2 用户安全设置
##### 2.1 获取用户安全设置信息
以下包含了获取用户安全相关设置的API。
###### 2.1.1 获取用户全部安全策略

```
GET  /secStrategy/getSecStrategy
```
>返回值

```json
[
    {
        "profile_group": "sec.login",
        "profile_value": "0"
    },
    {
        "profile_group": "sec.asset.email",
        "profile_value": "0"
    },
    {
        "profile_group": "sec.asset.google",
        "profile_value": "0"
    }
]
```
> 返回值描述

|参数名称|参数描述|
|---|---|
|profile_id|profile_id|
|profile_item|配置项id|
|profile_group|配置项所属组,sec.login 为登录安全设置 ，sec.asset为资金安全设置 ，|
|profile_value|0为关闭，1为开启|

###### 2.1.2 检查用户登录邮箱验证码是否开启

> 请求路徑

```text
GET  /secStrategy/getUserLoginSecStrategy
```

> 请求参数

参数名称|描述|
---|---|
username|用户名|

> 返回值

```
true or false (true 表示开启，false表示关闭)
```
###### 2.1.3 获取用户资金安全策略设置

> 请求路径

```text
GET /secStrategy/getUserAssetSecStrategy
```

> 返回值

```json

[
    {
        "profile_group": "sec.asset.email",
        "profile_value": "0"
    },
    {
        "profile_group": "sec.asset.google",
        "profile_value": "0"
    }
]
```

----
###### 2.2 设置用户安全设置信息

```
POST /secStrategy/setSecStrategy
```

> 请求参数

```json
 {
 	"strategy_list":[
	    {
	        "profile_group": "sec.login",
	        "profile_value": "1"
	    },
	    {
	        "profile_group": "sec.asset.email",
	        "profile_value": "0"
	    },
	    {
	        "profile_group": "sec.asset.google",
	        "profile_value": "1"
	    }
    
	],
    "google_code":979810,
	"email_code":"123456"
 }
```
----

###### 2.3 获取用户google密钥

```
GET /secStrategy/getSecretKey
```

> 返回值

```
EZJY5RNRWSUADDJ3
```

###### 2.4 获取google authentication qr code
> 请求路径

```
GET /qrcode/generator_qrcode
```
> 请求参数

  无

> 返回结果

 二维码图片(图片大小：200x200)

---
##### 3.1 提币地址查询列表

```
GET /withdrawAddress/infoList
```

参数|描述|必须或者可选
---|---|---
Authorization|Header|用户授权后认证服务器返回的access_token|必须
currency|数字货币币种|必须
page|分页页码，从0开始|必须
size|分页大小|必须


```bash
curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' -d 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4' 'http://127.0.0.1:11003/withdrawAddress/infoList?currency=BTC&page=0&size=10'
```

服务器响应样例：

```json
{"number":0,
  "number_of_elements":2,
  "total_elements":2,"total_pages":1,
  "last":true,"first":true,
  "sort":[{"direction":"DESC","property":"isdefault",
  "ignore_case":false,"null_handling":"NATIVE",
  "ascending":false,"descending":true}],"size":15,
  "content":[{"id":8,"tag":"11111",
  "currency":"BTC","address":"11111",
  "isdefault":true,"user_id":3916,
  "create_time":1512628337000,"update_time":null,"flag":1},
  {"id":12,"tag":"3333333","currency":"BTC","address":"2222222",
  "isdefault":false,"user_id":3916,"create_time":1512711450000,
  "update_time":null,"flag":1}]}
```
##### 3.2 删除提币地址
```
DELETE /withdrawAddress/delete/{id}
```
参数|类型|描述|可选
----|----|----|----
id|Long|id|必须

```bash
DEMO: http://127.0.0.1:11003/withdrawAddress/delete/8
```
服务器响应样例：

```json
{
      "code": 0,
       "msg": "成功"
}
```
or
```json
{
      "code": 1,
       "msg": "失败"
}
```
##### 3.3 新增提币地址
```
POST /withdrawAddress/create
```
参数|描述|必须或者可选
---|---|---
Authorization|Header|用户授权后认证服务器返回的access_token|必须
tag|地址标签|必须
address|地址|必须
isdefault|是否为默认地址(true or false)|必须
currency|数字货币币种|必须

```bash
DEMO: http://127.0.0.1:11003/withdrawAddress/create
```
服务器响应样例：
```json
{
      "code": 0,
       "msg": "成功"
}
```

##### 3.4 设置提币默认地址
```
PUT /withdrawAddress/updateNormalAddress
```
参数|描述|必须或者可选
---|---|---
Authorization|Header|用户授权后认证服务器返回的access_token|必须
id|id|必须
currency|数字货币币种|必须
```bash
DEMO: http://127.0.0.1:11003/withdrawAddress/updateNormalAddress
```
服务器响应样例：
```json
{
      "code": 0,
       "msg": "成功"
}
```
##### 3.5 更新提币地址标签
```
PUT /withdrawAddress/updateTag
```
参数|描述|必须或者可选
---|---|---
Authorization|Header|用户授权后认证服务器返回的access_token|必须
tag|地址标签|必须
tradePassword|交易密码|必须
id|记录id|必须

```bash
DEMO: http://127.0.0.1:11003/withdrawAddress/updateTag
```
服务器响应样例：
```json
{
      "code": 0,
       "msg": "成功"
}
```
[返回目录](#目录)

-----

### 六、钱包功能API

#### 1 用户钱包管理API

下面使用`BTC`为例子进行展示。

##### 1.1 查询用户还可以创建的钱包类型

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/users/account/availablecurrenies \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAyNjQ2MTEsInVzZXJfbmFtZSI6IjQzMzMiLCJqdGkiOiJmYzFlNWY4Ni1lMTQyLTQxNWEtODkyOC0zNTYwMDM3OGE5ZGIiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.bIbgx6K3OzMxD1dGRr9oxdR51YiVqVOH-2fc0M5HXgA'
```

服务器响应样例：

```json
[
    "BTC",
    "ETH",
    "ETC",
    "LTC"
]
```

##### 1.2 添加某种数字货币的钱包
```
POST /users/account/:currency
```
```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/users/account/BTC \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAyNjQ2MTEsInVzZXJfbmFtZSI6IjQzMzMiLCJqdGkiOiJmYzFlNWY4Ni1lMTQyLTQxNWEtODkyOC0zNTYwMDM3OGE5ZGIiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.bIbgx6K3OzMxD1dGRr9oxdR51YiVqVOH-2fc0M5HXgA'
```

参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须
currency|String|数字货币的名称，大写|必须

```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/users/account/BTC \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAyNjQ2MTEsInVzZXJfbmFtZSI6IjQzMzMiLCJqdGkiOiJmYzFlNWY4Ni1lMTQyLTQxNWEtODkyOC0zNTYwMDM3OGE5ZGIiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.bIbgx6K3OzMxD1dGRr9oxdR51YiVqVOH-2fc0M5HXgA'
```

服务器创建该种货币钱包成功时响应：

```json
[
    {
        "currency": "BTC",
        "total": "0",
        "frozen": "0",
        "available": "0"
    }
]
```

##### 1.3 删除某种数字货币的钱包
```
DELETE /users/account/:currency
```

参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须
currency|String|数字货币的名称，大写|必须

```bash
curl -X DELETE \
  http://staging-api.intranet.szjys.com/users/account/BTC \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAyNjQ2MTEsInVzZXJfbmFtZSI6IjQzMzMiLCJqdGkiOiJmYzFlNWY4Ni1lMTQyLTQxNWEtODkyOC0zNTYwMDM3OGE5ZGIiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.bIbgx6K3OzMxD1dGRr9oxdR51YiVqVOH-2fc0M5HXgA'
```

服务器端删除该币种钱包成功时的响应：

```json
true
```

#### 2 用户钱包记录查询API

以下是用户各种钱包充值、提币、交易的记录查询API。

该系列API除了`Authorization` Header以外，还包含以下参数：

对于分页查询的系列API：形如/queries/{currency}/deposits?from=xxx&to=xxx&page=xxx&size=xxx

参数|描述|必须或者可选
---|---|---
currency|数字货币币种|必须
page|分页页码，从0开始|必须
pageSize|分页大小|必须
from|将查询\[from,to\]区间内的记录|必须
to|将查询\[from,to\]区间内的记录|必须

对于详情查询的系列API：形如/queries/{currency}/deposits/{id}

参数|描述|必须或者可选
---|---|---
currency|数字货币币种|必须
id|记录id,用来查询详情|必须

下面的例子均以XUC为样例：

##### 2.1 充币记录查询API

###### 2.1.1 冲币记录分页查询
```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/queries/XUC/deposits?from=1414198349000&to=1619464946000&page=0&size=3 \
  -H 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4'
```

服务器端查询到的响应为：
```json
{
    "content": [
        {
            "id": 32,
            "refno": "1234567891234567817",
            "creatTime": 1515148138000,
            "value": 0,
            "fee": 0,
            "confirmed": 0
        },
        {
            "id": 31,
            "refno": "1234567891234567816",
            "creatTime": 1515148137000,
            "value": 0,
            "fee": 0,
            "confirmed": 0
        },
        {
            "id": 30,
            "refno": "1234567891234567815",
            "creatTime": 1515148136000,
            "value": 0,
            "fee": 0,
            "confirmed": 0
        }
    ],
    "last": false,
    "totalPages": 4,
    "totalElements": 11,
    "number": 0,
    "size": 3,
    "sort": null,
    "first": true,
    "numberOfElements": 3
}
```

###### 2.1.2 冲币记录详情查询
```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/queries/XUC/deposits/32 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiIxMDAwMCIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxNTUwNjA4OSwianRpIjoiYjU2MDIxNTUtODRkZi00YTJhLWIzNDItOWFjYjUxYTUzOGY1IiwiaXNIYXZlRW1haWwiOmZhbHNlLCJjbGllbnRfaWQiOiJicm93c2VyIiwidXNlcm5hbWUiOiJhbGljZSJ9.7iTyz8NI3WfJMa3zuQDJm5aebluDFQUVfFmcr82zvds' \
```

服务器端查询到的响应为：
```json
{
    "creatTime": 1515148138000,
    "txid": "0x30f7190152501ac2db9dafa06a53f16447abdc54de0bbc240d0f5aa703e7c154aaaaaa",
    "address": "0x1918ac411bb0711e21ce68f7b34e7e9951fa3a83",
    "value": 0,
    "fee": 0,
    "confirmed": 0,
    "refno": "1234567891234567891"
}
```
若记录不存在，将返回404的Status Code
##### 2.2 提币记录查询API

###### 2.2.1 提币记录分页查询
```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/queries/XUC/withdrawals?from=1513198349000&to=1519464946000&page=0&size=3' \
  -H 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4'
```

服务器端查询到的响应为：

```json
{
    "content": [
        {
            "id": 48,
            "addTime": 1514359684000,
            "status": 1,
            "amount": 0.01,
            "tradeNo": "2104171227152804057",
            "fee": 0.005,
            "feeCurrency": "ETH"
        },
        {
            "id": 43,
            "addTime": 1514291993000,
            "status": 1,
            "amount": 11,
            "tradeNo": "2104171226203952004",
            "fee": 0.005,
            "feeCurrency": "ETH"
        },
        {
            "id": 41,
            "addTime": 1514268380000,
            "status": 2,
            "amount": 1,
            "tradeNo": "2104171226140619001",
            "fee": 0.005,
            "feeCurrency": "ETH"
        }
    ],
    "last": false,
    "totalPages": 5,
    "totalElements": 15,
    "number": 0,
    "size": 3,
    "sort": null,
    "first": true,
    "numberOfElements": 3
}
```

status值|描述
---|---
1|未审核
2|审核通过
3|审核失败
4|提币中
5|提币失败

###### 2.2.2 提币记录详情查询
```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/queries/XUC/withdrawals/48 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjp0cnVlLCJ1c2VyX25hbWUiOiIxMDAwMCIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxNTUwNjA4OSwianRpIjoiYjU2MDIxNTUtODRkZi00YTJhLWIzNDItOWFjYjUxYTUzOGY1IiwiaXNIYXZlRW1haWwiOmZhbHNlLCJjbGllbnRfaWQiOiJicm93c2VyIiwidXNlcm5hbWUiOiJhbGljZSJ9.7iTyz8NI3WfJMa3zuQDJm5aebluDFQUVfFmcr82zvds' \
```

服务器端查询到的响应为：
```json
{
     "addTime": 1514359684000,
     "status": 1,
     "amount": 0.01,
     "tradeNo": "2104171227152804057",
     "virtualAddress": "0x1918ac411bb0711e21ce68f7b34e7e9951fa3a83"
     "fee": 0.005,
     "feeCurrency": "ETH"
 }
```
若记录不存在，将返回404的Status Code

##### 2.3 交易记录查询API

```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/queries/XUC/trades?from=1514198349000&to=1519464946000&page=0&size=3' \
  -H 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjk4NTEsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiJhZjMxODU5Ni0zYjU4LTRmZDgtYmFiMC04NTVkZjIyODg5YzAiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.PW5EjcUC5BrAehROuPPYYiP7NUE-tja1-hizN0Jj_hc'
```

服务器响应样例为：

```json
{
    "content": [
        {
            "id": 2399,
            "type": "SELL",
            "size": 0.05,
            "fee": 0,
            "beforeBalance": 99999.25,
            "afterBalance": 99999.25,
            "beforeFreeze": 0.05,
            "afterFreeze": 0,
            "beforeTotal": 99999.3,
            "afterTotal": 99999.25,
            "createdTime": 1514273864000,
            "refNo": "1108171226000000094"
        },
        {
            "id": 2373,
            "type": "BUY",
            "size": 0.129935,
            "fee": 0.000065,
            "beforeBalance": 100000.29985,
            "afterBalance": 100000.429785,
            "beforeFreeze": 0,
            "afterFreeze": 0,
            "beforeTotal": 100000.29985,
            "afterTotal": 100000.429785,
            "createdTime": 1514273864000,
            "refNo": "1108171226000000090"
        },
        {
            "id": 2379,
            "type": "SELL",
            "size": 0.23,
            "fee": 0,
            "beforeBalance": 99999.25,
            "afterBalance": 99999.25,
            "beforeFreeze": 0.28,
            "afterFreeze": 0.05,
            "beforeTotal": 99999.53,
            "afterTotal": 99999.3,
            "createdTime": 1514273864000,
            "refNo": "1108171226000000092"
        }
    ],
    "last": false,
    "totalPages": 3,
    "totalElements": 8,
    "number": 0,
    "size": 3,
    "sort": null,
    "first": true,
    "numberOfElements": 3
}
```

#### 3 提币操作相关API
##### 3.1 提币操作
```
POST /withdrawal/apply
```

参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
--------|----|----|----
target|String|提币地址，经审核通过后会将指定数量的某种数字货币转移到该地址|必须
amount|Number|提币的数量|必须
currency|String|数字货币币种|必须
tradepassword|String|用户的交易密码/资金密码|必须
emailVcode|String|如果用户开启了邮箱验证码，则需要填写|可选
googleVcode|String|如果用户开启谷歌验证码，则需要填写|可选


示例请求：

```bash
DEMO: http://127.0.0.1:11002/withdrawal/apply
```
示例响应：

```json
{
  "code": 0,
  "msg": "success"
}
```
##### 3.2 转账操作
```
POST /transfer/apply
```

参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
--------|----|----|----
target|String|提币地址，经审核通过后会将指定数量的某种数字货币转移到该地址|必须
amount|Number|提币的数量|必须
currency|String|数字货币币种|必须
tradepassword|String|用户的交易密码/资金密码|必须
emailVcode|String|如果用户开启了邮箱验证码，则需要填写|可选
googleVcode|String|如果用户开启谷歌验证码，则需要填写|可选

示例请求：
```bash
DEMO: http://127.0.0.1:11002/transfer/apply
```

示例响应：
```json
{
  "code": 0,
  "msg": "success"
}
```

##### 3.3 验证用户提币地址
```
GET /withdrawal/customerAddress
```
参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
--------|----|----|----
address|String|提币地址|必须
currency|数字货币币种|必须

```bash
DEMO: http://127.0.0.1:11002/withdrawal/customerAddress?currency=BTC&address=0XddDDXXDFF
```
示例响应：

```json
{
  "code": 0,
  "msg": "success"
}
```
##### 3.4 提币手续费查询
```
GET /withdrawal/fee
```

参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须
currency|String|提币币种|必须

示例请求：

```bash
DEMO: http://127.0.0.1:11002/withdrawal/fee
```
示例响应：

```json
0.01
```

#### 4 Banner操作相关API
##### 4.1 Banner列表
```
GET /cms/banners
```
json请求参数|类型|描述|可选
--------|----|----|----
classification|String|分类（Banner,Splash）|必须
type|String|类型(IOS,Android,Web)|必须

json返回|类型|描述
--------|----|----
id|Integer|id
classification|String|分类（Banner,Splash)
type|String|类型(IOS,Android,Web)
createTime|datetime|创建时间
height|Integer|图片高度
width|Integer|图片宽度
sort|Integer|排序
url|String|图片点击后跳转地址
key|String|图片地址


示例请求：

```bash
curl -X GET --header 'Accept: application/json' 'http://127.0.0.1:11003/cms/banners?classification=Banner&type=IOS'
```
示例响应：

```json
[
    {
        "id": 7,
        "type": "IOS",
        "createTime": 1514962050000,
        "height": 10,
        "width": 20,
        "sort": 1,
        "url": "www.baidu.com",
		"key":"23423-234234-23423423"
        "classification": "Banner"
    },
    {
        "id": 8,
        "type": "IOS",
        "createTime": 1514962054000,
        "height": 10,
        "width": 20,
        "sort": 2,
        "url": "www.baidu.com",
		"key":"23423-234234-23423423"
        "classification": "Banner"
    },
    {
        "id": 9,
        "type": "IOS",
        "createTime": 1514962055000,
        "height": 10,
        "width": 20,
        "sort": 3,
        "url": "www.baidu.com",
		"key":"23423-234234-23423423"
        "classification": "Banner"
    }
]
```

##### 4.2 获取图片
```
GET /image/{key}
```

参数|类型|描述
----|----|----
key|string|图片资源的key

下面请求的参数中，**6f9fbdf9-9893-4404-b61f-c2746f545ac5**是图片的资源key。

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/image/6f9fbdf9-9893-4404-b61f-c2746f545ac5
```

如果请求成功，服务器将返回该资源对应的PNG格式的图片。
[返回目录](#目录)

----

### 八、用户站内信API

#### 1 发信
##### 1.1 群发站内信

群发站内信需要发信用户在MARKETING的GROUP内
```bash
curl -X POST \
  http://staging-api.intranet.szjys.com/users/messages \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDM0MSIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDcwMjAxNSwianRpIjoiYmVmM2I3NWYtMjQ5YS00ZDk2LWEyZjItM2MzMWQxNDI4NGJkIiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.4hVPnI5S77dZ53alEEw9zex0VTJLw0wsBLBbQkcZ-o0' \
  -H 'content-type: application/json' \
  -d '{"title":"test","content":"123456abc"}'
```
发信成功将返回200 OK的Status Code

#### 2 查询用户收信
##### 2.1 分页查询收信
参数|描述
----|----
page|页码，从0开始
size|每页容量
```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/users/messages?page=0&size=3' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDM0MSIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDc1MjU5NywianRpIjoiYmFmMzVjMDQtNDI5NS00NzQ2LTgzNDQtZjQ2MzFlNzc0M2Y2IiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.b5za-7Hb_h0eqSdZ7HcNxOvPD3qKBK6cqwFaRrODSMk' \
```
查询成功将返回200 OK的Status Code和如下形式的json：
```json
{
    "number": 0,
    "number_of_elements": 3,
    "total_elements": 35,
    "total_pages": 12,
    "last": false,
    "first": true,
    "sort": null,
    "size": 3,
    "content": [
        {
            "id": "37",
            "title": "test",
            "creat_at": 1511435262521,
            "read": false
        },
        {
            "id": "36",
            "title": "MOREISGOOD",
            "creat_at": 1511406915960,
            "read": false
        },
        {
            "id": "35",
            "title": "Test1",
            "creat_at": 1511342838285,
            "read": false
        }
    ]
}
```
若数据不存在，则返回400 Bad Request的Status Code以及json：
```json
{
    "error": "MESSAGE_NOT_FOUND",
    "message": "站内信不存在(33248)",
    "ref": "33248"
}
```

##### 2.2 根据消息id查询收信
```
GET /users/message/:msg_id
```

参数|描述
----|----
msg_id|消息id
```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/users/message/8 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDM0MSIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDc1NTg1MywianRpIjoiM2FjNjc5YzAtZjI3My00YzM0LWFkYWQtNWE0NGM2YWUxNzE2IiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.1IMqI94AwRanto187GMhSgu5wlIsCSolKVieKmPWCwM' \
```
查询成功返回200 OK的Status Code以及json：
```json
{
    "id": "8",
    "title": "test",
    "content": "123456abc",
    "creat_at": 1510712540444,
    "from": "DAE钱包客服",
    "read": false
}
```
消息不存在则返回400 Bad Request的Status Code以及json：
```json
{
    "error": "MESSAGE_NOT_FOUND",
    "message": "站内信不存在(33255)",
    "ref": "33255"
}
```

#### 3 查询用户发信
##### 3.1 分页查询发信

参数|描述
----|----
page|页码，从0开始
size|每页容量

```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/users/messages/sended?page=0&size=3' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiMzUwIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwNzUyOTg4LCJqdGkiOiJkZWEwN2FhZS00ZjAzLTQzYjktOTcxYy1lMmUxNzdmZDJiMjMiLCJpc0hhdmVFbWFpbCI6ZmFsc2UsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.WIzuHAijvt1twZ09JVcC9STthL7CQy2ThYQ7L9PaO38' \
```
查询成功将返回200 OK的Status Code以及json：
```json
{
    "number": 0,
    "number_of_elements": 3,
    "total_elements": 38,
    "total_pages": 13,
    "last": false,
    "first": true,
    "sort": null,
    "size": 3,
    "content": [
        {
            "id": "37",
            "title": "test",
            "creat_at": 1511435262499,
            "to": "all"
        },
        {
            "id": "36",
            "title": "MOREISGOOD",
            "creat_at": 1511406915938,
            "to": "all"
        },
        {
            "id": "35",
            "title": "Test1",
            "creat_at": 1511342838264,
            "to": "all"
        }
    ]
}
```
若数据不存在，则返回400 Bad Request的Status Code以及json：
```json
{
    "error": "MESSAGE_NOT_FOUND",
    "message": "站内信不存在(33248)",
    "ref": "33248"
}
```
##### 3.2 根据消息id查询发信
```
GET /users/message/sended/:msg_id
```

参数|描述
----|----
msg_id|消息id

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/users/message/sended/9 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiMzUwIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwNzU4NTM3LCJqdGkiOiI1OGUwYzQ3OC04OWRhLTQyZTItOTAwZi0zNmVlMGUyNTE3NDAiLCJpc0hhdmVFbWFpbCI6ZmFsc2UsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.OyOLozZlO6ukMbO_wVJPAd-_j2GlL64ddCMAAP5iv30' \
```
查询成功将返回200 OK的Status Code以及json：
```json
{
    "id": "9",
    "title": "test",
    "content": "123456abc",
    "creat_at": 1510712541350,
    "to": "all"
}
```
若数据不存在，则返回400 Bad Request的Status Code以及json：
```json
{
    "error": "MESSAGE_NOT_FOUND",
    "message": "站内信不存在(33248)",
    "ref": "33248"
}
```
#### 4 读取收信
参数|描述
----|----
id|收信id，可以有多个，进行批量读取
```bash
curl -X PUT \
  'http://staging-api.intranet.szjys.com/users/messages?id=5&id=7' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiMzUwIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNTEwNzU5NTMzLCJqdGkiOiI5NTk0ODI4MS1jZjUwLTQ4YmYtOTAzMy01M2IwNGExOWE5NjYiLCJpc0hhdmVFbWFpbCI6ZmFsc2UsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.KUji5sieOHCt6q1HH88mRhF6HCOH19ctdmjxTzpySEM' \
```
调用成功将返回200 OK的Status Code

#### 5 删除收信

参数|描述
----|----
id|收信id，可以有多个，进行批量删除
```bash
curl -X DELETE \
  'http://staging-api.intranet.szjys.com/users/messages?id=4&id=5' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDM0MSIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDc1NTg1MywianRpIjoiM2FjNjc5YzAtZjI3My00YzM0LWFkYWQtNWE0NGM2YWUxNzE2IiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.1IMqI94AwRanto187GMhSgu5wlIsCSolKVieKmPWCwM' \
```
调用成功将返回200 OK的Status Code
#### 6 查询收信统计
```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/users/messages/statistics \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDM0MSIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDc1NTg1MywianRpIjoiM2FjNjc5YzAtZjI3My00YzM0LWFkYWQtNWE0NGM2YWUxNzE2IiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.1IMqI94AwRanto187GMhSgu5wlIsCSolKVieKmPWCwM' \
```
调用成功将返回200 OK的Status Code以及json：
```json
{
    "notRead": "10",
    "sum": "10"
}
```

[返回目录](#目录)

----
### 九、用户管理API
用户管理API需要具有客服权限的用户才能调用。
#### 1 用户基本信息管理
以下为用户的profile信息管理API。
##### 1.1 获取用户列表
```
GET /users
```

参数|描述|可选
----|----|----
page|查询的页码，从0开始|必须
size|查询的每页大小|必须
sort|查询的排序要求的属性名称|可选
filter|查询的过滤条件|可选

请求示例
```bash
curl -X GET \
  'http://staging-api.intranet.szjys.com/users?page=0&size=10' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDMzMSIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDc3MDg4MywianRpIjoiMWFjMWYzZDktMDBiMi00NGM1LTgyYmYtNzBiNTRlYjRjYjc4IiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIiLCJ1c2VybmFtZSI6IkxNIn0.zjdcV0x83tjJqoBnMKRLbK68Zm1gaXLw4i6jxTquXGM'
```
响应示例

```json
{
    "number": 0,
    "number_of_elements": 2,
    "total_elements": 2,
    "total_pages": 1,
    "last": true,
    "first": true,
    "sort": null,
    "size": 10,
    "content": [
        {
            "id": 4331,
            "phone": null,
            "kyc_name": null
        },
        {
            "id": 4333,
            "phone": null,
            "kyc_name": null
        }
    ]
}
```
##### 1.2 获取单个用户的profile信息
```
GET /users/:usesr_id
```

参数|类型|描述
----|-----|----
user_id|string|用户的系统id

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/users/4024 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDMzMSIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDcwMjMzNSwianRpIjoiOTU1ZGUzYjctOGRiNC00NzA2LTk2YjUtMjljZDJmZmZlYmVmIiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIifQ.mkX-EwUJNLNLluTS9mWCsZtkPJbZQ79yIGAjjTbsEdY'
```
响应样例：
```json
{
    "user_id": "4024",
    "nickname": "justin",
    "phone": null,
    "email": "5562587@163.com",
    "avatar": null,
    "has_trade_password": true,
    "kyc_info": {
        "level": 2,
        "status": "APPROVED",
        "name": null,
        "phone": null,
        "id_card": null,
        "id_card_front": null,
        "id_card_back": null,
        "id_card_hand": null,
        "bank_account": null,
        "video": null
    },
    "gender": "UNKNOWN",
    "bank_accounts": [],
    "wallets": [
        {
            "currency": "BTC",
            "address": "mmQGAJCU5MKsZytRHMzpRBMqSHe56VcMsf"
        },
        {
            "currency": "ETH",
            "address": "0x0bc7774b6ac2d9734d57be9b2fa2987a0e6c040b"
        },
        {
            "currency": "ETC",
            "address": "0x66eb267dadec6553e9c7c32212f83147a2953d55"
        },
        {
            "currency": "LTC",
            "address": "n3RpznDyQSxj5LfwV2LjyRRubkZ6SsmpQE"
        }
    ],
    "balances": [
        {
            "currency": "BTC",
            "total": "0.0006",
            "frozen": "0",
            "available": "0.0006"
        },
        {
            "currency": "ETH",
            "total": "0",
            "frozen": "0",
            "available": "0"
        },
        {
            "currency": "LTC",
            "total": "0.0279",
            "frozen": "0.0031",
            "available": "0.0248"
        },
        {
            "currency": "ETC",
            "total": "0",
            "frozen": "0",
            "available": "0"
        },
        {
            "currency": "XUC",
            "total": "0",
            "frozen": "0",
            "available": "0"
        }
    ],
    "registration_time": 1511502746000,
    "oauth_accounts": []
}
```

##### 1.3 封禁/解除封禁API
```
PUT /users/:user_id/enabled
```

参数|类型|描述|可选
----|----|----|----
user_id|string|用户的系统id|必须
value|boolean|ture或者false|必须
Authorization|Header|bearer <access_token>形式，其中access_token是用户授权后认证服务器返回的。|必须

示例请求：

```bash
curl -X PUT \
  'http://staging-api.intranet.szjys.com/users/4333/enabled?value=true' \
  -H 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0hhdmVUcmFkZVBhc3N3b3JkIjpmYWxzZSwidXNlcl9uYW1lIjoiNDMzMSIsInNjb3BlIjpbInVpIl0sImV4cCI6MTUxMDk1Njc1NiwianRpIjoiNDljZGE3MGItMmFiOS00MDYxLTkwYzUtZTI0Y2JkMzVlYWNjIiwiaXNIYXZlRW1haWwiOnRydWUsImNsaWVudF9pZCI6ImJyb3dzZXIiLCJ1c2VybmFtZSI6IkxNIn0.4QRneLmlGF0LkYYKqZAThxmAVoTeqqfyuCI_LA9ocAU'
```
当请求操作成功时，服务器将会返回`200 OK`的HTTP Status Code。

#### 2 用户权限管理

#### 3 用户组信息管理

[返回目录](#目录)

---
 
### 十、钱包后台管理API
#### 1 提币操作管理API
##### 1.1 审核未通过列表
```
GET /walletWithdraw/orders/checkfailList
```
json参数|类型|描述|可选
--------|----|----|----
startTime|Date|起始时间|可选
endTime|Date|结束时间|可选
currency|String|数字货币币种|可选
queryName|String|模糊查询关键字|可选
page|Integer|分页页码，从0开始|必须
size|Integer|分页大小|必须

示例请求：

```bash
curl -X GET --header 'Accept: application/json' 'http://127.0.0.1:11003/walletWithdraw/orders/checkfailList?currency=BTC&page=0&size=10'
```
示例响应：

```json
{
 "pageNum": 1,
   "pageSize": 10,
   "size": 1,
   "startRow": 1,
   "endRow": 1,
   "total": 1,
   "pages": 1,
   "list": [
     {
       "id": 3,
       "tradeno": "2100171205142121005",
       "currency": "BTC",
       "addTime": 1511343763000,
       "amount": 12,
       "status": 3,
       "finishTime": null,
       "updateTime": null,
       "videoAuth": false,
       "failCause": null,
       "virtualAddress": "mpKPQMBH2zqLyfVS7HVgKtN6Z82Ho7hfy5",
       "exceptionCause": null,
       "name": null,
       "refno": 139,
       "remark": null,
       "phone": null,
       "email": "admin@123.com",
       "nickName": null,
       "userId": 1678
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
##### 1.2 审核完成列表
```
GET /walletWithdraw/orders/checksuccessList
```
json参数|类型|描述|可选
--------|----|----|----
startTime|Date|起始时间|可选
endTime|Date|结束时间|可选
currency|String|数字货币币种|可选
queryName|String|模糊查询关键字|可选
page|Integer|分页页码，从0开始|必须
size|Integer|分页大小|必须

示例请求：

```bash
curl -X GET --header 'Accept: application/json' 'http://127.0.0.1:11003/walletWithdraw/orders/checksuccessList?currency=BTC&page=0&size=10'
```
示例响应：

```json
{
  "pageNum": 1,
    "pageSize": 10,
    "size": 1,
    "startRow": 1,
    "endRow": 1,
    "total": 1,
    "pages": 1,
    "list": [
      {
        "id": 5,
        "tradeno": "2100171205142121006",
        "currency": "BTC",
        "addTime": 1511343763000,
        "amount": 12,
        "status": 2,-------------status=4（审核中）status=5（提币失败）
        "finishTime": null,
        "updateTime": null,
        "videoAuth": false,
        "failCause": null,
        "virtualAddress": "mpKPQMBH2zqLyfVS7HVgKtN6Z82Ho7hfy5",
        "exceptionCause": null,
        "name": null,
        "refno": 139,
        "remark": null,
        "phone": null,
        "email": "admin@123.com",
        "nickName": null,
        "userId": 1678
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
##### 1.3 未审核提币列表
```
GET /walletWithdraw/orders/uncheckList
```
json参数|类型|描述|可选
--------|----|----|----
startTime|Date|起始时间|可选
endTime|Date|结束时间|可选
currency|String|数字货币币种|可选
queryName|String|模糊查询关键字|可选
page|Integer|分页页码，从0开始|必须
size|Integer|分页大小|必须

示例请求：

```bash
curl -X GET --header 'Accept: application/json' 'http://127.0.0.1:11003/walletWithdraw/orders/uncheckList?currency=BTC&page=0&size=10'
```
示例响应：

```json
{
  "pageNum": 1,
    "pageSize": 10,
    "size": 1,
    "startRow": 1,
    "endRow": 1,
    "total": 1,
    "pages": 1,
    "list": [
      {
        "id": 1,
        "tradeno": "123",
        "currency": "BTC",
        "addTime": 1511343561000,
        "amount": 12,
        "status": 1,
        "finishTime": null,
        "updateTime": null,
        "videoAuth": false,
        "failCause": null,
        "virtualAddress": null,
        "exceptionCause": null,
        "name": null,
        "refno": 3333555,
        "remark": null,
        "phone": null,
        "email": "admin@123.com",
        "nickName": null,
        "userId": 1678
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
##### 1.4 审核未通过订单详情
```
GET /walletWithdraw/orders/checkFailDetails/{id}/{currency}
```
参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
--------|----|----|----
id|Long|操作记录id|必须
currency|String|数字货币币种|必须

示例请求：

```bash

curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' -d 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4' 'http://127.0.0.1:11003/walletWithdraw/orders/checkFailDetails/1/BTC'

```
示例响应：

```json
{
  "addTime": "2017-12-07T07:26:30.651Z",
    "amount": 0,
    "currency": "string",
    "email": "string",
    "employeeId": 0,
    "employeeName": "string",
    "failCause": "string",
    "finishTime": "2017-12-07T07:26:30.651Z",
    "id": 0,
    "kycName": "string",
    "nickName": "string",
    "phone": "string",
    "refno": 0,
    "remark": "string",
    "status": 0,
    "tradeno": "string",
    "upDateTime": "2017-12-07T07:26:30.652Z",
    "userId": 0,
    "videoAuth": true,
    "virtualAddress": "string"
}
```

##### 1.5 审核完成订单详情
```
GET /walletWithdraw/orders/checkSuccessDetails/{id}/{currency}
```
参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
--------|----|----|----
id|Long|操作记录id|必须
currency|String|数字货币币种|必须

示例请求：

```bash
curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' -d 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4' 'http://127.0.0.1:11003/walletWithdraw/orders/checkSuccessDetails/1/BTC'

```

示例响应：

```json
{
  "addTime": "2017-12-07T07:26:30.651Z",
    "amount": 0,
    "currency": "string",
    "email": "string",
    "employeeId": 0,
    "employeeName": "string",
    "failCause": "string",
    "finishTime": "2017-12-07T07:26:30.651Z",
    "id": 0,
    "kycName": "string",
    "nickName": "string",
    "phone": "string",
    "refno": 0,
    "remark": "string",
    "status": 2,-------------status=4（审核中）
    "tradeno": "string",
    "upDateTime": "2017-12-07T07:26:30.652Z",
    "userId": 0,
    "videoAuth": true,
    "virtualAddress": "string"
}
```

##### 1.6 未审核订单详情
```
GET /walletWithdraw/orders/uncheckDetails/{id}/{currency}
```
参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
--------|----|----|----
id|Long|操作记录id|必须
currency|String|数字货币币种|必须

示例请求：

```bash

curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' -d 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4' 'http://127.0.0.1:11003/walletWithdraw/orders/uncheckDetails/1/BTC'

```
示例响应：

```json
{
  "addTime": "2017-12-07T07:26:30.651Z",
    "amount": 0,
    "currency": "string",
    "email": "string",
    "employeeId": 0,
    "employeeName": "string",
    "failCause": "string",
    "finishTime": "2017-12-07T07:26:30.651Z",
    "id": 0,
    "kycName": "string",
    "nickName": "string",
    "phone": "string",
    "refno": 0,
    "remark": "string",
    "status": 0,
    "tradeno": "string",
    "upDateTime": "2017-12-07T07:26:30.652Z",
    "userId": 0,
    "videoAuth": true,
    "virtualAddress": "string"
}
```
##### 1.7 提币审核未通过
```
PUT /walletWithdraw/orders/submitToFail
```
json参数|类型|描述|可选
--------|----|----|----
id|Number|提币的数量|必须
currency|String|数字货币币种|必须
processLogs|String|用户的交易密码/资金密码|必须
```bash
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \ 
   "currency": "BTC", \ 
   "id": 1, \ 
   "processLogs": "XXX" \ 
    \ 
 }' 'http://127.0.0.1:11003/walletWithdraw/orders/submitToFail'
```
示例响应：

```json
{
  "code": 0,
  "msg": "success"
}
```

##### 1.8 提币审核通过
```
PUT /walletWithdraw/orders/submitToSuccess
```
参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
-------|----|----|----
id|Number|提币的数量|必须
currency|String|数字货币币种|必须
```bash
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4' -d '{ \ 
   "currency": "BTC", \ 
   "id": 1 \ 
 }' 'http://127.0.0.1:11003/walletWithdraw/orders/submitToSuccess'
 
```
示例响应：

```json
{
  "code": 0,
  "msg": "success"
}
```


#### 2 转账操作管理API
##### 2.1 审核未通过列表
```
GET /walletTransfer/orders/checkFailList
```
json参数|类型|描述|可选
--------|----|----|----
startTime|Date|起始时间|可选
endTime|Date|结束时间|可选
currency|String|数字货币币种|可选
queryName|String|模糊查询关键字|可选
page|Integer|分页页码，从0开始|必须
size|Integer|分页大小|必须

示例请求：

```bash
curl -X GET --header 'Accept: application/json' 'http://127.0.0.1:11003/walletTransfer/orders/checkFailList?currency=BTC&page=0&size=10'
```
示例响应：

```json
{
 "pageNum": 1,
   "pageSize": 10,
   "size": 1,
   "startRow": 1,
   "endRow": 1,
   "total": 1,
   "pages": 1,
   "list": [
     {
       "id": 3,
       "tradeno": "2100171205142121005",
       "currency": "BTC",
       "addTime": 1511343763000,
       "amount": 12,
       "status": 3,
       "finishTime": null,
       "updateTime": null,
       "videoAuth": false,
       "failCause": null,
       "virtualAddress": "mpKPQMBH2zqLyfVS7HVgKtN6Z82Ho7hfy5",
       "exceptionCause": null,
       "name": null,
       "refno": 139,
       "remark": null,
       "phone": null,
       "email": "admin@123.com",
       "nickName": null,
       "userId": 1678
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
##### 2.2 审核完成列表
```
GET /walletTransfer/orders/checkSuccessList
```
json参数|类型|描述|可选
--------|----|----|----
startTime|Date|起始时间|可选
endTime|Date|结束时间|可选
currency|String|数字货币币种|可选
queryName|String|模糊查询关键字|可选
page|Integer|分页页码，从0开始|必须
size|Integer|分页大小|必须

示例请求：

```bash
curl -X GET --header 'Accept: application/json' 'http://127.0.0.1:11003/walletTransfer/orders/checkSuccessList?currency=BTC&page=0&size=10'
```
示例响应：

```json
{
  "pageNum": 1,
    "pageSize": 10,
    "size": 1,
    "startRow": 1,
    "endRow": 1,
    "total": 1,
    "pages": 1,
    "list": [
      {
        "id": 5,
        "tradeno": "2100171205142121006",
        "currency": "BTC",
        "addTime": 1511343763000,
        "amount": 12,
        "status": 2,
        "finishTime": null,
        "updateTime": null,
        "videoAuth": false,
        "failCause": null,
        "virtualAddress": "mpKPQMBH2zqLyfVS7HVgKtN6Z82Ho7hfy5",
        "exceptionCause": null,
        "name": null,
        "refno": 139,
        "remark": null,
        "phone": null,
        "email": "admin@123.com",
        "nickName": null,
        "userId": 1678
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
##### 2.3 未审核转账列表
```
GET /walletTransfer/orders/uncheckList
```
json参数|类型|描述|可选
--------|----|----|----
startTime|Date|起始时间|可选
endTime|Date|结束时间|可选
currency|String|数字货币币种|可选
queryName|String|模糊查询关键字|可选
page|Integer|分页页码，从0开始|必须
size|Integer|分页大小|必须

示例请求：

```bash
curl -X GET --header 'Accept: application/json' 'http://127.0.0.1:11003/walletTransfer/orders/uncheckList?currency=BTC&page=0&size=10'
```
示例响应：

```json
{
  "pageNum": 1,
    "pageSize": 10,
    "size": 1,
    "startRow": 1,
    "endRow": 1,
    "total": 1,
    "pages": 1,
    "list": [
      {
        "id": 1,
        "tradeno": "123",
        "currency": "BTC",
        "addTime": 1511343561000,
        "amount": 12,
        "status": 1,
        "finishTime": null,
        "updateTime": null,
        "videoAuth": false,
        "failCause": null,
        "virtualAddress": null,
        "exceptionCause": null,
        "name": null,
        "refno": 3333555,
        "remark": null,
        "phone": null,
        "email": "admin@123.com",
        "nickName": null,
        "userId": 1678
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
##### 2.4 审核未通过订单详情
```
GET /walletTransfer/orders/checkfailDetails/{id}/{currency}
```
参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
--------|----|----|----
id|Long|操作记录id|必须
currency|String|数字货币币种|必须

示例请求：

```bash

curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' -d 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4' 'http://127.0.0.1:11003/walletTransfer/orders/checkfailDetails/1/BTC'

```
示例响应：

```json
{
  "addTime": "2017-12-07T07:26:30.651Z",
    "amount": 0,
    "currency": "string",
    "email": "string",
    "employeeId": 0,
    "employeeName": "string",
    "failCause": "string",
    "finishTime": "2017-12-07T07:26:30.651Z",
    "id": 0,
    "kycName": "string",
    "nickName": "string",
    "phone": "string",
    "refno": 0,
    "remark": "string",
    "status": 0,
    "tradeno": "string",
    "upDateTime": "2017-12-07T07:26:30.652Z",
    "userId": 0,
    "videoAuth": true,
    "virtualAddress": "string"
}
```

##### 2.5 审核完成订单详情
```
GET /walletTransfer/orders/checkSucccessDetails/{id}/{currency}
```
参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
--------|----|----|----
id|Long|操作记录id|必须
currency|String|数字货币币种|必须

示例请求：

```bash
curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' -d 'authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4' 'http://127.0.0.1:11003/walletTransfer/orders/checkSucccessDetails/1/BTC'

```

示例响应：

```json
{
  "addTime": "2017-12-07T07:26:30.651Z",
    "amount": 0,
    "currency": "string",
    "email": "string",
    "employeeId": 0,
    "employeeName": "string",
    "failCause": "string",
    "finishTime": "2017-12-07T07:26:30.651Z",
    "id": 0,
    "kycName": "string",
    "nickName": "string",
    "phone": "string",
    "refno": 0,
    "remark": "string",
    "status": 0,
    "tradeno": "string",
    "upDateTime": "2017-12-07T07:26:30.652Z",
    "userId": 0,
    "videoAuth": true,
    "virtualAddress": "string"
}
```

##### 2.6 未审核订单详情
```
GET /walletTransfer/orders/uncheckDetails/{id}/{currency}
```
参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
--------|----|----|----
id|Long|操作记录id|必须
currency|String|数字货币币种|必须

示例请求：

```bash
curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' -d 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4' 'http://127.0.0.1:11003/walletTransfer/orders/uncheckDetails/1/BTC'
```
示例响应：

```json
{
  "addTime": "2017-12-07T07:26:30.651Z",
    "amount": 0,
    "currency": "string",
    "email": "string",
    "employeeId": 0,
    "employeeName": "string",
    "failCause": "string",
    "finishTime": "2017-12-07T07:26:30.651Z",
    "id": 0,
    "kycName": "string",
    "nickName": "string",
    "phone": "string",
    "refno": 0,
    "remark": "string",
    "status": 0,
    "tradeno": "string",
    "upDateTime": "2017-12-07T07:26:30.652Z",
    "userId": 0,
    "videoAuth": true,
    "virtualAddress": "string"
}
```
##### 2.7 转账审核未通过
```
PUT /walletTransfer/orders/submitToFail
```
json参数|类型|描述|可选
--------|----|----|----
id|Number|提币的数量|必须
currency|String|数字货币币种|必须
processLogs|String|用户的交易密码/资金密码|必须
```bash
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \ 
   "currency": "BTC", \ 
   "id": 1, \ 
   "processLogs": "XXX" \ 
    \ 
 }' 'http://127.0.0.1:11003/walletTransfer/orders/submitToFail'
 
```
示例响应：

```json
{
  "code": 0,
  "msg": "success"
}
```

##### 2.8 转账审核通过
```
PUT /walletTransfer/orders/submitToSuccess
```
参数|类型|描述|可选
----|----|----|----
Authorization|Header|用户授权后认证服务器返回的access_token|必须

json参数|类型|描述|可选
-------|----|----|----
id|Number|提币的数量|必须
currency|String|数字货币币种|必须
```bash 
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTAzMjczMjMsInVzZXJfbmFtZSI6IjQwNjEiLCJqdGkiOiI1MWNlNzAzYy03NzJmLTQ1ZmEtOTUwZi0yMjlhNWE2OTE1ZTUiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.XZ5UGZiH-EYuNSLWairfQ064pxhemuDozl1CtMwPaA4' -d '{ \ 
   "currency": "BTC", \ 
   "id": 1 \ 
 }' 'http://127.0.0.1:11003/walletTransfer/orders/submitToSuccess'
```
示例响应：

```json
{
  "code": 0,
  "msg": "成功"
}

```
#### 3 充值操作管理API
##### 3.1 充值完成列表
```
GET /walletRecharge/orders/finishList
```
json参数|类型|描述|可选
--------|----|----|----
startTime|Date|起始时间|可选
endTime|Date|结束时间|可选
currency|String|数字货币币种|可选
queryName|String|模糊查询关键字|可选
page|Integer|分页页码，从0开始|必须
size|Integer|分页大小|必须
示例请求：

```bash
curl -X GET --header 'Accept: application/json' 'http://127.0.0.1:11003/walletRecharge/orders/finishList?currency=BTC&page=0&size=10'
```
示例响应：

```json
{
  "pageNum": 1,
  "pageSize": 10,
  "size": 10,
  "startRow": 1,
  "endRow": 10,
  "total": 2,
  "pages": 1,
  "list": [
    {
      "id": 93,
      "txid": "Internal-33ed76c9-ac20-410e-a819-2e7cf8564bac",
      "userId": 1709,
      "createTime": 1505871307000,
      "toAddress": "1NEsLXNt9ptbKu5jVnKjDinCTehMu7MsiP",
      "category": null,
      "value": 100,
      "fee": null,
      "txnFee": null,
      "txnProfit": null,
      "confirmations": null,
      "updateTime": 1510020957000,
      "confirmed": true,
      "currency": "BTC",
      "name": null,
      "email": null,
      "username": null
    },
    {
      "id": 91,
      "txid": "Internal-46142831-1c6c-4af8-ae64-59095fae3dc3",
      "userId": 1709,
      "createTime": 1505871275000,
      "toAddress": "17pH4dkWeyNJ94CPC9ndA1yEA2sWyviMEu",
      "category": null,
      "value": 100,
      "fee": null,
      "txnFee": null,
      "txnProfit": null,
      "confirmations": null,
      "updateTime": 1510020957000,
      "confirmed": true,
      "currency": "BTC",
      "name": null,
      "email": null,
      "username": null
    }
  ],
  "prePage": 0,
  "nextPage": 2,
  "isFirstPage": true,
  "isLastPage": false,
  "hasPreviousPage": false,
  "hasNextPage": true,
  "navigatePages": 8,
  "navigatepageNums": [
    1,
    2,
    3,
    4
  ],
  "navigateFirstPage": 1,
  "navigateLastPage": 4,
  "lastPage": 4,
  "firstPage": 1
}
```

##### 3.2 充值完成详情
```
GET /walletRecharge/orders/details/{id}/{currency}
```

json参数|类型|描述|可选
--------|----|----|----
id|Long|记录id|必须
currency|String|数字货币币种|必须

示例请求：

```bash
curl -X GET --header 'Accept: */*' 'http://127.0.0.1:11003/walletRecharge/orders/details/1/BTC'
```
示例响应：

```json
{
    "value": 0,
    "category": "string",
    "confirmations": 0,
    "confirmed": true,
    "createTime": "2017-12-07T07:26:30.559Z",
    "currency": "string",
    "email": "string",
    "fee": 0,
    "id": 0,
    "name": "string",
    "toAddress": "string",
    "txid": "string",
    "txnFee": 0,
    "txnProfit": 0,
    "updateTime": "2017-12-07T07:26:30.559Z",
    "userId": 0,
    "username": "string"
}
```
#### 4 Banner操作管理API
##### 4.1 Banner列表
```
GET /walletadmin/banners
```
json请求参数|类型|描述|可选
--------|----|----|----
classification|String|分类（Banner,Splash）|可选
type|String|类型(IOS,Android,Web)|可选
sort|Integer|排序|可选

json返回|类型|描述
--------|----|----
id|Integer|id
classification|String|分类（Banner,Splash)
type|String|类型(IOS,Android,Web)
createTime|datetime|创建时间
height|Integer|图片高度
width|Integer|图片宽度
sort|Integer|排序
url|String|图片地址
key|String|图片key
fileName|String|图片名称


示例请求：

```bash
curl -X GET --header 'Accept: application/json' 'http://127.0.0.1:11003/walletadmin/banners?classification=Banner&type=IOS'
```
示例响应：

```json
[
    {
        "id": 7,
        "type": "IOS",
        "createTime": 1514962050000,
        "height": 10,
        "width": 20,
        "sort": 1,
        "url": "234234",
		"key":"23423423423423-23423423",
		"fileName":"ios.jpg",
        "classification": "Banner"
    },
    {
        "id": 8,
        "type": "IOS",
        "createTime": 1514962054000,
        "height": 10,
        "width": 20,
        "sort": 2,
        "url": "234234",
		"key":"23423423423423-23423423",
		"fileName":"ios.jpg",
        "classification": "Banner"
    },
    {
        "id": 9,
        "type": "IOS",
        "createTime": 1514962055000,
        "height": 10,
        "width": 20,
        "sort": 3,
        "url": "234234",
		"key":"23423423423423-23423423",
		"fileName":"ios.jpg",
        "classification": "Banner"
    }
]
```

##### 4.2 创建Banner
```
POST /zuul/walletadmin/banners
```

json请求参数|类型|描述|可选
--------|----|----|----
type|String|类型(IOS,Android,Web)|必须
width|Integer|图片宽|必须
height|Integer|图片高|必须
sort|Integer|排序|必须
url|Integer|图片地址|可选
classification|String|分类（Banner,Splash）|必须

示例请求：

```bash
curl -X POST --header 'Accept: */*' 'http://127.0.0.1:11003/zuul/walletadmin/banners'
```
示例请求：form-data

```json
jsonData=[{
    "type": "IOS",
    "height": 10,
    "width": 20,
    "sort": 1,
    "url": "234234",
    "classification": "Banner"
},{
    "type": "IOS",
    "height": 10,
    "width": 20,
    "sort": 1,
    "url": "234234",
    "classification": "Banner"
}]
file=[{},{}]
```

##### 4.4 删除Banner
```
DELETE /walletadmin/banners/{classification}/{sort}
```

json请求参数|类型|描述|可选
--------|----|----|----
classification|String|分类（Banner,Splash）|必须
sort|Integer|排序|可选


示例请求：

```bash
curl -X DELETE --header 'Accept: */*' 'http://127.0.0.1:11003/walletadmin/banners/Splash/1'
```
示例响应：

##### 4.5 获取图片
```
GET /image/{key}
```

参数|类型|描述
----|----|----
key|string|图片资源的key

下面请求的参数中，**6f9fbdf9-9893-4404-b61f-c2746f545ac5**是图片的资源key。

```bash
curl -X GET \
  http://staging-api.intranet.szjys.com/image/6f9fbdf9-9893-4404-b61f-c2746f545ac5
```

如果请求成功，服务器将返回该资源对应的PNG格式的图片。
