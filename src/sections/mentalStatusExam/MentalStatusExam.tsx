import { Button, ButtonGroup, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { affectStates, appearanceStates, attentionStates, cognitiveFunctioningStates, functionalStatusStates, interpersonalStates, memoryStates, moodStates, motorActivityStates, orientationStates, perceptionStates } from '../../state/constants';
import { useAppState } from '../../state/provider';


const MentalStatusExam = () => {
  const { comprehensiveAssessment: {
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


      setAppearance,
      setMotorActivity,
      setAffect,
      setMood,
      setOrientation,
      setMemory,
      setAttention,
      setPerception,
      setCognitiveFunctioning,
      setFunctionalStatus,
      setInterpersonal,
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
          <FormLabel>Appearance</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group" >
            {
              appearanceStates.map(state => <Button key={state} onClick={() => setAppearance(state)} color={appearance === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Motor Activity</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group" >
            {
              motorActivityStates.map(state => <Button key={state} onClick={() => setMotorActivity(state)} color={motorActivity === state ? 'primary' : 'inherit'}>{state}</Button>)
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
          <FormLabel>Orientation</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              orientationStates.map(state => <Button key={state} onClick={() => setOrientation(state)} color={orientation === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Memory</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              memoryStates.map(state => <Button key={state} onClick={() => setMemory(state)} color={memory === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Attention</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              attentionStates.map(state => <Button key={state} onClick={() => setAttention(state)} color={attention === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Perception</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              perceptionStates.map(state => <Button key={state} onClick={() => setPerception(state)} color={perception === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>


        <FormControl>
          <FormLabel>Cognitive Functioning</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group" >
            {
              cognitiveFunctioningStates.map(state => <Button key={state} onClick={() => setCognitiveFunctioning(state)} color={cognitiveFunctioning === state ? 'primary' : 'inherit'}>{state}</Button>)
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

        <FormControl>
          <FormLabel>Interpersonal</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              interpersonalStates.map(state => <Button key={state} onClick={() => setInterpersonal(state)} color={interpersonal === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>
       
      </Stack>
    </Container >
  )
}

export default observer(MentalStatusExam);
