import { Button, ButtonGroup, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { affectStates, cognitiveFunctioningStates, functionalStatusStates, interpersonalStates, moodStates } from '../../state/constants';
import { useAppState } from '../../state/provider';


const MentalStatusExam = () => {
  const { meetingInformation: {
    mentalStatusExam: {
      affect,
      cognitiveFunctioning,
      functionalStatus,
      interpersonal,
      mood,

      setAffect,
      setCognitiveFunctioning,
      setFunctionalStatus,
      setInterpersonal,
      setMood,

    },
  }
  } = useAppState();

  return (
    < Container >
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Mental Status Exam</Typography>
        </Stack>
      </Box>
      <Stack flexDirection='column' spacing={4}>
        <FormControl>
          <FormLabel>Cognitive Functioning</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group" >
            {
              cognitiveFunctioningStates.map(state => <Button key={state} onClick={() => setCognitiveFunctioning(state)} color={cognitiveFunctioning === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Affect</FormLabel>
          <ButtonGroup size='small' variant='contained' aria-label="outlined primary button group">
            {
              affectStates.map(state => <Button key={state} onClick={() => setAffect(state)} color={affect === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Mood</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              moodStates.map(state => <Button key={state} onClick={() => setMood(state)} color={mood === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Interpersonal</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              interpersonalStates.map(state => <Button key={state} onClick={() => setInterpersonal(state)} color={interpersonal === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Functional Status</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              functionalStatusStates.map(state => <Button key={state} onClick={() => setFunctionalStatus(state)} color={functionalStatus === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>
      </Stack>
    </Container >
  )
}

export default observer(MentalStatusExam);
