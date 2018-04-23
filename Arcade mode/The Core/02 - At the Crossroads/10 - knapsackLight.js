//To spice things up a bit, I wrote a function that can take N items,
//ie arguments are passed as value1, weight1, value2, weight2 ... valueN, weightN, maxW
//The optimal use of the knapsack will then be calculated using permutations.
function knapsackLight(value1, weight1, value2, weight2, maxW) {
	
	var items = [...arguments].filter((x,i, arr) => (i < arr.length - 1) ? true : false);
	
	var values = items.reduce(function(result, val, index, arr){
		if (index % 2 == 0) {result.push([val, arr[++index]])}
		return result;
	}, [])
	
	values = permute(values);
	
	return values.reduce(function(result, val, index, arr){
		var maxweight = maxW;
		var currentvalue = val.reduce(function(result, val, index, arr){
			if (val[1] <= maxweight) {
				result += val[0]
				maxweight -= val [1]
			}
			return result;
		}, 0)
		return (currentvalue > result) ? currentvalue : result;
	},0)
}
function permute(permutation) {
	var length = permutation.length,
		result = [permutation.slice()],
		c = new Array(length).fill(0),
		i = 1, k, p;

	while (i < length) {
		if (c[i] < i) {
			k = i % 2 && c[i];
			p = permutation[i];
			permutation[i] = permutation[k];
			permutation[k] = p;
			++c[i];
			i = 1;
			result.push(permutation.slice());
		} else {
			c[i] = 0;
			++i;
		}
	}
  return result;
}

