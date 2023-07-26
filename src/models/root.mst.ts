import { Instance, types, destroy, detach } from 'mobx-state-tree';
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
        // const newState = ComprehensiveAssessmentModel.create(initialState.comprehensiveAssessment)
        // console.log(newState)
        // self.comprehensiveAssessment = newState

        Object.keys(self).forEach(key => {
          // @ts-ignore
          self[key].reset && self[key].reset()
        })
      },
    }
  })

export default RootModel;

export interface IRoot extends Instance<typeof RootModel> { }
