export const ADD = "add";
export const DIS = "dis";
export function num_add(diff) {
    console.log('diff:',diff)
    return {
        type: ADD,
        payLoad: diff
    }
}
export function num_dis(diff) {
    return {
        type: DIS,
        payLoad: diff
    }
}