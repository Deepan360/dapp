
export const Header = () => {
    let customCSS="sum"
    const loggedIn = true;
    const greeting= loggedIn ? <p className="slogan">welcome back</p> : <p className="slogan">Please Log in</p>
    const item= ["item1","item2","item3","item4","item5","item6"]
  return (
    <>
    <div>
        <h1 className="head">
            Header
        </h1>
        <p className="slogan">
            this is the header
        </p>
        <div className={customCSS}>
            45+5={45+5}
        </div>
        {greeting}
        <ul className="itemList">    
           {
            item.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
           }
        </ul>
    </div>
    </>
  )
}
