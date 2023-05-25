import { writable } from 'svelte/store';
import { persist, createSessionStorage } from '@macfja/svelte-persistent-store';
import type { Plan } from '../data/Enums';
import { CUT_OFF_TIME } from '../data/Constants';
import type {DeliveryInfo, Food} from 'src/data/Types';

function returnDefaultDaySelected() {
	const today = new Date();
	const day = (today.getDay() + (today.getHours() >= CUT_OFF_TIME ? 1 : 0)) % 7;
	return day
}

export const weekSelection = persist(
	writable<(Food | undefined | null)[]>([null, null, null, null, null]),
	createSessionStorage(),
	'weekSelection'
);
export const singleSelection = persist(
	writable<Food>(),
	createSessionStorage(),
	'singleSelection'
);
export const earliestAvailableDay = returnDefaultDaySelected();
export const selectedDay = persist(
	writable(earliestAvailableDay),
	createSessionStorage(),
	'selectedDay'
);
export const selectedPlan = persist(writable<Plan>(), createSessionStorage(), 'selectedPlan');

export const progress = writable(-1)

export const headingTitle = writable("")

export const headingSubTitle = writable("")

export const foodChosenForOrder = writable<string[]>([]);

//TODO: removed these mock once done implementing apis
export const userId = persist(writable(''), createSessionStorage(), 'userId');
