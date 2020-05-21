### 一：是什么

- 1. WebAssembly 是一种可以使用非 JavaScript 编程语言编写代码并且能在浏览器上运行的技术方案。
- 1.1 WebAssembly 是一种体积小，高速加载的二进制编码格式，而不是新的语言（5）
- 1.2 但是 WebAssembly 并不是直接用汇编语言，而提供了转换机制（LLVM IR），把高级别的语言（C，C++和 Rust）编译为 WebAssembly，以便有机会在浏览器中运行
- 2. 可与 javascript 结合使用
- 3. 设计立足点为快速，内存安全和开放
- 4. 发展历史：2008 年，浏览器性能大战 --> 很多浏览器加入即时编译器 JITs --> 速度快了 10 倍 --> JavaScript 开始被用于意想不到的事情，比如使用 Node.js 和 Electron 构建应用程序
- 5. 注意：WebAssembly 并不是一门编程语言，而是一份字节码标准，需要用高级编程语言编译出字节码放到 WebAssembly 虚拟机中才能运行， 浏览器厂商需要做的就是根据 WebAssembly 规范实现虚拟机
- 5.1 和 JS 需要解释执行不同的是，WebAssembly 字节码和底层机器码很相似可快速装载运行，因此性能相对于 JS 解释执行大大提升

### 二：为什么选它

在我们没有搞清楚 JavaScript 和 WebAssembly 之间的性能差前，我们需要理解 JS 引擎所做的工作：

- 1. js 如何在浏览器中运行的呢？

  - 1.1 JavaScript 引擎的工作就是把你的人类语言转化成机器所理解的语言
  - 1.2 通常有两种翻译方法将代码翻译成机器语言：解释器（一行一行即时生效） / 编译器（执行前翻译）
  - 1.3 JS 引擎运行程序花费的过程： parse --> compiler + optimize --> re-optimize --> execute --> garbage collection

- 2. WebAssembly 比 javascript 高效的原因：

  - 1.1 文件加载 - WebAssembly 文件体积更小，可以以二进制形式表示，所以下载速度更快
  - 1.2 解析 - 解码 WebAssembly 比解析 JavaScript 要快
  - 1.3 编译和优化 - 编译和优化所需的时间较少，因为在将文件推送到服务器之前已经进行了更多优化，JavaScript 需要为动态类型多次编译代码
  - 1.4 重新优化 - WebAssembly 代码不需要重新优化，因为编译器有足够的信息可以在第一次运行时获得正确的代码
  - 1.5 执行 - 执行可以更快，WebAssembly 指令更接近机器码
  - 1.6 垃圾回收 - 目前 WebAssembly 不直接支持垃圾回收，垃圾回收都是手动控制的，所以比自动垃圾回收效率更高

- 3. 注意：
  - 3.1 WebAssembly 是为编译器设计的。意思是，它是专门给编译器来阅读，并不是当做编程语言让程序员去写的
  - 3.2 由于程序员不需要直接编程，WebAssembly 提供了一组更适合机器的指令。根据您的代码所做的工作，这些指令的运行速度可以在 10％到 800％之间
  - 3.3 WebAssembly 是一个概念机上的机器语言，不是在一个真正存在的物理机上运行的机器语言
  - 3.4 正因如此，WebAssembly 指令有时候被称为虚拟指令。它比 JavaScript 代码更快更直接的转换成机器代码，但它们不直接和特定硬件的特定机器代码对应
  - 3.5 如果想在您的页面里上添加 WebAssembly，您需要将您的代码编译成 .wasm 文件

### 三：实现原理 / webassembly 是如何工作的 / 编译器如何生成汇编

- 1. 机器的大脑如何解析和理解交流内容
  - 1.1 专注于思考（算数和逻辑等） + 短期记忆 + 长期记忆
    相对应于：算数逻辑单元（ALU） + 短期储存由寄存器（Registers）提供 + 随机存储器（或 RAM）来提供长期储存能力
  - 1.2 机器码中的语句被称为指令，一条指令进入大脑被拆分成多个部分进入不同大脑单元
  - 1.3 拥有不同机器结构的计算机会有不同的汇编系统 -- 机器也“说”不同的语言
- 2. 高级语言 --> 众多汇编语言中的一种
  - 2.1 方法一：创建不同的翻译器，但效率低
  - 2.2 方法二：大多编译器会在中间多加一层，把高级语言翻译到一个底层：中间代码（IR：intermediate representation）
  - 总结一下：编译器的前端把高级语言翻译到 IR，编译器的后端把 IR 翻译成目标机器的汇编代码

### 四：怎么办？即怎么实现

- 1. 如果想在您的页面里上添加 WebAssembly，您需要将您的代码编译成 .wasm 文件

### 五：相类似/相关技术

### 六：浏览器的兼容状态

- 1. 二月二十八日，四大浏览器宣布达成共识，即 WebAssembly 的 MVP （最小化可行产品）已经完成。大约一周后，Firefox 会默认打开 WebAssembly 支持，而 Chrome 则在第二周开始。它也可用于预览版本的 Edge 和 Safari

### 七：具体选择的语言

- LLVM 还实现了 LLVM IR 到 WebAssembly 字节码的编译功能，也就是说只要高级语言能转换成 LLVM IR，就能被编译成 WebAssembly 字节码，目前能编译成 WebAssembly 字节码的高级语言有：
- AssemblyScript:语法和 TypeScript 一致，对前端来说学习成本低，为前端编写 WebAssembly 最佳选择 👏
- c / c++ 官方推荐的
- Rust 语法复杂，学习成本高
- Kotlin 语法和 java js 相似，语言学习成本低
- Golang 语法简单学习成本低。但对 WebAssembly 的支持还处于未正式发布阶段
- 总结：AssemblyScript 相对于 C、Rust 等其它语言去写 WebAssembly 而言，好处除了对前端来说无额外新语言学习成本外，还有对于不支持 WebAssembly 的浏览器，可以通过 TypeScript 编译器编译成可正常执行的 JS 代码，从而实现从 JS 到 WebAssembly 的平滑迁移
- 注意：AssemblyScript 的实现原理其实也借助了 LLVM，它通过 TypeScript 编译器把 TS 源码解析成 AST，再把 AST 翻译成 IR，再通过 LLVM 编译成 WebAssembly 字节码实现； 上面提到的各种限制都是为了方便把 AST 转换成 LLVM IR

### 八：目前存在的问题

- 浏览器兼容性不好，只有最新版本的浏览器支持，并且不同的浏览器对 JS WebAssembly 互调的 API 支持不一致
- 生态工具不完善不成熟，目前还不能找到一门体验流畅的编写 WebAssembly 的语言，都还处于起步阶段
- 学习资料太少，还需要更多的人去探索去踩坑
- 总之：现在的 WebAssembly 还不算成熟，如果你的团队没有不可容忍的性能问题，那现在使用 WebAssembly 到产品中还不是时候， 因为这可能会影响到团队的开发效率，或者遇到无法轻易解决的坑而阻塞开发

### 九：参考文档：

- https://www.jianshu.com/p/bff8aa23fe4d
- https://www.cnblogs.com/jixiaohua/p/10425805.html
- https://www.ibm.com/developerworks/cn/web/wa-lo-webassembly-status-and-reality/index.html
