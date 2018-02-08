import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Login from "./Login"
import * as actions from "../../actions/index"

const mapStateToProps = (state) => {
    return {
      Login: state.login
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)