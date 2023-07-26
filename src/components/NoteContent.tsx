import dayjs from 'dayjs-ext'
import timeZonePlugin from 'dayjs-ext/plugin/timeZone'
import { observer } from "mobx-react-lite"
import { useAppState } from "../state/provider"
import { possibleFormulations } from "../state/constants"

const NoteContent = () => {

    const { comprehensiveAssessment: {
        questionaireRisk: {
            intakeReviewDate,
            commentOnIntakeQuestionare,
            noRisk,
            dangerToSelf,
            dangerToOthers,
            otherRisk,
            dangerToSelfRisk,
            dangerToOthersRisk,
            dangerToSelfEvidence,
            dangerToOthersEvidence,
            dangerToSelfPlan,
            dangerToOthersPlan,
            otherRiskInformation,
        },
        mentalStatusExam: {
            appearance,
            motorActivity,
            affect,
            mood,
            orientation,
            memory,
            attention,
            perception,
            cognitiveFunctioning,
            functionalStatus,
            interpersonal,
        },
        diagnostics: {
            diagnoses
        },
        functioning: {
            selfCareAffected,
            selfCareSymptoms,
            otherSelfCareSymptoms,
            occupationAffected,
            occupationSymptoms,
            otherOccupationSymptoms,
            academicAffected,
            academicSymptoms,
            otherAcademicSymptoms,
            interpersonalAffected,
            interpersonalSymptoms,
            otherInterpersonalSymptoms,
            communitylAffected,
            communitySymptoms,
            otherCommunitySymptoms,
        },
        clientInitials,
        identifiedProblem,
        formulations,
    } } = useAppState()

    dayjs.extend(timeZonePlugin).locale('cs')

const showFormulations = clientInitials && identifiedProblem;

    const replaceClientsIntitals = (text: string) => {
        return text.replace('[CLIENT]', clientInitials)
    }

    return (
        <div>
            <div>Intake questionaire reviewed with {clientInitials} on {intakeReviewDate.toLocaleDateString()}.</div>
            {commentOnIntakeQuestionare ? commentOnIntakeQuestionare : "No comments on questionaire."}


            {(noRisk || dangerToOthers || dangerToSelf || otherRisk) &&
                <div>
                    <b>Risk Assessment: </b>
                    <ul>
                        {noRisk && <li>No Significant Risk Factors presented</li>}
                        {dangerToSelf &&
                            <li>
                                Danger to Self
                                <ul>
                                    <li>Risk Level: {dangerToSelfRisk}</li>
                                    <li>Evidence: {dangerToSelfEvidence}</li>
                                    <li>Plan: {dangerToSelfPlan}</li>
                                </ul>
                            </li>
                        }
                        {dangerToOthers &&
                            <li>
                                Danger to Others
                                <ul>
                                    <li>Risk Level: {dangerToOthersRisk}</li>
                                    <li>Evidence: {dangerToOthersEvidence}</li>
                                    <li>Plan: {dangerToOthersPlan}</li>
                                </ul>
                            </li>
                        }
                        {otherRisk &&
                            <li>
                                Other Risk
                                <ul>
                                    <li>Information: {otherRiskInformation}</li>
                                </ul>
                            </li>
                        }
                    </ul>
                </div>
            }

            <div><b>Mental Status Exam</b>
                <ul>
                    {appearance &&
                        <li>
                            <b>Appearance: </b> {appearance}
                        </li>
                    }

                    {motorActivity &&
                        <li>
                            <b>Motor Activity: </b> {motorActivity}
                        </li>
                    }
                    {affect &&
                        <li>
                            <b>Affect: </b> {affect}
                        </li>
                    }
                    {mood &&
                        <li>
                            <b>Mood: </b> {mood}
                        </li>
                    }
                    {orientation &&
                        <li>
                            <b>Orientation: </b> {orientation}
                        </li>
                    }
                    {memory &&
                        <li>
                            <b>Memory: </b> {memory}
                        </li>
                    }
                    {attention &&
                        <li>
                            <b>Attention: </b> {attention}
                        </li>
                    }
                    {perception &&
                        <li>
                            <b>Perception: </b> {perception}
                        </li>
                    }
                    {cognitiveFunctioning &&
                        <li>
                            <b>Cognitive Functioning: </b> {cognitiveFunctioning}
                        </li>
                    }
                    {functionalStatus &&
                        <li>
                            <b>Functional Status: </b> {functionalStatus}
                        </li>
                    }
                    {interpersonal &&
                        <li>
                            <b>Interpersonal: </b> {interpersonal}
                        </li>
                    }
                </ul>

            </div>

            <div>
                <p> </p>
                <b>Diagnoses</b>
                {diagnoses.map(diagnosis => <>
                    <p>{diagnosis.otherDiagnosisName || diagnosis.diagnosisName}</p>
                    <ul>
                        {diagnosis.symptoms.map(symptom =>
                            <li key={symptom}>
                                {symptom}
                            </li>
                        )
                        }
                        {diagnosis.otherSymptoms && <li>{diagnosis.otherSymptoms}</li>}
                    </ul>
                </>
                )}
            </div>


            {selfCareAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s self care.
                    {selfCareSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                    <span> {otherSelfCareSymptoms} </span>
                </p>
            }
            {occupationAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s occupational functioning.
                    {occupationSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                    <span> {otherOccupationSymptoms} </span>
                </p>
            }
            {academicAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s academic functioning.
                    {academicSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                    <span> {otherAcademicSymptoms} </span>
                </p>
            }
            {interpersonalAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s interpersonal functioning.
                    {interpersonalSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                    <span> {otherInterpersonalSymptoms} </span>
                </p>
            }
            {communitylAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s community functioning.
                    {communitySymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                    <span> {otherCommunitySymptoms} </span>
                </p>
            }

            <div><b>Clinical Formulation</b></div>
            {showFormulations && possibleFormulations.map((formulation, index) => {
                return formulation.map(section => {
                    switch (section.type) {
                        case "TEXT":
                            return <span>{section.text && section.text.length > 1 ? " " + section.text :  section.text}</span>
                        case "CLIENT":
                            return <span> {clientInitials}</span>
                        case "ISSUE":
                            return <span> {identifiedProblem}</span>
                        case "REPLACEMENT":
                            return <span> {formulations[index].replacementText[section.index || 0]}</span>
                        default:
                            return null
                    }
                })
            })}

        </div >
    )

}

export default observer(NoteContent)