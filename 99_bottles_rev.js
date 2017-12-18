var bottles = [];

for (var bottles = 99; bottles >=0; bottles--) {
//	console.log(bots);
//	bottles.push(bots);
	if (bottles <= 99 && bottles > 2) {
		console.log(bottles + ' bottles of beer on the wall, '+ bottles +' bottles of beer. Take one down and pass it around,' ,bottles-1, ' bottles of beer on the wall.')
	} else if (bottles === 2) {
		console.log(bottles + ' bottles of beer on the wall, '+ bottles +' bottles of beer. Take one down and pass it around,' ,bottles-1, ' bottle of beer on the wall.')
	} else if (bottles === 1) {
		console.log(bottles+ ' bottle of beer on the wall, '+ bottles +' bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.')
	} else /*(bots === 0)*/ {
		console.log('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.')
	}
}