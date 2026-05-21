clear;
dir="/var/tmp/yabec"
rm -rf $dir
mkdir $dir

tempdir=$dir"/subsection"
mkdir $tempdir
holddir=$dir"/pdf"
mkdir $holddir

count=1
while read -r line; do
    if [[ $line =~ BREAK* ]]; then
        section=$(echo $line | sed s/BREAK\ //g)
        echo "Unifying $section.pdf"
        pdfunite $tempdir/* $holddir/$section.pdf
        rm $tempdir/*
        count=1
    else
        echo "converting $line"
        filename=$(printf %02d $count)
        weasyprint $line -q $tempdir/$filename.pdf
        count=$((count + 1))
    fi
done < export/pdf.txt

rm pdf/*
cp $holddir/* pdf
# sed -z -n 's/.*<body[^>]*>\(.*\)<\/body>.*/\1/ip' $(cat export/pdf.txt) > pdf.html;
# weasyprint -s pdf-style.css -q pdf.html yabecV3-0.pdf;

var="resources/complete.html"
echo '<!DOCTYPE html> <html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../style.css">
</head>' > $var

echo "<body>" >> $var
sed -z -n 's/.*<body[^>]*>\(.*\)<\/body>.*/\1/ip' $(cat export/html.txt) >> $var
echo "</body></html>" >> $var
