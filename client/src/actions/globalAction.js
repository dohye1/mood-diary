import { BG_REQUEST } from './types';

export const changeBG = (colors) => ({
  type: BG_REQUEST,
  payload: colors
});
