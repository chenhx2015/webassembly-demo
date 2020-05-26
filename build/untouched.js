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
 var $lib_rt___rtti_base = 176;
 var $lib_heap___heap_base = 204;
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
 
 function assembly_index_add($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $0 + $1 | 0 | 0;
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
    $2 = HEAP32[$0 >> 2] | 0;
    if ($2) {
     $lib_rt_pure___visit($2 | 0, $1 | 0)
    }
    return;
   default:
    abort();
   };
  }
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 var FUNCTION_TABLE = [];
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
  "add": assembly_index_add
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
base64DecodeToExistingUint8Array(bufferView, 176, "AwAAACAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAAA==");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },abort},memasmFunc);
export var memory = retasmFunc.memory;
export var __alloc = retasmFunc.__alloc;
export var __retain = retasmFunc.__retain;
export var __release = retasmFunc.__release;
export var __collect = retasmFunc.__collect;
export var add = retasmFunc.add;
