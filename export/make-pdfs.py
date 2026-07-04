# pdf.txt is essentially a list of instructions. the default instruction is to add the html or pdf file. the other instruction is BREAK, and that takes all the current files and makes one file.
import os, shutil, base64
from pypdf import PdfWriter
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.print_page_options import PrintOptions

# set up dirs
dir = "/var/tmp/yabec"
try:
    shutil.rmtree(dir)
except FileNotFoundError:
    pass
os.mkdir(dir)

subsection_dir = dir + "/subsection"
os.mkdir(subsection_dir)
section_dir = dir + "/pdf"
os.mkdir(section_dir)

script_path = os.path.abspath(__file__)
project_path = os.path.dirname(os.path.dirname(script_path))
os.chdir(project_path)

export_path = project_path + "/pdf"
try:
    shutil.rmtree(export_path)
except FileNotFoundError:
    pass

# define variables
count = 1
pdfs = []
driver = webdriver.Chrome()
print_options = PrintOptions()

# define functions
def process(line):
    global count
    global pdfs
    if line.endswith(".html"):
        # if it is an html, convert and add it
        print("converting " + line)
        file_name = f"{count:02d}.pdf"
        file_path = subsection_dir + "/" + file_name
        count += 1
        # weasyprint $line -q $subsection_dir/$file_name.pdf
        html2pdf(line, file_path)
        pdfs.append(file_path)
    elif line.endswith(".pdf"):
        # if it is a pdf, just add the file
        print("copying " + line)
        file_name = f"{count:02d}.pdf"
        file_path = subsection_dir + "/" + file_name
        count += 1
        shutil.copy(line, file_path)
        pdfs.append(file_path)
    elif line.startswith("BREAK"):
        # in pdf.txt "BREAK" is used to define the end of a book. when that keyword comes up, combine all the things in the subsection_dir and put the pdf in the pdf dir.
        section_title = line[6:]
        out_path = section_dir + "/" + section_title + ".pdf"
        print("Unifying " + section_title + ".pdf")
        merger = PdfWriter()
        for pdf in pdfs:
            merger.append(pdf)
        merger.write(out_path)
        shutil.rmtree(subsection_dir)
        os.mkdir(subsection_dir)
        count = 1
        pdfs = []
    else:
        print("unrecognized " + line + "in pdf.txt. aborting")
        exit()

def html2pdf(pdfPath, out_path):
    pdfPath = "file://" + project_path + "/" + pdfPath
    print(pdfPath)
    driver.get(pdfPath)
    pdf = driver.print_page(print_options)
    assert len(pdf) > 0
    with open(out_path, "wb") as f:
        f.write(base64.b64decode(pdf))
    print(f"Saved: {out_path}")

# main
# for line in pdf.txt do the thing
with open(project_path + "/export/pdf.txt", 'r') as file:
    for line in file:
        if line.endswith("\n"):
            line = line[:-1]
        process(line)
# put the files the export location
shutil.copytree(section_dir, export_path)

driver.quit()
