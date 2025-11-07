import yaml

def load_yaml(file_path):
    with open(file_path, 'r') as file:
        return yaml.safe_load(file)

def filter_items(data, tag):
    items = [item for item in data if tag in item['tags'].split(', ')]
    sorted_items = sorted(items, key=lambda x: x['name'])
    return sorted_items

def make_table(data):
    content = """
| Item | Cost |
|:---|---|
"""

    for i in data:
        content += f'| {i["name"]} | {i["cost"]} | \n'

    return(content)

def make_desc(data):
    content = ""

    for i in data:
        content += f'#### {i["name"]} \n {i["desc"]}'

        if i["prop"] != "":
            properties = sorted(i["prop"].split(", "))
            content += f" *{"*, *".join(properties)}*."

        content += "\n"

    return content

if __name__ == "__main__":
    input_file = 'items.yml'  

    items = load_yaml(input_file)
    basic_items = filter_items(items, 'basic')
    content = make_table(basic_items) + "\n" + make_desc(basic_items)

    with open("output.md", "w", encoding="utf-8") as f:
        f.write(content)
