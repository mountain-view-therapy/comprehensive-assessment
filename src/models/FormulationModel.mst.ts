import { Instance, types } from "mobx-state-tree"

const FormulationModel = types.model('FormulationModel', {
    replacementText: types.array(types.string),
})

export default FormulationModel;
export interface Progress extends Instance<typeof FormulationModel> { }


