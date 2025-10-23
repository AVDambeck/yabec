'''
func makehtml:
    add css

Make an output dir.
For each of the booklets:
    Make a dir.
    For each of the section:
        make html.
        put it the dir.
'''

# import and define 
import markdown

input_file = 'input.md'  
output_file = 'output.html'  

# functions
def makeHtml(md):
    html = markdown.markdown(md)
    # add css
    return html

# main
with open(input_file, 'r') as file:
    md_text = file.read()

html_output = makeHtml(md_text)

with open(output_file, 'w') as file:
    file.write(html_output)

print(f"Markdown {input_file} converted to HTML and saved to {output_file}")

