import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

// eslint-disable-next-line import/extensions
import { Repository } from "../../store/ducks/repositories/types";
// eslint-disable-next-line import/extensions
import { ApplicationState } from "../../store";
// eslint-disable-next-line import/extensions
import * as RepositoriesActions from "../../store/ducks/repositories/actions";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;

    return <ul>{repositories.map((repository) => repository.name)}</ul>;
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
