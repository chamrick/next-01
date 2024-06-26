import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/app/components/Button/Button';

type SpecialButtonProps = {
  label: string;
};

const SpecialButton = (props: SpecialButtonProps) => {
  return (
    <Button label={props.label} />
  );
};

SpecialButton.propTypes = {
  label: PropTypes.string,
}

export default SpecialButton;