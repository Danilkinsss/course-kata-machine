export default function two_crystal_balls(breaks: boolean[]): number {
    let step = Math.floor(Math.sqrt(breaks.length));

    let index = step;
    // while (!breaks[index]) {
    //     index += step;
    // }
    for (; index < breaks.length; index += step) {
        if (breaks[index]) {
            break;
        }
    }
    index -= step;

    for (let j = 0; j < step && index < breaks.length; ++index, ++j) {
        if (breaks[index]) {
            return index;
        }
    }
    // while (index != breaks.length && !breaks[index]) {
    //     index++;
    // }
    return -1;
}
