const Pokeball = () => {
    const stylez = {color: 'red'};
    const stylex = {color: 'white'};
    const styleX = {color: 'white'};
    return (
        <>
        <div>
            {/* <span className="pokeball">Z</span> */}
            <span className="pokeball" style={stylez}>z</span>
            <span className="pokeball" style={styleX}>X</span>
            <span className="pokeball" style={stylex}>x</span>
        </div>

        </>
    )
}


export default Pokeball;