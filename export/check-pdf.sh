find . -name "*.html" | sort > temp-html_files.txt; sort export/pdf.txt > temp-paths.txt; comm -3 temp-html_files.txt temp-paths.txt | sort -u; rm temp-html_files.txt temp-paths.txt
