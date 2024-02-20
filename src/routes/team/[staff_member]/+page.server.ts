import { staff_list } from "$lib/staff_list";
import type { EntryGenerator } from "./$types";

export function load({ params }) {
    const staff = staff_list.find((staff) => staff.name === params.staff_member);

    return {
        staff
    };
}
export const entries: EntryGenerator = () => {
	return [{ staff_member: 'Brooklyn' }, { staff_member: 'Vanessa' }, { staff_member: 'Dante' }];
};

export const prerender = true;