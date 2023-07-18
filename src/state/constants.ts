import FormulationModel from "../models/FormulationModel.mst"


export const appearanceStates = [
    "Typical",
    "Disheveled",
    "Emaciated",
    "Poor Hygiene",
    "Not Assessed",
]
export type AppearanceState = typeof appearanceStates[number]

export const motorActivityStates = [
    "Typical",
    "Agitation",
    "Retardation",
    "Posturing",
    "Repetitive Actions",
    "Tics",
    "Tremors",
    "Not Assessed",
]
export type MotorActivityStates = typeof motorActivityStates[number]

export const affectStates = [
    "Appropriate",
    "Inappropriate",
    "Labile",
    "Constricted",
    "Blunted",
    "Flat",
    "Not Assessed",
]
export type AffectStates = typeof affectStates[number]

export const moodStates = [
    "Euthymic",
    "Depressed",
    "Dysphoric",
    "Anxious",
    "Angry",
    "Euphoric",
    "Not Assessed"
]
export type MoodStates = typeof moodStates[number]

export const orientationStates = [
    "X3: person, place and time",
    "X2: person, place",
    "X2: person, time",
    "X2: time, place",
    "X1: person",
    "X1: place",
    "X1: time",
    "X0: Not oriented to person, place and time",
    "Not Assessed",
]
export type OrientationStates = typeof orientationStates[number]

export const memoryStates = [
    "Intact",
    "Poor remote",
    "Poor recent",
    "Not Assessed",
]
export type MemoryStates = typeof memoryStates[number]

export const attentionStates = [
    "Good",
    "Distractible",
    "Variable",
    "Not Assessed",
]
export type AttentionStates = typeof attentionStates[number]

export const perceptionStates = [
    "Typical",
    "Auditory hallucinations",
    "Tactile hallucinations",
    "Visual hallucinations",
    "Not Assessed",
]
export type PerceptionState = typeof perceptionStates[number]

export const cognitiveFunctioningStates = [
    "Oriented/Alert",
    "Disorganized",
    "Tangential",
    "Preoccupied",
    "Circumstantial",
    "Not Assessed",
]
export type CognitiveFunctioningState = typeof cognitiveFunctioningStates[number]

export const functionalStatusStates = [
    "Intact",
    "Impaired",
    "Variably Impaired",
    "Not Assessed",
]
export type FunctionalStatusStates = typeof interpersonalStates[number]



export const interpersonalStates = [
    "Interactive",
    "Intermittently Interactive",
    "Guarded",
    "Withdrawn",
    "Hostile",
    "Not Assessed",
]
export type InterpersonalStates = typeof interpersonalStates[number]



export const riskLevels = [
    "Low",
    "Medium",
    "High",
]
export type RiskLevels = typeof riskLevels[number]




export const possibleSelfCareSymptoms = [
    "[CLIENT] is getting inadequate sleep, only 5 hours per night",
    "[CLIENT] is only eating 1 meal per day",
    "[CLIENT] is only showering twice a week when they\"d prefer to shower daily",
]
export type PossibleSelfCareSymptom = typeof possibleSelfCareSymptoms[number]


export const possibleOccupationSymptoms = [
    "[CLIENT] is getting in frequent arguments with coworkers",
    "[CLIENT] is frequently late to work",
    "[CLIENT] frequently misses work",
    "[CLIENT] has received a written warning at work",
    "[CLIENT] is at risk of losing job",
]
export type PossibleOccupationSymptom = typeof possibleOccupationSymptoms[number]


export const possibleAcademicSymptoms = [
    "[CLIENT] frequently arrives late to school",
    "[CLIENT] frequently misses school",
    "[CLIENT] lack of school attendance is negatively affecting grades",
    "[CLIENT] unable to keep up with coursework",
    "[CLIENT] is engaged in fights at school every month",
]
export type PossibleAcademicSymptom = typeof possibleAcademicSymptoms[number]

export const possibleInterpersonalSymptoms = [
    "[CLIENT] is getting in frequent arguments with partner",
    "[CLIENT] has frequent arguments with family members",
    "[CLIENT] has frequent arguments with friends",
    "[CLIENT] is unable to partake in family obligations",
]
export type PossibleInterpersonalSymptom = typeof possibleInterpersonalSymptoms[number]

export const possibleCommunitySymptoms = [
    "[CLIENT] has been unable to attend community functions",
    "[CLIENT] has been unable to fulfill community obligations",
]
export type PossibleCommunitySymptom = typeof possibleCommunitySymptoms[number]

