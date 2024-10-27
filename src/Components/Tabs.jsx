export default function Tabs({ children , button}) {
    console.log(children , button);
    
    return (
    <>
        <menu> {button} </menu>
        {children}
    </>
    );
}