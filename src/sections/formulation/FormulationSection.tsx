import { Divider, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { possibleFormulations } from '../../state/constants';
import { useAppState } from '../../state/provider';
import Section from '../../components/Section';


const Formulation = ({ formulation, index }: { formulation: any; index: number }) => {
  return (
    < Stack flexDirection='row' alignItems='center' marginBottom={1}>
      <Section
        sections={formulation}
        index={index}
      />
    </Stack>
  )
}

const FormulationSection = () => {
  const {
    comprehensiveAssessment: {
      clientInitials,
      identifiedProblem,
      setClientInitials,
      setIdentifiedProblem,
    } } = useAppState()

  return (
    <Container>
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Formulations</Typography>
        </Stack>
      </Box>
      <Stack>
        <Stack flexDirection='row' justifyContent='space-evenly' marginBottom={3}>
          <TextField label='Identified Issue' value={identifiedProblem} onChange={(e) => setIdentifiedProblem(e.target.value)} />
          <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{ width: 200 }} />
        </Stack>
        <Divider />
        < Stack flexDirection='column' gap={3} marginTop={3}>
          {
            possibleFormulations.map((formulation, index) => (
              <Formulation
                formulation={formulation}
                index={index}
                key={'outer-' + index}
              />
            ))
          }
        </Stack>
      </Stack >
    </Container >
  )
}

export default observer(FormulationSection);
