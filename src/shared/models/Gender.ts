export const GENDER = {
  FEMALE: 'female',
  MALE: 'male',
  UNISEX: 'unisex'
} as const;

export type GENDER = typeof GENDER[keyof typeof GENDER];