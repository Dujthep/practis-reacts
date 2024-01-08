import { Input, InputNumber } from 'antd';
import React, { useState } from 'react';

export type TextBoxComponentProps = {
  id: string;
  className?: string;
  type: TEXTBOX_TYPE;
  options?: any;
  onChange?: (value: any) => void;
};

export enum TEXTBOX_TYPE {
  TEXT,
  PASSWORD,
  NUMBER,
}

export const TextBoxComponent: React.FC<TextBoxComponentProps> = ({
  id,
  type,
  className,
  options,
  onChange,
}) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange?.(newValue);
  };

  const render = () => {
    switch (type) {
      case TEXTBOX_TYPE.TEXT: {
        return <Input id={id} className={className} onChange={onInputChange} />;
      }
      case TEXTBOX_TYPE.PASSWORD: {
        return (
          <Input.Password
            id={id}
            className={className}
            onChange={onInputChange}
          />
        );
      }
      case TEXTBOX_TYPE.NUMBER: {
        return <InputNumber id={id} className={className} />;
      }
    }
  };

  return render();
};
