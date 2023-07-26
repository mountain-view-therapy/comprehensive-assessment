import { Box, TextField } from '@mui/material'

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
      identifiedProblem,
      formulations,
      setReplacementText,
    } } = useAppState()

  return (
    <Box >
      {
        sections.map((section: SectionType) => {
          switch (section.type) {
            case "TEXT":
              return " " + section.text
            case "CLIENT":
              return " " + clientInitials
            case "ISSUE":
              return " " + identifiedProblem
            case "REPLACEMENT":
              return <TextField
                style={{marginRight: '3px', marginLeft: '3px', width: ((section.prompt?.length || 0) * 9 + 30)}}
                key={section.id1}
                value={formulations[index].replacementText[section.index || 0]}
                onChange={e => setReplacementText(e.target.value, index, section.index || 0)}
                placeholder={section.prompt}
              />
            default:
              return null
          }
        })}
    </Box>
  )
}

export default observer(Section);

