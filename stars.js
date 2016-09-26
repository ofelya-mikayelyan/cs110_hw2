<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<script type="text/javascript" src="factorial.js"></script>
<script type="text/javascript">
const Space = function(spc){
	if(spc === 0){
		return"";
	}
	return" " + Space(spc-1);
};

const Stars = function(str){
	if(str <= 0){
		return"";
	}
	return"*" + Stars(str-1);
};

const run = function(n ,str, spc){
	if (n === 0){
		return "";
	}
	console.log(Space(spc) + Stars(str));
	run((n-1), (str+2), (spc-1));
};

const triangleStars = function(n){
	run(n,1,n-1);
};
triangleStars(8);
</script>
</body>
</html>