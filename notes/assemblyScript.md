### standard library
- ArrayBuffer
  - 由来：JS里的Array，有很多功能 + 不限制类型的 + 它还可能是稀疏的 …… 总之这个Array是“托管”的，它内部有比较复杂的实现。而如果你从XHR、File API、Canvas等等各种地方，读取了一大串字节流，如果用JS里的Array去存，又浪费，又低效。于是为了配合这些新的API增强JS的二进制处理能力，就有了ArrayBuffer
  - 是什么：ArrayBuffer 简单说是一片内存，不能也不方便直接使用，会把它转换成 unsigned_int32 或者 int16 这些你需要的实际类型的数组/指针来用
  - 和 array 的区别：存放的地方不一样 & 存放的东西不一样 & 固定大小与可以自由增减
  - 生成视图之后，通过 DataView / TypedArray 来访问

- TypedArray
  - TypedArray是一种通用的固定长度缓冲区类型，允许读取缓冲区中的二进制数据

* 参考链接：
  - https://www.zhihu.com/question/30401979
  - https://www.jianshu.com/p/8d5c78ddcda7
  - https://www.jianshu.com/p/5fcbccf1bab1
  - https://blog.csdn.net/fanhenghui/article/details/54879873

- DataView
  - DataView 视图是一个可以从 ArrayBuffer 对象中读写多种数值类型的底层接口，在读写时不用考虑平台字节序问题

* 参考链接：
  - https://cloud.tencent.com/developer/section/1191578

### 浏览器中利用 webassembly 的场景：
  - 将 C、C++、Rust 等语言编写的程序移植到浏览器
  - 图形图像处理领域，如页游、数据可视化等
  - 音视频编解码等等
