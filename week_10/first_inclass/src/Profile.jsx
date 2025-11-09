export function Profile(props) {
    return (<div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <img src={props.url} />
    </div>)
}