ServerEvents.recipes(event => {
    //FIXME Broken recipe and needs tier 2
    event.custom({
        "type": "extendedcrafting:shaped_table",
        // "tier": "2",
        // this is really gross but it's not my fault someone put 'E' twice in the original recipe
        "pattern": [
            "A  B  C",
            " D E F ",
            "  GHI  ",
            "JKLYMNO",
            "  PQR  ",
            " S T U ",
            "V  W  X"
        ],
        "key": {
            "A": {
                "item": "gtceu:nichrome_ingot"
            },
            "B": {
                "item": "gtceu:red_steel_ingot"
            },
            "C": {
                "item": "gtceu:kanthal_ingot"
            },
            "D": {
                "item": "gtceu:magnalium_ingot"
            },
            "E": {
                "item": "gtceu:mana_infused_metal_ingot"
            },
            "F": {
                "item": "gtceu:manyullyn_ingot"
            },
            "G": {
                "item": "gtceu:enderium_ingot"
            },
            "H": {
                "item": "gtceu:blue_steel_ingot"
            },
            "I": {
                "item": "gtceu:microversium_ingot"
            },
            "J": {
                "item": "gtceu:vanadium_steel_ingot"
            },
            "K": {
                "item": "gtceu:rhodium_plated_palladium_ingot"
            },
            "L": {
                "item": "gtceu:electrum_flux_ingot"
            },
            "M": {
                "item": "avaritia:crystal_matrix_ingot"
            },
            "N": {
                "item": "gtceu:end_steel_ingot"
            },
            "O": {
                "item": "gtceu:electrical_steel_ingot"
            },
            "P": {
                "item": "gtceu:signalum_ingot"
            },
            "Q": {
                "item": "gtceu:vibrant_alloy_ingot"
            },
            "R": {
                "item": "gtceu:soularium_ingot"
            },
            "S": {
                "item": "gtceu:hsse_ingot"
            },
            "T": {
                "item": "gtceu:dark_steel_ingot"
            },
            "U": {
                "item": "gtceu:hssg_ingot"
            },
            "V": {
                "item": "gtceu:ruridit_ingot"
            },
            "W": {
                "item": "gtceu:hsss_ingot"
            },
            "X": {
                "item": "gtceu:energetic_alloy_ingot"
            },
            "Y": {
                "item": "gtceu:dark_soularium_ingot"
            }
        },
        "result": {
            "item": "kubejs:exotic_materials_catalyst"
        }
    })

    // Blacklight
    event.shaped(
        'gtceu:blacklight', [
            'BPB',
            ' S ',
            'CPW'
        ], {
            B: 'gtceu:tungsten_carbide_screw',
            C: '#gtceu:circuits/iv',
            P: 'gtceu:tungsten_carbide_plate',
            S: 'gtceu:hssg_spring',
            W: 'gtceu:platinum_single_cable'
        }
    ).id('gtceu:shaped/blacklight')

    // Sterilising Filter Casing
    event.shaped(
        'gtceu:sterilizing_filter_casing', [
            'PEP',
            'FBF',
            'MSR'
        ], {
            B: 'gtceu:blacklight',
            E: 'gtceu:luv_emitter',
            F: 'gtceu:item_filter',
            M: 'gtceu:luv_electric_motor',
            P: 'gtceu:polybenzimidazole_large_fluid_pipe',
            R: 'gtceu:osmiridium_rotor', // TODO: replace with iridium rotor if possible
            S: 'gtceu:black_steel_frame'
        }
    ).id('gtceu:shaped/filter_casing_sterile')

    // FLux Gem
    event.remove({ id: 'redstone_arsenal:materials/flux_gem' })
    event.recipes.gtceu.autoclave("flux_gem")
        .itemInputs('minecraft:diamond')
        .inputFluids('gtceu:redstone 720')
        .itemOutputs('redstone_arsenal:flux_gem')
        .duration(200)
        .EUt(400)

    // Flux Plating
    event.shaped(
        '4x redstone_arsenal:flux_plating', [
            ' P ',
            'PGP',
            ' P '
        ], {
            G: 'redstone_arsenal:flux_gem',
            P: 'gtceu:electrum_flux_plate'
        }
    ).id('redstone_arsenal:materials/flux_plating')
})

