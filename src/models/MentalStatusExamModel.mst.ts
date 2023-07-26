import { Instance, types } from "mobx-state-tree"
import {
    AffectStates,
    affectStates,
    AppearanceState,
    appearanceStates,
    AttentionStates,
    attentionStates,
    CognitiveFunctioningState,
    cognitiveFunctioningStates,
    FunctionalStatusStates,
    functionalStatusStates,
    InterpersonalStates,
    interpersonalStates,
    MemoryStates,
    memoryStates,
    MoodStates,
    moodStates,
    MotorActivityStates,
    motorActivityStates,
    OrientationStates,
    orientationStates,
    PerceptionState,
    perceptionStates,
} from "../state/constants"

const MentalStatusExamModel = types.model('MentalStatusExamModel', {
    affect: types.enumeration('affect', affectStates),
    attention: types.enumeration('attention', attentionStates),
    appearance: types.enumeration('appearance', appearanceStates),
    cognitiveFunctioning: types.enumeration('cognitiveFunctioning', cognitiveFunctioningStates),
    functionalStatus: types.enumeration('functionalStatus', functionalStatusStates),
    interpersonal: types.enumeration('interpersonal', interpersonalStates),
    memory: types.enumeration('memory', memoryStates),
    motorActivity: types.enumeration('motorActivity', motorActivityStates),
    mood: types.enumeration('mood', moodStates),
    orientation: types.enumeration('orientation', orientationStates),
    perception: types.enumeration('perception', perceptionStates),

}).actions((self) => {
    return {
        setCognitiveFunctioning(cognitiveFunctioningState: CognitiveFunctioningState): void {
            self.cognitiveFunctioning = cognitiveFunctioningState
        },
        setAffect(affect: AffectStates): void {
            self.affect = affect
        },
        setAppearance(appearance: AppearanceState): void {
            self.appearance = appearance
        },
        setAttention(attention: AttentionStates): void {
            self.attention = attention
        },
        setMemory(memory: MemoryStates): void {
            self.memory = memory
        },
        setMood(mood: MoodStates): void {
            self.mood = mood
        },
        setMotorActivity(motorActivity: MotorActivityStates): void {
            self.motorActivity = motorActivity
        },  
        setOrientation(orientation: OrientationStates): void {
            self.orientation = orientation
        },
        setPerception(perception: PerceptionState): void {
            self.perception = perception
        },  
        setInterpersonal(interpersonal: InterpersonalStates): void {
            self.interpersonal = interpersonal
        },
        setFunctionalStatus(functionalStatus: FunctionalStatusStates): void {
            self.functionalStatus = functionalStatus
        },
        reset(): void {
            self.appearance = "Typical"
            self.motorActivity = "Typical"
            self.affect = "Appropriate"
            self.mood = "Euthymic"
            self.orientation = "X3: person, place and time"
            self.memory = "Intact"
            self.attention = "Good"
            self.perception = "Typical"
            self.cognitiveFunctioning = "Oriented/Alert"
            self.functionalStatus = "Intact"
            self.interpersonal = "Interactive"
        }
    }
})

export default MentalStatusExamModel;


export interface MentalStatusExam extends Instance<typeof MentalStatusExamModel> { }
