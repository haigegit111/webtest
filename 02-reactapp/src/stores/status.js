import {
  observable,
  action
} from 'mobx'
class status {
  @observable userInfo = {
    phones: []
  }
}
export default new status();