import { Instance, types } from "mobx-state-tree"
import { possibleProgressions } from "../state/constants"
import FunctioningModel from "./Functioning.mst"
import QuestionaireRiskModel from "./QuestionaireRiskModel.mst"
import MentalStatusExamModel from "./MentalStatusExamModel.mst"
import ProgressModel from "./ProgressModel.mst"
import DiagnosticModel from "./DiagnosticModel.mst"


const MeetingInformationModel = types.model('MeetingInformationModel', {
    questionaireRisk: QuestionaireRiskModel,
    mentalStatusExam: MentalStatusExamModel,
    diagnostics: DiagnosticModel,
    functioning: FunctioningModel,
    progressions: types.array(ProgressModel),
    otherProgressions: types.array(types.string),
    identifiedProblem: types.string,
}).actions((self) => {
    return {
        setProgress(progressIndex: number, value: boolean): void {
            const progress = self.progressions.find(i => i.possibleProgressIndex === progressIndex)
            if (value === false) {
                if (progress) {
                    progress.checked = false
                }
            } else {
                if (!progress) {
                    self.progressions.push({
                        possibleProgressIndex: progressIndex,
                        text: possibleProgressions[progressIndex].text,
                        replacementText: "",
                        checked: true,
                    })
                } else {
                    progress.checked = true
                }
            }
        },
        setOtherProgression(index: number, progression: string): void {
            self.otherProgressions[index] = progression
        },
        addOtherProgression(): void {
            self.otherProgressions.push("")
        },
        removeOtherProgression(index: number): void {
            self.otherProgressions.replace(self.otherProgressions.filter((int, idx) => idx !== index))
        },
        setProgressReplacementText(index: number, text: string): void {
            const progress = self.progressions.find(i => i.possibleProgressIndex === index)
            if (progress) {
                progress.replacementText = text
            }
        },
        setIdentifedProblem(problem: string): void {
            self.identifiedProblem = problem
        },
    }
})

export default MeetingInformationModel;


export interface MeetingInformation extends Instance<typeof MeetingInformationModel> { }
