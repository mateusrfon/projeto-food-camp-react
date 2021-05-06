export default function SelectProduct(selected, setSelected, setCounter) {
    if (selected !== 'selected') {
        setSelected('selected');
        setCounter(1);
    }
}