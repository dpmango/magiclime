import React, { Component, ReactNode, ErrorInfo } from 'react';
import { Responses500 } from '@consta/uikit/Responses500';
import { withStyles, WithStyles } from '@material-ui/core';
import Container from '../Common/Container';

const styles = () => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface IProps extends WithStyles<typeof styles> {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

// Здесь необходимо использовать классовый компонент, т.к. в реакт нет реализации error boundary с помощью хуков
class ErrorBoundary extends Component<IProps, IState> {
  public state: IState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): IState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // logError(error, info);
  }

  render() {
    const { classes } = this.props;
    if (this.state.hasError) {
      return (
        <Container className={classes.root}>
          <Responses500 />
        </Container>
      );
    }
    return this.props.children;
  }
}

export default withStyles(styles)(ErrorBoundary);
