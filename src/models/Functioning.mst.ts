import { Instance, types } from "mobx-state-tree"
import {
    PossibleAcademicSymptom,
    PossibleCommunitySymptom,
    PossibleInterpersonalSymptom,
    PossibleOccupationSymptom,
    PossibleSelfCareSymptom,
} from "../state/constants"

const FunctioningModel = types.model('SymptomsModel', {
    selfCareAffected: types.boolean,
    selfCareSymptoms: types.array(types.string),
    otherSelfCareSymptoms: types.string,
    occupationAffected: types.boolean,
    occupationSymptoms: types.array(types.string),
    otherOccupationSymptoms: types.string,
    academicAffected: types.boolean,
    academicSymptoms: types.array(types.string),
    otherAcademicSymptoms: types.string,
    interpersonalAffected: types.boolean,
    interpersonalSymptoms: types.array(types.string),
    otherInterpersonalSymptoms: types.string,
    communitylAffected: types.boolean,
    communitySymptoms: types.array(types.string),
    otherCommunitySymptoms: types.string,
}).actions((self) => {
    return {
        setSelfCareAffected(selfCareAffected: boolean): void {
            self.selfCareAffected = selfCareAffected
        },
        setSelfCareSymptom(symptom: PossibleSelfCareSymptom, value: boolean): void {
            if (value === true) {
                if (!self.selfCareSymptoms.includes(symptom)) {
                    self.selfCareSymptoms.push(symptom)
                }
            } else {
                self.selfCareSymptoms.replace(self.selfCareSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherSelfCareSymptoms(symptoms: string): void {
            self.otherSelfCareSymptoms = symptoms
        },
        setOccupationAffected(occupationAffected: boolean): void {
            self.occupationAffected = occupationAffected
        },
        setOccupationSymptom(symptom: PossibleOccupationSymptom, value: boolean): void {
            if (value === true) {
                if (!self.occupationSymptoms.includes(symptom)) {
                    self.occupationSymptoms.push(symptom)
                }
            } else {
                self.occupationSymptoms.replace(self.occupationSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherOccupationSymptoms(symptoms: string): void {
            self.otherOccupationSymptoms = symptoms
        },
        setAcademicAffected(academicAffected: boolean): void {
            self.academicAffected = academicAffected
        },
        setAcademicSymptom(symptom: PossibleAcademicSymptom, value: boolean): void {
            if (value === true) {
                if (!self.academicSymptoms.includes(symptom)) {
                    self.academicSymptoms.push(symptom)
                }
            } else {
                self.academicSymptoms.replace(self.academicSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherAcademicSymptoms(symptoms: string): void {
            self.otherAcademicSymptoms = symptoms
        },
        setInterpersonalAffected(interpersonalAffected: boolean): void {
            self.interpersonalAffected = interpersonalAffected
        },
        setInterpersonalSymptom(symptom: PossibleInterpersonalSymptom, value: boolean): void {
            if (value === true) {
                if (!self.interpersonalSymptoms.includes(symptom)) {
                    self.interpersonalSymptoms.push(symptom)
                }
            } else {
                self.interpersonalSymptoms.replace(self.interpersonalSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherInterpersonalSymptoms(symptoms: string): void {
            self.otherInterpersonalSymptoms = symptoms
        },
        setCommunityAffected(communityAffected: boolean): void {
            self.communitylAffected = communityAffected
        },
        setCommunitySymptom(symptom: PossibleCommunitySymptom, value: boolean): void {
            if (value === true) {
                if (!self.communitySymptoms.includes(symptom)) {
                    self.communitySymptoms.push(symptom)
                }
            } else {
                self.communitySymptoms.replace(self.communitySymptoms.filter(s => s !== symptom))
            }
        },
        setOtherCommunitySymptoms(symptoms: string): void {
            self.otherCommunitySymptoms = symptoms
        },
        reset(): void {
            self.selfCareAffected =  false
            self.selfCareSymptoms.clear()
            self.otherSelfCareSymptoms = ""
            self.occupationAffected = false
            self.occupationSymptoms.clear()
            self.otherOccupationSymptoms = ""
            self.academicAffected = false
            self.academicSymptoms.clear()
            self.otherAcademicSymptoms = ""
            self.interpersonalAffected = false
            self.interpersonalSymptoms.clear()
            self.otherInterpersonalSymptoms = ""
            self.communitylAffected = false
            self.communitySymptoms.clear()
            self.otherCommunitySymptoms = ""
        }
    }
})

export default FunctioningModel;


export interface Functioning extends Instance<typeof FunctioningModel> { }
