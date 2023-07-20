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

const Section = ({sections, index}: Props) => {

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
    <>
      {
        sections.map((section: SectionType) => {
          switch (section.type) {
            case "TEXT":
              return <Typography key={section.id1} marginRight={1} marginLeft={1}>{section.text}</Typography>
            case "CLIENT":
              return <Typography key={section.id1} marginRight={1} marginLeft={1}> {clientInitials}</Typography>
            case "PRONOUN OBJECT":
              return <Typography key={section.id1} marginRight={1} marginLeft={1}> {pronounObject}</Typography>
            case "PRONOUN POSSESIVE":
              return <Typography key={section.id1} marginRight={1} marginLeft={1}> {possesivePronoun}</Typography>
            case "ISSUE":
              return <Typography key={section.id1} marginRight={1} marginLeft={1}> {identifiedProblem}</Typography>
            case "REPLACEMENT":
              return <TextField
              key={section.id1}
                value={formulations[index].replacementText[section.index || 0]}
                onChange={e => setReplacementText(e.target.value, index, section.index || 0)}
                placeholder={section.prompt}
              />
            default:
              return null
          }
        })}
    </>
  )
}

export default observer(Section);

