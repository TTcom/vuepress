### 日志
1、tp5会默认记录所有的日志，并将日志记录在runtime文件夹下，修改日志记录文件的办法是找到public下面的文件index.php增加定义应用目录增加改行代码
``` js
define('LOG_PATH', __DIR__ . '/../log/');
```
2、tp5会默认记录所有的日志，取消该默认功能的办法是打开application下的config.php，找到logo配置将配置中的type修改为test;<br/>
3、一旦修改后tp5就不会再自动记录日志,此时就需要在定义的全局异常处理中修改配置文件中的日志并记录日志，代码如下
``` js
private function recordErrorLog(Exception $e){
             Log::init([
                'type' => 'File',
                'path' => LOG_PATH,
                 'level' => ['error']
             ]);
             Log::record($e->getMessage(),'error');
         }
```
