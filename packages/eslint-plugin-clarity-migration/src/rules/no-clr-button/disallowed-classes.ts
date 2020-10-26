export const primaryDisallowedClass = 'btn';

export const additionalDisallowedClasses = [
  'btn-primary',
  'btn-info',
  'btn-success',
  'btn-warning',
  'btn-danger',
  'btn-outline',
  'btn-primary-outline',
  'btn-info-outline',
  'btn-success-outline',
  'btn-warning-outline',
  'btn-danger-outline',
  'btn-link',
  'btn-inverse',
  'btn-icon',
];

export const disallowedButtonsSelector = additionalDisallowedClasses.map(
  cls => `button.${primaryDisallowedClass}.${cls}`
);
