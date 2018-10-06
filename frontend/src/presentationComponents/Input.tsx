import * as React from "react";
import "../css/Input.css";

class Input extends React.Component<
  {
    name: string;
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
      name,
      type,
      placeholder,
      required,
      minLength,
      maxLength,
      pattern
    } = this.props;
    const input = required ? (
      <input
        required
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
    );
    return (
      <div className="Input">
        <span>{name}</span>
        {input}
      </div>
    );
  }
}

export default Input;
