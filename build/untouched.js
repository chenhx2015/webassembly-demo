import { abort } from 'env';

function asmFunc(global, env, buffer) {
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 var $lib_builtins_abort = env.abort;
 var $lib_rt_tlsf_ROOT = 0;
 var $lib_rt_tlsf_collectLock = 0;
 var $lib_gc_gc_auto = 1;
 var assembly_index_a = 0;
 var assembly_index_aa = 0;
 var assembly_index_sum1 = 0;
 var $argumentsLength = 0;
 var $lib_rt___rtti_base = 512;
 var $lib_heap___heap_base = 572;
 var assembly_index_getFoo = 6;
 function $lib_rt_tlsf_removeBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $4 = 0, $9 = 0, $3 = 0, $7 = 0, $5 = 0, $8 = 0, $6 = 0, $2 = 0, $24 = 0, $47 = 0;
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 277 | 0, 14 | 0);
   abort();
  }
  $3 = $2 & (3 ^ -1 | 0) | 0;
  if ($3 >>> 0 >= 16 >>> 0) {
   $24 = $3 >>> 0 < 1073741808 >>> 0
  } else {
   $24 = 0
  }
  if (!$24) {
   $lib_builtins_abort(0 | 0, 32 | 0, 279 | 0, 14 | 0);
   abort();
  }
  if ($3 >>> 0 < 256 >>> 0) {
   $4 = 0;
   $5 = $3 >>> 4 | 0;
  } else {
   $4 = 31 - Math_clz32($3) | 0;
   $5 = ($3 >>> ($4 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $4 = $4 - (8 - 1 | 0) | 0;
  }
  if ($4 >>> 0 < 23 >>> 0) {
   $47 = $5 >>> 0 < 16 >>> 0
  } else {
   $47 = 0
  }
  if (!$47) {
   $lib_builtins_abort(0 | 0, 32 | 0, 292 | 0, 14 | 0);
   abort();
  }
  $6 = HEAP32[($1 + 16 | 0) >> 2] | 0;
  $7 = HEAP32[($1 + 20 | 0) >> 2] | 0;
  if ($6) {
   HEAP32[($6 + 20 | 0) >> 2] = $7
  }
  if ($7) {
   HEAP32[($7 + 16 | 0) >> 2] = $6
  }
  $lib_rt_tlsf_GETHEAD_inlined_0 : {
   $9 = $4;
   $8 = $5;
  }
  if (($1 | 0) == (HEAP32[(($0 + ((($9 << 4 | 0) + $8 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0 | 0)) {
   $lib_rt_tlsf_SETHEAD_inlined_1 : {
    $9 = $5;
    $8 = $7;
    HEAP32[(($0 + ((($4 << 4 | 0) + $9 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $7;
   }
   if (!$7) {
    $lib_rt_tlsf_GETSL_inlined_0 : {
     $9 = $0;
     $8 = $4;
    }
    $9 = HEAP32[(($9 + ($8 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    $lib_rt_tlsf_SETSL_inlined_1 : {
     $8 = $0;
     $9 = $9 & ((1 << $5 | 0) ^ -1 | 0) | 0;
     HEAP32[(($0 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] = $9;
    }
    if (!$9) {
     HEAP32[$0 >> 2] = (HEAP32[$0 >> 2] | 0) & ((1 << $4 | 0) ^ -1 | 0) | 0
    }
   }
  }
 }
 
 function $lib_rt_tlsf_insertBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $6 = 0, $9 = 0, $2 = 0, $4 = 0, $7 = 0, $8 = 0, $10 = 0, $5 = 0, $11 = 0, $107 = 0, $140 = 0;
  if (!$1) {
   $lib_builtins_abort(0 | 0, 32 | 0, 205 | 0, 14 | 0);
   abort();
  }
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 207 | 0, 14 | 0);
   abort();
  }
  $3 = $1;
  $4 = ($3 + 16 | 0) + ((HEAP32[$3 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
  $5 = HEAP32[$4 >> 2] | 0;
  if ($5 & 1 | 0) {
   $3 = (($2 & (3 ^ -1 | 0) | 0) + 16 | 0) + ($5 & (3 ^ -1 | 0) | 0) | 0;
   if ($3 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0 | 0, $4 | 0);
    $2 = $2 & 3 | 0 | $3 | 0;
    HEAP32[$1 >> 2] = $2;
    $6 = $1;
    $4 = ($6 + 16 | 0) + ((HEAP32[$6 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
    $5 = HEAP32[$4 >> 2] | 0;
   }
  }
  if ($2 & 2 | 0) {
   $6 = $1;
   $6 = HEAP32[($6 - 4 | 0) >> 2] | 0;
   $3 = HEAP32[$6 >> 2] | 0;
   if (!($3 & 1 | 0)) {
    $lib_builtins_abort(0 | 0, 32 | 0, 228 | 0, 16 | 0);
    abort();
   }
   $7 = (($3 & (3 ^ -1 | 0) | 0) + 16 | 0) + ($2 & (3 ^ -1 | 0) | 0) | 0;
   if ($7 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0 | 0, $6 | 0);
    $2 = $3 & 3 | 0 | $7 | 0;
    HEAP32[$6 >> 2] = $2;
    $1 = $6;
   }
  }
  HEAP32[$4 >> 2] = $5 | 2 | 0;
  $8 = $2 & (3 ^ -1 | 0) | 0;
  if ($8 >>> 0 >= 16 >>> 0) {
   $107 = $8 >>> 0 < 1073741808 >>> 0
  } else {
   $107 = 0
  }
  if (!$107) {
   $lib_builtins_abort(0 | 0, 32 | 0, 243 | 0, 14 | 0);
   abort();
  }
  if (!((($1 + 16 | 0) + $8 | 0 | 0) == ($4 | 0))) {
   $lib_builtins_abort(0 | 0, 32 | 0, 244 | 0, 14 | 0);
   abort();
  }
  HEAP32[($4 - 4 | 0) >> 2] = $1;
  if ($8 >>> 0 < 256 >>> 0) {
   $9 = 0;
   $10 = $8 >>> 4 | 0;
  } else {
   $9 = 31 - Math_clz32($8) | 0;
   $10 = ($8 >>> ($9 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $9 = $9 - (8 - 1 | 0) | 0;
  }
  if ($9 >>> 0 < 23 >>> 0) {
   $140 = $10 >>> 0 < 16 >>> 0
  } else {
   $140 = 0
  }
  if (!$140) {
   $lib_builtins_abort(0 | 0, 32 | 0, 260 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_GETHEAD_inlined_1 : {
   $7 = $0;
   $3 = $9;
   $6 = $10;
  }
  $11 = HEAP32[(($7 + ((($3 << 4 | 0) + $6 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = $11;
  if ($11) {
   HEAP32[($11 + 16 | 0) >> 2] = $1
  }
  $lib_rt_tlsf_SETHEAD_inlined_2 : {
   $7 = $9;
   $3 = $10;
   $6 = $1;
   HEAP32[(($0 + ((($9 << 4 | 0) + $3 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $1;
  }
  HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | 0 | (1 << $9 | 0) | 0;
  $lib_rt_tlsf_SETSL_inlined_2 : {
   $lib_rt_tlsf_GETSL_inlined_1 : {
    $3 = $0;
    $6 = $9;
   }
   $7 = HEAP32[(($3 + ($6 << 2 | 0) | 0) + 4 | 0) >> 2] | 0 | (1 << $10 | 0) | 0;
   HEAP32[(($0 + ($9 << 2 | 0) | 0) + 4 | 0) >> 2] = $7;
  }
 }
 
 function $lib_rt_tlsf_addMemory($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $6 = 0, $16 = 0, $21 = 0, $5 = 0;
  if ($1 >>> 0 <= $2 >>> 0) {
   $16 = !($1 & 15 | 0)
  } else {
   $16 = 0
  }
  if ($16) {
   $21 = !($2 & 15 | 0)
  } else {
   $21 = 0
  }
  if (!$21) {
   $lib_builtins_abort(0 | 0, 32 | 0, 386 | 0, 5 | 0);
   abort();
  }
  $4 = HEAP32[($0 + 1568 | 0) >> 2] | 0;
  $5 = 0;
  if ($4) {
   if (!($1 >>> 0 >= ($4 + 16 | 0) >>> 0)) {
    $lib_builtins_abort(0 | 0, 32 | 0, 396 | 0, 16 | 0);
    abort();
   }
   if (($1 - 16 | 0 | 0) == ($4 | 0)) {
    $1 = $1 - 16 | 0;
    $5 = HEAP32[$4 >> 2] | 0;
   }
  } else {
   if (!($1 >>> 0 >= ($0 + 1572 | 0) >>> 0)) {
    $lib_builtins_abort(0 | 0, 32 | 0, 408 | 0, 5 | 0);
    abort();
   }
  }
  $6 = $2 - $1 | 0;
  if ($6 >>> 0 < ((16 + 16 | 0) + 16 | 0) >>> 0) {
   return 0 | 0
  }
  HEAP32[$1 >> 2] = $6 - (16 << 1 | 0) | 0 | 1 | 0 | ($5 & 2 | 0) | 0;
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = 0;
  $4 = ($1 + $6 | 0) - 16 | 0;
  HEAP32[$4 >> 2] = 0 | 2 | 0;
  HEAP32[($0 + 1568 | 0) >> 2] = $4;
  $lib_rt_tlsf_insertBlock($0 | 0, $1 | 0);
  return 1 | 0;
 }
 
 function $lib_rt_tlsf_maybeInitialize() {
  var $0 = 0, $5 = 0, $8 = 0, $1 = 0, $4 = 0, $6 = 0, $2 = 0, $3 = 0, $34 = 0;
  $0 = $lib_rt_tlsf_ROOT;
  if (!$0) {
   $1 = ($lib_heap___heap_base + 15 | 0) & (15 ^ -1 | 0) | 0;
   $2 = __wasm_memory_size();
   $3 = ((($1 + 1572 | 0) + 65535 | 0) & (65535 ^ -1 | 0) | 0) >>> 16 | 0;
   if (($3 | 0) > ($2 | 0)) {
    $34 = (__wasm_memory_grow($3 - $2 | 0 | 0) | 0) < (0 | 0)
   } else {
    $34 = 0
   }
   if ($34) {
    abort()
   }
   $0 = $1;
   HEAP32[$0 >> 2] = 0;
   $lib_rt_tlsf_SETTAIL_inlined_0 : {
    $5 = $0;
    $4 = 0;
    HEAP32[($0 + 1568 | 0) >> 2] = $4;
   }
   $5 = 0;
   for_loop_0 : while (1) {
    $4 = $5 >>> 0 < 23 >>> 0;
    if ($4) {
     for_continue_0 : {
      $lib_rt_tlsf_SETSL_inlined_0 : {
       $8 = $0;
       $6 = 0;
       HEAP32[(($0 + ($5 << 2 | 0) | 0) + 4 | 0) >> 2] = $6;
      }
      $8 = 0;
      for_loop_1 : while (1) {
       if ($8 >>> 0 < 16 >>> 0) {
        $lib_rt_tlsf_SETHEAD_inlined_0 : {
         $6 = 0;
         HEAP32[(($0 + ((($5 << 4 | 0) + $8 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $6;
        }
        $8 = $8 + 1 | 0;
        continue for_loop_1;
       }
       break for_loop_1;
      };
     }
     $5 = $5 + 1 | 0;
     continue for_loop_0;
    }
    break for_loop_0;
   };
   $5 = (($1 + 1572 | 0) + 15 | 0) & (15 ^ -1 | 0) | 0;
   $lib_rt_tlsf_addMemory($0 | 0, $5 | 0, __wasm_memory_size() << 16 | 0 | 0) | 0;
   $lib_rt_tlsf_ROOT = $0;
  }
  return $0 | 0;
 }
 
 function $lib_rt_tlsf_prepareSize($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  if ($0 >>> 0 >= 1073741808 >>> 0) {
   $lib_builtins_abort(80 | 0, 32 | 0, 461 | 0, 30 | 0);
   abort();
  }
  $1 = ($0 + 15 | 0) & (15 ^ -1 | 0) | 0;
  $2 = 16;
  return ($1 >>> 0 > $2 >>> 0 ? $1 : $2) | 0;
 }
 
 function $lib_rt_tlsf_searchBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $6 = 0, $8 = 0, $5 = 0, $7 = 0, $3 = 0, $9 = 0, $24 = 0, $42 = 0;
  if ($1 >>> 0 < 256 >>> 0) {
   $2 = 0;
   $3 = $1 >>> 4 | 0;
  } else {
   if ($1 >>> 0 < 536870904 >>> 0) {
    $24 = ($1 + (1 << (27 - Math_clz32($1) | 0) | 0) | 0) - 1 | 0
   } else {
    $24 = $1
   }
   $4 = $24;
   $2 = 31 - Math_clz32($4) | 0;
   $3 = ($4 >>> ($2 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $2 = $2 - (8 - 1 | 0) | 0;
  }
  if ($2 >>> 0 < 23 >>> 0) {
   $42 = $3 >>> 0 < 16 >>> 0
  } else {
   $42 = 0
  }
  if (!$42) {
   $lib_builtins_abort(0 | 0, 32 | 0, 338 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_GETSL_inlined_2 : {
   $5 = $0;
   $4 = $2;
  }
  $6 = (HEAP32[(($5 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0) & ((0 ^ -1 | 0) << $3 | 0) | 0;
  $7 = 0;
  if (!$6) {
   $5 = (HEAP32[$0 >> 2] | 0) & ((0 ^ -1 | 0) << ($2 + 1 | 0) | 0) | 0;
   if (!$5) {
    $7 = 0
   } else {
    $2 = __wasm_ctz_i32($5 | 0) | 0;
    $lib_rt_tlsf_GETSL_inlined_3 : {
     $8 = $0;
     $4 = $2;
    }
    $6 = HEAP32[(($8 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    if (!$6) {
     $lib_builtins_abort(0 | 0, 32 | 0, 351 | 0, 18 | 0);
     abort();
    }
    $lib_rt_tlsf_GETHEAD_inlined_2 : {
     $9 = $0;
     $8 = $2;
     $4 = __wasm_ctz_i32($6 | 0) | 0;
    }
    $7 = HEAP32[(($9 + ((($8 << 4 | 0) + $4 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
   }
  } else {
   $lib_rt_tlsf_GETHEAD_inlined_3 : {
    $9 = $0;
    $8 = $2;
    $4 = __wasm_ctz_i32($6 | 0) | 0;
   }
   $7 = HEAP32[(($9 + ((($8 << 4 | 0) + $4 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
  }
  return $7 | 0;
 }
 
 function $lib_rt_tlsf_growMemory($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0;
  if ($1 >>> 0 < 536870904 >>> 0) {
   $1 = $1 + ((1 << (27 - Math_clz32($1) | 0) | 0) - 1 | 0) | 0
  }
  $2 = __wasm_memory_size();
  $1 = $1 + (16 << ((($2 << 16 | 0) - 16 | 0 | 0) != (HEAP32[($0 + 1568 | 0) >> 2] | 0 | 0)) | 0) | 0;
  $4 = (($1 + 65535 | 0) & (65535 ^ -1 | 0) | 0) >>> 16 | 0;
  if ((__wasm_memory_grow((($2 | 0) > ($4 | 0) ? $2 : $4) | 0) | 0) < (0 | 0)) {
   if ((__wasm_memory_grow($4 | 0) | 0) < (0 | 0)) {
    abort()
   }
  }
  $lib_rt_tlsf_addMemory($0 | 0, $2 << 16 | 0 | 0, __wasm_memory_size() << 16 | 0 | 0) | 0;
 }
 
 function $lib_rt_tlsf_prepareBlock($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $4 = 0, $48 = 0;
  $3 = HEAP32[$1 >> 2] | 0;
  if (!!($2 & 15 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 365 | 0, 14 | 0);
   abort();
  }
  $4 = ($3 & (3 ^ -1 | 0) | 0) - $2 | 0;
  if ($4 >>> 0 >= (16 + 16 | 0) >>> 0) {
   HEAP32[$1 >> 2] = $2 | ($3 & 2 | 0) | 0;
   $5 = ($1 + 16 | 0) + $2 | 0;
   HEAP32[$5 >> 2] = $4 - 16 | 0 | 1 | 0;
   $lib_rt_tlsf_insertBlock($0 | 0, $5 | 0);
  } else {
   HEAP32[$1 >> 2] = $3 & (1 ^ -1 | 0) | 0;
   $5 = $1;
   $48 = ($5 + 16 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
   $5 = $1;
   HEAP32[$48 >> 2] = (HEAP32[(($5 + 16 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0) >> 2] | 0) & (2 ^ -1 | 0) | 0;
  }
 }
 
 function $lib_rt_tlsf_allocateBlock($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $3 = 0;
  if (!!$lib_rt_tlsf_collectLock) {
   $lib_builtins_abort(0 | 0, 32 | 0, 501 | 0, 14 | 0);
   abort();
  }
  $3 = $lib_rt_tlsf_prepareSize($1 | 0) | 0;
  $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
  if (!$4) {
   if ($lib_gc_gc_auto) {
    $lib_rt_tlsf_collectLock = 1;
    $lib_rt_pure___collect();
    $lib_rt_tlsf_collectLock = 0;
    $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
    if (!$4) {
     $lib_rt_tlsf_growMemory($0 | 0, $3 | 0);
     $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
     if (!$4) {
      $lib_builtins_abort(0 | 0, 32 | 0, 513 | 0, 20 | 0);
      abort();
     }
    }
   } else {
    $lib_rt_tlsf_growMemory($0 | 0, $3 | 0);
    $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
    if (!$4) {
     $lib_builtins_abort(0 | 0, 32 | 0, 518 | 0, 18 | 0);
     abort();
    }
   }
  }
  if (!(((HEAP32[$4 >> 2] | 0) & (3 ^ -1 | 0) | 0) >>> 0 >= $3 >>> 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 521 | 0, 14 | 0);
   abort();
  }
  HEAP32[($4 + 4 | 0) >> 2] = 0;
  HEAP32[($4 + 8 | 0) >> 2] = $2;
  HEAP32[($4 + 12 | 0) >> 2] = $1;
  $lib_rt_tlsf_removeBlock($0 | 0, $4 | 0);
  $lib_rt_tlsf_prepareBlock($0 | 0, $4 | 0, $3 | 0);
  return $4 | 0;
 }
 
 function $lib_rt_tlsf___alloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return ($lib_rt_tlsf_allocateBlock($lib_rt_tlsf_maybeInitialize() | 0 | 0, $0 | 0, $1 | 0) | 0) + 16 | 0 | 0;
 }
 
 function $lib_rt_pure_increment($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  if (!(($1 & (268435455 ^ -1 | 0) | 0 | 0) == (($1 + 1 | 0) & (268435455 ^ -1 | 0) | 0 | 0))) {
   $lib_builtins_abort(0 | 0, 144 | 0, 109 | 0, 3 | 0);
   abort();
  }
  HEAP32[($0 + 4 | 0) >> 2] = $1 + 1 | 0;
  if (!!((HEAP32[$0 >> 2] | 0) & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 144 | 0, 112 | 0, 14 | 0);
   abort();
  }
 }
 
 function $lib_rt_pure___retain($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > $lib_heap___heap_base >>> 0) {
   $lib_rt_pure_increment($0 - 16 | 0 | 0)
  }
  return $0 | 0;
 }
 
 function $lib_rt_pure___release($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > $lib_heap___heap_base >>> 0) {
   $lib_rt_pure_decrement($0 - 16 | 0 | 0)
  }
 }
 
 function $lib_memory_memory_fill($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $8 = 0, $6 = 0, i64toi32_i32$2 = 0, $4 = 0, i64toi32_i32$0 = 0, $7 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $9 = 0, $19 = 0, $104 = 0, $104$hi = 0, $107$hi = 0, $9$hi = 0;
  $lib_util_memory_memset_inlined_0 : {
   $5 = $0;
   $4 = $1;
   $3 = $2;
   if (!$3) {
    break $lib_util_memory_memset_inlined_0
   }
   $6 = ($5 + $3 | 0) - 4 | 0;
   HEAP8[$5 >> 0] = $4;
   HEAP8[($6 + 3 | 0) >> 0] = $4;
   if ($3 >>> 0 <= 2 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP8[($5 + 1 | 0) >> 0] = $4;
   HEAP8[($5 + 2 | 0) >> 0] = $4;
   HEAP8[($6 + 2 | 0) >> 0] = $4;
   HEAP8[($6 + 1 | 0) >> 0] = $4;
   if ($3 >>> 0 <= 6 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP8[($5 + 3 | 0) >> 0] = $4;
   HEAP8[$6 >> 0] = $4;
   if ($3 >>> 0 <= 8 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   $7 = (0 - $5 | 0) & 3 | 0;
   $5 = $5 + $7 | 0;
   $3 = $3 - $7 | 0;
   $3 = $3 & -4 | 0;
   $8 = Math_imul((-1 >>> 0) / (255 >>> 0) | 0, $4 & 255 | 0);
   $6 = ($5 + $3 | 0) - 28 | 0;
   HEAP32[$5 >> 2] = $8;
   HEAP32[($6 + 24 | 0) >> 2] = $8;
   if ($3 >>> 0 <= 8 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP32[($5 + 4 | 0) >> 2] = $8;
   HEAP32[($5 + 8 | 0) >> 2] = $8;
   HEAP32[($6 + 16 | 0) >> 2] = $8;
   HEAP32[($6 + 20 | 0) >> 2] = $8;
   if ($3 >>> 0 <= 24 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP32[($5 + 12 | 0) >> 2] = $8;
   HEAP32[($5 + 16 | 0) >> 2] = $8;
   HEAP32[($5 + 20 | 0) >> 2] = $8;
   HEAP32[($5 + 24 | 0) >> 2] = $8;
   HEAP32[$6 >> 2] = $8;
   HEAP32[($6 + 4 | 0) >> 2] = $8;
   HEAP32[($6 + 8 | 0) >> 2] = $8;
   HEAP32[($6 + 12 | 0) >> 2] = $8;
   $7 = 24 + ($5 & 4 | 0) | 0;
   $5 = $5 + $7 | 0;
   $3 = $3 - $7 | 0;
   i64toi32_i32$0 = 0;
   $104 = $8;
   $104$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$2 = $8;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 32;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $19 = 0;
   } else {
    i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
    $19 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
   $107$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $104$hi;
   i64toi32_i32$0 = $104;
   i64toi32_i32$2 = $107$hi;
   i64toi32_i32$3 = $19;
   i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
   $9 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
   $9$hi = i64toi32_i32$2;
   while_continue_0 : while (1) {
    if ($3 >>> 0 >= 32 >>> 0) {
     i64toi32_i32$2 = $9$hi;
     i64toi32_i32$0 = $5;
     HEAP32[$5 >> 2] = $9;
     HEAP32[($5 + 4 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5;
     HEAP32[($5 + 8 | 0) >> 2] = $9;
     HEAP32[($5 + 12 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5;
     HEAP32[($5 + 16 | 0) >> 2] = $9;
     HEAP32[($5 + 20 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5;
     HEAP32[($5 + 24 | 0) >> 2] = $9;
     HEAP32[($5 + 28 | 0) >> 2] = i64toi32_i32$2;
     $3 = $3 - 32 | 0;
     $5 = $5 + 32 | 0;
     continue while_continue_0;
    }
    break while_continue_0;
   };
  }
 }
 
 function $lib_arraybuffer_ArrayBuffer_constructor($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  if ($1 >>> 0 > 1073741808 >>> 0) {
   $lib_builtins_abort(192 | 0, 240 | 0, 49 | 0, 43 | 0);
   abort();
  }
  $2 = $lib_rt_tlsf___alloc($1 | 0, 0 | 0) | 0;
  $lib_memory_memory_fill($2 | 0, 0 | 0, $1 | 0);
  $3 = $lib_rt_pure___retain($2 | 0) | 0;
  $lib_rt_pure___release($0 | 0);
  return $3 | 0;
 }
 
 function $lib_map_Map__lib_string_String__lib_string_String__clear($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  $1 = $0;
  $2 = $lib_arraybuffer_ArrayBuffer_constructor(0 | 0, 16 | 0) | 0;
  $lib_rt_pure___release(HEAP32[$0 >> 2] | 0 | 0);
  HEAP32[$0 >> 2] = $2;
  HEAP32[($0 + 4 | 0) >> 2] = 4 - 1 | 0;
  $2 = $0;
  $1 = $lib_arraybuffer_ArrayBuffer_constructor(0 | 0, 48 | 0) | 0;
  $lib_rt_pure___release(HEAP32[($0 + 8 | 0) >> 2] | 0 | 0);
  HEAP32[($0 + 8 | 0) >> 2] = $1;
  HEAP32[($0 + 12 | 0) >> 2] = 4;
  HEAP32[($0 + 16 | 0) >> 2] = 0;
  HEAP32[($0 + 20 | 0) >> 2] = 0;
 }
 
 function $lib_map_Map__lib_string_String__lib_string_String__constructor($0) {
  $0 = $0 | 0;
  if (!$0) {
   $0 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(24 | 0, 3 | 0) | 0 | 0) | 0
  }
  HEAP32[$0 >> 2] = 0;
  HEAP32[($0 + 4 | 0) >> 2] = 0;
  HEAP32[($0 + 8 | 0) >> 2] = 0;
  HEAP32[($0 + 12 | 0) >> 2] = 0;
  HEAP32[($0 + 16 | 0) >> 2] = 0;
  HEAP32[($0 + 20 | 0) >> 2] = 0;
  $lib_map_Map__lib_string_String__lib_string_String__clear($0 | 0);
  return $0 | 0;
 }
 
 function $lib_string_String_get_length($0) {
  $0 = $0 | 0;
  return (HEAP32[(($0 - 16 | 0) + 12 | 0) >> 2] | 0) >>> 1 | 0 | 0;
 }
 
 function $lib_util_hash_hashStr($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0;
  $0 = $lib_rt_pure___retain($0 | 0) | 0;
  $1 = -2128831035;
  if (($0 | 0) != (0 | 0)) {
   $2 = 0;
   $3 = ($lib_string_String_get_length($0 | 0) | 0) << 1 | 0;
   for_loop_0 : while (1) {
    if ($2 >>> 0 < $3 >>> 0) {
     $1 = Math_imul($1 ^ (HEAPU8[($0 + $2 | 0) >> 0] | 0) | 0, 16777619);
     $2 = $2 + 1 | 0;
     continue for_loop_0;
    }
    break for_loop_0;
   };
  }
  $3 = $1;
  $lib_rt_pure___release($0 | 0);
  return $1 | 0;
 }
 
 function $lib_util_string_compareImpl($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $5 = 0, $6 = 0, $7 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $32 = 0, $8 = 0, $9 = 0, $35 = 0, $35$hi = 0, $37 = 0, $37$hi = 0, $10 = 0;
  $0 = $lib_rt_pure___retain($0 | 0) | 0;
  $2 = $lib_rt_pure___retain($2 | 0) | 0;
  $5 = $0 + ($1 << 1 | 0) | 0;
  $6 = $2 + ($3 << 1 | 0) | 0;
  if ($4 >>> 0 >= 4 >>> 0) {
   $32 = !($5 & 7 | 0 | ($6 & 7 | 0) | 0)
  } else {
   $32 = 0
  }
  if ($32) {
   do_break_0 : {
    do_continue_0 : while (1) {
     i64toi32_i32$0 = HEAP32[$5 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($5 + 4 | 0) >> 2] | 0;
     $35 = i64toi32_i32$0;
     $35$hi = i64toi32_i32$1;
     i64toi32_i32$1 = HEAP32[$6 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[($6 + 4 | 0) >> 2] | 0;
     $37 = i64toi32_i32$1;
     $37$hi = i64toi32_i32$0;
     i64toi32_i32$0 = $35$hi;
     i64toi32_i32$1 = $37$hi;
     if (($35 | 0) != ($37 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$1 | 0) | 0) {
      break do_break_0
     }
     $5 = $5 + 8 | 0;
     $6 = $6 + 8 | 0;
     $4 = $4 - 4 | 0;
     $7 = $4 >>> 0 >= 4 >>> 0;
     if ($7) {
      continue do_continue_0
     }
     break do_continue_0;
    };
   }
  }
  while_continue_1 : while (1) {
   $7 = $4;
   $4 = $7 - 1 | 0;
   if ($7) {
    $8 = HEAPU16[$5 >> 1] | 0;
    $9 = HEAPU16[$6 >> 1] | 0;
    if (($8 | 0) != ($9 | 0)) {
     $10 = $8 - $9 | 0;
     $lib_rt_pure___release($0 | 0);
     $lib_rt_pure___release($2 | 0);
     return $10 | 0;
    }
    $5 = $5 + 2 | 0;
    $6 = $6 + 2 | 0;
    continue while_continue_1;
   }
   break while_continue_1;
  };
  $7 = 0;
  $lib_rt_pure___release($0 | 0);
  $lib_rt_pure___release($2 | 0);
  return $7 | 0;
 }
 
 function $lib_string_String___eq($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $18 = 0, $3 = 0;
  $0 = $lib_rt_pure___retain($0 | 0) | 0;
  $1 = $lib_rt_pure___retain($1 | 0) | 0;
  if (($0 | 0) == ($1 | 0)) {
   $2 = 1;
   $lib_rt_pure___release($0 | 0);
   $lib_rt_pure___release($1 | 0);
   return $2 | 0;
  }
  if (($0 | 0) == (0 | 0)) {
   $18 = 1
  } else {
   $18 = ($1 | 0) == (0 | 0)
  }
  if ($18) {
   $2 = 0;
   $lib_rt_pure___release($0 | 0);
   $lib_rt_pure___release($1 | 0);
   return $2 | 0;
  }
  $3 = $lib_string_String_get_length($0 | 0) | 0;
  if (($3 | 0) != ($lib_string_String_get_length($1 | 0) | 0 | 0)) {
   $2 = 0;
   $lib_rt_pure___release($0 | 0);
   $lib_rt_pure___release($1 | 0);
   return $2 | 0;
  }
  $2 = !($lib_util_string_compareImpl($0 | 0, 0 | 0, $1 | 0, 0 | 0, $3 | 0) | 0);
  $lib_rt_pure___release($0 | 0);
  $lib_rt_pure___release($1 | 0);
  return $2 | 0;
 }
 
 function $lib_map_Map__lib_string_String__lib_string_String__find($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $27 = 0;
  $1 = $lib_rt_pure___retain($1 | 0) | 0;
  $3 = HEAP32[((HEAP32[$0 >> 2] | 0) + Math_imul($2 & (HEAP32[($0 + 4 | 0) >> 2] | 0) | 0, 4) | 0) >> 2] | 0;
  while_continue_0 : while (1) {
   $4 = $3;
   if ($3) {
    if (!((HEAP32[($3 + 8 | 0) >> 2] | 0) & 1 | 0)) {
     $27 = $lib_string_String___eq(HEAP32[$3 >> 2] | 0 | 0, $1 | 0) | 0
    } else {
     $27 = 0
    }
    if ($27) {
     $lib_rt_pure___release($1 | 0);
     return $3 | 0;
    }
    $3 = (HEAP32[($3 + 8 | 0) >> 2] | 0) & (1 ^ -1 | 0) | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  $4 = 0;
  $lib_rt_pure___release($1 | 0);
  return $4 | 0;
 }
 
 function $lib_map_Map__lib_string_String__lib_string_String__rehash($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $9 = 0, $12 = 0, $11 = 0, $6 = 0, $13 = 0, $8 = 0, $3 = 0, $5 = 0, $10 = 0, $2 = 0, $4 = 0, $7 = 0, $60 = 0, $82 = 0, $98 = 0;
  $2 = $1 + 1 | 0;
  $3 = $lib_arraybuffer_ArrayBuffer_constructor(0 | 0, Math_imul($2, 4) | 0) | 0;
  $4 = (Math_imul($2, 8) | 0) / (3 | 0) | 0;
  $5 = $lib_arraybuffer_ArrayBuffer_constructor(0 | 0, Math_imul($4, 12) | 0) | 0;
  $6 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  $7 = $6 + Math_imul(HEAP32[($0 + 16 | 0) >> 2] | 0, 12) | 0;
  $8 = $5;
  while_continue_0 : while (1) {
   $9 = ($6 | 0) != ($7 | 0);
   if ($9) {
    $10 = $6;
    if (!((HEAP32[($6 + 8 | 0) >> 2] | 0) & 1 | 0)) {
     $11 = $8;
     HEAP32[$11 >> 2] = HEAP32[$10 >> 2] | 0;
     HEAP32[($11 + 4 | 0) >> 2] = HEAP32[($10 + 4 | 0) >> 2] | 0;
     $lib_util_hash_HASH__lib_string_String__inlined_1 : {
      $12 = $lib_rt_pure___retain(HEAP32[$10 >> 2] | 0 | 0) | 0;
      $13 = $lib_util_hash_hashStr($12 | 0) | 0;
      $lib_rt_pure___release($12 | 0);
      $60 = $13;
      break $lib_util_hash_HASH__lib_string_String__inlined_1;
     }
     $12 = $60 & $1 | 0;
     $13 = $3 + Math_imul($12, 4) | 0;
     HEAP32[($11 + 8 | 0) >> 2] = HEAP32[$13 >> 2] | 0;
     HEAP32[$13 >> 2] = $8;
     $8 = $8 + 12 | 0;
    }
    $6 = $6 + 12 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  $11 = $0;
  $82 = $0;
  $12 = $3;
  $9 = HEAP32[$0 >> 2] | 0;
  if (($12 | 0) != ($9 | 0)) {
   $12 = $lib_rt_pure___retain($12 | 0) | 0;
   $lib_rt_pure___release($9 | 0);
  }
  HEAP32[$82 >> 2] = $12;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  $13 = $0;
  $98 = $0;
  $9 = $5;
  $11 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  if (($9 | 0) != ($11 | 0)) {
   $9 = $lib_rt_pure___retain($9 | 0) | 0;
   $lib_rt_pure___release($11 | 0);
  }
  HEAP32[($98 + 8 | 0) >> 2] = $9;
  HEAP32[($0 + 12 | 0) >> 2] = $4;
  HEAP32[($0 + 16 | 0) >> 2] = HEAP32[($0 + 20 | 0) >> 2] | 0;
  $lib_rt_pure___release($3 | 0);
  $lib_rt_pure___release($5 | 0);
 }
 
 function $lib_map_Map__lib_string_String__lib_string_String__set($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $3 = 0, $6 = 0, $5 = 0, $52 = 0, $17 = 0, $38 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $1 = $lib_rt_pure___retain($1 | 0) | 0;
  $2 = $lib_rt_pure___retain($2 | 0) | 0;
  $lib_util_hash_HASH__lib_string_String__inlined_0 : {
   $3 = $lib_rt_pure___retain($1 | 0) | 0;
   $4 = $lib_util_hash_hashStr($3 | 0) | 0;
   $lib_rt_pure___release($3 | 0);
   $17 = $4;
   break $lib_util_hash_HASH__lib_string_String__inlined_0;
  }
  $5 = $17;
  $6 = $lib_map_Map__lib_string_String__lib_string_String__find($0 | 0, $1 | 0, $5 | 0) | 0;
  if ($6) {
   $3 = HEAP32[($6 + 4 | 0) >> 2] | 0;
   if (($2 | 0) != ($3 | 0)) {
    (wasm2js_i32$0 = $6, wasm2js_i32$1 = $lib_rt_pure___retain($2 | 0) | 0), HEAP32[(wasm2js_i32$0 + 4 | 0) >> 2] = wasm2js_i32$1;
    $lib_rt_pure___release($3 | 0);
   }
  } else {
   if ((HEAP32[($0 + 16 | 0) >> 2] | 0 | 0) == (HEAP32[($0 + 12 | 0) >> 2] | 0 | 0)) {
    $38 = $0;
    if ((HEAP32[($0 + 20 | 0) >> 2] | 0 | 0) < ((Math_imul(HEAP32[($0 + 12 | 0) >> 2] | 0, 3) | 0) / (4 | 0) | 0 | 0)) {
     $52 = HEAP32[($0 + 4 | 0) >> 2] | 0
    } else {
     $52 = (HEAP32[($0 + 4 | 0) >> 2] | 0) << 1 | 0 | 1 | 0
    }
    $lib_map_Map__lib_string_String__lib_string_String__rehash($38 | 0, $52 | 0);
   }
   $3 = $lib_rt_pure___retain(HEAP32[($0 + 8 | 0) >> 2] | 0 | 0) | 0;
   $4 = HEAP32[($0 + 16 | 0) >> 2] | 0;
   HEAP32[($0 + 16 | 0) >> 2] = $4 + 1 | 0;
   $6 = $3 + Math_imul($4, 12) | 0;
   (wasm2js_i32$0 = $6, wasm2js_i32$1 = $lib_rt_pure___retain($1 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
   (wasm2js_i32$0 = $6, wasm2js_i32$1 = $lib_rt_pure___retain($2 | 0) | 0), HEAP32[(wasm2js_i32$0 + 4 | 0) >> 2] = wasm2js_i32$1;
   HEAP32[($0 + 20 | 0) >> 2] = (HEAP32[($0 + 20 | 0) >> 2] | 0) + 1 | 0;
   $4 = (HEAP32[$0 >> 2] | 0) + Math_imul($5 & (HEAP32[($0 + 4 | 0) >> 2] | 0) | 0, 4) | 0;
   HEAP32[($6 + 8 | 0) >> 2] = HEAP32[$4 >> 2] | 0;
   HEAP32[$4 >> 2] = $6;
   $lib_rt_pure___release($3 | 0);
  }
  $4 = $lib_rt_pure___retain($0 | 0) | 0;
  $lib_rt_pure___release($1 | 0);
  $lib_rt_pure___release($2 | 0);
  return $4 | 0;
 }
 
 function assembly_index_A_constructor($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  if (!$0) {
   $0 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(4 | 0, 4 | 0) | 0 | 0) | 0
  }
  (wasm2js_i32$0 = $0, wasm2js_i32$1 = $lib_rt_pure___retain($1 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  $1 = $lib_rt_pure___retain($1 | 0) | 0;
  $lib_rt_pure___release($1 | 0);
  return $0 | 0;
 }
 
 function start_assembly_index() {
  assembly_index_a = $lib_map_Map__lib_string_String__lib_string_String__constructor(0 | 0) | 0;
  $lib_rt_pure___release($lib_map_Map__lib_string_String__lib_string_String__set(assembly_index_a | 0, 304 | 0, 336 | 0) | 0 | 0);
  assembly_index_aa = assembly_index_A_constructor(0 | 0, 336 | 0) | 0;
 }
 
 function assembly_index_add($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $0 + $1 | 0 | 0;
 }
 
 function $lib_util_memory_memcpy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $4 = 0, $6 = 0, $10 = 0, $18 = 0, $97 = 0, $122 = 0, $135 = 0, $148 = 0, $213 = 0, $226 = 0, $291 = 0, $356 = 0, $369 = 0, $382 = 0, $395 = 0, $408 = 0, $421 = 0, $434 = 0, $447 = 0, $460 = 0, $473 = 0, $486 = 0, $499 = 0, $512 = 0, $525 = 0, $538 = 0, $551 = 0, $566 = 0, $579 = 0, $592 = 0, $605 = 0, $618 = 0, $631 = 0, $644 = 0, $657 = 0, $672 = 0, $685 = 0, $698 = 0, $711 = 0, $726 = 0, $739 = 0, $754 = 0;
  while_continue_0 : while (1) {
   if ($2) {
    $10 = $1 & 3 | 0
   } else {
    $10 = 0
   }
   $5 = $10;
   if ($5) {
    $6 = $0;
    $0 = $0 + 1 | 0;
    $18 = $6;
    $6 = $1;
    $1 = $1 + 1 | 0;
    HEAP8[$18 >> 0] = HEAPU8[$6 >> 0] | 0;
    $2 = $2 - 1 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  if (($0 & 3 | 0 | 0) == (0 | 0)) {
   while_continue_1 : while (1) {
    $5 = $2 >>> 0 >= 16 >>> 0;
    if ($5) {
     HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
     HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
     HEAP32[($0 + 8 | 0) >> 2] = HEAP32[($1 + 8 | 0) >> 2] | 0;
     HEAP32[($0 + 12 | 0) >> 2] = HEAP32[($1 + 12 | 0) >> 2] | 0;
     $1 = $1 + 16 | 0;
     $0 = $0 + 16 | 0;
     $2 = $2 - 16 | 0;
     continue while_continue_1;
    }
    break while_continue_1;
   };
   if ($2 & 8 | 0) {
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
    HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
    $0 = $0 + 8 | 0;
    $1 = $1 + 8 | 0;
   }
   if ($2 & 4 | 0) {
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
    $0 = $0 + 4 | 0;
    $1 = $1 + 4 | 0;
   }
   if ($2 & 2 | 0) {
    HEAP16[$0 >> 1] = HEAPU16[$1 >> 1] | 0;
    $0 = $0 + 2 | 0;
    $1 = $1 + 2 | 0;
   }
   if ($2 & 1 | 0) {
    $5 = $0;
    $0 = $5 + 1 | 0;
    $97 = $5;
    $5 = $1;
    $1 = $5 + 1 | 0;
    HEAP8[$97 >> 0] = HEAPU8[$5 >> 0] | 0;
   }
   return;
  }
  if ($2 >>> 0 >= 32 >>> 0) {
   break_2 : {
    case2_2 : {
     case1_2 : {
      case0_2 : {
       $5 = $0 & 3 | 0;
       if (($5 | 0) == (1 | 0)) {
        break case0_2
       }
       if (($5 | 0) == (2 | 0)) {
        break case1_2
       }
       if (($5 | 0) == (3 | 0)) {
        break case2_2
       }
       break break_2;
      }
      $3 = HEAP32[$1 >> 2] | 0;
      $5 = $0;
      $0 = $5 + 1 | 0;
      $122 = $5;
      $5 = $1;
      $1 = $5 + 1 | 0;
      HEAP8[$122 >> 0] = HEAPU8[$5 >> 0] | 0;
      $5 = $0;
      $0 = $5 + 1 | 0;
      $135 = $5;
      $5 = $1;
      $1 = $5 + 1 | 0;
      HEAP8[$135 >> 0] = HEAPU8[$5 >> 0] | 0;
      $5 = $0;
      $0 = $5 + 1 | 0;
      $148 = $5;
      $5 = $1;
      $1 = $5 + 1 | 0;
      HEAP8[$148 >> 0] = HEAPU8[$5 >> 0] | 0;
      $2 = $2 - 3 | 0;
      while_continue_3 : while (1) {
       $5 = $2 >>> 0 >= 17 >>> 0;
       if ($5) {
        $4 = HEAP32[($1 + 1 | 0) >> 2] | 0;
        HEAP32[$0 >> 2] = $3 >>> 24 | 0 | ($4 << 8 | 0) | 0;
        $3 = HEAP32[($1 + 5 | 0) >> 2] | 0;
        HEAP32[($0 + 4 | 0) >> 2] = $4 >>> 24 | 0 | ($3 << 8 | 0) | 0;
        $4 = HEAP32[($1 + 9 | 0) >> 2] | 0;
        HEAP32[($0 + 8 | 0) >> 2] = $3 >>> 24 | 0 | ($4 << 8 | 0) | 0;
        $3 = HEAP32[($1 + 13 | 0) >> 2] | 0;
        HEAP32[($0 + 12 | 0) >> 2] = $4 >>> 24 | 0 | ($3 << 8 | 0) | 0;
        $1 = $1 + 16 | 0;
        $0 = $0 + 16 | 0;
        $2 = $2 - 16 | 0;
        continue while_continue_3;
       }
       break while_continue_3;
      };
      break break_2;
     }
     $3 = HEAP32[$1 >> 2] | 0;
     $5 = $0;
     $0 = $5 + 1 | 0;
     $213 = $5;
     $5 = $1;
     $1 = $5 + 1 | 0;
     HEAP8[$213 >> 0] = HEAPU8[$5 >> 0] | 0;
     $5 = $0;
     $0 = $5 + 1 | 0;
     $226 = $5;
     $5 = $1;
     $1 = $5 + 1 | 0;
     HEAP8[$226 >> 0] = HEAPU8[$5 >> 0] | 0;
     $2 = $2 - 2 | 0;
     while_continue_4 : while (1) {
      $5 = $2 >>> 0 >= 18 >>> 0;
      if ($5) {
       $4 = HEAP32[($1 + 2 | 0) >> 2] | 0;
       HEAP32[$0 >> 2] = $3 >>> 16 | 0 | ($4 << 16 | 0) | 0;
       $3 = HEAP32[($1 + 6 | 0) >> 2] | 0;
       HEAP32[($0 + 4 | 0) >> 2] = $4 >>> 16 | 0 | ($3 << 16 | 0) | 0;
       $4 = HEAP32[($1 + 10 | 0) >> 2] | 0;
       HEAP32[($0 + 8 | 0) >> 2] = $3 >>> 16 | 0 | ($4 << 16 | 0) | 0;
       $3 = HEAP32[($1 + 14 | 0) >> 2] | 0;
       HEAP32[($0 + 12 | 0) >> 2] = $4 >>> 16 | 0 | ($3 << 16 | 0) | 0;
       $1 = $1 + 16 | 0;
       $0 = $0 + 16 | 0;
       $2 = $2 - 16 | 0;
       continue while_continue_4;
      }
      break while_continue_4;
     };
     break break_2;
    }
    $3 = HEAP32[$1 >> 2] | 0;
    $5 = $0;
    $0 = $5 + 1 | 0;
    $291 = $5;
    $5 = $1;
    $1 = $5 + 1 | 0;
    HEAP8[$291 >> 0] = HEAPU8[$5 >> 0] | 0;
    $2 = $2 - 1 | 0;
    while_continue_5 : while (1) {
     $5 = $2 >>> 0 >= 19 >>> 0;
     if ($5) {
      $4 = HEAP32[($1 + 3 | 0) >> 2] | 0;
      HEAP32[$0 >> 2] = $3 >>> 8 | 0 | ($4 << 24 | 0) | 0;
      $3 = HEAP32[($1 + 7 | 0) >> 2] | 0;
      HEAP32[($0 + 4 | 0) >> 2] = $4 >>> 8 | 0 | ($3 << 24 | 0) | 0;
      $4 = HEAP32[($1 + 11 | 0) >> 2] | 0;
      HEAP32[($0 + 8 | 0) >> 2] = $3 >>> 8 | 0 | ($4 << 24 | 0) | 0;
      $3 = HEAP32[($1 + 15 | 0) >> 2] | 0;
      HEAP32[($0 + 12 | 0) >> 2] = $4 >>> 8 | 0 | ($3 << 24 | 0) | 0;
      $1 = $1 + 16 | 0;
      $0 = $0 + 16 | 0;
      $2 = $2 - 16 | 0;
      continue while_continue_5;
     }
     break while_continue_5;
    };
    break break_2;
   }
  }
  if ($2 & 16 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $356 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$356 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $369 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$369 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $382 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$382 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $395 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$395 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $408 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$408 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $421 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$421 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $434 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$434 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $447 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$447 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $460 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$460 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $473 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$473 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $486 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$486 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $499 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$499 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $512 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$512 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $525 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$525 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $538 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$538 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $551 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$551 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 8 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $566 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$566 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $579 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$579 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $592 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$592 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $605 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$605 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $618 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$618 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $631 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$631 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $644 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$644 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $657 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$657 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 4 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $672 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$672 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $685 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$685 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $698 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$698 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $711 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$711 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 2 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $726 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$726 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $739 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$739 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 1 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $754 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$754 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
 }
 
 function $lib_memory_memory_copy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $5 = 0, $4 = 0, $6 = 0, $7 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $25 = 0, $51 = 0, $64 = 0, $78 = 0, $121 = 0;
  $lib_util_memory_memmove_inlined_0 : {
   $5 = $0;
   $4 = $1;
   $3 = $2;
   if (($5 | 0) == ($4 | 0)) {
    break $lib_util_memory_memmove_inlined_0
   }
   if (($4 + $3 | 0) >>> 0 <= $5 >>> 0) {
    $25 = 1
   } else {
    $25 = ($5 + $3 | 0) >>> 0 <= $4 >>> 0
   }
   if ($25) {
    $lib_util_memory_memcpy($5 | 0, $4 | 0, $3 | 0);
    break $lib_util_memory_memmove_inlined_0;
   }
   if ($5 >>> 0 < $4 >>> 0) {
    if (($4 & 7 | 0 | 0) == ($5 & 7 | 0 | 0)) {
     while_continue_0 : while (1) {
      $6 = $5 & 7 | 0;
      if ($6) {
       if (!$3) {
        break $lib_util_memory_memmove_inlined_0
       }
       $3 = $3 - 1 | 0;
       $7 = $5;
       $5 = $5 + 1 | 0;
       $51 = $7;
       $7 = $4;
       $4 = $4 + 1 | 0;
       HEAP8[$51 >> 0] = HEAPU8[$7 >> 0] | 0;
       continue while_continue_0;
      }
      break while_continue_0;
     };
     while_continue_1 : while (1) {
      $6 = $3 >>> 0 >= 8 >>> 0;
      if ($6) {
       i64toi32_i32$2 = $4;
       i64toi32_i32$0 = HEAP32[$4 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       $64 = i64toi32_i32$0;
       i64toi32_i32$0 = $5;
       HEAP32[$5 >> 2] = $64;
       HEAP32[($5 + 4 | 0) >> 2] = i64toi32_i32$1;
       $3 = $3 - 8 | 0;
       $5 = $5 + 8 | 0;
       $4 = $4 + 8 | 0;
       continue while_continue_1;
      }
      break while_continue_1;
     };
    }
    while_continue_2 : while (1) {
     $6 = $3;
     if ($3) {
      $7 = $5;
      $5 = $5 + 1 | 0;
      $78 = $7;
      $7 = $4;
      $4 = $4 + 1 | 0;
      HEAP8[$78 >> 0] = HEAPU8[$7 >> 0] | 0;
      $3 = $3 - 1 | 0;
      continue while_continue_2;
     }
     break while_continue_2;
    };
   } else {
    if (($4 & 7 | 0 | 0) == ($5 & 7 | 0 | 0)) {
     while_continue_3 : while (1) {
      $6 = ($5 + $3 | 0) & 7 | 0;
      if ($6) {
       if (!$3) {
        break $lib_util_memory_memmove_inlined_0
       }
       $3 = $3 - 1 | 0;
       HEAP8[($5 + $3 | 0) >> 0] = HEAPU8[($4 + $3 | 0) >> 0] | 0;
       continue while_continue_3;
      }
      break while_continue_3;
     };
     while_continue_4 : while (1) {
      $6 = $3 >>> 0 >= 8 >>> 0;
      if ($6) {
       $3 = $3 - 8 | 0;
       i64toi32_i32$2 = $4 + $3 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $121 = i64toi32_i32$1;
       i64toi32_i32$1 = $5 + $3 | 0;
       HEAP32[i64toi32_i32$1 >> 2] = $121;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       continue while_continue_4;
      }
      break while_continue_4;
     };
    }
    while_continue_5 : while (1) {
     $6 = $3;
     if ($3) {
      $3 = $3 - 1 | 0;
      HEAP8[($5 + $3 | 0) >> 0] = HEAPU8[($4 + $3 | 0) >> 0] | 0;
      continue while_continue_5;
     }
     break while_continue_5;
    };
   }
  }
 }
 
 function $lib_string_String_concat($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $7 = 0, $5 = 0, $6 = 0, $3 = 0;
  $1 = $lib_rt_pure___retain($1 | 0) | 0;
  if (($1 | 0) == (0 | 0)) {
   $2 = 384;
   $3 = $1;
   if (($2 | 0) != ($1 | 0)) {
    $2 = $lib_rt_pure___retain($2 | 0) | 0;
    $lib_rt_pure___release($3 | 0);
   }
   $1 = $2;
  }
  $4 = ($lib_string_String_get_length($0 | 0) | 0) << 1 | 0;
  $5 = ($lib_string_String_get_length($1 | 0) | 0) << 1 | 0;
  $6 = $4 + $5 | 0;
  if (($6 | 0) == (0 | 0)) {
   $2 = $lib_rt_pure___retain(416 | 0) | 0;
   $lib_rt_pure___release($1 | 0);
   return $2 | 0;
  }
  $7 = $lib_rt_pure___retain($lib_rt_tlsf___alloc($6 | 0, 1 | 0) | 0 | 0) | 0;
  $lib_memory_memory_copy($7 | 0, $0 | 0, $4 | 0);
  $lib_memory_memory_copy($7 + $4 | 0 | 0, $1 | 0, $5 | 0);
  $2 = $7;
  $lib_rt_pure___release($1 | 0);
  return $2 | 0;
 }
 
 function $lib_string_String___concat($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $0 = $lib_rt_pure___retain($0 | 0) | 0;
  $1 = $lib_rt_pure___retain($1 | 0) | 0;
  $2 = $lib_string_String_concat((($0 | 0) != (0 | 0) ? $0 : 384) | 0, $1 | 0) | 0;
  $lib_rt_pure___release($0 | 0);
  $lib_rt_pure___release($1 | 0);
  return $2 | 0;
 }
 
 function assembly_index_concat($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0;
  $0 = $lib_rt_pure___retain($0 | 0) | 0;
  $1 = $lib_rt_pure___retain($1 | 0) | 0;
  $3 = $lib_string_String___concat($0 | 0, $1 | 0) | 0;
  $lib_rt_pure___release($0 | 0);
  $lib_rt_pure___release($1 | 0);
  return $3 | 0;
 }
 
 function assembly_index_fib($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0, $4 = 0;
  $1 = 0;
  $2 = 1;
  if (($0 | 0) > (0 | 0)) {
   while_continue_0 : while (1) {
    $0 = $0 - 1 | 0;
    if ($0) {
     $4 = $1 + $2 | 0;
     $1 = $2;
     $2 = $4;
     continue while_continue_0;
    }
    break while_continue_0;
   };
   return $2 | 0;
  }
  return $1 | 0;
 }
 
 function assembly_index_foo($0) {
  $0 = $0 | 0;
  return $0 + 1 | 0 | 0;
 }
 
 function assembly_index_foo2($0) {
  $0 = $0 | 0;
 }
 
 function assembly_index_computeSum_anonymous_0($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2 = $lib_rt_pure___retain($2 | 0) | 0;
  assembly_index_sum1 = assembly_index_sum1 + $0 | 0;
  $lib_rt_pure___release($2 | 0);
 }
 
 function $lib_array_Array_i32__forEach($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $5 = 0, $3 = 0, $25 = 0;
  $2 = 0;
  $3 = HEAP32[($0 + 12 | 0) >> 2] | 0;
  for_loop_0 : while (1) {
   $4 = $3;
   $5 = HEAP32[($0 + 12 | 0) >> 2] | 0;
   $4 = ($2 | 0) < ((($4 | 0) < ($5 | 0) ? $4 : $5) | 0);
   if ($4) {
    for_continue_0 : {
     $25 = HEAP32[((HEAP32[($0 + 4 | 0) >> 2] | 0) + ($2 << 2 | 0) | 0) >> 2] | 0;
     $argumentsLength = 3;
     FUNCTION_TABLE[$1]($25, $2, $0);
    }
    $2 = $2 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
 }
 
 function assembly_index_computeSum($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $0 = $lib_rt_pure___retain($0 | 0) | 0;
  $lib_array_Array_i32__forEach($0 | 0, 1 | 0);
  $1 = assembly_index_sum1;
  $lib_rt_pure___release($0 | 0);
  return $1 | 0;
 }
 
 function assembly_index_doThrow() {
  $lib_builtins_abort(432 | 0, 464 | 0, 64 | 0, 3 | 0);
  abort();
 }
 
 function assembly_index_getFoo_constructor($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  if (!$0) {
   $0 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(4 | 0, 6 | 0) | 0 | 0) | 0
  }
  (wasm2js_i32$0 = $0, wasm2js_i32$1 = $lib_rt_pure___retain($1 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  $1 = $lib_rt_pure___retain($1 | 0) | 0;
  $lib_rt_pure___release($1 | 0);
  return $0 | 0;
 }
 
 function assembly_index_getFoo_get_str($0) {
  $0 = $0 | 0;
  return $lib_rt_pure___retain(HEAP32[$0 >> 2] | 0 | 0) | 0 | 0;
 }
 
 function assembly_index_getFoo_set_str($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $3 = $0;
  $2 = HEAP32[$0 >> 2] | 0;
  if (($1 | 0) != ($2 | 0)) {
   $lib_rt_pure___retain($1 | 0) | 0;
   $lib_rt_pure___release($2 | 0);
  }
  HEAP32[$3 >> 2] = $1;
 }
 
 function assembly_index_getFoo_getString($0) {
  $0 = $0 | 0;
  return $lib_rt_pure___retain(HEAP32[$0 >> 2] | 0 | 0) | 0 | 0;
 }
 
 function $start() {
  start_assembly_index();
 }
 
 function $lib_rt_pure___collect() {
  return;
 }
 
 function $lib_rt_tlsf_freeBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$1 >> 2] = HEAP32[$1 >> 2] | 0 | 1 | 0;
  $lib_rt_tlsf_insertBlock($0 | 0, $1 | 0);
 }
 
 function $lib_rt_pure_decrement($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  $2 = $1 & 268435455 | 0;
  if (!!((HEAP32[$0 >> 2] | 0) & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 144 | 0, 122 | 0, 14 | 0);
   abort();
  }
  if (($2 | 0) == (1 | 0)) {
   $lib_rt___visit_members($0 + 16 | 0 | 0, 1 | 0);
   if (!!($1 & -2147483648 | 0)) {
    $lib_builtins_abort(0 | 0, 144 | 0, 126 | 0, 18 | 0);
    abort();
   }
   $lib_rt_tlsf_freeBlock($lib_rt_tlsf_ROOT | 0, $0 | 0);
  } else {
   if (!($2 >>> 0 > 0 >>> 0)) {
    $lib_builtins_abort(0 | 0, 144 | 0, 136 | 0, 16 | 0);
    abort();
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1 & (268435455 ^ -1 | 0) | 0 | ($2 - 1 | 0) | 0;
  }
 }
 
 function $lib_rt_pure___visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  if ($0 >>> 0 < $lib_heap___heap_base >>> 0) {
   return
  }
  if (!(($1 | 0) == (1 | 0))) {
   $lib_builtins_abort(0 | 0, 144 | 0, 69 | 0, 16 | 0);
   abort();
  }
  $lib_rt_pure_decrement($0 - 16 | 0 | 0);
 }
 
 function $lib_map_Map__lib_string_String__lib_string_String____visit_impl($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $7 = 0, $2 = 0, $13 = 0, $6 = 0, $4 = 0;
  $lib_rt_pure___visit(HEAP32[$0 >> 2] | 0 | 0, $1 | 0);
  $2 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  $13 = 1;
  $3 = $2;
  $4 = $3 + Math_imul(HEAP32[($0 + 16 | 0) >> 2] | 0, 12) | 0;
  while_continue_0 : while (1) {
   if ($3 >>> 0 < $4 >>> 0) {
    $6 = $3;
    if (!((HEAP32[($3 + 8 | 0) >> 2] | 0) & 1 | 0)) {
     $7 = HEAP32[$6 >> 2] | 0;
     $lib_rt_pure___visit($7 | 0, $1 | 0);
     $7 = HEAP32[($6 + 4 | 0) >> 2] | 0;
     $lib_rt_pure___visit($7 | 0, $1 | 0);
    }
    $3 = $3 + 12 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  $lib_rt_pure___visit($2 | 0, $1 | 0);
 }
 
 function $lib_array_Array_i32____visit_impl($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_rt_pure___visit(HEAP32[$0 >> 2] | 0 | 0, $1 | 0);
 }
 
 function $lib_rt___visit_members($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  switch$1$leave : {
   switch (HEAP32[($0 - 8 | 0) >> 2] | 0 | 0) {
   case 0:
   case 1:
    return;
   case 2:
   case 4:
   case 6:
    $2 = HEAP32[$0 >> 2] | 0;
    if ($2) {
     $lib_rt_pure___visit($2 | 0, $1 | 0)
    }
    return;
   case 3:
    $lib_map_Map__lib_string_String__lib_string_String____visit_impl($0 | 0, $1 | 0);
    return;
   case 5:
    $lib_array_Array_i32____visit_impl($0 | 0, $1 | 0);
    return;
   default:
    abort();
   };
  }
 }
 
 function assembly_index_foo_varargs($0) {
  $0 = $0 | 0;
  $1of1 : {
   switch ($argumentsLength | 0) {
   default:
    abort();
   case 0:
    $0 = 0;
    break;
   case 1:
    break $1of1;
   };
  }
  return assembly_index_foo($0 | 0) | 0 | 0;
 }
 
 function $setArgumentsLength($0) {
  $0 = $0 | 0;
  $argumentsLength = $0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 var FUNCTION_TABLE = [null, assembly_index_computeSum_anonymous_0];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new global.Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = newHEAP8;
   HEAP8 = new global.Int8Array(newBuffer);
   HEAP16 = new global.Int16Array(newBuffer);
   HEAP32 = new global.Int32Array(newBuffer);
   HEAPU8 = new global.Uint8Array(newBuffer);
   HEAPU16 = new global.Uint16Array(newBuffer);
   HEAPU32 = new global.Uint32Array(newBuffer);
   HEAPF32 = new global.Float32Array(newBuffer);
   HEAPF64 = new global.Float64Array(newBuffer);
   buffer = newBuffer;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__alloc": $lib_rt_tlsf___alloc, 
  "__retain": $lib_rt_pure___retain, 
  "__release": $lib_rt_pure___release, 
  "__collect": $lib_rt_pure___collect, 
  "add": assembly_index_add, 
  "concat": assembly_index_concat, 
  "fib": assembly_index_fib, 
  "foo": assembly_index_foo_varargs, 
  "foo2": assembly_index_foo2, 
  "computeSum": assembly_index_computeSum, 
  "doThrow": assembly_index_doThrow, 
  "getFoo_get_str": assembly_index_getFoo_get_str, 
  "getFoo_set_str": assembly_index_getFoo_set_str, 
  "getFoo_constructor": assembly_index_getFoo_constructor, 
  "getFoo_getString": assembly_index_getFoo_getString, 
  "__setArgumentsLength": $setArgumentsLength
 };
}

var memasmFunc = new ArrayBuffer(65536);
for (var base64ReverseLookup = new Uint8Array(123/*'z'+1*/), i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2);
    if (b64[bLength-2] == '=') --end;
    if (b64[bLength-1] == '=') --end;
    for (; i < bLength; i += 4, j += 3) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j+1 < end) uint8Array[j+1] = b1 << 4 | b2 >> 2;
      if (j+2 < end) uint8Array[j+2] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
var bufferView = new Uint8Array(memasmFunc);
base64DecodeToExistingUint8Array(bufferView, 16, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwB0AGwAcwBmAC4AdABzAA==");
base64DecodeToExistingUint8Array(bufferView, 64, "KAAAAAEAAAABAAAAKAAAAGEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQA=");
base64DecodeToExistingUint8Array(bufferView, 128, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwBwAHUAcgBlAC4AdABzAA==");
base64DecodeToExistingUint8Array(bufferView, 176, "HAAAAAEAAAABAAAAHAAAAEkAbgB2AGEAbABpAGQAIABsAGUAbgBnAHQAaAA=");
base64DecodeToExistingUint8Array(bufferView, 224, "JgAAAAEAAAABAAAAJgAAAH4AbABpAGIALwBhAHIAcgBhAHkAYgB1AGYAZgBlAHIALgB0AHMA");
base64DecodeToExistingUint8Array(bufferView, 288, "CAAAAAEAAAABAAAACAAAAHAAcgBvAHAA");
base64DecodeToExistingUint8Array(bufferView, 320, "FgAAAAEAAAABAAAAFgAAAGgAZQBsAGwAbwAgAHcAbwByAGwAZAA=");
base64DecodeToExistingUint8Array(bufferView, 368, "CAAAAAEAAAABAAAACAAAAG4AdQBsAGwA");
base64DecodeToExistingUint8Array(bufferView, 400, "AAAAAAEAAAABAAAAAAAAAA==");
base64DecodeToExistingUint8Array(bufferView, 416, "DgAAAAEAAAABAAAADgAAAG0AZQBzAHMAYQBnAGUA");
base64DecodeToExistingUint8Array(bufferView, 448, "IgAAAAEAAAABAAAAIgAAAGEAcwBzAGUAbQBiAGwAeQAvAGkAbgBkAGUAeAAuAHQAcwA=");
base64DecodeToExistingUint8Array(bufferView, 512, "BwAAACAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAADBBggAAAAAAIAAAAAAAAAAiCQAAAAAAACAAAAAAAAAA");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },abort},memasmFunc);
export var memory = retasmFunc.memory;
export var __alloc = retasmFunc.__alloc;
export var __retain = retasmFunc.__retain;
export var __release = retasmFunc.__release;
export var __collect = retasmFunc.__collect;
export var add = retasmFunc.add;
export var concat = retasmFunc.concat;
export var fib = retasmFunc.fib;
export var foo = retasmFunc.foo;
export var foo2 = retasmFunc.foo2;
export var computeSum = retasmFunc.computeSum;
export var doThrow = retasmFunc.doThrow;
export var getFoo_get_str = retasmFunc.getFoo_get_str;
export var getFoo_set_str = retasmFunc.getFoo_set_str;
export var getFoo_constructor = retasmFunc.getFoo_constructor;
export var getFoo_getString = retasmFunc.getFoo_getString;
export var __setArgumentsLength = retasmFunc.__setArgumentsLength;
