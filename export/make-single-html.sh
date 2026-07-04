# make single pdf version
completehtmlpath="resources/complete.html"
echo '<!DOCTYPE html> <html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="../style.css">
</head><body>' > $completehtmlpath
sed -z -n 's/.*<body[^>]*>\(.*\)<\/body>.*/\1/ip' $(cat export/html.txt) >> $completehtmlpath
echo "</body></html>" >> $completehtmlpath