export const possibleDiagnosis = [
    "F41.1 Generalized Anxiety Disorder",
    "F33.1 Major Depressive Disorder, recurrent, moderate",
    "F43.10 Posttraumatic Stress Disorder",
    "Other",
]
export type PossibleDiagnosis = typeof possibleDiagnosis[number]

export const possibleSymptoms = {
    "F41.1 Generalized Anxiety Disorder": [
        "excessive worry that is difficult to control",
        "constantly feeling on edge",
        "restlessness",
        "racing thoughts",
        "insomnia",
        "shortness of breath",
        "heart palpitations",
        "dry mouth",
        "difficulty concentrating",
        "trouble falling asleep",
        "trouble staying asleep",
        "general state of irritability",
    ],

    "F33.1 Major Depressive Disorder, recurrent, moderate": [
        "depressed mood",
        "irritable mood",
        "diminished interest or enjoyment in activities",
        "sleeplessness",
        "hypersomnia",
        "fatigue/lack of energy",
        "difficulty thinking or concentrating",
        "indecisiveness",
        "social withdrawal",
        "feelings of hopelessness and worthlessness",
        "feelings of inappropriate guilt",
        "lack of appetite",
        "recurrent suicidal ideation",
    ],
    "F43.10 Posttraumatic Stress Disorder": [
        "intrusive thoughts or memories of the traumatic event",
        "difficulty sleeping",
        "nightmares",
        "flashbacks",
        "hypervigilance",
        "difficulty concentrating",
        "avoidance of reminders of the traumatic event",
        "being easily startled",
        "feelings of guilt/shame",
        "feelings of hopelessness",
        "intense distress when exposed to reminders of the traumatic event",
    ],
}

export type PossibleAnxietySymptom = typeof possibleSymptoms["F41.1 Generalized Anxiety Disorder"][number]
export type PossibleDepressionSymptom = typeof possibleSymptoms["F33.1 Major Depressive Disorder, recurrent, moderate"][number]
export type PossiblePTSDSymptom = typeof possibleSymptoms["F43.10 Posttraumatic Stress Disorder"][number]
export type PossibleSymptom = PossibleAnxietySymptom | PossibleDepressionSymptom | PossiblePTSDSymptom

export const possibleFormulations = [
[
    {type: "CLIENT"},
    {type: "TEXT", text: "is a"},
    {type: "REPLACEMENT", prompt: "age", index: 0},
    {type: "TEXT", text: "years old"},
    {type: "REPLACEMENT", prompt: "race", index: 1},
    {type: "REPLACEMENT", prompt: "gender", index: 2},
    {type: "TEXT", text: "living in"},
    {type: "REPLACEMENT", prompt: "city, state", index: 3},
    {type: "TEXT", text: "."},
],
[
    {type: "CLIENT"},
    {type: "TEXT", text: "lives"},
    {type: "REPLACEMENT", prompt: "alone or list other's living in the home", index: 4},
    {type: "TEXT", text: "."},

],
[
    {type: "CLIENT"},
    {type: "TEXT", text: "came to us wanting to change"},
    {type: "PRONOUN POSSESSIVE"},
    {type: "TEXT", text: "relationship with"},
    {type: "ISSUE"},
    {type: "TEXT", text: ", specifically how it was effecting"},
    {type: "REPLACEMENT", prompt: "experience near description of how problem is effecting life", index: 0},
],
[
    {type: "ISSUE"},
    {type: "TEXT", text: "has"},
    {type: "CLIENT"},
    {type: "TEXT", text: "thinking that"},
    {type: "PRONOUN OBJECT"},
    {type: "REPLACEMENT", prompt: "what does the problem have the person served thinking about themself", index: 0},

],
[
    {type: "CLIENT"},
    {type: "TEXT", text: "is"},
    {type: "REPLACEMENT", prompt: "ok, not ok", index: 0},
    {type: "TEXT", text: "with the story being promoted by"},
    {type: "ISSUE"},

],
[
    {type: "CLIENT"},
    {type: "TEXT", text: "hopes to come up with ways to counter the ideas"},
    {type: "ISSUE"},
    {type: "TEXT", text: "is promoting."},

],
[
    {type: "CLIENT"},
    {type: "TEXT", text: "has a history with"},
    {type: "ISSUE"},
    {type: "TEXT", text: "so has developed strategies to help counter its effects including:"},
    {type: "REPLACEMENT", prompt: "list knowledges/stratgies that will help counter problem", index: 0},

],
[
    {type: "CLIENT"},
    {type: "TEXT", text: "has"}, 
    {type: "REPLACEMENT", prompt: "list social supports", index: 0},
    {type: "TEXT", text: "to help"}, 
    {type: "PRONOUN OBJECT"},
    {type: "TEXT", text: "stand up to"},
    {type: "ISSUE"},
    {type: "TEXT", text: "’s effects."}, 

],
[
    {type: "TEXT", text: "In our work together we hope to look into the possible different stories about"},
    {type: "CLIENT"},
    {type: "TEXT", text: "and"},
    {type: "ISSUE"},
    {type: "TEXT", text: "by using narrative practice of problem deconstruction and alternative story development."},

],
[
    {type: "TEXT", text: "We might also explore cultural discourses effecting"},
    {type: "PRONOUN OBJECT"},
    {type: "TEXT", text: "relationship with"},
    {type: "ISSUE"},
    {type: "TEXT", text: "."},

],
[
    {type: "CLIENT"},
    {type: "TEXT", text: "seems committed to having a more preferred relationship with"},
    {type: "ISSUE"},
    {type: "TEXT", text: "to reduce the effects in"},
    {type: "PRONOUN POSSESSIVE"},
    {type: "TEXT", text: "life."},

]
]


