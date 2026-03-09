import React from "react";

interface State {
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        this.props.fallback ?? (
          <div className="flex h-full w-full items-center justify-center bg-primary p-8">
            <div className="max-w-lg rounded-xl border border-red-800 bg-black-100 p-6 text-center">
              <h2 className="mb-2 text-[18px] font-bold text-red-400">
                Render Error
              </h2>
              <p className="text-secondary text-[13px] font-mono break-all">
                {this.state.error.message}
              </p>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
