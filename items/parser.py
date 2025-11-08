import yaml

def load_yaml(file_path):
    with open(file_path, 'r') as file:
        return yaml.safe_load(file)

def filter_items(data, include_tags=["basic"], exclude_tags=[]):
    include_tags = set(include_tags)
    exclude_tags = set(exclude_tags)

    return [
            item for item in data
            if include_tags.issubset(set(item['tags'].split(', '))) and not exclude_tags.intersection(set(item['tags'].split(', ')))
    ]

def sort_items_alpha(data):
    sorted_items = sorted(data, key=lambda x: x['name'])
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
    basic_items = filter_items(items)
    basic_items = sort_items_alpha(basic_items)
    content = make_table(basic_items) + "\n" + make_desc(basic_items)

    with open("output.md", "w", encoding="utf-8") as f:
        f.write(content)
