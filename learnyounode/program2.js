var total = 0;

var limit = process.argv.length;

for (var i = 2; i < limit; i++){
  total = total + Number(process.argv[i]);
};

console.log(total)