import { TextField, Typography } from '@mui/material'

import { observer } from 'mobx-react-lite';
import { useAppState } from '../state/provider';

type SectionType = {
  id1: string;
  type: string;
  text?: string;
  prompt?: string;
  index?: number;
};

type Props = {
  sections: SectionType[];
  index: number;
}

const Section = ({ sections, index }: Props) => {

  const {
    comprehensiveAssessment: {
      clientInitials,
      pronounObject,
      possesivePronoun,
      identifiedProblem,
      formulations,
      setReplacementText,
    } } = useAppState()

  return (
    <Typography flexDirection='row' alignItems='center' justifyContent='flex-start' >
      {
        sections.map((section: SectionType) => {
          switch (section.type) {
            case "TEXT":
              return " " + section.text
            case "CLIENT":
              return " " + clientInitials
            case "PRONOUN OBJECT":
              return " " + pronounObject
            case "PRONOUN POSSESSIVE":
              return " " + possesivePronoun
            case "ISSUE":
              return " " + identifiedProblem
            case "REPLACEMENT":
              return <TextField
                style={{marginRight: '3px', marginLeft: '3px', width:"120px"}}
                key={section.id1}
                value={formulations[index].replacementText[section.index || 0]}
                onChange={e => setReplacementText(e.target.value, index, section.index || 0)}
                placeholder={section.prompt}
              />
            default:
              return null
          }
        })}
    </Typography>
  )
}

export default observer(Section);

