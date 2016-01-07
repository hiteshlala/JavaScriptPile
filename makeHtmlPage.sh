# used for setting up a web page tow test a particular
# javascript file in developer console
# 
# ./makeHtmlPage.sh > pageName.html javascript.js
# 


cat << _EOF_
<html>
	<head>
	    <title>
	    	Testing $1 File
	    </title>
	</head>

	<body>
	    <header>
	    	<h1>Testing JavaScript File: $1 </h1>
	    </header>
	    <script src="$1"></script>

	    <p>Created on $(date +"%x %r %Z") by $USER </p>
	</body>
</html>
_EOF_