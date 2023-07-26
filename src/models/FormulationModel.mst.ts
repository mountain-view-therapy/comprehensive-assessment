import { Instance, types } from "mobx-state-tree"

const FormulationModel = types.model('FormulationModel', {
    replacementText: types.array(types.string),
}).actions((self => {
    return {
        reset() {
            self.replacementText.splice(0, self.replacementText.length, "", "", "", "", ", ")
        },
    }
}))

export default FormulationModel;
export interface Progress extends Instance<typeof FormulationModel> { }


