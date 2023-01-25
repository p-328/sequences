import SeriesNum from '../interfaces/SeriesNum';
import { Dispatch, SetStateAction, FormEvent, MutableRefObject } from 'react';

export type SeriesDispatch = Dispatch<SetStateAction<SeriesNum[]>>;
export type Event = FormEvent<HTMLInputElement> | FormEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>;
export type RefInput = MutableRefObject<HTMLInputElement>;
