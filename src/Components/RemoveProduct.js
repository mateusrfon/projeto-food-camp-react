export default function RemoveProduct(counter, setCounter, setSelected) {
    if (counter === 1) {
        setSelected('');
        setCounter(0);
    } else {
        setCounter(counter - 1);
    }
}