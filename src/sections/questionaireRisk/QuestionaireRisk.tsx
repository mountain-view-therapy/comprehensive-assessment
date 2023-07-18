import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useAppState } from '../../state/provider';
import { riskLevels } from '../../state/constants';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const QuestionaireRisk = () => {
  const { comprehensiveAssessment: {
    questionaireRisk: {
      intakeReviewDate,
      commentOnIntakeQuestionare,
      noRisk,
      dangerToSelf,
      dangerToSelfRisk,
      dangerToSelfEvidence,
      dangerToSelfPlan,
      dangerToOthers,
      dangerToOthersRisk,
      dangerToOthersEvidence,
      dangerToOthersPlan,
      otherRisk,
      otherRiskInformation,

      setIntakeReviewDate,
      setCommentOnIntakeQuestionaire,
      setNoRisk,
      setDangerToSelf,
      setDangerToOthers,
      setOtherRisk,
      setDangerToSelfRisk,
      setDangerToOthersRisk,
      setDangerToSelfEvidence,
      setDangerToOthersEvidence,
      setDangerToSelfPlan,
      setDangerToOthersPlan,
      setOtherRiskInformation,
    },
    clientInitials,
    setClientInitials,
  }
  } = useAppState();


  return (
    < Container >
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' border='green' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Questionaire Risk</Typography>
        </Stack>
      </Box>
      <Stack flexDirection='column' spacing={5} paddingBottom={5}>
        <Stack flexDirection='row' justifyContent='start' alignItems='center' gap={10}>
          <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{ width: 200 }} />

          <Box width='50%'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Intake question review with client on"
                value={intakeReviewDate}
                onChange={(newValue) => setIntakeReviewDate(new Date(newValue || "") || new Date())}
                renderInput={(props) => <TextField {...props} />}
              />
            </LocalizationProvider>
          </Box>
        </Stack>

        <TextField
          style={{ width: 540 }}
          label='Comment in Intake Questionaire'
          multiline
          fullWidth
          rows={10}
          value={commentOnIntakeQuestionare}
          onChange={(e) => setCommentOnIntakeQuestionaire(e.target.value)} />

        <Box>
          <Stack justifyContent='center' alignItems='center' flexDirection='row' border='green' margin={2}>
            <Typography fontWeight={800} fontSize={24}>Risk Status</Typography>
          </Stack>
        </Box>

        <FormGroup>
          <FormControlLabel control={<Checkbox
            checked={noRisk}
            onChange={(e) => setNoRisk(e.target.checked)}
            inputProps={{ 'aria-label': 'controlled' }}
            disabled={dangerToOthers || dangerToSelf || otherRisk}
          />} label="No Significant Risk Factors presented" />

          <FormControlLabel control={<Checkbox
            checked={dangerToSelf}
            onChange={(e) => setDangerToSelf(e.target.checked)}
            inputProps={{ 'aria-label': 'controlled' }} />} label="Danger to Self"
            disabled={noRisk} />
          {dangerToSelf &&
            <Stack flexDirection='row'>
              <RadioGroup
                onChange={(e) => setDangerToSelfRisk(e.target.value)}
                value={dangerToSelfRisk}
              >
                {riskLevels.map(level => <FormControlLabel value={level} control={<Radio />} label={level} key={'self' + level} />)}
              </RadioGroup>
              <TextField label='Evidence' value={dangerToSelfEvidence} onChange={(e) => setDangerToSelfEvidence(e.target.value)} />
              <TextField label='Plan' value={dangerToSelfPlan} onChange={(e) => setDangerToSelfPlan(e.target.value)} />
            </Stack>

          }

          <FormControlLabel control={<Checkbox
            checked={dangerToOthers}
            onChange={(e) => setDangerToOthers(e.target.checked)}
            inputProps={{ 'aria-label': 'controlled' }}
            disabled={noRisk}
          />} label="Danger to Other" />
          {dangerToOthers &&
            <Stack flexDirection='row'>
              <RadioGroup
                onChange={(e) => setDangerToOthersRisk(e.target.value)}
                value={dangerToOthersRisk}
              >
                {riskLevels.map(level => <FormControlLabel value={level} control={<Radio />} label={level} key={'other' + level} />)}
              </RadioGroup>
              <TextField label='Evidence' value={dangerToOthersEvidence} onChange={(e) => setDangerToOthersEvidence(e.target.value)} />
              <TextField label='Plan' value={dangerToOthersPlan} onChange={(e) => setDangerToOthersPlan(e.target.value)} />
            </Stack>
          }

          <Stack flexDirection='row'>
            <FormControlLabel control={<Checkbox
              checked={otherRisk}
              onChange={(e) => setOtherRisk(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Other"
              disabled={noRisk}
            />
            {otherRisk &&
              <TextField label='Other' value={otherRiskInformation} onChange={(e) => setOtherRiskInformation(e.target.value)} />
            }
          </Stack>
        </FormGroup>
      </Stack>
    </Container >
  )
}

export default observer(QuestionaireRisk);
