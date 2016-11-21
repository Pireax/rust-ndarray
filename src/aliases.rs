//! Type aliases for common array sizes
//!

use ::{Ix, Array, ArrayView, ArrayViewMut, RcArray};
use ::dimension::Dim;
use dimension::DimPrivate;

/// Create a zero-dimensional index
#[allow(non_snake_case)]
#[inline(always)]
pub fn Ix0() -> Ix0 { Dim::new([]) }
/// Create a one-dimensional index
#[allow(non_snake_case)]
#[inline(always)]
pub fn Ix1(i0: Ix) -> Ix1 { Dim::new([i0]) }
/// Create a two-dimensional index
#[allow(non_snake_case)]
#[inline(always)]
pub fn Ix2(i0: Ix, i1: Ix) -> Ix2 { Dim::new([i0, i1]) }
/// Create a three-dimensional index
#[allow(non_snake_case)]
#[inline(always)]
pub fn Ix3(i0: Ix, i1: Ix, i2: Ix) -> Ix3 { Dim::new([i0, i1, i2]) }
/// Create a four-dimensional index
#[allow(non_snake_case)]
#[inline(always)]
pub fn Ix4(i0: Ix, i1: Ix, i2: Ix, i3: Ix) -> Ix4 { Dim::new([i0, i1, i2, i3]) }
/// Create a five-dimensional index
#[allow(non_snake_case)]
#[inline(always)]
pub fn Ix5(i0: Ix, i1: Ix, i2: Ix, i3: Ix, i4: Ix) -> Ix5 {
    Dim::new([i0, i1, i2, i3, i4])
}
/// Create a six-dimensional index
#[allow(non_snake_case)]
#[inline(always)]
pub fn Ix6(i0: Ix, i1: Ix, i2: Ix, i3: Ix, i4: Ix, i5: Ix) -> Ix6 {
    Dim::new([i0, i1, i2, i3, i4, i5])
}

/// zero-dimensionial
pub type Ix0 = Dim<[Ix; 0]>;
/// one-dimensional
pub type Ix1 = Dim<[Ix; 1]>;
/// two-dimensional
pub type Ix2 = Dim<[Ix; 2]>;
/// three-dimensional
pub type Ix3 = Dim<[Ix; 3]>;
/// four-dimensional
pub type Ix4 = Dim<[Ix; 4]>;
/// five-dimensional
pub type Ix5 = Dim<[Ix; 5]>;
/// six-dimensional
pub type Ix6 = Dim<[Ix; 6]>;
/// dynamic-dimensional
pub type IxDyn = Dim<Vec<Ix>>;

/// zero-dimensional array
pub type Array0<A> = Array<A, Ix0>;
/// one-dimensional array
pub type Array1<A> = Array<A, Ix1>;
/// two-dimensional array
pub type Array2<A> = Array<A, Ix2>;
/// three-dimensional array
pub type Array3<A> = Array<A, Ix3>;
/// four-dimensional array
pub type Array4<A> = Array<A, Ix4>;
/// five-dimensional array
pub type Array5<A> = Array<A, Ix5>;
/// six-dimensional array
pub type Array6<A> = Array<A, Ix6>;
/// dynamic-dimensional array
pub type ArrayD<A> = Array<A, IxDyn>;

/// zero-dimensional array view
pub type ArrayView0<'a, A> = ArrayView<'a, A, Ix0>;
/// one-dimensional array view
pub type ArrayView1<'a, A> = ArrayView<'a, A, Ix1>;
/// two-dimensional array view
pub type ArrayView2<'a, A> = ArrayView<'a, A, Ix2>;
/// three-dimensional array view
pub type ArrayView3<'a, A> = ArrayView<'a, A, Ix3>;
/// four-dimensional array view
pub type ArrayView4<'a, A> = ArrayView<'a, A, Ix4>;
/// five-dimensional array view
pub type ArrayView5<'a, A> = ArrayView<'a, A, Ix5>;
/// six-dimensional array view
pub type ArrayView6<'a, A> = ArrayView<'a, A, Ix6>;
/// dynamic-dimensional array view
pub type ArrayViewD<'a, A> = ArrayView<'a, A, IxDyn>;

/// zero-dimensional read-write array view
pub type ArrayViewMut0<'a, A> = ArrayViewMut<'a, A, Ix0>;
/// one-dimensional read-write array view
pub type ArrayViewMut1<'a, A> = ArrayViewMut<'a, A, Ix1>;
/// two-dimensional read-write array view
pub type ArrayViewMut2<'a, A> = ArrayViewMut<'a, A, Ix2>;
/// three-dimensional read-write array view
pub type ArrayViewMut3<'a, A> = ArrayViewMut<'a, A, Ix3>;
/// four-dimensional read-write array view
pub type ArrayViewMut4<'a, A> = ArrayViewMut<'a, A, Ix4>;
/// five-dimensional read-write array view
pub type ArrayViewMut5<'a, A> = ArrayViewMut<'a, A, Ix5>;
/// six-dimensional read-write array view
pub type ArrayViewMut6<'a, A> = ArrayViewMut<'a, A, Ix6>;
/// dynamic-dimensional read-write array view
pub type ArrayViewMutD<'a, A> = ArrayViewMut<'a, A, IxDyn>;

/// one-dimensional shared ownership array
pub type RcArray1<A> = RcArray<A, Ix1>;
/// two-dimensional shared ownership array
pub type RcArray2<A> = RcArray<A, Ix2>;
