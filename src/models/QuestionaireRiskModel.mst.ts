import { Instance, types } from "mobx-state-tree"
import { RiskLevels } from "../state/constants"

const QuestionaireRiskModel = types.model('QuestionaireRiskodel', {
    clientInitials: types.string,
    noRisk: types.boolean,
    dangerToSelf: types.boolean,
    dangerToOthers: types.boolean,
    otherRisk: types.boolean,
    dangerToSelfRisk: types.enumeration('dangerToSelfRisk', ['Low', 'Medium', 'High']),
    dangerToOthersRisk: types.enumeration('dangerToOthersRisk', ['Low', 'Medium', 'High']),
    dangerToSelfEvidence: types.string,
    dangerToOthersEvidence: types.string,
    dangerToSelfPlan: types.string,
    dangerToOthersPlan: types.string,
    otherRiskInformation: types.string,
    commentOnIntakeQuestionare: types.string,
    intakeReviewDate: types.string,
}).actions((self) => {
    return {
        setClientInitials(intitals: string): void {
            self.clientInitials = intitals
        },
        setCommentOnIntakeQuestionaire(comment: string): void {
            self.commentOnIntakeQuestionare = comment
        },
        setIntakeReviewDate(date: string): void {
            self.intakeReviewDate = date;
        },
        setNoRisk(risk: boolean): void {
            self.noRisk = risk
        },
        setDangerToSelf(risk: boolean): void {
            self.dangerToSelf = risk
        },
        setDangerToOthers(risk: boolean): void {
            self.dangerToOthers = risk
        },
        setOtherRisk(risk: boolean): void {
            self.otherRisk = risk
        },
        setDangerToSelfRisk(risk: RiskLevels): void {
            self.dangerToSelfRisk = risk
        },
        setDangerToOthersRisk(risk: RiskLevels): void {
            self.dangerToOthersRisk = risk
        },
        setDangerToSelfEvidence(evidence: string): void {
            self.dangerToSelfEvidence = evidence
        },
        setDangerToOthersEvidence(evidence: string): void {
            self.dangerToOthersEvidence = evidence
        },
        setDangerToSelfPlan(plan: string): void {
            self.dangerToSelfPlan = plan
        },
        setDangerToOthersPlan(plan: string): void {
            self.dangerToOthersPlan = plan
        },
        setOtherRiskInformation(plan: string): void {
            self.otherRiskInformation = plan
        },




    }
})

export default QuestionaireRiskModel;


export interface QuestionaireRisk extends Instance<typeof QuestionaireRiskModel> { }
