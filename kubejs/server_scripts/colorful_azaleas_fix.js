const colorful_azalea_logs = [
  "tecal_azalea_log",
  "fiss_azalea_log",
  "roze_azalea_log",
  "azule_azalea_log",
  "bright_azalea_log",
  "walnut_azalea_log",
  "titanium_azalea_log",
]

ServerEvents.recipes(event => {
  colorful_azalea_logs.forEach(log => {
    event.recipes.create.cutting('colorfulazaleas:stripped_' + log, 'colorfulazaleas:' + log)
  })
})
