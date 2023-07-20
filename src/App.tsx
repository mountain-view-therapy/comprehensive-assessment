import { AppBar, Box, Toolbar, Stack, Tab, Tabs } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Functioning from "./sections/functioning/Functioning";
import QuestionaireRisk from "./sections/questionaireRisk/QuestionaireRisk";
import MentalStatusExam from "./sections/mentalStatusExam/MentalStatusExam";
import Note from "./sections/note/Note";
import FormulationSection from "./sections/formulation/FormulationSection";
import Diagnostic from "./sections/diagnostic/Diagnostic";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<QuestionaireRisk />} />
        <Route path="questionaire-risk" element={<QuestionaireRisk />} />
        <Route path="mental-status-exam" element={<MentalStatusExam />} />
        <Route path="diagnostic" element={<Diagnostic />} />
        <Route path="functioning" element={<Functioning />} />
        <Route path="formulation" element={<FormulationSection />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

const Layout = () => {
  const [currentTab, setCurrentTab] = useState('questionaire-risk')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue)
  }

  return (
    <Box overflow='auto' >
      <Stack flexDirection='row' justifyContent='space-evenly'>
        <Box width='60%' border="thick" borderColor='black' borderRadius={2} borderTop={1} borderBottom={1} borderLeft={1} borderRight={1} >
          <AppBar position='static'>
            <Container>
              <Toolbar disableGutters={true}>
                <Tabs
                  value={currentTab}
                  onChange={handleChange}
                  aria-label="main tabs"
                  textColor="secondary"
                  indicatorColor='secondary'
                  variant='fullWidth'
                  TabIndicatorProps={{ style: { background: 'white' } }}
                >
                  <Tab
                    value='questionaire-risk'
                    label="Questionaire"
                    component={Link}
                    to='questionaire-risk'
                    style={{ fontSize: '12px', color: 'white' }}
                  />
                  <Tab
                    value='mental-status-exam'
                    label="MSE"
                    component={Link}
                    to='mental-status-exam'
                    style={{ fontSize: '12px', color: 'white' }}
                  />
                  <Tab
                    value='diagnostic'
                    label="Diagnostic"
                    component={Link}
                    to='diagnostic'
                    style={{ fontSize: '12px', color: 'white' }}
                  />
                  <Tab
                    value='functioning'
                    label="Functioning"
                    component={Link}
                    to='functioning'
                    style={{ fontSize: '12px', color: 'white' }}
                  />
                  <Tab
                    value='formulation'
                    label="Formulation"
                    component={Link}
                    to='formulation'
                    style={{ fontSize: '12px', color: 'white' }}

                  />
                </Tabs>
              </Toolbar>
            </Container>
          </AppBar>
          <Box overflow='auto' >
            <Outlet />
          </Box>
        </Box>
        <Box flexGrow={2} maxWidth='30%'>
          <Box overflow='auto' >
            <Note />
          </Box>
        </Box>
      </Stack>
    </Box >
  )
}

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={'/questionaire-risk'}>Go to the home page</Link>
      </p>
    </div >
  );
}



export default App

