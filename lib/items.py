def decomma(string):
    string = string[:-2] + f'.'
    return(string)

class Item:
    instances = []
    basics = []
    def __init__(self, name, cost, shop="", desc="", mod=[], basic=False):
        self.name = str(name)
        self.cost = int(cost)
        shop.items.append(self)

        self.desc = str(desc)
        self.mod = mod

        Item.instances.append(self)

        if basic:
            Item.basics.append(self)

    def report(self):
        string = f'### {self.name}. \n cost: {self.cost} cp. \n {self.desc}'
        if self.mod != []:
            for i in self.mod:
                string = string + i.name + f', '
            string = decomma(string) + f'\n'
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
heavy = Modifier("heavy", "Occupies two item slots.")
blunt = Modifier("blunt", "Can be used to incapacitate.")
melee = Modifier("melee", "Can be used to make melee attacks.")

class Kit:
    def __init__(self, name, items):
        self.name = name
        self.items = items

        total = 0
        for i in items:
            total += i.cost

        self.total = total

    def report(self):
        string = f'### {self.name}\n **Total Cost:** {self.total}\n'
        for i in self.items: 
            string = string + i.name + f', '
        string = decomma(string) + f'\n'
        return(string)


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
armorLight = Item("Leather Armor", 20, armor, basic=True)
armorMedium = Item("Chain Mail", 60, armor, basic=True)
armorHeavy = Item("Plate Mail", 100, armor, mod=[heavy], basic=True)

carp = Shop("Carpenter", "An artisan who creates wooden objects.")

vehicleMedium = Item("Cart", 100, carp)
vehicleLight = Item("Chest", 50, carp, basic=True)
weaponClub = Item("Chest", 3, carp, mod=[blunt, melee], basic=True)
weaponLance = Item("Lance", 5, carp, mod=[melee])
inst = Item("Musical Instrument", 100, carp, mod=[heavy])
pole = Item("Pole", 1, carp, basic=True)
sack = Item("Sack", 1, carp, basic=True)
armorShield = Item("Shield", 15, carp, basic=True)
weaponStaff = Item("Staff", 1, carp, basic=True)
vehicleHeavy = Item("Wagon", 250, carp)
stakes = Item("Wooden Stakes (5)", 3, carp)

basic_items = sorted(Item.basics, key=lambda item: item.name)
print("# Basic Items")
for i in basic_items:
    print(i.report())

fighterKit = Kit("Suggested Fighter Items", [weaponLance, armorShield, armorHeavy])
print(fighterKit.report())

sorted_shops = sorted(Shop.instances, key=lambda item: item.name)
print("# Shops")
for i in sorted_shops:
    print(i.report())

