

function Input(props) {
    return <div>
        <p>{props.name}</p>
        <input
            onChange={(e) => props.setValue(e.target.value)}
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
        />
    </div>
}
export default Input