export const initialState = {
    comprehensiveAssessment: {
        questionaireRisk: {
            intakeReviewDate: new Date(),
            commentOnIntakeQuestionare: "",
            noRisk: false,
            dangerToSelf: false,
            dangerToOthers: false,
            otherRisk: false,
            dangerToSelfRisk: "Low",
            dangerToOthersRisk: "Low",
            dangerToSelfEvidence: "",
            dangerToOthersEvidence: "",
            dangerToSelfPlan: "",
            dangerToOthersPlan: "",
            otherRiskInformation: "",
        },
        mentalStatusExam: {
            appearance:"Typical",
            motorActivity: "Typical",
            affect: "Appropriate",
            mood: "Euthymic",
            orientation: "X3: person, place and time",
            memory: "Intact",
            attention: "Good",
            perception: "Typical",
            cognitiveFunctioning: "Oriented/Alert",
            functionalStatus: "Intact",
            interpersonal: "Interactive",


        },
        diagnostics: {
            diagnoses: [],
            anxietySymptoms: [],
            depressionSymptoms: [],
            ptsdSymptoms: [],
            otherSymptoms: [],
            groupSymptomsTogether: false,
            selfCareAffected: false,
            selfCareSymptoms: [],
            otherSelfCareSymptoms: "",
            occupationAffected: false,
            occupationSymptoms: [],
            otherOccupationSymptoms: "",
            academicAffected: false,
            academicSymptoms: [],
            otherAcademicSymptoms: "",
            interpersonalAffected: false,
            interpersonalSymptoms: [],
            otherInterpersonalSymptoms: "",
            communitylAffected: false,
            communitySymptoms: [],
            otherCommunitySymptoms: "",
        },
        functioning: {
            selfCareAffected: false,
            selfCareSymptoms: [],
            otherSelfCareSymptoms: "",
            occupationAffected: false,
            occupationSymptoms: [],
            otherOccupationSymptoms: "",
            academicAffected: false,
            academicSymptoms: [],
            otherAcademicSymptoms: "",
            interpersonalAffected: false,
            interpersonalSymptoms: [],
            otherInterpersonalSymptoms: "",
            communitylAffected: false,
            communitySymptoms: [],
            otherCommunitySymptoms: "",
        },
        clientInitials: "",
        pronouns: "",
        identifiedProblem: "",
        formulations: [
            FormulationModel.create({replacementText: ["","","","","",""]}),
            FormulationModel.create({replacementText: ["","","","","",""]}),
            FormulationModel.create({replacementText: ["","","","","",""]}),
            FormulationModel.create({replacementText: ["","","","","",""]}),
            FormulationModel.create({replacementText: ["","","","","",""]}),
            FormulationModel.create({replacementText: ["","","","","",""]}),
            FormulationModel.create({replacementText: ["","","","","",""]}),
            FormulationModel.create({replacementText: ["","","","","",""]}),
            FormulationModel.create({replacementText: ["","","","","",""]}),
        ]
    },
    currentTab: "/meeting-logstics",
}