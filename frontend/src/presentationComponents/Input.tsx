import * as React from "react";
import "../css/Input.css";

class Input extends React.Component<
  {
    name: string;
    description: string;
    type: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    required: boolean;
  },
  {}
> {
  public render() {
    const {
      description,
      type,
      placeholder,
      required,
      minLength,
      maxLength,
      pattern
    } = this.props;
    const input = required ? (
      <input
        name={this.props.name}
        required
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
    ) : (
      <input
        name={this.props.name}
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
    );
    return (
      <div className="Input">
        <span>{description}</span>
        {input}
      </div>
    );
  }
}

export default Input;
