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
    min?: number;
    max?: number;
    pattern?: string;
    required: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: any;
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
      pattern,
      value,
      onChange,
      min,
      max
    } = this.props;
    const input = required ? (
      <input
        name={this.props.name}
        required
        type={type}
        min={min}
        max={max}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
    ) : (
      <input
        name={this.props.name}
        type={type}
        min={min}
        max={max}
        onChange={onChange}
        value={value}
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
