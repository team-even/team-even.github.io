import { staff_list } from "$lib/staff_list";

export function load({ params }) {
    const staff = staff_list.find((staff) => staff.name === params.staff_member);

    return {
        staff
    };
}