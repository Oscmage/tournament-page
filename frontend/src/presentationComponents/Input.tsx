import * as React from "react";
import "../css/Input.css";

class Input extends React.Component<
  {
    required: boolean;
    name: string;
    description: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: any;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
    idx?: string;
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
