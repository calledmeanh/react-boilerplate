/* libs */
import React from 'react';

const withExample = (WrappedComponent: any) => {
  return class extends React.Component {
    state = {
      data: 'this is example high order component',
    };

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default withExample;
