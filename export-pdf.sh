sed '/<head>/,/<\/head>/d' $(cat export-files.txt) > complete.html;
weasyprint -s pdf-style.css -q complete.html yabecV2-5.pdf;
