import { Instance, types } from "mobx-state-tree"
import {
    AffectStates,
    affectStates,
    CognitiveFunctioningState,
    cognitiveFunctioningStates,
    FunctionalStatusStates,
    functionalStatusStates,
    InterpersonalStates,
    interpersonalStates,
    MoodStates,
    moodStates,
} from "../state/constants"

const MentalStatusExamModel = types.model('MentalStatusExamModel', {
    cognitiveFunctioning: types.enumeration('cognitiveFunctioning', cognitiveFunctioningStates),
    affect: types.enumeration('affect', affectStates),
    mood: types.enumeration('mood', moodStates),
    interpersonal: types.enumeration('interpersonal', interpersonalStates),
    functionalStatus: types.enumeration('functionalStatus', functionalStatusStates),

}).actions((self) => {
    return {
        setCognitiveFunctioning(cognitiveFunctioningState: CognitiveFunctioningState): void {
            self.cognitiveFunctioning = cognitiveFunctioningState
        },
        setAffect(affect: AffectStates): void {
            self.affect = affect
        },
        setMood(mood: MoodStates): void {
            self.mood = mood
        },
        setInterpersonal(interpersonal: InterpersonalStates): void {
            self.interpersonal = interpersonal
        },
        setFunctionalStatus(functionalStatus: FunctionalStatusStates): void {
            self.functionalStatus = functionalStatus
        },
    }
})

export default MentalStatusExamModel;


export interface MentalStatusExam extends Instance<typeof MentalStatusExamModel> { }
