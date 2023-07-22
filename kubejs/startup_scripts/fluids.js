StartupEvents.registry('fluid', event => {
    let molten = (name, color) => {
        let id = 'molten_' + name.toLowerCase().replace(' ','_')
        event.create(id)
            .displayName('Molten ' + name)
            .thickTexture(color)
            .bucketColor(color)
            .noBlock()
    }

    molten('Copper', 0xf26e41)
    molten('Gold', 0xF5D740)
    molten('Iron', 0x69231E)
    molten('Zinc', 0xc5edcf)
    molten('Brass', 0xe3b13d)
    molten('Silicon Bronze', 0xf07b37)
    molten('Rose Quartz', 0xed6871)
})
