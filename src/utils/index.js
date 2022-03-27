export const formatTime = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = props.getHours() < 10 ? `0${props.getHours()}` : props.getHours();
    const minutes = props.getMinutes() < 10 ? `0${props.getMinutes()}` : props.getMinutes();

    return `${hours}:${minutes} on ${days[props.getDay()]}, ${props.getDate()} ${months[props.getMonth()]} ${props.getFullYear()}`
}