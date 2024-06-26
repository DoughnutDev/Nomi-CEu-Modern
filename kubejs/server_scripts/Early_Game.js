const JSONObject = Java.loadClass('com.google.gson.JsonObject')
const FluidIngredientJS = Java.loadClass('com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS')

ServerEvents.recipes(event => {
    // Ender Pearls
    event.recipes.gtceu.alloy_smelter("pulsating_ender_pearl")
        .itemInputs("minecraft:diamond", "kubejs:pulsating_dust")
        .itemOutputs("minecraft:ender_pearl")
        .duration(300)
        .EUt(16)

    // May as well remove ender dust usage while we're at it
    event.remove({ id: "miniutilities:ender_dust_to_ender_pearl" })

    var plantMaterial = ["#minecraft:leaves", "#minecraft:saplings", "minecraft:vine"]
    plantMaterial.forEach(ballIngredient => {
        event.shaped(
            "gtceu:plant_ball", [
            'AAA',
            'A A',
            'AAA'
        ], {
            A: ballIngredient
        }
        )
    });

    // Hand-crushing
    event.shapeless("minecraft:gravel", ["minecraft:cobblestone", "#forge:tools/mortars"])
    event.shapeless("minecraft:sand", ["minecraft:gravel", "#forge:tools/hammers"])
    event.shapeless("kubejs:dust", ["minecraft:sand", "#forge:tools/hammers"])

    // EIO Solar
    event.recipes.gtceu.alloy_smelter("photovoltaic_plate")
        .itemInputs("2x enderio:photovoltaic_composite", "gtceu:electrical_steel_plate")
        .itemOutputs("enderio:photovoltaic_plate")
        .duration(180)
        .EUt(16)

    // Solar composite
    event.shapeless("3x enderio:photovoltaic_composite", ["gtceu:lapis_dust", "gtceu:coal_dust", "gtceu:silicon_dust"]).id('enderio:photovoltaic_composite')

    // Drawers
    event.remove({ id: "storagedrawers:controller" })
    event.shaped(
        "storagedrawers:obsidian_storage_upgrade", [
        'SSS',
        'CUC',
        'SSS'
    ], {
        S: "minecraft:stick",
        C: "minecraft:coal",
        U: "storagedrawers:upgrade_template"
    }
    ).id('storagedrawers:obsidian_storage_upgrade')
    event.shaped(
        "storagedrawers:compacting_drawers_3", [
        'III',
        'PDP',
        'III'
    ], {
        I: "gtceu:iron_plate",
        P: "gtceu:lv_electric_piston",
        D: "#storagedrawers:drawers"
    }
    ).id('storagedrawers:compacting_drawers_3')
    event.shaped(
        "storagedrawers:controller_slave", [
        'III',
        'CDC',
        'IGI'
    ], {
        I: "gtceu:iron_plate",
        C: "#gtceu:circuits/lv",
        D: "#storagedrawers:drawers",
        G: "minecraft:gold_block"
    }
    ).id('storagedrawers:controller_slave')

    var controllerCore = ["minecraft:diamond_block", "minecraft:emerald_block"]
    controllerCore.forEach(coreBlock => {
        event.shaped(
            "storagedrawers:controller", [
            'III',
            'CDC',
            'IEI'
        ], {
            I: "gtceu:iron_plate",
            C: "#gtceu:circuits/lv",
            D: "#storagedrawers:drawers",
            E: coreBlock
        }
        )
    })

    event.remove({ id: 'gtceu:assembler/phenolic_board' })
    event.recipes.gtceu.chemical_reactor('phenolic_board')
        .itemInputs('gtceu:resin_circuit_board')
        .inputFluids('gtceu:phenol 100')
        .itemOutputs('gtceu:phenolic_circuit_board')
        .duration(100)
        .EUt(8)


    //phenol

		let steam = new JSONObject()
		steam.add('amount', 4000)
		steam.add('value', {tag:'forge:steam'})
		

		//Look at the top of the script to see where FluidIngredientJS is defined
    event.recipes.gtceu.pyrolyse_oven('phenol_coal')
        .itemInputs('16x minecraft:coal')
        .inputFluids(FluidIngredientJS.of(steam))
        .itemOutputs('20x gtceu:coke_gem')
        .outputFluids('gtceu:phenol 1000')
        .circuit(14)
        .duration(600)
        .EUt(30)

    event.recipes.gtceu.pyrolyse_oven('phenol_coal_dust')
        .itemInputs('16x gtceu:coal_dust')
        .inputFluids(FluidIngredientJS.of(steam))
        .itemOutputs('20x gtceu:coke_dust')
        .outputFluids('gtceu:phenol 1000')
        .circuit(14)
        .duration(600)
        .EUt(30)

    // Pyro Oven
    event.shaped(
        'gtceu:pyrolyse_oven', [
        'PCW',
        'CHC',
        'PUW'
    ], {
        P: 'gtceu:lv_electric_piston',
        C: '#gtceu:circuits/lv',
        U: 'gtceu:lv_electric_pump',
        W: 'gtceu:cupronickel_quadruple_wire',
        H: 'gtceu:ulv_machine_hull'
    }
    ).id('gtceu:shaped/pyrolyse_oven')

    //Toolbelts
    event.replaceInput({ output: 'toolbelt:pouch' }, 'minecraft:gold_ingot', 'gtceu:steel_ingot')

})