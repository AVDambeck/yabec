class Item:
    instances = []
    def __init__(self, name, cost, shop="", desc="", mod=[]):
        self.name = str(name)
        self.cost = int(cost)
        shop.items.append(self)

        self.desc = str(desc)
        self.mod = mod

        Item.instances.append(self)

    def report(self):
        string = f'### {self.name}. \n cost: {self.cost} cp. \n {self.desc}'
        for i in self.mod:
            string = string + i.name + f', '
        string = string[:-2] + f'.'
        return(string)

class Shop:
    instances = []
    def __init__(self, name, desc=''):
        self.name = name
        self.desc = desc
        self.items = []

        Shop.instances.append(self)

    def report(self):
        string = f'## {self.name}'

        if self.desc != '':
            string = string + f'\n{self.desc}\n'
        
        string = string + f'\n'

        sorted_items = sorted(self.items, key=lambda item: item.name)
        for i in sorted_items:
            report = i.report()
            string = string + report + f'\n\n'
        return(string)

class Modifier:
    instances = []
    def __init__(self, name, desc):
        self.name = name
        self.desc = desc
        
        Modifier.instances.append(self)

stack = Modifier("stacks", "Upto five of these items fit in one item slot.")
throw = Modifier("thrown", "Can be thrown to make ranged attacks.")

apoth = Shop("Apothecary", "An artisan who collects plants and brews potions")

antidote = Item("Antidote", 50, apoth)
posionSleep = Item("Dreambliss", 200, apoth)
garlic = Item("Garlic", 5, apoth, mod=[stack])
ointment = Item("Ointment", 15, apoth,  mod=[stack])
bombSmoke = Item("Smoke Bomb", 25, apoth, mod=[throw])
wine = Item("Wine (2 pints)", 2, apoth)
wolfbane = Item("Wolfsbane (1 bunch)", 10, apoth)

armor = Shop("Armor Smith", "An artisan who forges metal armor.")

armorHorse = Item("Barding", 200, armor)
armorLight = Item("Leather Armor", 20, armor)
armorMedium = Item("Chain Mail", 60, armor)
armorHeavy = Item("Plate Mail", 100, armor)

sorted_shops = sorted(Shop.instances, key=lambda item: item.name)
for i in sorted_shops:
    print(i.report())

    
