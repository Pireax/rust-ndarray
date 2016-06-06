var searchIndex = {};
searchIndex["ndarray_rand"] = {"doc":"","items":[[3,"F32","ndarray_rand","A wrapper type that allows casting f64 distributions to f32",null,null],[12,"0","","",0,null],[8,"RandomExt","","Constructors for n-dimensional arrays with random elements.",null,null],[10,"random","","Create an array with shape `dim` with elements drawn from\n`distribution`  using the default rng.",1,{"inputs":[{"name":"d"},{"name":"ids"}],"output":{"name":"arraybase"}}],[10,"random_using","","Create an array with shape `dim` with elements drawn from\n`distribution`, using a specific Rng `rng`.",1,{"inputs":[{"name":"d"},{"name":"ids"},{"name":"r"}],"output":{"name":"arraybase"}}],[11,"random","ndarray","",2,{"inputs":[{"name":"d"},{"name":"ids"}],"output":{"name":"arraybase"}}],[11,"random_using","","",2,{"inputs":[{"name":"d"},{"name":"ids"},{"name":"r"}],"output":{"name":"arraybase"}}],[11,"fmt","ndarray_rand","",0,null],[11,"clone","","",0,null],[11,"sample","","",0,null],[11,"ind_sample","","",0,null]],"paths":[[3,"F32"],[8,"RandomExt"],[3,"ArrayBase"]]};
searchIndex["ndarray"] = {"doc":"The `ndarray` crate provides an N-dimensional container for general elements\nand for numerics.","items":[[3,"Axis","ndarray","An axis index.",null,null],[12,"0","","",0,null],[3,"Indexes","","An iterator over the indexes of an array shape.",null,null],[3,"ShapeError","","An error related to array shape or layout.",null,null],[3,"Si","","A slice, a description of a range of an array axis.",null,null],[12,"0","","",1,null],[12,"1","","",1,null],[12,"2","","",1,null],[3,"InnerIter","","An iterator that traverses over all dimensions but the innermost,\nand yields each inner row.",null,null],[3,"InnerIterMut","","An iterator that traverses over all dimensions but the innermost,\nand yields each inner row (mutable).",null,null],[3,"AxisIter","","An iterator that traverses over an axis and\nand yields each subview.",null,null],[3,"AxisIterMut","","An iterator that traverses over an axis and\nand yields each subview (mutable)",null,null],[3,"AxisChunksIter","","An iterator that traverses over the specified axis\nand yields views of the specified size on this axis.",null,null],[3,"AxisChunksIterMut","","An iterator that traverses over the specified axis\nand yields mutable views of the specified size on this axis.",null,null],[3,"ArrayBase","","An *N*-dimensional array.",null,null],[3,"ViewRepr","","Array view’s representation.",null,null],[3,"Elements","","An iterator over the elements of an array.",null,null],[3,"ElementsMut","","An iterator over the elements of an array (mutable).",null,null],[3,"Indexed","","An iterator over the indexes and elements of an array.",null,null],[3,"IndexedMut","","An iterator over the indexes and elements of an array (mutable).",null,null],[3,"Shape","","A contiguous array shape of n dimensions.",null,null],[3,"StrideShape","","An array shape of n dimensions c-order, f-order or custom strides.",null,null],[4,"ErrorKind","","Error code for an error related to array shape or layout.",null,null],[13,"IncompatibleShape","","incompatible shape",2,null],[13,"IncompatibleLayout","","incompatible memory layout",2,null],[13,"RangeLimited","","the shape does not fit inside type limits",2,null],[13,"OutOfBounds","","out of bounds indexing",2,null],[13,"Unsupported","","aliasing array elements",2,null],[5,"stack","","Stack arrays along the given axis.",null,null],[5,"arr0","","Create a zero-dimensional array with the element `x`.",null,{"inputs":[{"name":"a"}],"output":{"name":"array"}}],[5,"arr1","","Create a one-dimensional array with elements from `xs`.",null,null],[5,"rcarr1","","Create a one-dimensional array with elements from `xs`.",null,null],[5,"aview0","","Create a zero-dimensional array view borrowing `x`.",null,{"inputs":[{"name":"a"}],"output":{"name":"arrayview"}}],[5,"aview1","","Create a one-dimensional array view with elements borrowing `xs`.",null,null],[5,"aview2","","Create a two-dimensional array view with elements borrowing `xs`.",null,null],[5,"aview_mut1","","Create a one-dimensional read-write array view with elements borrowing `xs`.",null,null],[5,"arr2","","Create a two-dimensional array with elements from `xs`.",null,null],[5,"rcarr2","","Create a two-dimensional array with elements from `xs`.",null,null],[5,"arr3","","Create a three-dimensional array with elements from `xs`.",null,null],[5,"rcarr3","","Create a three-dimensional array with elements from `xs`.",null,null],[11,"index","","",3,null],[11,"index_mut","","",3,null],[11,"eq","","",3,null],[11,"from_iter","","",3,{"inputs":[{"name":"i"}],"output":{"name":"arraybase"}}],[11,"hash","","",3,null],[11,"encode","","",3,null],[11,"decode","","",3,{"inputs":[{"name":"e"}],"output":{"name":"result"}}],[11,"from","","",3,{"inputs":[{"name":"slice"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"arraybase"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"slice"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"arraybase"}],"output":{"name":"self"}}],[11,"fmt","","",3,null],[11,"fmt","","",3,null],[11,"fmt","","",3,null],[11,"fmt","","",3,null],[11,"fmt","","",3,null],[11,"_data_slice","alloc::rc","",4,null],[11,"ensure_unique","","",4,{"inputs":[{"name":"arraybase"}],"output":null}],[11,"is_unique","","",4,null],[11,"clone_with_ptr","","",4,null],[11,"_data_slice","collections::vec","",5,null],[11,"clone_with_ptr","","",5,null],[11,"_data_slice","ndarray","",6,null],[11,"clone_with_ptr","","",6,null],[11,"_data_slice","","",6,null],[11,"new","collections::vec","",5,{"inputs":[{"name":"vec"}],"output":{"name":"self"}}],[11,"into_shared","","",5,null],[11,"new","alloc::rc","",4,{"inputs":[{"name":"vec"}],"output":{"name":"self"}}],[11,"into_shared","","",4,null],[11,"ndim","collections::vec","",5,null],[11,"slice","","",5,null],[11,"slice_mut","","",5,null],[11,"remove_axis","","",5,null],[11,"fmt","ndarray","",0,null],[11,"hash","","",0,null],[11,"cmp","","",0,null],[11,"axis","","",0,null],[11,"eq","","",0,null],[11,"partial_cmp","","",0,null],[11,"clone","","",0,null],[11,"clone","","",7,null],[11,"new","","Create an iterator over the array shape `dim`.",7,{"inputs":[{"name":"d"}],"output":{"name":"indexes"}}],[11,"next","","",7,null],[11,"size_hint","","",7,null],[11,"clone","","",8,null],[11,"next","","",8,null],[11,"size_hint","","",8,null],[11,"next_back","","",8,null],[11,"next","","",9,null],[11,"size_hint","","",9,null],[11,"next","","",10,null],[11,"size_hint","","",10,null],[11,"next_back","","",10,null],[11,"next","","",11,null],[11,"size_hint","","",11,null],[11,"next","","",12,null],[11,"size_hint","","",12,null],[11,"next","","",13,null],[11,"size_hint","","",13,null],[11,"split_at","","Split the iterator at index, yielding two disjoint iterators.",14,null],[11,"clone","","",14,null],[11,"next","","",14,null],[11,"size_hint","","",14,null],[11,"next_back","","",14,null],[11,"split_at","","Split the iterator at index, yielding two disjoint iterators.",15,null],[11,"next","","",15,null],[11,"size_hint","","",15,null],[11,"next_back","","",15,null],[11,"next","","",16,null],[11,"size_hint","","",16,null],[11,"next_back","","",16,null],[11,"next","","",17,null],[11,"size_hint","","",17,null],[11,"next_back","","",17,null],[11,"fmt","","",1,null],[11,"hash","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"from","","",1,{"inputs":[{"name":"range"}],"output":{"name":"si"}}],[11,"from","","",1,{"inputs":[{"name":"rangefrom"}],"output":{"name":"si"}}],[11,"from","","",1,{"inputs":[{"name":"rangeto"}],"output":{"name":"si"}}],[11,"from","","",1,{"inputs":[{"name":"rangefull"}],"output":{"name":"si"}}],[11,"step","","",1,null],[11,"clone","","",1,null],[11,"clone","","",18,null],[11,"kind","","Return the `ErrorKind` of this error.",18,null],[11,"from_kind","","Create a new `ShapeError`",18,{"inputs":[{"name":"errorkind"}],"output":{"name":"self"}}],[11,"fmt","","",2,null],[11,"clone","","",2,null],[11,"eq","","",2,null],[11,"eq","","",18,null],[11,"description","","",18,null],[11,"fmt","","",18,null],[11,"fmt","","",18,null],[11,"from","","",19,{"inputs":[{"name":"d"}],"output":{"name":"self"}}],[11,"from","","",20,{"inputs":[{"name":"d"}],"output":{"name":"self"}}],[11,"from","","",20,{"inputs":[{"name":"shape"}],"output":{"name":"self"}}],[11,"f","","",19,null],[11,"set_f","","",19,null],[11,"strides","","",19,null],[0,"prelude","","ndarray prelude.",null,null],[11,"clone","","",3,null],[11,"from_vec","","Create a one-dimensional array from a vector (no copying needed).",3,{"inputs":[{"name":"vec"}],"output":{"name":"arraybase"}}],[11,"from_iter","","Create a one-dimensional array from an iterable.",3,{"inputs":[{"name":"i"}],"output":{"name":"arraybase"}}],[11,"linspace","","Create a one-dimensional array from the inclusive interval\n`[start, end]` with `n` elements. `F` must be a floating point type.",3,{"inputs":[{"name":"f"},{"name":"f"},{"name":"usize"}],"output":{"name":"arraybase"}}],[11,"range","","Create a one-dimensional array from the half-open interval\n`[start, end)` with elements spaced by `step`. `F` must be a floating point type.",3,{"inputs":[{"name":"f"},{"name":"f"},{"name":"f"}],"output":{"name":"arraybase"}}],[11,"eye","","Create an identity matrix of size `n` (square 2D array).",3,{"inputs":[{"name":"ix"}],"output":{"name":"arraybase"}}],[11,"from_elem","","Create an array with copies of `elem`, shape `shape`.",3,{"inputs":[{"name":"sh"},{"name":"a"}],"output":{"name":"arraybase"}}],[11,"zeros","","Create an array with zeros, shape `shape`.",3,{"inputs":[{"name":"sh"}],"output":{"name":"arraybase"}}],[11,"default","","Create an array with default values, shape `shape`",3,{"inputs":[{"name":"sh"}],"output":{"name":"arraybase"}}],[11,"from_shape_vec","","Create an array with the given shape from a vector. (No cloning of\nelements needed.)",3,{"inputs":[{"name":"sh"},{"name":"vec"}],"output":{"name":"result"}}],[11,"from_shape_vec_unchecked","","Create an array from a vector and interpret it according to the\nprovided dimensions and strides. (No cloning of elements needed.)",3,{"inputs":[{"name":"sh"},{"name":"vec"}],"output":{"name":"arraybase"}}],[11,"len","","Return the total number of elements in the array.",3,null],[11,"dim","","Return the shape of the array.",3,null],[11,"shape","","Return the shape of the array as a slice.",3,null],[11,"strides","","Return the strides of the array",3,null],[11,"ndim","","Return the number of dimensions (axes) in the array",3,null],[11,"view","","Return a read-only view of the array",3,null],[11,"view_mut","","Return a read-write view of the array",3,null],[11,"to_owned","","Return an uniquely owned copy of the array",3,null],[11,"to_shared","","Return a shared ownership (copy on write) array.",3,null],[11,"into_shared","","Turn the array into a shared ownership (copy on write) array,\nwithout any copying.",3,null],[11,"iter","","Return an iterator of references to the elements of the array.",3,null],[11,"iter_mut","","Return an iterator of mutable references to the elements of the array.",3,null],[11,"indexed_iter","","Return an iterator of indexes and references to the elements of the array.",3,null],[11,"indexed_iter_mut","","Return an iterator of indexes and mutable references to the elements of the array.",3,null],[11,"slice","","Return a sliced array.",3,null],[11,"slice_mut","","Return a sliced read-write view of the array.",3,null],[11,"islice","","Slice the array’s view in place.",3,null],[11,"get","","Return a reference to the element at `index`, or return `None`\nif the index is out of bounds.",3,null],[11,"get_mut","","Return a mutable reference to the element at `index`, or return `None`\nif the index is out of bounds.",3,null],[11,"uget","","Perform *unchecked* array indexing.",3,null],[11,"uget_mut","","Perform *unchecked* array indexing.",3,null],[11,"swap","","Swap elements at indices `index1` and `index2`.",3,null],[11,"subview","","Along `axis`, select the subview `index` and return a\nview with that axis removed.",3,null],[11,"subview_mut","","Along `axis`, select the subview `index` and return a read-write view\nwith the axis removed.",3,null],[11,"isubview","","Collapse dimension `axis` into length one,\nand select the subview of `index` along that axis.",3,null],[11,"into_subview","","Along `axis`, select the subview `index` and return `self`\nwith that axis removed.",3,null],[11,"select","","Along `axis`, select arbitrary subviews corresponding to `indices`\n and and copy them into a new array.",3,null],[11,"inner_iter","","Return an iterator that traverses over all dimensions but the innermost,\nand yields each inner row.",3,null],[11,"inner_iter_mut","","Return an iterator that traverses over all dimensions but the innermost,\nand yields each inner row.",3,null],[11,"outer_iter","","Return an iterator that traverses over the outermost dimension\nand yields each subview.",3,null],[11,"outer_iter_mut","","Return an iterator that traverses over the outermost dimension\nand yields each subview.",3,null],[11,"axis_iter","","Return an iterator that traverses over `axis`\nand yields each subview along it.",3,null],[11,"axis_iter_mut","","Return an iterator that traverses over `axis`\nand yields each mutable subview along it.",3,null],[11,"axis_chunks_iter","","Return an iterator that traverses over `axis` by chunks of `size`,\nyielding non-overlapping views along that axis.",3,null],[11,"axis_chunks_iter_mut","","Return an iterator that traverses over `axis` by chunks of `size`,\nyielding non-overlapping read-write views along that axis.",3,null],[11,"diag","","Return an view of the diagonal elements of the array.",3,null],[11,"diag_mut","","Return a read-write view over the diagonal elements of the array.",3,null],[11,"into_diag","","Return the diagonal as a one-dimensional array.",3,null],[11,"is_standard_layout","","Return `true` if the array data is laid out in contiguous “C order” in\nmemory (where the last index is the most rapidly varying).",3,null],[11,"as_ptr","","Return a pointer to the first element in the array.",3,null],[11,"as_mut_ptr","","Return a mutable pointer to the first element in the array.",3,null],[11,"as_slice","","Return the array’s data as a slice, if it is contiguous and in standard order.\nReturn `None` otherwise.",3,null],[11,"as_slice_mut","","Return the array’s data as a slice, if it is contiguous and in standard order.\nReturn `None` otherwise.",3,null],[11,"as_slice_memory_order","","Return the array’s data as a slice if it is contiguous,\nreturn `None` otherwise.",3,null],[11,"as_slice_memory_order_mut","","Return the array’s data as a slice if it is contiguous,\nreturn `None` otherwise.",3,null],[11,"reshape","","Transform the array into `shape`; any shape with the same number of\nelements is accepted.",3,null],[11,"into_shape","","Transform the array into `shape`; any shape with the same number of\nelements is accepted, but the source array or view must be\ncontiguous, otherwise we cannot rearrange the dimension.",3,null],[11,"broadcast","","Act like a larger size and/or shape array by *broadcasting*\ninto a larger shape, if possible.",3,null],[11,"swap_axes","","Swap axes `ax` and `bx`.",3,null],[11,"reversed_axes","","Transpose the array by reversing axes.",3,null],[11,"t","","Return a transposed view of the array.",3,null],[11,"assign","","Perform an elementwise assigment to `self` from `rhs`.",3,null],[11,"assign_scalar","","Perform an elementwise assigment to `self` from scalar `x`.",3,null],[11,"zip_mut_with","","Traverse two arrays in unspecified order, in lock step,\ncalling the closure `f` on each element pair.",3,null],[11,"fold","","Traverse the array elements and apply a fold,\nreturning the resulting value.",3,null],[11,"map","","Call `f` by reference on each element and create a new array\nwith the new values.",3,null],[11,"mapv","","Call `f` by **v**alue on each element and create a new array\nwith the new values.",3,null],[11,"mapv_into","","Call `f` by **v**alue on each element, update the array with the new values\nand return it.",3,null],[11,"map_inplace","","Modify the array in place by calling `f` by mutable reference on each element.",3,null],[11,"mapv_inplace","","Modify the array in place by calling `f` by **v**alue on each element.\nThe array is updated with the new values.",3,null],[11,"visit","","Visit each element in the array by calling `f` by reference\non each element.",3,null],[11,"fold_axis","","Fold along an axis.",3,null],[11,"row","","Return an array view of row `index`.",3,null],[11,"row_mut","","Return a mutable array view of row `index`.",3,null],[11,"rows","","Return the number of rows (length of `Axis(0)`) in the two-dimensional array.",3,null],[11,"column","","Return an array view of column `index`.",3,null],[11,"column_mut","","Return a mutable array view of column `index`.",3,null],[11,"cols","","Return the number of columns (length of `Axis(1)`) in the two-dimensional array.",3,null],[11,"scalar_sum","","Return the sum of all elements in the array.",3,null],[11,"sum","","Return sum along `axis`.",3,null],[11,"mean","","Return mean along `axis`.",3,null],[11,"all_close","","Return `true` if the arrays&#39; elementwise differences are all within\nthe given absolute tolerance, `false` otherwise.",3,null],[0,"linalg","","Linear algebra.",null,null],[5,"general_mat_mul","ndarray::linalg","General matrix multiplication.",null,{"inputs":[{"name":"a"},{"name":"arraybase"},{"name":"arraybase"},{"name":"a"},{"name":"arraybase"}],"output":null}],[11,"dot","ndarray","Compute the dot product of one-dimensional arrays.",3,null],[11,"dot","","Perform matrix multiplication of rectangular arrays `self` and `rhs`.",3,null],[11,"dot","","",3,null],[11,"dot","","",3,null],[11,"scaled_add","","Perform the operation `self += alpha * rhs` efficiently, where\n`alpha` is a scalar and `rhs` is another array. This operation is\nalso known as `axpy` in BLAS.",3,null],[8,"Dot","ndarray::linalg","Matrix Multiplication",null,null],[16,"Output","","The result of the operation.",21,null],[10,"dot","","",21,null],[11,"add","ndarray","",3,null],[11,"add","","",3,null],[11,"add","","",3,null],[11,"sub","","",3,null],[11,"sub","","",3,null],[11,"sub","","",3,null],[11,"mul","","",3,null],[11,"mul","","",3,null],[11,"mul","","",3,null],[11,"div","","",3,null],[11,"div","","",3,null],[11,"div","","",3,null],[11,"rem","","",3,null],[11,"rem","","",3,null],[11,"rem","","",3,null],[11,"bitand","","",3,null],[11,"bitand","","",3,null],[11,"bitand","","",3,null],[11,"bitor","","",3,null],[11,"bitor","","",3,null],[11,"bitor","","",3,null],[11,"bitxor","","",3,null],[11,"bitxor","","",3,null],[11,"bitxor","","",3,null],[11,"shl","","",3,null],[11,"shl","","",3,null],[11,"shl","","",3,null],[11,"shr","","",3,null],[11,"shr","","",3,null],[11,"shr","","",3,null],[11,"add","num_complex","",22,null],[11,"add","","",22,null],[11,"sub","","",22,null],[11,"sub","","",22,null],[11,"mul","","",22,null],[11,"mul","","",22,null],[11,"div","","",22,null],[11,"div","","",22,null],[11,"add","","",22,null],[11,"add","","",22,null],[11,"sub","","",22,null],[11,"sub","","",22,null],[11,"mul","","",22,null],[11,"mul","","",22,null],[11,"div","","",22,null],[11,"div","","",22,null],[11,"neg","ndarray","Perform an elementwise negation of `self` and return the result.",3,null],[11,"not","","Perform an elementwise unary not of `self` and return the result.",3,null],[11,"add_assign","","",3,null],[11,"add_assign","","",3,null],[11,"sub_assign","","",3,null],[11,"sub_assign","","",3,null],[11,"mul_assign","","",3,null],[11,"mul_assign","","",3,null],[11,"div_assign","","",3,null],[11,"div_assign","","",3,null],[11,"rem_assign","","",3,null],[11,"rem_assign","","",3,null],[11,"bitand_assign","","",3,null],[11,"bitand_assign","","",3,null],[11,"bitor_assign","","",3,null],[11,"bitor_assign","","",3,null],[11,"bitxor_assign","","",3,null],[11,"bitxor_assign","","",3,null],[11,"shl_assign","","",3,null],[11,"shl_assign","","",3,null],[11,"shr_assign","","",3,null],[11,"shr_assign","","",3,null],[11,"from_shape","","Create a read-only array view borrowing its data from a slice.",3,null],[11,"split_at","","Split the array along `axis` and return one view strictly before the\nsplit and one view after the split.",3,null],[11,"from_shape","","Create a read-write array view borrowing its data from a slice.",3,null],[11,"split_at","","Split the array along `axis` and return one mutable view strictly\nbefore the split and one mutable view after the split.",3,null],[6,"Ix","","Array index type",null,null],[6,"Ixs","","Array index type (signed)",null,null],[6,"RcArray","","Array where the data is reference counted and copy on write, it\ncan act as both an owner as the data as well as a lightweight view.",null,null],[6,"Array","","Array where the data is owned uniquely.",null,null],[6,"OwnedArray","","Array where the data is owned uniquely.",null,null],[6,"ArrayView","","A lightweight array view.",null,null],[6,"ArrayViewMut","","A lightweight read-write array view.",null,null],[17,"S","","Slice value for the full range of an axis.",null,null],[8,"Dimension","","Array shape and index trait.",null,null],[16,"SliceArg","","`SliceArg` is the type which is used to specify slicing for this\ndimension.",23,null],[8,"RemoveAxis","","Array shape with a next smaller dimension.",null,null],[16,"Smaller","","",24,null],[10,"remove_axis","","",24,null],[8,"NdIndex","","Tuple or fixed size arrays that can be used to index an array.",null,null],[16,"Dim","","",25,null],[8,"AsArray","","Argument conversion into an array view",null,null],[8,"LinalgScalar","","Elements that support linear algebra operations.",null,null],[8,"NdFloat","","Floating-point element types `f32` and `f64`.",null,null],[8,"ShapeBuilder","","A trait for `Shape` and `D where D: Dimension` that allows\ncustomizing the memory layout (strides) of an array shape.",null,null],[16,"Dim","","",26,null],[10,"f","","",26,null],[10,"set_f","","",26,null],[10,"strides","","",26,null],[8,"Data","","Array representation trait.",null,null],[16,"Elem","","The array element type.",27,null],[8,"DataMut","","Array representation trait.",null,null],[8,"DataOwned","","Array representation trait.",null,null],[8,"DataShared","","Array representation trait.",null,null],[8,"DataClone","","Array representation trait.",null,null],[8,"FixedInitializer","","Fixed-size array used for array initialization",null,null],[16,"Elem","","",28,null],[10,"as_init_slice","","",28,null],[10,"len","","",28,{"inputs":[],"output":{"name":"usize"}}],[8,"ScalarOperand","","Elements that can be used as direct operands in arithmetic with arrays.",null,null],[11,"clone","","",6,null],[11,"clone","","",9,null],[11,"fmt","","",19,null],[11,"clone","","",19,null],[11,"fmt","","",20,null],[11,"clone","","",20,null],[14,"s!","","Slice argument constructor.",null,null],[14,"stack!","","Stack arrays along the given axis.",null,null],[11,"into_iter","","",29,null],[11,"into_iter","","",30,null],[11,"ndim","","",31,null],[11,"size","","",31,null],[11,"size_checked","","",31,null],[11,"default_strides","","",31,null],[11,"first_index","","",31,null],[11,"next_for","","",31,null],[11,"stride_offset","","Self is an index, return the stride offset",31,{"inputs":[{"name":"ix"},{"name":"ix"}],"output":{"name":"isize"}}],[11,"stride_offset_checked","","Return stride offset for this dimension and index.",31,null],[11,"remove_axis","","",31,null]],"paths":[[3,"Axis"],[3,"Si"],[4,"ErrorKind"],[3,"ArrayBase"],[3,"Rc"],[3,"Vec"],[3,"ViewRepr"],[3,"Indexes"],[3,"Elements"],[3,"Indexed"],[3,"ElementsMut"],[3,"IndexedMut"],[3,"InnerIter"],[3,"InnerIterMut"],[3,"AxisIter"],[3,"AxisIterMut"],[3,"AxisChunksIter"],[3,"AxisChunksIterMut"],[3,"ShapeError"],[3,"Shape"],[3,"StrideShape"],[8,"Dot"],[3,"Complex"],[8,"Dimension"],[8,"RemoveAxis"],[8,"NdIndex"],[8,"ShapeBuilder"],[8,"Data"],[8,"FixedInitializer"],[6,"ArrayView"],[6,"ArrayViewMut"],[6,"Ix"]]};
initSearch(searchIndex);
