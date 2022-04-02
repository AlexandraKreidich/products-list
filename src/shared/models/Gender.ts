export const GENDER: { [key: string]: string, } = {
  FEMALE: 'female',
  MALE: 'male',
  UNISEX: 'unisex'
} as const;

export type GENDER = typeof GENDER[keyof typeof GENDER];