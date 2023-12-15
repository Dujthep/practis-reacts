import { Input, InputNumber } from 'antd';
import React, { useState } from 'react';

export type TextBoxComponentProps = {
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
  type,
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
        return <Input onChange={onInputChange} />;
      }
      case TEXTBOX_TYPE.PASSWORD: {
        return <Input.Password onChange={onInputChange} />;
      }
      case TEXTBOX_TYPE.NUMBER: {
        return <InputNumber />;
      }
    }
  };

  return render();
};
