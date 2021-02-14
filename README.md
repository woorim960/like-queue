# like-queue
![npm_package_badge](https://img.shields.io/badge/npm%20package-v0.2.2-blue)
![license_badge](https://img.shields.io/github/license/woorim960/like-queue)


Stack 구조의 Array를 이용하는 Queue.  
**Stack을 Queue처럼 사용할 수 있다** 하여 `Like Queue`라 합니다.  
Stack과 동일한 속도로 동작하는 특징이 있습니다.  
속도는 빠르나 실제 데이터가 삭제되는 구조가 아니므로 사용에 주의를 기울이길 바랍니다.


  * <a href="#install">Installation</a>
  * <a href="#usage">Usage</a>
  * <a href="#api">API</a>
  * <a href="#license">Licence</a>
  * <a href="#developer">Developer</a>

## Install

`npm i like-queue --save`

## Usage

```js
'use strict'

const Queue = require('like-queue');

const queue = new Queue();

queue.enqueue(1);
queue.enqueue("two");
queue.enqueue({ three: 3 });

queue.length; // 3
queue.getElements(); // [1, "two", { three: 3 }]

queue.dequeue(); // 1
queue.dequeue(); // "two"

queue.length; // 1
queue.getElements(); // [{ three: 3 }]

```

## API

* <a href="#new-Queue"><code>new Queue()</code></a>
* <a href="#length"><code>queue#<b>length</b></code></a>
* <a href="#enqueue"><code>queue#<b>enqueue()</b></code></a>
* <a href="#dequeue"><code>queue#<b>dequeue()</b></code></a>
* <a href="#pop"><code>queue#<b>pop()</b></code></a>
* <a href="#getElements"><code>queue#<b>getElements()</b></code></a>

-------------------------------------------------------
<a name="new-Queue"></a>
### new Queue()  
  
새로운 **Queue** 인스턴스를 **생성** 합니다.

```js
const queue = new Queue();
```

-------------------------------------------------------
<a name="length"></a>
### queue.length

큐의 길이(`length`)를 **반환** 합니다.

```js
queue.length; // 0
```

-------------------------------------------------------
<a name="enqueue"></a>
### queue.enqueue(`element`)

큐에 원소(`element`)를 **추가** 할 수 있습니다.  
큐의 가장 마지막 위치에 삽입됩니다.

```js
queue.enqueue(1);
```

-------------------------------------------------------
<a name="dequeue"></a>
### queue.dequeue()

큐에 원소(`element`)를 **삭제** 할 수 있습니다.  
첫 번째(~~index 0~~) 원소(`element`)를 **반환** 합니다.

```js
queue.dequeue(); // zero(0) index's element
```

-------------------------------------------------------
<a name="pop"></a>
### queue.pop()

큐에 원소(`element`)를 **삭제** 할 수 있습니다.  
마지막 원소(`element`)를 **반환** 합니다.

```js
queue.pop(); // last index's element
```

-------------------------------------------------------
<a name="getElements"></a>
### queue.getElements()

큐의 모든 원소들(`elements`)을 **반환** 합니다.

```js
queue.getElements(); // all elements
```


## License

MIT

## Developer

우리밋_woorimIT
* [github](https://github.com/woorim960)
* [blog](https://blog.naver.com/dnfla420)
* [youtube](https://www.youtube.com/channel/UCS0F25vig_sPIQXMiK8IdSg)
