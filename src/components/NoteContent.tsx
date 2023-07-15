import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import dayjs from 'dayjs-ext'
import timeZonePlugin from 'dayjs-ext/plugin/timeZone'
import { observer } from "mobx-react-lite"
import { useAppState } from "../state/provider"

const NoteContent = () => {

    const { meetingInformation: {
        questionaireRisk: {
            clientInitials,
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
            cognitiveFunctioning,
            affect,
            mood,
            interpersonal,
            functionalStatus,

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
        progressions,
        otherProgressions,
        identifiedProblem,
    } } = useAppState()

    dayjs.extend(timeZonePlugin).locale('cs')

    const replaceText = (text: string, replacementText: string) => {
        return text.replace('[PROBLEM]', identifiedProblem).replace('[CLIENT]', clientInitials).replace('[REPLACEMENT]', replacementText)
    }

    const replaceClientsIntitals = (text: string) => {
        return text.replace('[CLIENT]', clientInitials)
    }

    return (
        <div>
            <div><b>Mental Status Exam</b>
                <ul>
                    {cognitiveFunctioning &&
                        <li>
                            <b>Cognitive Functioning: </b> {cognitiveFunctioning}
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
                    {interpersonal &&
                        <li>
                            <b>Interpersonal: </b> {interpersonal}
                        </li>
                    }
                    {functionalStatus &&
                        <li>
                            <b>Functional Status: </b> {functionalStatus}
                        </li>
                    }
                </ul>

                {(noRisk || dangerToOthers || dangerToSelf || otherRisk) &&
                    <>
                        <b>Risk Status: </b>
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
                    </>
                }
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


            {(progressions.length > 0 || otherProgressions.length > 1 || otherProgressions[0].length > 0) &&
                <b>Progress Towards Goals:</b>
            }
            {progressions.filter(i => i.checked).map(progress => (
                <p key={progress.text}>{replaceText(progress.text, progress.replacementText)}</p>
            ))}
            {otherProgressions.map(progress => (
                <p key={progress}>{progress}</p>
            ))}


        </div >
    )

}

export default observer(NoteContent)