// Vacuum Freezer
// Draconic Superconductor Wire
ServerEvents.recipes(event => {
    event.recipes.gtceu.vacuum_freezer("draconic_superconductor_wire")
        .itemInputs('gtceu:draconium_single_wire')
        .itemOutputs('gtceu:draconic_superconductor_single_wire')
        .inputFluids(Fluid.of('gtceu:nether_star', 144))
        .duration(100)
        .EUt(6000)

    // Chemical Reactor

    event.recipes.gtceu.chemical_reactor("draconium_dust")
        .itemInputs('gtceu:manyullyn_dust', 'minecraft:dragon_breath')
        .itemOutputs('gtceu:draconium_dust')
        .duration(500)
        .EUt(2000)

    //Draconic Stem Cells
    event.remove({ id: 'gtceu:chemical_reactor/stem_cells' })
    event.remove({ id: 'gtceu:large_chemical_reactor/stem_cells' })
    event.recipes.gtceu.chemical_reactor("draconic_stem_cells")
        .itemInputs('minecraft:dragon_egg')
        .inputFluids('gtceu:sterilized_growth_medium 500', 'gtceu:bacteria 500')
        .itemOutputs('64x gtceu:stem_cells', '64x gtceu:stem_cells')
        .outputFluids('gtceu:bacterial_sludge 500')
        .duration(6000)
        .EUt(30720)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    //Blast Furnace
    event.recipes.gtceu.electric_blast_furnace("quantum_fluxed_eternium_heavy_plating")
        .itemInputs('10x redstone_arsenal:flux_plating', 'gtceu:draconium_awakened_plate', '16x kubejs:quantum_flux')
        .inputFluids('gtceu:krypton 1000')
        .itemOutputs('kubejs:quantum_fluxed_eternium_heavy_plating')
        .duration(200)
        .EUt(250000)
        .blastFurnaceTemp(9000)

    // Mote of omnium
    event.recipes.gtceu.implosion_compressor("implosion_compressor_ominium_nugget")
        .itemInputs('kubejs:mote_of_omnium', 'minecraft:tnt')
        .itemOutputs('gtceu:omnium_nugget')
        .duration(20)
        .EUt(30)

    // Crystal Matrix Materials
    event.shaped(
        'avaritia:diamond_lattice', [
            'PBP',
            'BGB',
            'PBP'
        ], {
            B: 'minecraft:diamond_block',
            G: 'gtceu:diamond_perfect',
            P: 'gtceu:diamond_plate'
        }
    ).id('avaritia:diamond_lattice')

    event.remove({id: 'avaritia:crystal_matrix_ingot' })
    event.recipes.extendedcrafting.shaped_table(
        'avaritia:crystal_matrix_ingot', [
            '         ',
            '      DDD',
            '   DDDSLD',
            'DDDLSLLSD',
            'DLSSLSSLD',
            'DSLLSLDDD',
            'DLSDDD   ',
            'DDD      ',
            '         '
        ], {
            D: 'minecraft:diamond',
            L: 'avaritia:diamond_lattice',
            S: 'minecraft:nether_star'
        }
    )

    event.recipes.gtceu.bender("crystal_matrix_plate")
        .itemInputs('avaritia:crystal_matrix_ingot')
        .itemOutputs('kubejs:crystal_matrix_plate')
        .duration(98)
        .EUt(24)
        .circuit(1)

    // Ultimate Gem
    event.custom({
        "type": "extendedcrafting:shapeless_table",
        "ingredients": [
            { "item": "kubejs:destabilized_clathrate" },
            { "item": "gtceu:enori_empowered_gem" },
            { "item": "enderio:ender_crystal" },
            { "item": "enderio:vibrant_crystal" },
            { "item": "kubejs:dilithium_crystal" },
            { "item": "enderio:enticing_crystal" },
            { "item": "enderio:weather_crystal" },
            { "item": "enderio:prescient_crystal" },
            { "item": "enderio:pulsating_crystal" },
            { "item": "minecraft:prismarine_shard" },
            { "item": "gtceu:cinnabar_gem" },
            { "item": "kubejs:energized_clathrate" },
            { "item": "minecraft:quartz" },
            { "item": "gtceu:certus_quartz_gem" },
            { "item": "gtceu:fluix_gem" },
            { "item": "gtceu:restonia_empowered_gem" },
            { "item": "gtceu:palis_empowered_gem" },
            { "item": "gtceu:diamatine_empowered_gem" },
            { "item": "gtceu:void_empowered_gem" },
            { "item": "gtceu:emeradic_empowered_gem" },
            { "item": "armorplus:infused_lava_crystal" },
            { "item": "minecraft:emerald" },
            { "item": "redstone_arsenal:flux_gem" },
            { "item": "minecraft:diamond" },
            { "item": "kubejs:resonant_clathrate" }
        ],
        "result": {
            "item": "kubejs:ultimate_gem"

        }
    })

    // Ultimate Generator
    event.custom({
        "type": "extendedcrafting:shapeless_table",
        "ingredients": [
            // Row 1
            { "item": "solarflux:sp_1" },
            { "item": "solarflux:sp_2" },
            { "item": "solarflux:sp_3" },
            { "item": "solarflux:sp_4" },
            { "item": "gtceu:steam_large_turbine" },
            { "item": "solarflux:sp_5" },
            { "item": "solarflux:sp_6" },
            { "item": "solarflux:sp_7" },
            { "item": "solarflux:sp_8" },
            // Row 2
            { "item": "solarflux:sp_de.wyvern" },
            { "item": "solarflux:sp_de.draconic" },
            { "item": "gtceu:bronze_large_boiler" },
            { "item": "gtceu:lv_steam_turbine" },
            { "item": "gtceu:mv_steam_turbine" },
            { "item": "gtceu:hv_steam_turbine" },
            { "item": "gtceu:steel_large_boiler" },
            { "item": "solarflux:sp_de.chaotic" },
            { "item": "solarflux:sp_avaritia.neutronium" },
            // Row 3
            { "item": "thermal:upgrade_augment_3"},
            { "item": "nuclearcraft:enderium_heat_sink"},
            { "item": "kubejs:survival_generator_component"}, // Survival Generator
            { "item": "kubejs:furnace_generator_component"}, // Furnace Generator
            { "item": "kubejs:culinary_generator_component"}, // Culinary Generator
            { "item": "kubejs:magmatic_generator_component"}, // Magmatic Generator
            { "item": "kubejs:heated_redstone_generator_component"}, //Heated Redstone Generator
            { "item": "nuclearcraft:enderium_heat_sink"},
            { "item": "thermal:upgrade_augment_3"},
            // Row 4
            { "item": "gtceu:lv_combustion"},
            { "item": "gtceu:luv_fusion_reactor"},
            { "item": "kubejs:slimey_generator_component"}, // Slimey Generator
            { "item": "steamdynamo:steam_dynamo"},
            { "item": "nuclearcraft:fission_reactor_controller"},
            { "item": "steamdynamo:steam_dynamo"},
            { "item": "kubejs:ender_generator_component"}, // Ender Generator
            { "item": "gtceu:uv_fusion_reactor"},
            { "item": "gtceu:lv_combustion"},
            // Row 5
            { "item": "gtceu:mv_combustion"},
            { "item": "draconicevolution:reactor_stabilizer"},
            { "item": "kubejs:disenchantment_generator_component"}, // Disenchantment Generator
            { "item": "thermal:dynamo_magmatic"},
            { "item": "draconicevolution:reactor_core"},
            { "item": "thermal:dynamo_magmatic"},
            { "item": "kubejs:potion_generator_component"}, // Potion Generator
            { "item": "draconicevolution:reactor_stabilizer"},
            { "item": "gtceu:mv_combustion"},
            // Row 6
            { "item": "gtceu:hv_combustion"},
            { "item": "gtceu:zpm_fusion_reactor"},
            { "item": "kubejs:death_generator_component"}, // Death Generator
            { "item": "thermal:dynamo_numismatic"},
            { "item": "draconicevolution:generator"},
            { "item": "thermal:dynamo_numismatic"},
            { "item": "kubejs:pink_generator_component"}, // Pink Generator
            { "item": "gtceu:draconic_reactor"},
            { "item": "gtceu:hv_combustion"},
            // Row 7
            { "item": "thermal:upgrade_augment_3"},
            { "item": "nuclearcraft:enderium_heat_sink"},
            { "item": "kubejs:frosty_generator_component"}, // Frosty Generator
            { "item": "kubejs:halitosis_generator_component"}, // Halitosis Generator
            { "item": "kubejs:nether_star_generator_component"}, // Netherstar Generator
            { "item": "kubejs:explosive_generator_component"}, // Explosive Generator
            { "item": "kubejs:overclocked_generator_component"}, // Overclocked Generator
            { "item": "nuclearcraft:enderium_heat_sink"},
            { "item": "thermal:upgrade_augment_3"},
            // Row 8
            { "item": "solarflux:sp_de.wyvern" },
            { "item": "solarflux:sp_de.draconic" },
            { "item": "gtceu:titanium_large_boiler" },
            { "item": "gtceu:lv_gas_turbine" },
            { "item": "gtceu:mv_gas_turbine" },
            { "item": "gtceu:hv_gas_turbine" },
            { "item": "gtceu:tungstensteel_large_boiler" },
            { "item": "solarflux:sp_de.chaotic" },
            { "item": "solarflux:sp_avaritia.neutronium" },
            // Row 9
            { "item": "solarflux:sp_1" },
            { "item": "solarflux:sp_2" },
            { "item": "solarflux:sp_3" },
            { "item": "solarflux:sp_4" },
            { "item": "gtceu:gas_large_turbine" },
            { "item": "solarflux:sp_5" },
            { "item": "solarflux:sp_6" },
            { "item": "solarflux:sp_7" },
            { "item": "solarflux:sp_8" }


        ],
        "result": {
            "item": "kubejs:ultimate_generator"

        }
    })

    event.recipes.extendedcrafting.shaped_table(
        'kubejs:ultimate_power_storage', [
            'ABCDEDCBA',
            'BCDEFEDCB',
            'CDEFGFEDC',
            'DEFGHGFED',
            'EFGHIHGFE',
            'DEFGHGFED',
            'CDEFGFEDC',
            'BCDEFEDCB',
            'ABCDEDCBA'
        ], {
            A: 'gtceu:lv_lithium_battery',
            B: 'gtceu:mv_lithium_battery',
            C: 'gtceu:energy_crystal',
            D: 'gtceu:lapotron_crystal',
            E: 'gtceu:lapotronic_energy_orb',
            F: 'gtceu:lapotronic_energy_orb_cluster',
            G: 'gtceu:zero_point_module',
            H: 'gtceu:energy_cluster',
            I: 'gtceu:max_battery'
        }
    )

    event.recipes.extendedcrafting.shaped_table(
        'gtceu:zero_point_module', [
            '  PPPPP  ',
            '  PBCBP  ',
            '  PCBCP  ',
            '  PBCBP  ',
            '   ZZZ   ',
            '   ZFZ   ',
            '   ZFZ   ',
            '   ZZZ   ',
            '   PPP   '
        ], {
            B: 'kubejs:stabilized_berkelium',
            C: 'kubejs:stabilized_californium',
            F: 'gtceu:zpm_field_generator',
            P: 'nuclearcraft:plate_elite',
            Z: '#gtceu:circuits/zpm'
        }
    )

    // Creative Items //

    //Creative Vending Upgrade
    event.recipes.extendedcrafting.shaped_table(
        'storagedrawers:creative_storage_upgrade', [
            'ABCDEDCBA',
            'BCDEFEDCB',
            'CDEFGFEDC',
            'DEFGHGFED',
            'EFGHIHGFE',
            'DEFGHGFED',
            'CDEFGFEDC',
            'BCDEFEDCB',
            'ABCDEDCBA'
        ], {
            A: 'storagedrawers:emerald_storage_upgrade',
            B: 'sophisticatedstorage:gold_barrel',
            C: 'sophisticatedstorage:diamond_barrel',
            D: 'gtceu:tungsten_steel_crate',
            E: 'gtceu:luv_quantum_chest',
            F: 'gtceu:zpm_quantum_chest',
            G: 'gtceu:uv_quantum_chest',
            H: 'gtceu:uhv_quantum_chest',
            I: 'avaritia:infinity_catalyst'
        }
    )

    //Creative Energy Cell (AE2)
    event.recipes.extendedcrafting.shaped_table(
        'ae2:creative_energy_cell', [
            'ABCDEDCBA',
            'BCDEFEDCB',
            'CDEFGFEDC',
            'DEFGHGFED',
            'EFGHIHGFE',
            'DEFGHGFED',
            'CDEFGFEDC',
            'BCDEFEDCB',
            'ABCDEDCBA'
        ], {
            A: 'kubejs:ultimate_power_storage',
            B: 'gtceu:hv_battery_buffer_16x',
            C: 'gtceu:ev_battery_buffer_16x',
            D: 'gtceu:iv_battery_buffer_16x',
            E: 'gtceu:luv_battery_buffer_16x',
            F: 'gtceu:zpm_battery_buffer_16x',
            G: 'gtceu:uv_battery_buffer_16x',
            H: 'gtceu:uhv_battery_buffer_16x',
            I: 'avaritia:infinity_catalyst'
        }
    )

    //Creative Jetpack
    event.recipes.extendedcrafting.shaped_table(
        Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:creative"}').strongNBT(), [
            '  C   L  ',
            ' CCC LLL ',
            ' CVCFLEL ',
            ' CVCILEL ',
            ' CVCDLEL ',
            ' CVC LEL ',
            ' SSS HHH ',
            '  N   R  ',
            ' NNN RRR '
        ], {
            C: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:conductive_iron"}').strongNBT(),
            D: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:dark_soularium"}').strongNBT(),
            E: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:resonant"}').strongNBT(),
            F: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:fluxed"}').strongNBT(),
            H: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:hardened"}').strongNBT(),
            I: 'avaritia:infinity_catalyst',
            L: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:leadstone"}').strongNBT(),
            N: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:energetic"}').strongNBT(),
            R: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:reinforced"}').strongNBT(),
            S: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrical_steel"}').strongNBT(),
            V: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:vibrant"}').strongNBT()
        }
    )

    //Creative Solar Panel
    event.recipes.extendedcrafting.shaped_table(
        'solarflux:sp_avaritia.infinity', [
            'SNNNNNNNS',
            'NPPPNPPPN',
            'NPPPNPPPN',
            'NPPPNPPPN',
            'NNNNINNNN',
            'NPPPNPPPN',
            'NPPPNPPPN',
            'NPPPNPPPN',
            'SNNNNNNNS'
        ], {
            I: 'avaritia:infinity_catalyst',
            N: 'gtceu:neutronium_plate',
            P: 'kubejs:infinity_plate',
            S: 'solarflux:sp_avaritia.neutronium'

        }
    )


})