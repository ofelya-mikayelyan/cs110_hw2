<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<script type="text/javascript" src="factorial.js"></script>
<script type="text/javascript">
	const factorial=function(n){
		if(n<0){
			return"";
		}
		if(n===0||n===1){
			return 1;
		}
		return n * factorial(n-1);
	}
	console.log(factorial(8));
</script>
</body>
</html>