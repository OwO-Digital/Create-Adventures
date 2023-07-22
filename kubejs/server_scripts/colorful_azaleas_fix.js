const colorful_azalea_wood = [
  "tecal_azalea",
  "fiss_azalea",
  "roze_azalea",
  "azule_azalea",
  "bright_azalea",
  "walnut_azalea",
  "titanium_azalea",
]

ServerEvents.recipes(event => {
  colorful_azalea_wood.forEach(type => {
    event.recipes.create.cutting('colorfulazaleas:stripped_' + type + '_log', 'colorfulazaleas:' + type + '_log')
    event.recipes.create.cutting('colorfulazaleas:stripped_' + type + '_wood', 'colorfulazaleas:' + type + '_wood')
    
    event.recipes.create.cutting(Item.of('colorfulazaleas:' + type + '_planks', 6), 'colorfulazaleas:stripped_' + type + '_log')
    event.recipes.create.cutting(Item.of('colorfulazaleas:' + type + '_planks', 6), 'colorfulazaleas:stripped_' + type + '_wood')
  })
})
