ServerEvents.recipes(event => {
  event.shapeless(Item.of('minecraft:pointed_dripstone', 4), ['minecraft:dripstone_block'])

  event.shapeless(Item.of('twigs:azalea_flowers', 3), ['ecologics:azalea_flower'])
  event.replaceInput({ input: 'immersive_weathering:azalea_flowers' },
    'immersive_weathering:azalea_flowers',
    'twigs:azalea_flowers'
  )
  event.remove({output: 'immersive_weathering:azalea_flower_pile'})
  event.replaceInput({ output: 'immersive_weathering:flower_crown' },
    'twigs:azalea_flowers',
    'ecologics:azalea_flower'
  )

  const azalea_wood_blocks = [
    "azalea_log",
    "azalea_wood",
    "azalea_planks",
    "azalea_slab",
    "azalea_stairs",
    "azalea_fence",
    "azalea_fence_gate",
    "azalea_door",
    "azalea_trapdoor"
  ]

  azalea_wood_blocks.forEach(block => {
    event.shapeless('ecologics:flowering_' + block, ['ecologics:' + block, 'twigs:azalea_flowers'])
  })
})

ServerEvents.tags('item', event => {
  event.add('minecraft:logs_that_burn', '#colorfulazaleas:azalea_logs')
  event.add('minecraft:logs', '#minecraft:logs_that_burn')

  const logs = event.get('minecraft:logs').getObjectIds()
  const stripped = Ingredient.of(/.*stripped.*/)
  const log = Ingredient.of(/.*log.*/)
  const wood = Ingredient.of(/.*wood.*/)
  logs.forEach(item => {
    if (stripped.test(item)) {
      if (log.test(item))
        event.add('c:stripped_logs', item)
      else if (wood.test(item))
        event.add('c:stripped_wood', item)
    }
  })
})
