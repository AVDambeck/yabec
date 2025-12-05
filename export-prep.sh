find . -name "*.html" | sort > temp-html_files.txt; sort export-files.txt > temp-paths.txt; comm -3 temp-html_files.txt temp-paths.txt; rm temp-html_files.txt temp-paths.txt
