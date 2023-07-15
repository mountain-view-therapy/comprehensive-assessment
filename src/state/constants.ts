

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
    "X3: Oriented to person, place and time",
    "X2: Oriented to person, place",
    "X2: Oriented to person, time",
    "X2: Oriented to time, place",
    "X1: Oriented to person",
    "X1: Oriented to place",
    "X1: Oriented to time",
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



export const possibleProgressions = [
    {
        text: "[CLIENT] has maintained current level of functioning in relation to [PROBLEM]’s influence.",
    },
    { text: "[CLIENT] consistently speaks about [PROBLEM] in externalized language during therapy meetings.", },
    {
        text: "[CLIENT] identified and verbalized an experience-near name for the problem, [REPLACEMENT].",
        prompt: "[state name]",
    },
    {
        text: "[CLIENT] described the effects of [PROBLEM] including [REPLACEMENT]",
        prompt: "[list effects identified]",
    },
    {
        text: "[CLIENT] described tactics used by [PROBLEM] including [REPLACEMENT]",
        prompt: "[list tactics identified]"
    },
    {
        text: "[CLIENT] described past experiences that support or sustain the problematic relationship with [PROBLEM] including [REPLACEMENT]",
        prompt: "[name experiences]",
    },
    {
        text: "[CLIENT] identified people that support or sustain the problematic relationship with [PROBLEM] including [REPLACEMENT]",
        prompt: "[name people]",
    },
    {
        text: "[CLIENT] described situations that support or sustain the problematic relationship with [PROBLEM] including [REPLACEMENT]",
        prompt: "[name situations]",
    },
    {
        text: "[CLIENT] described cultural discourses that support and sustain their relationship with [PROBLEM] including [REPLACEMENT]",
        prompt: "[name discourses]",
    },
    {
        text: "[CLIENT] named and richly described  their values/preferences in relationship to [PROBLEM] including [REPLACEMENT]",
        prompt: "[name values/preferences]",
    },
    {
        text: "[CLIENT] named and richly described strategies that counter [PROBLEM] including [REPLACEMENT]",
        prompt: "[list strategies]"
    },
    {
        text: "[CLIENT] practiced strategies that counter [PROBLEM] including [REPLACEMENT]",
        prompt: "[list strategies]"
    },
    {
        text: "[CLIENT] named and richly described times when [PROBLEM] had less influence including [REPLACEMENT]",
        prompt: "[name times when problem had less influence]"
    },
    {
        text: "[CLIENT] described actions they have taken to support their preferred narrative including [REPLACEMENT]",
        prompt: "[list actions]",
    },
    {
        text: "[CLIENT] described situations that support their preferred narrative including [REPLACEMENT]",
        prompt: "[list situations]",
    },
    {
        text: "[CLIENT] identified [REPLACEMENT] as a person who will support their preferred narrative.",
        prompt: "[name person]",
    },
    {
        text: "[CLIENT] identified [REPLACEMENT] as people who will support their preferred narrative.",
        prompt: "[name group of people]",
    },
    {
        text: "[CLIENT] described past experiences that support their preferred narrative including [REPLACEMENT]",
        prompt: "[list experiences]",
    },
    {
        text: "[CLIENT] considered how their preferred narrative fits their cultural context ([REPLACEMENT]).",
        prompt: "[name discouses discussed]",
    },
    { text: "[CLIENT] named and richly described their preferred narrative incorporating their stated values and preferences." },
    {
        text: "[CLIENT] reported the were able to counter [PROBLEM] by [REPLACEMENT].",
        prompt: "[how where they able to counter the problem?]",
    },
    {
        text: "[CLIENT] connected with [REPLACEMENT] to help support their preferred narrative.",
        prompt: "[name person/people]."
    },
    {
        text: "[CLIENT] learned and implemented behavioral strategies to exert acute control over relationship with [PROBLEM] including [REPLACEMENT]",
        prompt: "[list strategies].",
    },
    {
        text: "[CLIENT] spent shared accounts of living their preferred story including [REPLACEMENT]",
        prompt: "[accounts of living their preferred story].",
    },
    {
        text: "[CLIENT] consistently spoke about themselves through the lens of their preferred story.",
    },
    {
        text: "[CLIENT] reported a connection to their preferred stories as a means to decrease [PROBLEM]’s influence.",
    },

]


export const initialState = {
    meetingInformation: {
        questionaireRisk: {
            clientInitials: "",
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
            orientation: "X3: Oriented to person, place and time",
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
        identifiedProblem: "",
        otherProgressions: [""],

    },
    currentTab: "/meeting-logstics",
}

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

