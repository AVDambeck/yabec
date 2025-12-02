import yaml
output_paths = {
        "basic": "../../core/character/z-items.md",
}

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

def make_weapon_table(data):
    content = """
| Item | Cost | Dam | Properties | 
|:---|---|---|---:|
"""
    
    for i in data:
        try:
            content += f'| {i["name"]} | {i["cost"]} | {i["damage"]} | {i["prop"]} | \n'
        except:
            print(f"{i["name"]} broke idk")

    return(content)

def make_desc(data):
    content = ""

    for i in data:
        content += f'#### {i["name"]} \n {i["desc"]}'

        try:
            if i["prop"] == "":
                pass
            else:
                properties = sorted(i["prop"].split(", "))
                content += f" *{"*, *".join(properties)}*."
        except:
            print(f'{i["name"]} has no properties')

        content += "\n"

    return content

if __name__ == "__main__":
    input_file = 'items.yml'  

    items = load_yaml(input_file)
    # Basic
    basic_items = filter_items(items)
    basic_items = sort_items_alpha(basic_items)
    content = "# Items \n\n## Gear \n\n" + make_table(basic_items) + "\n" + make_desc(basic_items)

    # Weapons
    weapons = filter_items(items, ["weaponsimple"])
    weapons = sort_items_alpha(weapons)
    description = """ \n\n
#### Blunt
Can be used to incapacitate victems. Required for Clerics.
#### Fired
Makes ranged attacks. Consumes ammo. 
#### Fragile
After dealing the maximum damage, the weapon takes 1 damage.
#### Melee
Can be used to make melee attacks.
#### Slow
After making an *attack*, you can't *attack* on the next turn.
#### Splash
Damages many targets in an area.
#### Thrown
Makes ranged attack by throwing the weapon.
#### Two-handed
Requires two hands to use. Also *heavy*.
"""
    content += "\n## Weapons \n\n" + make_weapon_table(weapons) + description + "\n"

    # Armor
    armor = filter_items(items, ["armor"])
    armor = sort_items_alpha(armor)
    content += "\n## Armor \n\n" + make_table(armor) + "\n" + make_desc(armor)


    with open(output_paths["basic"], "w", encoding="utf-8") as f:
        f.write(content)
