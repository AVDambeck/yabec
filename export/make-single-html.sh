# make single pdf version
completehtmlpath="resources/complete.html"
cat export/html-header.html > $completehtmlpath
sed -z -n 's/.*<body[^>]*>\(.*\)<\/body>.*/\1/ip' $(cat export/html.txt) >> $completehtmlpath
echo "</body></html>" >> $completehtmlpath
