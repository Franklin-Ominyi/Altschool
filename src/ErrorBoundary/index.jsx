import React from "react";
import ErrorFallbackUI from "./ErrorFallbackUI/ErrorFallbackUI";

class ErrorBoundary extends React.Component {
	state = {
		errorMessage: "",
	};

	static getDerivedStateFromError(error) {
		return { errorMessage: error.toString() };
	}

	componentDidCatch(error, info) {
		this.logErrorToServices(error.toString(), info.componentStack);
	}

	// A fake logging service.
	logErrorToServices = console.log;

	render() {
		if (this.state.errorMessage) {
			return <ErrorFallbackUI />;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
