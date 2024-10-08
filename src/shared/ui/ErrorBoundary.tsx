import { Component, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
  errorComponent?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    hasError: false,
  };

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { errorComponent } = this.props;

    if (hasError) return errorComponent;
    return this.props.children;
  }
}
