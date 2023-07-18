import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { possibleFormulations } from '../../state/constants';
import { useAppState } from '../../state/provider';
import {v4 as uuid} from 'uuid';

const Formulation = () => {
  const {
    comprehensiveAssessment: {
      clientInitials,
      pronouns,
      identifiedProblem,
      formulations,
      setClientInitials,
      setPronouns,
      setIdentifiedProblem,
      setReplacementText,
    } } = useAppState()

  const replaceText = (text: string, index: number) => {
    return text
      .replace('[PROBLEM]', identifiedProblem)
      .replace('[CLIENT]', clientInitials)
      .replace('[PRONOUN]', pronouns)
    //.replace('[REPLACEMENT]',progressions.find(i => i.possibleProgressIndex === index)?.replacementText || "[REPLACE ME]")
  }


  return (
    <Container>
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Progress</Typography>
        </Stack>
      </Box>
      <Stack>
        <Stack flexDirection='row' justifyContent='space-between'>
          <TextField label='Identified Issue' style={{ margin: 3, width: 400, fontSize: 12 }} value={identifiedProblem} onChange={(e) => setIdentifiedProblem(e.target.value)} />
          <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{ width: 200 }} />
          <TextField label="Pronouns" value={pronouns} onChange={(e) => setPronouns(e.target.value)} style={{ width: 200 }} />
        </Stack>
        < Stack flexDirection='column' gap={3}>
          {
            possibleFormulations.map((formulation, index) => (
              < Stack flexDirection='row' key={`formulation-${index}`} alignItems='center'>
                {
                  formulation.map(section => {
                    switch (section.type) {
                      case "TEXT":
                        return <Typography  width='auto' key={uuid()}>{section.text}</Typography>
                      case "CLIENT":
                        return <Typography width='auto' key={uuid()}>{clientInitials}</Typography>
                      case "PRONOUN":
                        return <Typography width='auto' key={uuid()}>{pronouns}</Typography>
                      case "ISSUE":
                        return <Typography width='auto' key={uuid()}>{identifiedProblem}</Typography>
                      case "REPLACEMENT":
                        return <TextField 
                          key={uuid()} 
                          value={formulations[index].replacementText[section.index  || 0]} 
                          onChange={e => setReplacementText(e.target.value, index, section.index || 0)} 
                          placeholder={section.prompt}
                        />
                      default:
                        return null
                    }
                  })}
              </Stack>
            ))
          }
        </Stack>
      </Stack >
    </Container >
  )
}

export default observer(Formulation);

//                <TextField label={progress.prompt} style={{ margin: 3, width: 350, fontSize: 12 }} value={progressions.find(i => i.possibleProgressIndex === index)?.replacementText} onChange={(e) => setProgressReplacementText(index, e.target.value)} />
