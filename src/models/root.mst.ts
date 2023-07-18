import { Instance, types } from 'mobx-state-tree';
import { initialState } from '../state/constants';
import ComprehensiveAssessmentModel from './ComprehensiveAssessmentModel.mst';

const RootModel = types
  .model('RootModel', {
    comprehensiveAssessment: ComprehensiveAssessmentModel,
    currentTab: types.string,
    hydrated: false,
  }).actions((self) => {
    return {
      setCurrentTab(tab: string): void {
        self.currentTab = tab
      },
      resetNoteState(): void {
        self.comprehensiveAssessment = ComprehensiveAssessmentModel.create(initialState.comprehensiveAssessment)
      },
    }
  })

export default RootModel;

export interface IRoot extends Instance<typeof RootModel> { }
