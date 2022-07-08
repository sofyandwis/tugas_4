
function Tombol(props){
    function handleClick(){

        alert(`telah di klick ${props.children}`);
    }    

    return <button onClick={handleClick}>{props.children}</button>


}

export default Tombol;