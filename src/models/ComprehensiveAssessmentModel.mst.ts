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
}).actions((self) => {
    return {
        setClientInitials(intitals: string): void {
            self.clientInitials = intitals
        },
        setIdentifiedProblem(problem: string): void {
            self.identifiedProblem = problem
        },
        setReplacementText(replacementText: string, formulationIndex: number, replacementTextIndex: number): void {
            self.formulations[formulationIndex].replacementText[replacementTextIndex] = replacementText
        },
    }
})

export default ComprehensiveAssessmentModel;

export interface ComprehensiveAssessment extends Instance<typeof ComprehensiveAssessmentModel> { }
