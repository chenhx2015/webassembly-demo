(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32) (result i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (memory $0 1)
 (data (i32.const 16) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00")
 (data (i32.const 64) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00a\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00")
 (data (i32.const 128) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00p\00u\00r\00e\00.\00t\00s\00")
 (data (i32.const 176) "\1c\00\00\00\01\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h\00")
 (data (i32.const 224) "&\00\00\00\01\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s\00")
 (data (i32.const 288) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00p\00r\00o\00p\00")
 (data (i32.const 320) "\16\00\00\00\01\00\00\00\01\00\00\00\16\00\00\00h\00e\00l\00l\00o\00 \00w\00o\00r\00l\00d\00")
 (data (i32.const 368) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00n\00u\00l\00l\00")
 (data (i32.const 400) "\00\00\00\00\01\00\00\00\01\00\00\00\00\00\00\00")
 (data (i32.const 416) "\0e\00\00\00\01\00\00\00\01\00\00\00\0e\00\00\00m\00e\00s\00s\00a\00g\00e\00")
 (data (i32.const 448) "\"\00\00\00\01\00\00\00\01\00\00\00\"\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00i\00n\00d\00e\00x\00.\00t\00s\00")
 (data (i32.const 512) "\07\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\000A\82\00\00\00\00\00 \00\00\00\00\00\00\00\"\t\00\00\00\00\00\00 \00\00\00\00\00\00\00")
 (table $0 2 funcref)
 (elem (i32.const 1) $assembly/index/computeSum~anonymous|0)
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/collectLock (mut i32) (i32.const 0))
 (global $~lib/gc/gc.auto (mut i32) (i32.const 1))
 (global $assembly/index/a (mut i32) (i32.const 0))
 (global $assembly/index/aa (mut i32) (i32.const 0))
 (global $assembly/index/sum1 (mut i32) (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 512))
 (global $~lib/heap/__heap_base i32 (i32.const 572))
 (global $assembly/index/getFoo i32 (i32.const 6))
 (export "memory" (memory $0))
 (export "__alloc" (func $~lib/rt/tlsf/__alloc))
 (export "__retain" (func $~lib/rt/pure/__retain))
 (export "__release" (func $~lib/rt/pure/__release))
 (export "__collect" (func $~lib/rt/pure/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "add" (func $assembly/index/add))
 (export "concat" (func $assembly/index/concat))
 (export "fib" (func $assembly/index/fib))
 (export "foo" (func $assembly/index/foo@varargs))
 (export "foo2" (func $assembly/index/foo2))
 (export "computeSum" (func $assembly/index/computeSum))
 (export "doThrow" (func $assembly/index/doThrow))
 (export "getFoo" (global $assembly/index/getFoo))
 (export "getFoo#get:str" (func $assembly/index/getFoo#get:str))
 (export "getFoo#set:str" (func $assembly/index/getFoo#set:str))
 (export "getFoo#constructor" (func $assembly/index/getFoo#constructor))
 (export "getFoo#getString" (func $assembly/index/getFoo#getString))
 (export "__setArgumentsLength" (func $~setArgumentsLength))
 (start $~start)
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $4 i32)
  (local $9 i32)
  (local $3 i32)
  (local $7 i32)
  (local $5 i32)
  (local $8 i32)
  (local $6 i32)
  (local $2 i32)
  (local $24 i32)
  (local $47 i32)
  local.get $1
  i32.load
  local.set $2
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 277
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $3
  local.get $3
  i32.const 16
  i32.ge_u
  if
   local.get $3
   i32.const 1073741808
   i32.lt_u
   local.set $24
  else
   i32.const 0
   local.set $24
  end
  local.get $24
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 279
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $4
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $5
  else
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.set $4
   local.get $3
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $5
   local.get $4
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $4
  end
  local.get $4
  i32.const 23
  i32.lt_u
  if
   local.get $5
   i32.const 16
   i32.lt_u
   local.set $47
  else
   i32.const 0
   local.set $47
  end
  local.get $47
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 292
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=16
  local.set $6
  local.get $1
  i32.load offset=20
  local.set $7
  local.get $6
  if
   local.get $6
   local.get $7
   i32.store offset=20
  end
  local.get $7
  if
   local.get $7
   local.get $6
   i32.store offset=16
  end
  local.get $4
  local.set $9
  local.get $5
  local.set $8
  local.get $1
  local.get $0
  local.get $9
  i32.const 4
  i32.shl
  local.get $8
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $5
   local.set $9
   local.get $7
   local.set $8
   local.get $0
   local.get $4
   i32.const 4
   i32.shl
   local.get $9
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $7
   i32.store offset=96
   local.get $7
   i32.eqz
   if
    local.get $0
    local.set $9
    local.get $4
    local.set $8
    local.get $9
    local.get $8
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.set $9
    local.get $0
    local.set $8
    local.get $9
    i32.const 1
    local.get $5
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.set $9
    local.get $0
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    local.get $9
    i32.store offset=4
    local.get $9
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const 1
     local.get $4
     i32.shl
     i32.const -1
     i32.xor
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $3 i32)
  (local $6 i32)
  (local $9 i32)
  (local $2 i32)
  (local $4 i32)
  (local $7 i32)
  (local $8 i32)
  (local $10 i32)
  (local $5 i32)
  (local $11 i32)
  (local $107 i32)
  (local $140 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 205
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.set $2
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 207
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.set $3
  local.get $3
  i32.const 16
  i32.add
  local.get $3
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.add
  local.set $4
  local.get $4
  i32.load
  local.set $5
  local.get $5
  i32.const 1
  i32.and
  if
   local.get $2
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.const 16
   i32.add
   local.get $5
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.set $3
   local.get $3
   i32.const 1073741808
   i32.lt_u
   if
    local.get $0
    local.get $4
    call $~lib/rt/tlsf/removeBlock
    local.get $2
    i32.const 3
    i32.and
    local.get $3
    i32.or
    local.set $2
    local.get $1
    local.get $2
    i32.store
    local.get $1
    local.set $6
    local.get $6
    i32.const 16
    i32.add
    local.get $6
    i32.load
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    i32.add
    local.set $4
    local.get $4
    i32.load
    local.set $5
   end
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $1
   local.set $6
   local.get $6
   i32.const 4
   i32.sub
   i32.load
   local.set $6
   local.get $6
   i32.load
   local.set $3
   local.get $3
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 32
    i32.const 228
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.const 16
   i32.add
   local.get $2
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.set $7
   local.get $7
   i32.const 1073741808
   i32.lt_u
   if
    local.get $0
    local.get $6
    call $~lib/rt/tlsf/removeBlock
    local.get $3
    i32.const 3
    i32.and
    local.get $7
    i32.or
    local.set $2
    local.get $6
    local.get $2
    i32.store
    local.get $6
    local.set $1
   end
  end
  local.get $4
  local.get $5
  i32.const 2
  i32.or
  i32.store
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $8
  local.get $8
  i32.const 16
  i32.ge_u
  if
   local.get $8
   i32.const 1073741808
   i32.lt_u
   local.set $107
  else
   i32.const 0
   local.set $107
  end
  local.get $107
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 243
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 16
  i32.add
  local.get $8
  i32.add
  local.get $4
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 244
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $8
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $9
   local.get $8
   i32.const 4
   i32.shr_u
   local.set $10
  else
   i32.const 31
   local.get $8
   i32.clz
   i32.sub
   local.set $9
   local.get $8
   local.get $9
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $10
   local.get $9
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $9
  end
  local.get $9
  i32.const 23
  i32.lt_u
  if
   local.get $10
   i32.const 16
   i32.lt_u
   local.set $140
  else
   i32.const 0
   local.set $140
  end
  local.get $140
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 260
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.set $7
  local.get $9
  local.set $3
  local.get $10
  local.set $6
  local.get $7
  local.get $3
  i32.const 4
  i32.shl
  local.get $6
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $11
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  local.get $11
  i32.store offset=20
  local.get $11
  if
   local.get $11
   local.get $1
   i32.store offset=16
  end
  local.get $9
  local.set $7
  local.get $10
  local.set $3
  local.get $1
  local.set $6
  local.get $0
  local.get $9
  i32.const 4
  i32.shl
  local.get $3
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $9
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.set $3
  local.get $9
  local.set $6
  local.get $3
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const 1
  local.get $10
  i32.shl
  i32.or
  local.set $7
  local.get $0
  local.get $9
  i32.const 2
  i32.shl
  i32.add
  local.get $7
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $4 i32)
  (local $6 i32)
  (local $16 i32)
  (local $21 i32)
  (local $5 i32)
  local.get $1
  local.get $2
  i32.le_u
  if
   local.get $1
   i32.const 15
   i32.and
   i32.eqz
   local.set $16
  else
   i32.const 0
   local.set $16
  end
  local.get $16
  if
   local.get $2
   i32.const 15
   i32.and
   i32.eqz
   local.set $21
  else
   i32.const 0
   local.set $21
  end
  local.get $21
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 386
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=1568
  local.set $4
  i32.const 0
  local.set $5
  local.get $4
  if
   local.get $1
   local.get $4
   i32.const 16
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 32
    i32.const 396
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 16
   i32.sub
   local.get $4
   i32.eq
   if
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
    local.get $4
    i32.load
    local.set $5
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 32
    i32.const 408
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.sub
  local.set $6
  local.get $6
  i32.const 16
  i32.const 16
  i32.add
  i32.const 16
  i32.add
  i32.lt_u
  if
   i32.const 0
   return
  end
  local.get $1
  local.get $6
  i32.const 16
  i32.const 1
  i32.shl
  i32.sub
  i32.const 1
  i32.or
  local.get $5
  i32.const 2
  i32.and
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  i32.const 0
  i32.store offset=20
  local.get $1
  local.get $6
  i32.add
  i32.const 16
  i32.sub
  local.set $4
  local.get $4
  i32.const 0
  i32.const 2
  i32.or
  i32.store
  local.get $0
  local.get $4
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
  i32.const 1
  return
 )
 (func $~lib/rt/tlsf/maybeInitialize (result i32)
  (local $0 i32)
  (local $5 i32)
  (local $8 i32)
  (local $1 i32)
  (local $4 i32)
  (local $6 i32)
  (local $2 i32)
  (local $3 i32)
  (local $34 i32)
  global.get $~lib/rt/tlsf/ROOT
  local.set $0
  local.get $0
  i32.eqz
  if
   global.get $~lib/heap/__heap_base
   i32.const 15
   i32.add
   i32.const 15
   i32.const -1
   i32.xor
   i32.and
   local.set $1
   memory.size
   local.set $2
   local.get $1
   i32.const 1572
   i32.add
   i32.const 65535
   i32.add
   i32.const 65535
   i32.const -1
   i32.xor
   i32.and
   i32.const 16
   i32.shr_u
   local.set $3
   local.get $3
   local.get $2
   i32.gt_s
   if
    local.get $3
    local.get $2
    i32.sub
    memory.grow
    i32.const 0
    i32.lt_s
    local.set $34
   else
    i32.const 0
    local.set $34
   end
   local.get $34
   if
    unreachable
   end
   local.get $1
   local.set $0
   local.get $0
   i32.const 0
   i32.store
   local.get $0
   local.set $5
   i32.const 0
   local.set $4
   local.get $0
   local.get $4
   i32.store offset=1568
   i32.const 0
   local.set $5
   loop $for-loop|0
    local.get $5
    i32.const 23
    i32.lt_u
    local.set $4
    local.get $4
    if
     local.get $0
     local.set $8
     i32.const 0
     local.set $6
     local.get $0
     local.get $5
     i32.const 2
     i32.shl
     i32.add
     local.get $6
     i32.store offset=4
     i32.const 0
     local.set $8
     loop $for-loop|1
      local.get $8
      i32.const 16
      i32.lt_u
      if
       i32.const 0
       local.set $6
       local.get $0
       local.get $5
       i32.const 4
       i32.shl
       local.get $8
       i32.add
       i32.const 2
       i32.shl
       i32.add
       local.get $6
       i32.store offset=96
       local.get $8
       i32.const 1
       i32.add
       local.set $8
       br $for-loop|1
      end
     end
     local.get $5
     i32.const 1
     i32.add
     local.set $5
     br $for-loop|0
    end
   end
   local.get $1
   i32.const 1572
   i32.add
   i32.const 15
   i32.add
   i32.const 15
   i32.const -1
   i32.xor
   i32.and
   local.set $5
   local.get $0
   local.get $5
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   drop
   local.get $0
   global.set $~lib/rt/tlsf/ROOT
  end
  local.get $0
  return
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 1073741808
  i32.ge_u
  if
   i32.const 80
   i32.const 32
   i32.const 461
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $1
  i32.const 16
  local.set $2
  local.get $1
  local.get $2
  local.get $1
  local.get $2
  i32.gt_u
  select
  return
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $4 i32)
  (local $6 i32)
  (local $8 i32)
  (local $5 i32)
  (local $7 i32)
  (local $3 i32)
  (local $9 i32)
  (local $24 i32)
  (local $42 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $2
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $1
   i32.const 536870904
   i32.lt_u
   if
    local.get $1
    i32.const 1
    i32.const 27
    local.get $1
    i32.clz
    i32.sub
    i32.shl
    i32.add
    i32.const 1
    i32.sub
    local.set $24
   else
    local.get $1
    local.set $24
   end
   local.get $24
   local.set $4
   i32.const 31
   local.get $4
   i32.clz
   i32.sub
   local.set $2
   local.get $4
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $3
   local.get $2
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $2
  end
  local.get $2
  i32.const 23
  i32.lt_u
  if
   local.get $3
   i32.const 16
   i32.lt_u
   local.set $42
  else
   i32.const 0
   local.set $42
  end
  local.get $42
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 338
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.set $5
  local.get $2
  local.set $4
  local.get $5
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const 0
  i32.const -1
  i32.xor
  local.get $3
  i32.shl
  i32.and
  local.set $6
  i32.const 0
  local.set $7
  local.get $6
  i32.eqz
  if
   local.get $0
   i32.load
   i32.const 0
   i32.const -1
   i32.xor
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.set $5
   local.get $5
   i32.eqz
   if
    i32.const 0
    local.set $7
   else
    local.get $5
    call $__wasm_ctz_i32
    local.set $2
    local.get $0
    local.set $8
    local.get $2
    local.set $4
    local.get $8
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.set $6
    local.get $6
    i32.eqz
    if
     i32.const 0
     i32.const 32
     i32.const 351
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.set $9
    local.get $2
    local.set $8
    local.get $6
    call $__wasm_ctz_i32
    local.set $4
    local.get $9
    local.get $8
    i32.const 4
    i32.shl
    local.get $4
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
    local.set $7
   end
  else
   local.get $0
   local.set $9
   local.get $2
   local.set $8
   local.get $6
   call $__wasm_ctz_i32
   local.set $4
   local.get $9
   local.get $8
   i32.const 4
   i32.shl
   local.get $4
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
   local.set $7
  end
  local.get $7
  return
 )
 (func $~lib/rt/tlsf/growMemory (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $4 i32)
  local.get $1
  i32.const 536870904
  i32.lt_u
  if
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   i32.add
   local.set $1
  end
  memory.size
  local.set $2
  local.get $1
  i32.const 16
  local.get $2
  i32.const 16
  i32.shl
  i32.const 16
  i32.sub
  local.get $0
  i32.load offset=1568
  i32.ne
  i32.shl
  i32.add
  local.set $1
  local.get $1
  i32.const 65535
  i32.add
  i32.const 65535
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.shr_u
  local.set $4
  local.get $2
  local.get $4
  local.get $2
  local.get $4
  i32.gt_s
  select
  memory.grow
  i32.const 0
  i32.lt_s
  if
   local.get $4
   memory.grow
   i32.const 0
   i32.lt_s
   if
    unreachable
   end
  end
  local.get $0
  local.get $2
  i32.const 16
  i32.shl
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  drop
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $5 i32)
  (local $3 i32)
  (local $4 i32)
  (local $48 i32)
  local.get $1
  i32.load
  local.set $3
  local.get $2
  i32.const 15
  i32.and
  i32.eqz
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 365
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.sub
  local.set $4
  local.get $4
  i32.const 16
  i32.const 16
  i32.add
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $1
   i32.const 16
   i32.add
   local.get $2
   i32.add
   local.set $5
   local.get $5
   local.get $4
   i32.const 16
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $5
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const 1
   i32.const -1
   i32.xor
   i32.and
   i32.store
   local.get $1
   local.set $5
   local.get $5
   i32.const 16
   i32.add
   local.get $5
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.set $48
   local.get $1
   local.set $5
   local.get $48
   local.get $5
   i32.const 16
   i32.add
   local.get $5
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   i32.load
   i32.const 2
   i32.const -1
   i32.xor
   i32.and
   i32.store
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $4 i32)
  (local $3 i32)
  global.get $~lib/rt/tlsf/collectLock
  i32.eqz
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 501
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/tlsf/prepareSize
  local.set $3
  local.get $0
  local.get $3
  call $~lib/rt/tlsf/searchBlock
  local.set $4
  local.get $4
  i32.eqz
  if
   global.get $~lib/gc/gc.auto
   if
    i32.const 1
    global.set $~lib/rt/tlsf/collectLock
    call $~lib/rt/pure/__collect
    i32.const 0
    global.set $~lib/rt/tlsf/collectLock
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/searchBlock
    local.set $4
    local.get $4
    i32.eqz
    if
     local.get $0
     local.get $3
     call $~lib/rt/tlsf/growMemory
     local.get $0
     local.get $3
     call $~lib/rt/tlsf/searchBlock
     local.set $4
     local.get $4
     i32.eqz
     if
      i32.const 0
      i32.const 32
      i32.const 513
      i32.const 20
      call $~lib/builtins/abort
      unreachable
     end
    end
   else
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/growMemory
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/searchBlock
    local.set $4
    local.get $4
    i32.eqz
    if
     i32.const 0
     i32.const 32
     i32.const 518
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
   end
  end
  local.get $4
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $3
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 521
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 0
  i32.store offset=4
  local.get $4
  local.get $2
  i32.store offset=8
  local.get $4
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $4
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $4
  local.get $3
  call $~lib/rt/tlsf/prepareBlock
  local.get $4
  return
 )
 (func $~lib/rt/tlsf/__alloc (param $0 i32) (param $1 i32) (result i32)
  call $~lib/rt/tlsf/maybeInitialize
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/allocateBlock
  i32.const 16
  i32.add
  return
 )
 (func $~lib/rt/pure/increment (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  local.set $1
  local.get $1
  i32.const 268435455
  i32.const -1
  i32.xor
  i32.and
  local.get $1
  i32.const 1
  i32.add
  i32.const 268435455
  i32.const -1
  i32.xor
  i32.and
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 109
   i32.const 3
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $0
  i32.load
  i32.const 1
  i32.and
  i32.eqz
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 112
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/rt/pure/__retain (param $0 i32) (result i32)
  local.get $0
  global.get $~lib/heap/__heap_base
  i32.gt_u
  if
   local.get $0
   i32.const 16
   i32.sub
   call $~lib/rt/pure/increment
  end
  local.get $0
  return
 )
 (func $~lib/rt/pure/__release (param $0 i32)
  local.get $0
  global.get $~lib/heap/__heap_base
  i32.gt_u
  if
   local.get $0
   i32.const 16
   i32.sub
   call $~lib/rt/pure/decrement
  end
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32) (param $2 i32)
  (local $5 i32)
  (local $3 i32)
  (local $8 i32)
  (local $6 i32)
  (local $i64toi32_i32$2 i32)
  (local $4 i32)
  (local $i64toi32_i32$0 i32)
  (local $7 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$3 i32)
  (local $9 i32)
  (local $19 i32)
  (local $104 i32)
  (local $104$hi i32)
  (local $107$hi i32)
  (local $9$hi i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $0
   local.set $5
   local.get $1
   local.set $4
   local.get $2
   local.set $3
   local.get $3
   i32.eqz
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $3
   i32.add
   i32.const 4
   i32.sub
   local.set $6
   local.get $5
   local.get $4
   i32.store8
   local.get $6
   local.get $4
   i32.store8 offset=3
   local.get $3
   i32.const 2
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $4
   i32.store8 offset=1
   local.get $5
   local.get $4
   i32.store8 offset=2
   local.get $6
   local.get $4
   i32.store8 offset=2
   local.get $6
   local.get $4
   i32.store8 offset=1
   local.get $3
   i32.const 6
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $4
   i32.store8 offset=3
   local.get $6
   local.get $4
   i32.store8
   local.get $3
   i32.const 8
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   i32.const 0
   local.get $5
   i32.sub
   i32.const 3
   i32.and
   local.set $7
   local.get $5
   local.get $7
   i32.add
   local.set $5
   local.get $3
   local.get $7
   i32.sub
   local.set $3
   local.get $3
   i32.const -4
   i32.and
   local.set $3
   i32.const -1
   i32.const 255
   i32.div_u
   local.get $4
   i32.const 255
   i32.and
   i32.mul
   local.set $8
   local.get $5
   local.get $3
   i32.add
   i32.const 28
   i32.sub
   local.set $6
   local.get $5
   local.get $8
   i32.store
   local.get $6
   local.get $8
   i32.store offset=24
   local.get $3
   i32.const 8
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $8
   i32.store offset=4
   local.get $5
   local.get $8
   i32.store offset=8
   local.get $6
   local.get $8
   i32.store offset=16
   local.get $6
   local.get $8
   i32.store offset=20
   local.get $3
   i32.const 24
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $8
   i32.store offset=12
   local.get $5
   local.get $8
   i32.store offset=16
   local.get $5
   local.get $8
   i32.store offset=20
   local.get $5
   local.get $8
   i32.store offset=24
   local.get $6
   local.get $8
   i32.store
   local.get $6
   local.get $8
   i32.store offset=4
   local.get $6
   local.get $8
   i32.store offset=8
   local.get $6
   local.get $8
   i32.store offset=12
   i32.const 24
   local.get $5
   i32.const 4
   i32.and
   i32.add
   local.set $7
   local.get $5
   local.get $7
   i32.add
   local.set $5
   local.get $3
   local.get $7
   i32.sub
   local.set $3
   i32.const 0
   local.set $i64toi32_i32$0
   local.get $8
   local.set $104
   local.get $i64toi32_i32$0
   local.set $104$hi
   i32.const 0
   local.set $i64toi32_i32$0
   local.get $8
   local.set $i64toi32_i32$2
   i32.const 0
   local.set $i64toi32_i32$1
   i32.const 32
   local.set $i64toi32_i32$3
   local.get $i64toi32_i32$3
   i32.const 31
   i32.and
   local.set $i64toi32_i32$4
   i32.const 32
   local.get $i64toi32_i32$3
   i32.const 63
   i32.and
   i32.le_u
   if
    local.get $i64toi32_i32$2
    local.get $i64toi32_i32$4
    i32.shl
    local.set $i64toi32_i32$1
    i32.const 0
    local.set $19
   else
    i32.const 1
    local.get $i64toi32_i32$4
    i32.shl
    i32.const 1
    i32.sub
    local.get $i64toi32_i32$2
    i32.const 32
    local.get $i64toi32_i32$4
    i32.sub
    i32.shr_u
    i32.and
    local.get $i64toi32_i32$0
    local.get $i64toi32_i32$4
    i32.shl
    i32.or
    local.set $i64toi32_i32$1
    local.get $i64toi32_i32$2
    local.get $i64toi32_i32$4
    i32.shl
    local.set $19
   end
   local.get $i64toi32_i32$1
   local.set $107$hi
   local.get $104$hi
   local.set $i64toi32_i32$1
   local.get $104
   local.set $i64toi32_i32$0
   local.get $107$hi
   local.set $i64toi32_i32$2
   local.get $19
   local.set $i64toi32_i32$3
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$2
   i32.or
   local.set $i64toi32_i32$2
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$3
   i32.or
   local.set $9
   local.get $i64toi32_i32$2
   local.set $9$hi
   loop $while-continue|0
    local.get $3
    i32.const 32
    i32.ge_u
    if
     local.get $9$hi
     local.set $i64toi32_i32$2
     local.get $5
     local.set $i64toi32_i32$0
     local.get $5
     local.get $9
     i32.store
     local.get $5
     local.get $i64toi32_i32$2
     i32.store offset=4
     local.get $5
     local.set $i64toi32_i32$0
     local.get $5
     local.get $9
     i32.store offset=8
     local.get $5
     local.get $i64toi32_i32$2
     i32.store offset=12
     local.get $5
     local.set $i64toi32_i32$0
     local.get $5
     local.get $9
     i32.store offset=16
     local.get $5
     local.get $i64toi32_i32$2
     i32.store offset=20
     local.get $5
     local.set $i64toi32_i32$0
     local.get $5
     local.get $9
     i32.store offset=24
     local.get $5
     local.get $i64toi32_i32$2
     i32.store offset=28
     local.get $3
     i32.const 32
     i32.sub
     local.set $3
     local.get $5
     i32.const 32
     i32.add
     local.set $5
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  i32.const 1073741808
  i32.gt_u
  if
   i32.const 192
   i32.const 240
   i32.const 49
   i32.const 43
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 0
  call $~lib/rt/tlsf/__alloc
  local.set $2
  local.get $2
  i32.const 0
  local.get $1
  call $~lib/memory/memory.fill
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $3
  local.get $0
  call $~lib/rt/pure/__release
  local.get $3
  return
 )
 (func $~lib/map/Map<~lib/string/String,~lib/string/String>#clear (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  local.set $1
  i32.const 0
  i32.const 16
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $2
  local.get $0
  i32.load
  call $~lib/rt/pure/__release
  local.get $0
  local.get $2
  i32.store
  local.get $0
  i32.const 4
  i32.const 1
  i32.sub
  i32.store offset=4
  local.get $0
  local.set $2
  i32.const 0
  i32.const 48
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $1
  local.get $0
  i32.load offset=8
  call $~lib/rt/pure/__release
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  i32.const 4
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
 )
 (func $~lib/map/Map<~lib/string/String,~lib/string/String>#constructor (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 24
   i32.const 3
   call $~lib/rt/tlsf/__alloc
   call $~lib/rt/pure/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
  local.get $0
  call $~lib/map/Map<~lib/string/String,~lib/string/String>#clear
  local.get $0
  return
 )
 (func $~lib/string/String#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
  i32.const 1
  i32.shr_u
  return
 )
 (func $~lib/util/hash/hashStr (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  i32.const -2128831035
  local.set $1
  local.get $0
  i32.const 0
  i32.ne
  if
   i32.const 0
   local.set $2
   local.get $0
   call $~lib/string/String#get:length
   i32.const 1
   i32.shl
   local.set $3
   loop $for-loop|0
    local.get $2
    local.get $3
    i32.lt_u
    if
     local.get $1
     local.get $0
     local.get $2
     i32.add
     i32.load8_u
     i32.xor
     i32.const 16777619
     i32.mul
     local.set $1
     local.get $2
     i32.const 1
     i32.add
     local.set $2
     br $for-loop|0
    end
   end
  end
  local.get $1
  local.set $3
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  return
 )
 (func $~lib/util/string/compareImpl (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$1 i32)
  (local $32 i32)
  (local $8 i32)
  (local $9 i32)
  (local $35 i32)
  (local $35$hi i32)
  (local $37 i32)
  (local $37$hi i32)
  (local $10 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.set $5
  local.get $2
  local.get $3
  i32.const 1
  i32.shl
  i32.add
  local.set $6
  local.get $4
  i32.const 4
  i32.ge_u
  if
   local.get $5
   i32.const 7
   i32.and
   local.get $6
   i32.const 7
   i32.and
   i32.or
   i32.eqz
   local.set $32
  else
   i32.const 0
   local.set $32
  end
  local.get $32
  if
   block $do-break|0
    loop $do-continue|0
     local.get $5
     i32.load
     local.set $i64toi32_i32$0
     local.get $5
     i32.load offset=4
     local.set $i64toi32_i32$1
     local.get $i64toi32_i32$0
     local.set $35
     local.get $i64toi32_i32$1
     local.set $35$hi
     local.get $6
     i32.load
     local.set $i64toi32_i32$1
     local.get $6
     i32.load offset=4
     local.set $i64toi32_i32$0
     local.get $i64toi32_i32$1
     local.set $37
     local.get $i64toi32_i32$0
     local.set $37$hi
     local.get $35$hi
     local.set $i64toi32_i32$0
     local.get $37$hi
     local.set $i64toi32_i32$1
     local.get $35
     local.get $37
     i32.ne
     local.get $i64toi32_i32$0
     local.get $i64toi32_i32$1
     i32.ne
     i32.or
     if
      br $do-break|0
     end
     local.get $5
     i32.const 8
     i32.add
     local.set $5
     local.get $6
     i32.const 8
     i32.add
     local.set $6
     local.get $4
     i32.const 4
     i32.sub
     local.set $4
     local.get $4
     i32.const 4
     i32.ge_u
     local.set $7
     local.get $7
     br_if $do-continue|0
    end
   end
  end
  loop $while-continue|1
   local.get $4
   local.set $7
   local.get $7
   i32.const 1
   i32.sub
   local.set $4
   local.get $7
   if
    local.get $5
    i32.load16_u
    local.set $8
    local.get $6
    i32.load16_u
    local.set $9
    local.get $8
    local.get $9
    i32.ne
    if
     local.get $8
     local.get $9
     i32.sub
     local.set $10
     local.get $0
     call $~lib/rt/pure/__release
     local.get $2
     call $~lib/rt/pure/__release
     local.get $10
     return
    end
    local.get $5
    i32.const 2
    i32.add
    local.set $5
    local.get $6
    i32.const 2
    i32.add
    local.set $6
    br $while-continue|1
   end
  end
  i32.const 0
  local.set $7
  local.get $0
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $7
  return
 )
 (func $~lib/string/String.__eq (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $18 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  local.get $1
  i32.eq
  if
   i32.const 1
   local.set $2
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   return
  end
  local.get $0
  i32.const 0
  i32.eq
  if
   i32.const 1
   local.set $18
  else
   local.get $1
   i32.const 0
   i32.eq
   local.set $18
  end
  local.get $18
  if
   i32.const 0
   local.set $2
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   return
  end
  local.get $0
  call $~lib/string/String#get:length
  local.set $3
  local.get $3
  local.get $1
  call $~lib/string/String#get:length
  i32.ne
  if
   i32.const 0
   local.set $2
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   return
  end
  local.get $0
  i32.const 0
  local.get $1
  i32.const 0
  local.get $3
  call $~lib/util/string/compareImpl
  i32.eqz
  local.set $2
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  return
 )
 (func $~lib/map/Map<~lib/string/String,~lib/string/String>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $27 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   local.set $4
   local.get $3
   if
    local.get $3
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $3
     i32.load
     local.get $1
     call $~lib/string/String.__eq
     local.set $27
    else
     i32.const 0
     local.set $27
    end
    local.get $27
    if
     local.get $1
     call $~lib/rt/pure/__release
     local.get $3
     return
    end
    local.get $3
    i32.load offset=8
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
  local.set $4
  local.get $1
  call $~lib/rt/pure/__release
  local.get $4
  return
 )
 (func $~lib/map/Map<~lib/string/String,~lib/string/String>#rehash (param $0 i32) (param $1 i32)
  (local $9 i32)
  (local $12 i32)
  (local $11 i32)
  (local $6 i32)
  (local $13 i32)
  (local $8 i32)
  (local $3 i32)
  (local $5 i32)
  (local $10 i32)
  (local $2 i32)
  (local $4 i32)
  (local $7 i32)
  (local $60 i32)
  (local $82 i32)
  (local $98 i32)
  local.get $1
  i32.const 1
  i32.add
  local.set $2
  i32.const 0
  local.get $2
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $3
  local.get $2
  i32.const 8
  i32.mul
  i32.const 3
  i32.div_s
  local.set $4
  i32.const 0
  local.get $4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $5
  local.get $0
  i32.load offset=8
  local.set $6
  local.get $6
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   local.set $9
   local.get $9
   if
    local.get $6
    local.set $10
    local.get $6
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $11
     local.get $11
     local.get $10
     i32.load
     i32.store
     local.get $11
     local.get $10
     i32.load offset=4
     i32.store offset=4
     block $~lib/util/hash/HASH<~lib/string/String>|inlined.1
      local.get $10
      i32.load
      call $~lib/rt/pure/__retain
      local.set $12
      local.get $12
      call $~lib/util/hash/hashStr
      local.set $13
      local.get $12
      call $~lib/rt/pure/__release
      local.get $13
      local.set $60
      br $~lib/util/hash/HASH<~lib/string/String>|inlined.1
     end
     local.get $60
     local.get $1
     i32.and
     local.set $12
     local.get $3
     local.get $12
     i32.const 4
     i32.mul
     i32.add
     local.set $13
     local.get $11
     local.get $13
     i32.load
     i32.store offset=8
     local.get $13
     local.get $8
     i32.store
     local.get $8
     i32.const 12
     i32.add
     local.set $8
    end
    local.get $6
    i32.const 12
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.set $11
  local.get $0
  local.set $82
  local.get $3
  local.set $12
  local.get $0
  i32.load
  local.set $9
  local.get $12
  local.get $9
  i32.ne
  if
   local.get $12
   call $~lib/rt/pure/__retain
   local.set $12
   local.get $9
   call $~lib/rt/pure/__release
  end
  local.get $82
  local.get $12
  i32.store
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.set $13
  local.get $0
  local.set $98
  local.get $5
  local.set $9
  local.get $0
  i32.load offset=8
  local.set $11
  local.get $9
  local.get $11
  i32.ne
  if
   local.get $9
   call $~lib/rt/pure/__retain
   local.set $9
   local.get $11
   call $~lib/rt/pure/__release
  end
  local.get $98
  local.get $9
  i32.store offset=8
  local.get $0
  local.get $4
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  local.get $3
  call $~lib/rt/pure/__release
  local.get $5
  call $~lib/rt/pure/__release
 )
 (func $~lib/map/Map<~lib/string/String,~lib/string/String>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $4 i32)
  (local $3 i32)
  (local $6 i32)
  (local $5 i32)
  (local $52 i32)
  (local $17 i32)
  (local $38 i32)
  (local $wasm2js_i32$0 i32)
  (local $wasm2js_i32$1 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $2
  block $~lib/util/hash/HASH<~lib/string/String>|inlined.0
   local.get $1
   call $~lib/rt/pure/__retain
   local.set $3
   local.get $3
   call $~lib/util/hash/hashStr
   local.set $4
   local.get $3
   call $~lib/rt/pure/__release
   local.get $4
   local.set $17
   br $~lib/util/hash/HASH<~lib/string/String>|inlined.0
  end
  local.get $17
  local.set $5
  local.get $0
  local.get $1
  local.get $5
  call $~lib/map/Map<~lib/string/String,~lib/string/String>#find
  local.set $6
  local.get $6
  if
   local.get $6
   i32.load offset=4
   local.set $3
   local.get $2
   local.get $3
   i32.ne
   if
    local.get $6
    local.get $2
    call $~lib/rt/pure/__retain
    i32.store offset=4
    local.get $3
    call $~lib/rt/pure/__release
   end
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.set $38
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if
     local.get $0
     i32.load offset=4
     local.set $52
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
     local.set $52
    end
    local.get $38
    local.get $52
    call $~lib/map/Map<~lib/string/String,~lib/string/String>#rehash
   end
   local.get $0
   i32.load offset=8
   call $~lib/rt/pure/__retain
   local.set $3
   local.get $0
   i32.load offset=16
   local.set $4
   local.get $0
   local.get $4
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $3
   local.get $4
   i32.const 12
   i32.mul
   i32.add
   local.set $6
   local.get $6
   local.get $1
   call $~lib/rt/pure/__retain
   i32.store
   local.get $6
   local.get $2
   call $~lib/rt/pure/__retain
   i32.store offset=4
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $0
   i32.load
   local.get $5
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $4
   local.get $6
   local.get $4
   i32.load
   i32.store offset=8
   local.get $4
   local.get $6
   i32.store
   local.get $3
   call $~lib/rt/pure/__release
  end
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $4
  return
 )
 (func $assembly/index/A#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $wasm2js_i32$0 i32)
  (local $wasm2js_i32$1 i32)
  local.get $0
  i32.eqz
  if
   i32.const 4
   i32.const 4
   call $~lib/rt/tlsf/__alloc
   call $~lib/rt/pure/__retain
   local.set $0
  end
  local.get $0
  local.get $1
  call $~lib/rt/pure/__retain
  i32.store
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $1
  call $~lib/rt/pure/__release
  local.get $0
  return
 )
 (func $start:assembly/index
  i32.const 0
  call $~lib/map/Map<~lib/string/String,~lib/string/String>#constructor
  global.set $assembly/index/a
  global.get $assembly/index/a
  i32.const 304
  i32.const 336
  call $~lib/map/Map<~lib/string/String,~lib/string/String>#set
  call $~lib/rt/pure/__release
  i32.const 0
  i32.const 336
  call $assembly/index/A#constructor
  global.set $assembly/index/aa
 )
 (func $assembly/index/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
  return
 )
 (func $~lib/util/memory/memcpy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $5 i32)
  (local $3 i32)
  (local $4 i32)
  (local $6 i32)
  (local $10 i32)
  (local $18 i32)
  (local $97 i32)
  (local $122 i32)
  (local $135 i32)
  (local $148 i32)
  (local $213 i32)
  (local $226 i32)
  (local $291 i32)
  (local $356 i32)
  (local $369 i32)
  (local $382 i32)
  (local $395 i32)
  (local $408 i32)
  (local $421 i32)
  (local $434 i32)
  (local $447 i32)
  (local $460 i32)
  (local $473 i32)
  (local $486 i32)
  (local $499 i32)
  (local $512 i32)
  (local $525 i32)
  (local $538 i32)
  (local $551 i32)
  (local $566 i32)
  (local $579 i32)
  (local $592 i32)
  (local $605 i32)
  (local $618 i32)
  (local $631 i32)
  (local $644 i32)
  (local $657 i32)
  (local $672 i32)
  (local $685 i32)
  (local $698 i32)
  (local $711 i32)
  (local $726 i32)
  (local $739 i32)
  (local $754 i32)
  loop $while-continue|0
   local.get $2
   if
    local.get $1
    i32.const 3
    i32.and
    local.set $10
   else
    i32.const 0
    local.set $10
   end
   local.get $10
   local.set $5
   local.get $5
   if
    local.get $0
    local.set $6
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    local.get $6
    local.set $18
    local.get $1
    local.set $6
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    local.get $18
    local.get $6
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.const 3
  i32.and
  i32.const 0
  i32.eq
  if
   loop $while-continue|1
    local.get $2
    i32.const 16
    i32.ge_u
    local.set $5
    local.get $5
    if
     local.get $0
     local.get $1
     i32.load
     i32.store
     local.get $0
     i32.const 4
     i32.add
     local.get $1
     i32.const 4
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 8
     i32.add
     local.get $1
     i32.const 8
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 12
     i32.add
     local.get $1
     i32.const 12
     i32.add
     i32.load
     i32.store
     local.get $1
     i32.const 16
     i32.add
     local.set $1
     local.get $0
     i32.const 16
     i32.add
     local.set $0
     local.get $2
     i32.const 16
     i32.sub
     local.set $2
     br $while-continue|1
    end
   end
   local.get $2
   i32.const 8
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.get $1
    i32.const 4
    i32.add
    i32.load
    i32.store
    local.get $0
    i32.const 8
    i32.add
    local.set $0
    local.get $1
    i32.const 8
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 4
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.set $0
    local.get $1
    i32.const 4
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 2
   i32.and
   if
    local.get $0
    local.get $1
    i32.load16_u
    i32.store16
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    local.get $1
    i32.const 2
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.set $5
    local.get $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.set $97
    local.get $1
    local.set $5
    local.get $5
    i32.const 1
    i32.add
    local.set $1
    local.get $97
    local.get $5
    i32.load8_u
    i32.store8
   end
   return
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   block $break|2
    block $case2|2
     block $case1|2
      block $case0|2
       local.get $0
       i32.const 3
       i32.and
       local.set $5
       local.get $5
       i32.const 1
       i32.eq
       br_if $case0|2
       local.get $5
       i32.const 2
       i32.eq
       br_if $case1|2
       local.get $5
       i32.const 3
       i32.eq
       br_if $case2|2
       br $break|2
      end
      local.get $1
      i32.load
      local.set $3
      local.get $0
      local.set $5
      local.get $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.set $122
      local.get $1
      local.set $5
      local.get $5
      i32.const 1
      i32.add
      local.set $1
      local.get $122
      local.get $5
      i32.load8_u
      i32.store8
      local.get $0
      local.set $5
      local.get $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.set $135
      local.get $1
      local.set $5
      local.get $5
      i32.const 1
      i32.add
      local.set $1
      local.get $135
      local.get $5
      i32.load8_u
      i32.store8
      local.get $0
      local.set $5
      local.get $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.set $148
      local.get $1
      local.set $5
      local.get $5
      i32.const 1
      i32.add
      local.set $1
      local.get $148
      local.get $5
      i32.load8_u
      i32.store8
      local.get $2
      i32.const 3
      i32.sub
      local.set $2
      loop $while-continue|3
       local.get $2
       i32.const 17
       i32.ge_u
       local.set $5
       local.get $5
       if
        local.get $1
        i32.const 1
        i32.add
        i32.load
        local.set $4
        local.get $0
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $4
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 5
        i32.add
        i32.load
        local.set $3
        local.get $0
        i32.const 4
        i32.add
        local.get $4
        i32.const 24
        i32.shr_u
        local.get $3
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 9
        i32.add
        i32.load
        local.set $4
        local.get $0
        i32.const 8
        i32.add
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $4
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 13
        i32.add
        i32.load
        local.set $3
        local.get $0
        i32.const 12
        i32.add
        local.get $4
        i32.const 24
        i32.shr_u
        local.get $3
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 16
        i32.add
        local.set $1
        local.get $0
        i32.const 16
        i32.add
        local.set $0
        local.get $2
        i32.const 16
        i32.sub
        local.set $2
        br $while-continue|3
       end
      end
      br $break|2
     end
     local.get $1
     i32.load
     local.set $3
     local.get $0
     local.set $5
     local.get $5
     i32.const 1
     i32.add
     local.set $0
     local.get $5
     local.set $213
     local.get $1
     local.set $5
     local.get $5
     i32.const 1
     i32.add
     local.set $1
     local.get $213
     local.get $5
     i32.load8_u
     i32.store8
     local.get $0
     local.set $5
     local.get $5
     i32.const 1
     i32.add
     local.set $0
     local.get $5
     local.set $226
     local.get $1
     local.set $5
     local.get $5
     i32.const 1
     i32.add
     local.set $1
     local.get $226
     local.get $5
     i32.load8_u
     i32.store8
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     loop $while-continue|4
      local.get $2
      i32.const 18
      i32.ge_u
      local.set $5
      local.get $5
      if
       local.get $1
       i32.const 2
       i32.add
       i32.load
       local.set $4
       local.get $0
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $4
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 6
       i32.add
       i32.load
       local.set $3
       local.get $0
       i32.const 4
       i32.add
       local.get $4
       i32.const 16
       i32.shr_u
       local.get $3
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 10
       i32.add
       i32.load
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $4
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 14
       i32.add
       i32.load
       local.set $3
       local.get $0
       i32.const 12
       i32.add
       local.get $4
       i32.const 16
       i32.shr_u
       local.get $3
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 16
       i32.add
       local.set $1
       local.get $0
       i32.const 16
       i32.add
       local.set $0
       local.get $2
       i32.const 16
       i32.sub
       local.set $2
       br $while-continue|4
      end
     end
     br $break|2
    end
    local.get $1
    i32.load
    local.set $3
    local.get $0
    local.set $5
    local.get $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.set $291
    local.get $1
    local.set $5
    local.get $5
    i32.const 1
    i32.add
    local.set $1
    local.get $291
    local.get $5
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    loop $while-continue|5
     local.get $2
     i32.const 19
     i32.ge_u
     local.set $5
     local.get $5
     if
      local.get $1
      i32.const 3
      i32.add
      i32.load
      local.set $4
      local.get $0
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $4
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 7
      i32.add
      i32.load
      local.set $3
      local.get $0
      i32.const 4
      i32.add
      local.get $4
      i32.const 8
      i32.shr_u
      local.get $3
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 11
      i32.add
      i32.load
      local.set $4
      local.get $0
      i32.const 8
      i32.add
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $4
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 15
      i32.add
      i32.load
      local.set $3
      local.get $0
      i32.const 12
      i32.add
      local.get $4
      i32.const 8
      i32.shr_u
      local.get $3
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 16
      i32.add
      local.set $1
      local.get $0
      i32.const 16
      i32.add
      local.set $0
      local.get $2
      i32.const 16
      i32.sub
      local.set $2
      br $while-continue|5
     end
    end
    br $break|2
   end
  end
  local.get $2
  i32.const 16
  i32.and
  if
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $356
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $356
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $369
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $369
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $382
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $382
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $395
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $395
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $408
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $408
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $421
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $421
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $434
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $434
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $447
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $447
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $460
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $460
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $473
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $473
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $486
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $486
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $499
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $499
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $512
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $512
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $525
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $525
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $538
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $538
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $551
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $551
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 8
  i32.and
  if
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $566
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $566
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $579
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $579
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $592
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $592
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $605
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $605
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $618
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $618
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $631
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $631
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $644
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $644
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $657
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $657
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 4
  i32.and
  if
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $672
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $672
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $685
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $685
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $698
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $698
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $711
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $711
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $726
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $726
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $739
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $739
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.set $754
   local.get $1
   local.set $5
   local.get $5
   i32.const 1
   i32.add
   local.set $1
   local.get $754
   local.get $5
   i32.load8_u
   i32.store8
  end
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $5 i32)
  (local $4 i32)
  (local $6 i32)
  (local $7 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$2 i32)
  (local $25 i32)
  (local $51 i32)
  (local $64 i32)
  (local $78 i32)
  (local $121 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.set $5
   local.get $1
   local.set $4
   local.get $2
   local.set $3
   local.get $5
   local.get $4
   i32.eq
   if
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $4
   local.get $3
   i32.add
   local.get $5
   i32.le_u
   if
    i32.const 1
    local.set $25
   else
    local.get $5
    local.get $3
    i32.add
    local.get $4
    i32.le_u
    local.set $25
   end
   local.get $25
   if
    local.get $5
    local.get $4
    local.get $3
    call $~lib/util/memory/memcpy
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $5
   local.get $4
   i32.lt_u
   if
    local.get $4
    i32.const 7
    i32.and
    local.get $5
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $5
      i32.const 7
      i32.and
      local.set $6
      local.get $6
      if
       local.get $3
       i32.eqz
       if
        br $~lib/util/memory/memmove|inlined.0
       end
       local.get $3
       i32.const 1
       i32.sub
       local.set $3
       local.get $5
       local.set $7
       local.get $5
       i32.const 1
       i32.add
       local.set $5
       local.get $7
       local.set $51
       local.get $4
       local.set $7
       local.get $4
       i32.const 1
       i32.add
       local.set $4
       local.get $51
       local.get $7
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $3
      i32.const 8
      i32.ge_u
      local.set $6
      local.get $6
      if
       local.get $4
       local.set $i64toi32_i32$2
       local.get $4
       i32.load
       local.set $i64toi32_i32$0
       local.get $4
       i32.load offset=4
       local.set $i64toi32_i32$1
       local.get $i64toi32_i32$0
       local.set $64
       local.get $5
       local.set $i64toi32_i32$0
       local.get $5
       local.get $64
       i32.store
       local.get $5
       local.get $i64toi32_i32$1
       i32.store offset=4
       local.get $3
       i32.const 8
       i32.sub
       local.set $3
       local.get $5
       i32.const 8
       i32.add
       local.set $5
       local.get $4
       i32.const 8
       i32.add
       local.set $4
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $3
     local.set $6
     local.get $3
     if
      local.get $5
      local.set $7
      local.get $5
      i32.const 1
      i32.add
      local.set $5
      local.get $7
      local.set $78
      local.get $4
      local.set $7
      local.get $4
      i32.const 1
      i32.add
      local.set $4
      local.get $78
      local.get $7
      i32.load8_u
      i32.store8
      local.get $3
      i32.const 1
      i32.sub
      local.set $3
      br $while-continue|2
     end
    end
   else
    local.get $4
    i32.const 7
    i32.and
    local.get $5
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $5
      local.get $3
      i32.add
      i32.const 7
      i32.and
      local.set $6
      local.get $6
      if
       local.get $3
       i32.eqz
       if
        br $~lib/util/memory/memmove|inlined.0
       end
       local.get $3
       i32.const 1
       i32.sub
       local.set $3
       local.get $5
       local.get $3
       i32.add
       local.get $4
       local.get $3
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $3
      i32.const 8
      i32.ge_u
      local.set $6
      local.get $6
      if
       local.get $3
       i32.const 8
       i32.sub
       local.set $3
       local.get $4
       local.get $3
       i32.add
       local.set $i64toi32_i32$2
       local.get $i64toi32_i32$2
       i32.load
       local.set $i64toi32_i32$1
       local.get $i64toi32_i32$2
       i32.load offset=4
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$1
       local.set $121
       local.get $5
       local.get $3
       i32.add
       local.set $i64toi32_i32$1
       local.get $i64toi32_i32$1
       local.get $121
       i32.store
       local.get $i64toi32_i32$1
       local.get $i64toi32_i32$0
       i32.store offset=4
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $3
     local.set $6
     local.get $3
     if
      local.get $3
      i32.const 1
      i32.sub
      local.set $3
      local.get $5
      local.get $3
      i32.add
      local.get $4
      local.get $3
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/string/String#concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $4 i32)
  (local $7 i32)
  (local $5 i32)
  (local $6 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $1
  i32.const 0
  i32.eq
  if
   i32.const 384
   local.set $2
   local.get $1
   local.set $3
   local.get $2
   local.get $1
   i32.ne
   if
    local.get $2
    call $~lib/rt/pure/__retain
    local.set $2
    local.get $3
    call $~lib/rt/pure/__release
   end
   local.get $2
   local.set $1
  end
  local.get $0
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $4
  local.get $1
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $5
  local.get $4
  local.get $5
  i32.add
  local.set $6
  local.get $6
  i32.const 0
  i32.eq
  if
   i32.const 416
   call $~lib/rt/pure/__retain
   local.set $2
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   return
  end
  local.get $6
  i32.const 1
  call $~lib/rt/tlsf/__alloc
  call $~lib/rt/pure/__retain
  local.set $7
  local.get $7
  local.get $0
  local.get $4
  call $~lib/memory/memory.copy
  local.get $7
  local.get $4
  i32.add
  local.get $1
  local.get $5
  call $~lib/memory/memory.copy
  local.get $7
  local.set $2
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  return
 )
 (func $~lib/string/String.__concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  i32.const 384
  local.get $0
  i32.const 0
  i32.ne
  select
  local.get $1
  call $~lib/string/String#concat
  local.set $2
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  return
 )
 (func $assembly/index/concat (param $0 i32) (param $1 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  local.get $1
  call $~lib/string/String.__concat
  local.set $3
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $3
  return
 )
 (func $assembly/index/fib (param $0 i32) (result i32)
  (local $2 i32)
  (local $1 i32)
  (local $4 i32)
  i32.const 0
  local.set $1
  i32.const 1
  local.set $2
  local.get $0
  i32.const 0
  i32.gt_s
  if
   loop $while-continue|0
    local.get $0
    i32.const 1
    i32.sub
    local.set $0
    local.get $0
    if
     local.get $1
     local.get $2
     i32.add
     local.set $4
     local.get $2
     local.set $1
     local.get $4
     local.set $2
     br $while-continue|0
    end
   end
   local.get $2
   return
  end
  local.get $1
  return
 )
 (func $assembly/index/foo (param $0 i32) (result i32)
  local.get $0
  i32.const 1
  i32.add
  return
 )
 (func $assembly/index/foo2 (param $0 i32)
  nop
 )
 (func $assembly/index/computeSum~anonymous|0 (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $2
  global.get $assembly/index/sum1
  local.get $0
  i32.add
  global.set $assembly/index/sum1
  local.get $2
  call $~lib/rt/pure/__release
 )
 (func $~lib/array/Array<i32>#forEach (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $4 i32)
  (local $5 i32)
  (local $3 i32)
  (local $25 i32)
  i32.const 0
  local.set $2
  local.get $0
  i32.load offset=12
  local.set $3
  loop $for-loop|0
   local.get $3
   local.set $4
   local.get $0
   i32.load offset=12
   local.set $5
   local.get $2
   local.get $4
   local.get $5
   local.get $4
   local.get $5
   i32.lt_s
   select
   i32.lt_s
   local.set $4
   local.get $4
   if
    local.get $0
    i32.load offset=4
    local.get $2
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.set $25
    i32.const 3
    global.set $~argumentsLength
    local.get $25
    local.get $2
    local.get $0
    local.get $1
    call_indirect (type $i32_i32_i32_=>_none)
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
 )
 (func $assembly/index/computeSum (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $0
  i32.const 1
  call $~lib/array/Array<i32>#forEach
  global.get $assembly/index/sum1
  local.set $1
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  return
 )
 (func $assembly/index/doThrow
  i32.const 432
  i32.const 464
  i32.const 64
  i32.const 3
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/index/getFoo#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $wasm2js_i32$0 i32)
  (local $wasm2js_i32$1 i32)
  local.get $0
  i32.eqz
  if
   i32.const 4
   i32.const 6
   call $~lib/rt/tlsf/__alloc
   call $~lib/rt/pure/__retain
   local.set $0
  end
  local.get $0
  local.get $1
  call $~lib/rt/pure/__retain
  i32.store
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $1
  call $~lib/rt/pure/__release
  local.get $0
  return
 )
 (func $assembly/index/getFoo#get:str (param $0 i32) (result i32)
  local.get $0
  i32.load
  call $~lib/rt/pure/__retain
  return
 )
 (func $assembly/index/getFoo#set:str (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  local.set $3
  local.get $0
  i32.load
  local.set $2
  local.get $1
  local.get $2
  i32.ne
  if
   local.get $1
   call $~lib/rt/pure/__retain
   drop
   local.get $2
   call $~lib/rt/pure/__release
  end
  local.get $3
  local.get $1
  i32.store
 )
 (func $assembly/index/getFoo#getString (param $0 i32) (result i32)
  local.get $0
  i32.load
  call $~lib/rt/pure/__retain
  return
 )
 (func $~start
  call $start:assembly/index
 )
 (func $~lib/rt/pure/__collect
  return
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  i32.store
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/pure/decrement (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=4
  local.set $1
  local.get $1
  i32.const 268435455
  i32.and
  local.set $2
  local.get $0
  i32.load
  i32.const 1
  i32.and
  i32.eqz
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 122
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 1
  i32.eq
  if
   local.get $0
   i32.const 16
   i32.add
   i32.const 1
   call $~lib/rt/__visit_members
   local.get $1
   i32.const -2147483648
   i32.and
   i32.eqz
   i32.eqz
   if
    i32.const 0
    i32.const 144
    i32.const 126
    i32.const 18
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/freeBlock
  else
   local.get $2
   i32.const 0
   i32.gt_u
   i32.eqz
   if
    i32.const 0
    i32.const 144
    i32.const 136
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 268435455
   i32.const -1
   i32.xor
   i32.and
   local.get $2
   i32.const 1
   i32.sub
   i32.or
   i32.store offset=4
  end
 )
 (func $~lib/rt/pure/__visit (param $0 i32) (param $1 i32)
  local.get $0
  global.get $~lib/heap/__heap_base
  i32.lt_u
  if
   return
  end
  local.get $1
  i32.const 1
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 69
   i32.const 16
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.sub
  call $~lib/rt/pure/decrement
 )
 (func $~lib/map/Map<~lib/string/String,~lib/string/String>#__visit_impl (param $0 i32) (param $1 i32)
  (local $3 i32)
  (local $7 i32)
  (local $2 i32)
  (local $13 i32)
  (local $6 i32)
  (local $4 i32)
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/pure/__visit
  local.get $0
  i32.load offset=8
  local.set $2
  i32.const 1
  local.set $13
  local.get $2
  local.set $3
  local.get $3
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $4
  loop $while-continue|0
   local.get $3
   local.get $4
   i32.lt_u
   if
    local.get $3
    local.set $6
    local.get $3
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $6
     i32.load
     local.set $7
     local.get $7
     local.get $1
     call $~lib/rt/pure/__visit
     local.get $6
     i32.load offset=4
     local.set $7
     local.get $7
     local.get $1
     call $~lib/rt/pure/__visit
    end
    local.get $3
    i32.const 12
    i32.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $2
  local.get $1
  call $~lib/rt/pure/__visit
 )
 (func $~lib/array/Array<i32>#__visit_impl (param $0 i32) (param $1 i32)
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/pure/__visit
 )
 (func $~lib/rt/__visit_members (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $switch$1$default
   block $switch$1$case$7
    block $switch$1$case$5
     block $switch$1$case$4
      block $switch$1$case$2
       local.get $0
       i32.const 8
       i32.sub
       i32.load
       br_table $switch$1$case$2 $switch$1$case$2 $switch$1$case$4 $switch$1$case$5 $switch$1$case$4 $switch$1$case$7 $switch$1$case$4 $switch$1$default
      end
     end
    end
   end
  end
  unreachable
 )
 (func $assembly/index/foo@varargs (param $0 i32) (result i32)
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     br_table $0of1 $1of1 $outOfRange
    end
   end
  end
  local.get $0
  call $assembly/index/foo
  return
 )
 (func $~setArgumentsLength (param $0 i32)
  local.get $0
  global.set $~argumentsLength
 )
 (func $__wasm_ctz_i32 (param $var$0 i32) (result i32)
  local.get $var$0
  if
   i32.const 31
   local.get $var$0
   i32.const -1
   i32.add
   local.get $var$0
   i32.xor
   i32.clz
   i32.sub
   return
  end
  i32.const 32
  return
 )
)
