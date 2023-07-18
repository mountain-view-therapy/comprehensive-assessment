import { Instance, types } from "mobx-state-tree"
import FunctioningModel from "./Functioning.mst"
import QuestionaireRiskModel from "./QuestionaireRiskModel.mst"
import MentalStatusExamModel from "./MentalStatusExamModel.mst"
import FormulationModel from "./FormulationModel.mst"
import DiagnosticModel from "./DiagnosticModel.mst"


const ComprehensiveAssessmentModel = types.model('ComprehensiveAssessmentModel', {
    questionaireRisk: QuestionaireRiskModel,
    mentalStatusExam: MentalStatusExamModel,
    diagnostics: DiagnosticModel,
    functioning: FunctioningModel,
    formulations: types.array(FormulationModel),
    otherProgressions: types.array(types.string),
    identifiedProblem: types.string,
    clientInitials: types.string,
    pronouns: types.string,
}).actions((self) => {
    return {
        setClientInitials(intitals: string): void {
            self.clientInitials = intitals
        },
        setPronouns(pronouns: string): void {
            self.pronouns = pronouns
        },
        setIdentifiedProblem(problem: string): void {
            self.identifiedProblem = problem
        },
        setReplacementText(replacementText: string, formulationIndex: number, replacementTextIndex: number): void {
            console.log("replacementText: ", replacementText)
            console.log("formulationIndex: ", formulationIndex)
            console.log("replacementTextIndex: ", replacementTextIndex)
            self.formulations[formulationIndex].replacementText[replacementTextIndex] = replacementText
        },
        // setProgress(progressIndex: number, value: boolean): void {
        //     const progress = self.progressions.find(i => i.possibleProgressIndex === progressIndex)
        //     if (value === false) {
        //         if (progress) {
        //             progress.checked = false
        //         }
        //     } else {
        //         if (!progress) {
        //             self.progressions.push({
        //                 possibleProgressIndex: progressIndex,
        //                 text: possibleProgressions[progressIndex].text,
        //                 replacementText: "",
        //                 checked: true,
        //             })
        //         } else {
        //             progress.checked = true
        //         }
        //     }
        // },
        // setOtherProgression(index: number, progression: string): void {
        //     self.otherProgressions[index] = progression
        // },
        // addOtherProgression(): void {
        //     self.otherProgressions.push("")
        // },
        // removeOtherProgression(index: number): void {
        //     self.otherProgressions.replace(self.otherProgressions.filter((int, idx) => idx !== index))
        // },
        // setProgressReplacementText(index: number, text: string): void {
        //     const progress = self.progressions.find(i => i.possibleProgressIndex === index)
        //     if (progress) {
        //         progress.replacementText = text
        //     }
        // },
        // setIdentifedProblem(problem: string): void {
        //     self.identifiedProblem = problem
        // },
    }
})

export default ComprehensiveAssessmentModel;


export interface ComprehensiveAssessment extends Instance<typeof ComprehensiveAssessmentModel> { }
