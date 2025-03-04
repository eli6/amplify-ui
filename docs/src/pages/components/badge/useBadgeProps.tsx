import { BadgeProps } from '@aws-amplify/ui-react';
import { useState } from 'react';
import { BadgePropControlsProps } from './BadgePropControls';

interface UseBadgeProps {
  (initialValues: BadgeProps): BadgePropControlsProps;
}

export const useBadgeProps: UseBadgeProps = (initialValues) => {
  const [variation, setVariation] = useState<BadgeProps['variation']>(
    initialValues.variation
  );
  const [size, setSize] = useState<BadgeProps['size']>(initialValues.size);
  const [body, setBody] = useState<string>(initialValues.body);

  return {
    variation,
    setVariation,
    size,
    setSize,
    body,
    setBody,
  };
};
