function extractEachKth(array, k) {

	return array.filter((x,i) => (++i % k != 0) ? true : false)

}
